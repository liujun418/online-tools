"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import ToolLayout from "@/components/ToolLayout";

const GEOCODING_API = "https://geocoding-api.open-meteo.com/v1/search";
const REVERSE_GEO_API = "https://nominatim.openstreetmap.org/reverse";
const WEATHER_API = "https://api.open-meteo.com/v1/forecast";
const IP_API = "https://ipapi.co/json/";

const metadata = {
  title: "Global Weather",
  description:
    "Check real-time weather and 7-day forecast for any city worldwide. Temperature, feels like, wind, humidity, precipitation. Auto-detect your location. Free, no signup.",
  keywords: [
    "global weather", "weather forecast", "world weather", "7 day forecast",
    "live temperature", "local weather", "free weather checker", "weather by city",
    "international weather", "weather today", "weather app online",
  ],
  toolId: "global-weather",
};

interface GeoResult {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  country: string;
  admin1?: string;
  country_code: string;
}

interface CurrentWeather {
  temperature: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  windGusts: number;
  precipitation: number;
  weatherCode: number;
  time: string;
}

interface DailyForecast {
  date: string;
  weatherCode: number;
  maxTemp: number;
  minTemp: number;
  precipProb: number;
  windSpeed: number;
}

interface WeatherData {
  current: CurrentWeather;
  daily: DailyForecast[];
  timezone: string;
  cityName: string;
  country: string;
  lat: number;
  lon: number;
}

const WMO_ICONS: Record<number, string> = {
  0: "☀️", 1: "🌤️", 2: "⛅", 3: "☁️",
  45: "🌫️", 48: "🌫️",
  51: "🌦️", 53: "🌦️", 55: "🌧️",
  56: "🌧️", 57: "🌧️",
  61: "🌧️", 63: "🌧️", 65: "🌧️",
  66: "🌧️", 67: "🌧️",
  71: "🌨️", 73: "🌨️", 75: "❄️",
  77: "❄️",
  80: "🌧️", 81: "🌧️", 82: "⛈️",
  85: "🌨️", 86: "🌨️",
  95: "⛈️", 96: "⛈️", 99: "⛈️",
};

function getWeatherDesc(code: number, dict: Record<string, string>): string {
  if (code === 0) return dict.clear || "Clear sky";
  if (code <= 3) return dict.partlyCloudy || "Partly cloudy";
  if (code <= 48) return dict.fog || "Fog";
  if (code <= 57) return dict.drizzle || "Drizzle";
  if (code <= 67) return dict.rain || "Rain";
  if (code <= 77) return dict.snow || "Snow";
  if (code <= 82) return dict.showers || "Rain showers";
  if (code <= 86) return dict.snowShowers || "Snow showers";
  return dict.thunderstorm || "Thunderstorm";
}

function getDayName(dateStr: string, locale: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString(locale === "ar" ? "ar-SA" : locale === "es" ? "es-ES" : "en-US", { weekday: "short" });
}

function formatTemp(c: number, unit: "C" | "F"): string {
  const val = unit === "F" ? Math.round(c * 9 / 5 + 32) : Math.round(c);
  return `${val}°${unit}`;
}

async function reverseGeocode(lat: number, lon: number): Promise<{ city: string; country: string }> {
  try {
    const params = new URLSearchParams({ lat: lat.toString(), lon: lon.toString(), format: "json", zoom: "10" });
    const res = await fetch(`${REVERSE_GEO_API}?${params}`, {
      headers: { "User-Agent": "ToolBoxOnline-Weather/1.0 (free tool)" },
    });
    if (!res.ok) throw new Error("Reverse geocode failed");
    const json = await res.json();
    const addr = json.address || {};
    const city = addr.city || addr.town || addr.village || addr.municipality || addr.county || "";
    const country = addr.country || "";
    return { city, country };
  } catch {
    return { city: "", country: "" };
  }
}

export default function WeatherClient({
  locale = "en",
  dict,
  titleOverride,
  descriptionOverride,
}: {
  locale?: string;
  dict?: Record<string, unknown>;
  titleOverride?: string;
  descriptionOverride?: string;
}) {
  const t = (dict as any)?.globalWeather || {};
  const tp = (dict as any)?.toolPage || {};
  const title = titleOverride || metadata.title;
  const description = descriptionOverride || metadata.description;

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<GeoResult[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searching, setSearching] = useState(false);

  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [unit, setUnit] = useState<"C" | "F">("C");
  const [locating, setLocating] = useState(true);

  const searchRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close suggestions on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const fetchWeather = useCallback(async (lat: number, lon: number, cityName: string, country: string) => {
    setLoading(true);
    setError("");
    try {
      const params = new URLSearchParams({
        latitude: lat.toString(),
        longitude: lon.toString(),
        current: "temperature_2m,apparent_temperature,relative_humidity_2m,precipitation,weather_code,wind_speed_10m,wind_gusts_10m",
        daily: "weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max",
        timezone: "auto",
        forecast_days: "8",
      });
      const res = await fetch(`${WEATHER_API}?${params}`);
      if (!res.ok) throw new Error("Weather API failed");
      const json = await res.json();

      const current: CurrentWeather = {
        temperature: json.current.temperature_2m,
        feelsLike: json.current.apparent_temperature,
        humidity: json.current.relative_humidity_2m,
        windSpeed: json.current.wind_speed_10m,
        windGusts: json.current.wind_gusts_10m,
        precipitation: json.current.precipitation,
        weatherCode: json.current.weather_code,
        time: json.current.time,
      };

      const daily: DailyForecast[] = json.daily.time.map((date: string, i: number) => ({
        date,
        weatherCode: json.daily.weather_code[i],
        maxTemp: json.daily.temperature_2m_max[i],
        minTemp: json.daily.temperature_2m_min[i],
        precipProb: json.daily.precipitation_probability_max[i],
        windSpeed: json.daily.wind_speed_10m_max[i],
      }));

      setWeather({
        current, daily,
        timezone: json.timezone || "UTC",
        cityName, country, lat, lon,
      });
    } catch {
      setError("Unable to fetch weather data. Please try again.");
    } finally {
      setLoading(false);
      setLocating(false);
    }
  }, []);

  // Geocode city search
  const searchCity = useCallback(async (name: string) => {
    if (!name.trim()) return;
    setSearching(true);
    try {
      const params = new URLSearchParams({ name, count: "5", language: "en", format: "json" });
      const res = await fetch(`${GEOCODING_API}?${params}`);
      if (!res.ok) throw new Error("Geocoding failed");
      const json = await res.json();
      if (!json.results?.length) {
        setSuggestions([]);
        setError(t.cityNotFound || "City not found. Try a different name.");
        return;
      }
      setSuggestions(json.results);
      setShowSuggestions(true);
    } catch {
      setError(t.cityNotFound || "City not found. Try a different name.");
    } finally {
      setSearching(false);
    }
  }, [t.cityNotFound]);

  // Debounced search
  const onInputChange = (val: string) => {
    setQuery(val);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (val.trim().length < 2) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }
    debounceRef.current = setTimeout(() => searchCity(val), 400);
  };

  const selectCity = (r: GeoResult) => {
    setQuery(`${r.name}${r.admin1 ? `, ${r.admin1}` : ""}, ${r.country}`);
    setShowSuggestions(false);
    setSuggestions([]);
    fetchWeather(r.latitude, r.longitude, r.name, r.country);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      const q = query.trim();
      if (!q) return;
      // Use first suggestion if available
      if (suggestions.length > 0) {
        selectCity(suggestions[0]);
      } else {
        searchCity(q);
      }
    }
  };

  // Auto-locate on mount
  useEffect(() => {
    const tryGeolocation = () => {
      if (!navigator.geolocation) {
        fallbackToIp();
        return;
      }
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const { latitude, longitude } = pos.coords;
          const { city, country } = await reverseGeocode(latitude, longitude);
          const displayName = city || `${latitude.toFixed(2)}, ${longitude.toFixed(2)}`;
          setQuery(`${displayName}${country ? `, ${country}` : ""}`);
          fetchWeather(latitude, longitude, city || "Your Location", country);
        },
        () => { fallbackToIp(); },
        { timeout: 8000, maximumAge: 600000 },
      );
    };

    const fallbackToIp = async () => {
      try {
        const res = await fetch(IP_API);
        const json = await res.json();
        if (json.latitude && json.longitude) {
          setQuery(`${json.city || "Your Location"}${json.country_name ? `, ${json.country_name}` : ""}`);
          fetchWeather(json.latitude, json.longitude, json.city || "Your Location", json.country_name || "");
        } else {
          throw new Error("No location");
        }
      } catch {
        setLocating(false);
        setLoading(false);
        setError(t.locationError || "Could not detect location. Try searching manually.");
      }
    };

    tryGeolocation();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const refreshWeather = () => {
    if (weather) {
      fetchWeather(weather.lat, weather.lon, weather.cityName, weather.country);
    }
  };

  const weatherDesc = weather
    ? getWeatherDesc(weather.current.weatherCode, t)
    : "";
  const weatherIcon = weather ? (WMO_ICONS[weather.current.weatherCode] || "🌡️") : "";

  return (
    <ToolLayout
      title={title}
      description={description}
      keywords={metadata.keywords}
      toolId={metadata.toolId}
      locale={locale as any}
      dict={dict}
    >
      <div className="mx-auto max-w-5xl">
        {/* Search Bar */}
        <div ref={searchRef} className="relative mb-6">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                value={query}
                onChange={(e) => onInputChange(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
                placeholder={t.searchPlaceholder || "Enter city name..."}
                className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 pr-10 text-sm text-zinc-900 placeholder-zinc-400 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-500"
              />
              {searching && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-emerald-500 border-t-transparent" />
                </div>
              )}
            </div>
            <button
              onClick={refreshWeather}
              disabled={!weather}
              className="rounded-xl border border-zinc-300 px-4 py-3 text-sm font-medium text-zinc-600 hover:bg-zinc-50 disabled:opacity-40 dark:border-zinc-600 dark:text-zinc-400 dark:hover:bg-zinc-800"
              title={t.refresh || "Refresh"}
            >
              ↻
            </button>
            <button
              onClick={() => {
                setLocating(true);
                setError("");
                if (navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition(
                    async (pos) => {
                      const { latitude, longitude } = pos.coords;
                      const { city, country } = await reverseGeocode(latitude, longitude);
                      const displayName = city || `${latitude.toFixed(2)}, ${longitude.toFixed(2)}`;
                      setQuery(`${displayName}${country ? `, ${country}` : ""}`);
                      fetchWeather(latitude, longitude, city || "Your Location", country);
                    },
                    () => setError(t.locationDenied || "Location access denied."),
                    { timeout: 8000 },
                  );
                }
              }}
              className="rounded-xl border border-zinc-300 px-4 py-3 text-sm font-medium text-zinc-600 hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-400 dark:hover:bg-zinc-800"
              title={t.myLocation || "My Location"}
            >
              📍
            </button>
          </div>

          {/* Suggestions dropdown */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute z-20 mt-1 w-full rounded-xl border border-zinc-200 bg-white shadow-lg dark:border-zinc-700 dark:bg-zinc-800">
              {suggestions.map((r) => (
                <button
                  key={r.id}
                  onClick={() => selectCity(r)}
                  className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-zinc-700 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-700/50 first:rounded-t-xl last:rounded-b-xl"
                >
                  <span>📍</span>
                  <span>
                    <span className="font-medium">{r.name}</span>
                    {r.admin1 && <span className="text-zinc-400">, {r.admin1}</span>}
                    <span className="ml-1 text-xs text-zinc-400">{r.country_code}</span>
                  </span>
                </button>
              ))}
            </div>
          )}

          {/* Unit toggle */}
          {weather && (
            <div className="mt-2 flex justify-end">
              <div className="inline-flex rounded-lg border border-zinc-300 p-0.5 dark:border-zinc-600">
                <button
                  onClick={() => setUnit("C")}
                  className={`rounded-md px-3 py-1 text-xs font-medium transition-colors ${unit === "C" ? "bg-emerald-500 text-white" : "text-zinc-500 dark:text-zinc-400"}`}
                >
                  °C
                </button>
                <button
                  onClick={() => setUnit("F")}
                  className={`rounded-md px-3 py-1 text-xs font-medium transition-colors ${unit === "F" ? "bg-emerald-500 text-white" : "text-zinc-500 dark:text-zinc-400"}`}
                >
                  °F
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Loading state */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="h-10 w-10 animate-spin rounded-full border-3 border-emerald-500 border-t-transparent" />
            <p className="mt-4 text-sm text-zinc-500">
              {locating ? (t.locating || "Detecting your location...") : (t.loading || "Fetching weather...")}
            </p>
          </div>
        )}

        {/* Error state */}
        {error && !weather && (
          <div className="flex flex-col items-center py-20">
            <span className="text-4xl">🌤️</span>
            <p className="mt-4 text-sm text-red-500">{error}</p>
            <p className="mt-2 text-xs text-zinc-400">{t.searchPlaceholder || "Enter city name..."}</p>
          </div>
        )}

        {/* Weather display */}
        {weather && !loading && (
          <>
            {/* Current weather card */}
            <div className="mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-400 via-sky-400 to-blue-500 p-6 text-white shadow-lg sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-white/90">
                    {weather.cityName}{weather.country ? `, ${weather.country}` : ""}
                  </h2>
                  <p className="text-sm text-white/70">
                    {t.today || "Today"} · {new Date(weather.current.time).toLocaleDateString(
                      locale === "ar" ? "ar-SA" : locale === "es" ? "es-ES" : "en-US",
                      { weekday: "long", month: "short", day: "numeric" }
                    )}
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <span className="text-5xl">{weatherIcon}</span>
                    <span className="text-5xl font-bold">{formatTemp(weather.current.temperature, unit)}</span>
                  </div>
                  <p className="mt-1 text-sm text-white/80">{weatherDesc}</p>
                </div>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm sm:text-right">
                  <span className="text-white/70">{t.feelsLike || "Feels like"}</span>
                  <span className="font-semibold">{formatTemp(weather.current.feelsLike, unit)}</span>
                  <span className="text-white/70">{t.humidity || "Humidity"}</span>
                  <span className="font-semibold">{weather.current.humidity}%</span>
                  <span className="text-white/70">{t.wind || "Wind"}</span>
                  <span className="font-semibold">{weather.current.windSpeed} km/h</span>
                  {weather.current.windGusts > 0 && (
                    <>
                      <span className="text-white/70">{t.gusts || "Gusts"}</span>
                      <span className="font-semibold">{weather.current.windGusts} km/h</span>
                    </>
                  )}
                  <span className="text-white/70">{t.precipitation || "Precipitation"}</span>
                  <span className="font-semibold">{weather.current.precipitation} mm</span>
                </div>
              </div>
            </div>

            {/* 7-day forecast */}
            <h3 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-white">
              {t.forecast || "7-Day Forecast"}
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {weather.daily.slice(1, 8).map((day) => {
                const icon = WMO_ICONS[day.weatherCode] || "🌡️";
                const desc = getWeatherDesc(day.weatherCode, t);
                const dayName = getDayName(day.date, locale);
                const dateNum = new Date(day.date + "T00:00:00").toLocaleDateString(
                  locale === "ar" ? "ar-SA" : locale === "es" ? "es-ES" : "en-US",
                  { month: "short", day: "numeric" }
                );
                return (
                  <div
                    key={day.date}
                    className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-700 dark:bg-zinc-800/50"
                  >
                    <p className="text-sm font-medium text-zinc-900 dark:text-white">{dayName}</p>
                    <p className="text-xs text-zinc-400">{dateNum}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-3xl">{icon}</span>
                      <div>
                        <p className="text-lg font-bold text-zinc-900 dark:text-white">{formatTemp(day.maxTemp, unit)}</p>
                        <p className="text-xs text-zinc-400">{formatTemp(day.minTemp, unit)}</p>
                      </div>
                    </div>
                    <p className="mt-1 text-xs text-zinc-500">{desc}</p>
                    <div className="mt-2 flex items-center justify-between text-xs text-zinc-400">
                      <span>💧 {day.precipProb}%</span>
                      <span>💨 {day.windSpeed} km/h</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* Attribution + compliance */}
        <div className="mt-8 space-y-1 text-center">
          <p className="text-xs text-zinc-400">
            {t.poweredBy || "Powered by Open-Meteo"} —{" "}
            <a
              href="https://open-meteo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-600"
            >
              {t.attribution || "Open-Meteo — Free open-source weather API"}
            </a>
          </p>
          <p className="text-xs text-zinc-400">
            {t.compliance || "Weather data from national meteorological services. For informational purposes only."}
          </p>
        </div>

        {/* Referral */}
        <div className="mt-6 rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 text-center dark:border-blue-800 dark:from-blue-950/30 dark:to-indigo-950/20">
          <p className="text-sm font-medium text-blue-800 dark:text-blue-300">
            {t.referralText || "Need more free tools? Try our other popular utilities!"}
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            <a
              href={`/${locale}/tools/bing-wallpaper`}
              className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors"
            >
              🖼️ {t.tryBing || "Bing 4K Wallpaper"}
            </a>
            <a
              href={`/${locale}/tools/world-map`}
              className="rounded-lg border border-emerald-300 bg-white px-4 py-2 text-sm font-semibold text-emerald-700 hover:bg-emerald-50 transition-colors dark:border-emerald-600 dark:bg-transparent dark:text-emerald-300 dark:hover:bg-emerald-900/20"
            >
              🗺️ {t.tryMap || "World Map Explorer"}
            </a>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}

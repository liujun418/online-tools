"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import ToolLayout from "@/components/ToolLayout";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icons (Leaflet + bundler issue)
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const metadata = {
  title: "World Map Explorer",
  description: "Search and explore any city worldwide on an interactive map. Free, no signup — powered by OpenStreetMap.",
  keywords: ["world map", "interactive map", "city search", "map explorer", "openstreetmap", "leaflet map", "free map tool"],
  toolId: "world-map",
};

const NOMINATIM = "https://nominatim.openstreetmap.org/search?format=json&limit=5&q=";

export default function WorldMapClient({
  locale = "en", dict, titleOverride, descriptionOverride,
}: {
  locale?: string; dict?: Record<string, unknown>;
  titleOverride?: string; descriptionOverride?: string;
}) {
  const t = (dict as any)?.worldMap || {};
  const tp = (dict as any)?.toolPage || {};
  const title = titleOverride || metadata.title;
  const description = descriptionOverride || metadata.description;

  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);

  const [query, setQuery] = useState("");
  const [searching, setSearching] = useState(false);
  const [results, setResults] = useState<{ display_name: string; lat: string; lon: string }[]>([]);
  const [error, setError] = useState("");

  // Init map
  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;
    const map = L.map(mapRef.current, {
      center: [20, 0],
      zoom: 2,
      attributionControl: false,
    });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    }).addTo(map);
    L.control.attribution({ prefix: false }).addTo(map);
    mapInstance.current = map;
    return () => { map.remove(); mapInstance.current = null; };
  }, []);

  const moveTo = useCallback((lat: number, lon: number, zoom = 14) => {
    const map = mapInstance.current;
    if (!map) return;
    if (markerRef.current) markerRef.current.remove();
    const marker = L.marker([lat, lon]).addTo(map);
    marker.bindPopup(`📍 ${lat.toFixed(4)}, ${lon.toFixed(4)}`).openPopup();
    markerRef.current = marker;
    map.setView([lat, lon], zoom, { animate: true });
  }, []);

  const handleSearch = async (q: string) => {
    setQuery(q);
    if (q.length < 2) { setResults([]); return; }
    setSearching(true);
    setError("");
    try {
      const res = await fetch(NOMINATIM + encodeURIComponent(q));
      if (!res.ok) throw new Error("Search failed");
      const data = await res.json();
      setResults(data.slice(0, 5));
    } catch { setError("Search failed. Please try again."); }
    finally { setSearching(false); }
  };

  const selectPlace = (place: { display_name: string; lat: string; lon: string }) => {
    moveTo(parseFloat(place.lat), parseFloat(place.lon));
    setResults([]);
    setQuery(place.display_name.split(",")[0]);
  };

  const locateMe = () => {
    if (!navigator.geolocation) { setError("Geolocation not supported"); return; }
    navigator.geolocation.getCurrentPosition(
      (pos) => moveTo(pos.coords.latitude, pos.coords.longitude),
      () => setError("Unable to get your location."),
    );
  };

  return (
    <ToolLayout title={title} description={description} keywords={metadata.keywords} toolId={metadata.toolId} locale={locale as any} dict={dict}>
      <div className="mx-auto max-w-5xl">
        {/* Search bar */}
        <div className="relative mb-4">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <svg className="pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              <input
                type="text" value={query}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder={t.searchPlaceholder || "Search for a city or place..."}
                className="w-full rounded-lg border border-zinc-300 py-2.5 ps-10 pe-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
              />
            </div>
            <button onClick={locateMe} className="shrink-0 rounded-lg border border-zinc-300 px-3 py-2.5 text-sm font-medium text-zinc-600 hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-400 dark:hover:bg-zinc-800">
              📍 {t.locateMe || "My Location"}
            </button>
          </div>
          {/* Search results dropdown */}
          {results.length > 0 && (
            <div className="absolute z-[1000] mt-1 w-full rounded-lg border border-zinc-200 bg-white shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
              {searching && <p className="px-4 py-3 text-sm text-zinc-400">Searching...</p>}
              {results.map((r, i) => (
                <button key={i} onClick={() => selectPlace(r)} className="w-full px-4 py-2.5 text-start text-sm text-zinc-700 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-800 border-b border-zinc-100 last:border-0 dark:border-zinc-800">
                  {r.display_name}
                </button>
              ))}
            </div>
          )}
        </div>
        {error && <p className="mb-3 text-xs text-red-500">{error}</p>}

        {/* Map */}
        <div className="overflow-hidden rounded-2xl border border-zinc-200 shadow-sm dark:border-zinc-700">
          <div ref={mapRef} className="h-[400px] w-full sm:h-[500px]" />
        </div>

        {/* Attribution */}
        <div className="mt-4 space-y-1 text-center text-xs text-zinc-400">
          <p>© <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer" className="underline hover:text-zinc-600">OpenStreetMap</a> contributors · Map tiles under ODbL</p>
          <p>Powered by <a href="https://leafletjs.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-zinc-600">Leaflet</a> open-source JavaScript library · Geocoding by <a href="https://nominatim.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-zinc-600">Nominatim</a></p>
          <p>{t.compliance || "This map tool is provided free for non-commercial use in compliance with OpenStreetMap and Leaflet open-source licenses."}</p>
        </div>

        {/* Referral */}
        <div className="mt-6 rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 text-center dark:border-blue-800 dark:from-blue-950/30 dark:to-indigo-950/20">
          <p className="text-sm font-medium text-blue-800 dark:text-blue-300">{t.referralText || "Explore more free tools!"}</p>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            <a href={`/${locale}/tools/bing-wallpaper`} className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">🖼️ {t.tryBing || "Bing 4K Wallpaper"}</a>
            <a href={`/${locale}/tools/nasa-apod`} className="rounded-lg border border-blue-300 bg-white px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50 dark:border-blue-600 dark:bg-transparent dark:text-blue-300 dark:hover:bg-blue-900/20">🔭 {t.tryNasa || "NASA APOD"}</a>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}

"use client";

import { useState, useMemo, useCallback } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "Hashtag Generator",
  description:
    "Generate relevant hashtags for Instagram, Twitter, and TikTok.",
  keywords: [
    "hashtag generator",
    "instagram hashtag generator",
    "twitter hashtags",
    "tiktok hashtag generator",
    "popular hashtags",
  ],
};

const hashtagDB: Record<string, string[]> = {
  travel: ["#travel", "#wanderlust", "#travelgram", "#instatravel", "#traveling", "#traveltheworld", "#adventure", "#explore", "#travelphotography", "#vacation", "#trip", "#travelblogger", "#traveladdict", "#worldtraveler", "#globetrotter", "#passportready", "#jetset", "#roamtheplanet", "#travelholic", "#bucketlist"],
  food: ["#food", "#foodie", "#foodporn", "#instafood", "#foodphotography", "#foodstagram", "#yummy", "#delicious", "#homemade", "#cooking", "#chef", "#foodlover", "#tasty", "#eeeeeats", "#foodblogger", "#foodgasm", "#dinner", "#lunch", "#breakfast", "#healthyfood"],
  fitness: ["#fitness", "#fitnessmotivation", "#workout", "#gym", "#fit", "#fitnessjourney", "#training", "#motivation", "#bodybuilding", "#fitfam", "#exercise", "#healthylifestyle", "#muscle", "#crossfit", "#cardio", "#strength", "#personaltrainer", "#fitspo", "#gains", "#healthyliving"],
  fashion: ["#fashion", "#style", "#ootd", "#fashionblogger", "#instafashion", "#streetstyle", "#fashionista", "#outfitoftheday", "#fashionstyle", "#lookbook", "#trendy", "#shopping", "#dress", "#outfit", "#fashionable", "#stylish", "#wardrobe", "#accessories", "#fashioninspo", "#whatiwore"],
  tech: ["#tech", "#technology", "#innovation", "#startup", "#coding", "#programming", "#developer", "#software", "#ai", "#machinelearning", "#techlife", "#gadgets", "#cybersecurity", "#cloud", "#devops", "#javascript", "#python", "#webdev", "#technews", "#digital"],
  art: ["#art", "#artist", "#artwork", "#illustration", "#drawing", "#painting", "#artoftheday", "#contemporaryart", "#fineart", "#modernart", "#sketch", "#creative", "#design", "#artsy", "#instaart", "#artgallery", "#artcollector", "#abstract", "#watercolor", "#oilpainting"],
  music: ["#music", "#musician", "#songwriter", "#singer", "#newmusic", "#hiphop", "#rap", "#pop", "#rock", "#livemusic", "#concert", "#producer", "#beats", "#musicproducer", "#instamusic", "#musiclife", "#guitar", "#piano", "#dj", "#nowplaying"],
  photography: ["#photography", "#photooftheday", "#photographer", "#photo", "#photoshoot", "#portrait", "#landscape", "#naturephotography", "#streetphotography", "#canon", "#nikon", "#sony", "#lightroom", "#photoshop", "#picoftheday", "#instagood", "#capture", "#shotoniphone", "#lens", "#composition"],
  beauty: ["#beauty", "#makeup", "#skincare", "#beautyblogger", "#makeupartist", "#cosmetics", "#beautytips", "#beautyproducts", "#makeuplover", "#beautycare", "#glam", "#makeuplook", "#beautyinspo", "#naturalbeauty", "#beautycommunity", "#beautygram", "#makeupoftheday", "#beautyaddict", "#lipstick", "#foundation"],
  nature: ["#nature", "#naturephotography", "#naturelovers", "#outdoors", "#wildlife", "#mountains", "#forest", "#sunset", "#sunrise", "#ocean", "#beach", "#camping", "#hiking", "#nationalpark", "#earth", "#explore", "#adventure", "#scenery", "#landscape", "#green"],
  business: ["#business", "#entrepreneur", "#marketing", "#smallbusiness", "#success", "#motivation", "#businessowner", "#startup", "#leadership", "#sales", "#branding", "#networking", "#growth", "#money", "#finance", "#investing", "#ceo", "#hustle", "#grind", "#businessmindset"],
  lifestyle: ["#lifestyle", "#lifestyleblogger", "#daily", "#instagood", "#picoftheday", "#love", "#happy", "#life", "#blessed", "#goodvibes", "#positive", "#mindfulness", "#selfcare", "#wellness", "#health", "#balance", "#motivation", "#inspiration", "#grateful", "#joym"],
  pets: ["#pets", "#dog", "#cat", "#puppy", "#kitten", "#petsofinstagram", "#dogsofinstagram", "#catsofinstagram", "#petlover", "#animal", "#doglife", "#catlife", "#rescuedog", "#adoptdontshop", "#furbaby", "#petphotography", "#cutedog", "#cute", "#dogstagram", "#catstagram"],
  gaming: ["#gaming", "#gamer", "#videogames", "#playstation", "#xbox", "#nintendo", "#pcgaming", "#gamingcommunity", "#gamingsetup", "#esports", "#streamer", "#twitch", "#gaminglife", "#gamersofinstagram", "#fps", "#rpg", "#openworld", "#retrogaming", "#gamingnews", "#game"],
  wedding: ["#wedding", "#bride", "#groom", "#weddingday", "#weddingphotography", "#weddingplanner", "#weddinginspiration", "#bridal", "#weddingdress", "#weddingcake", "#engagement", "#love", "#marriage", "#weddingseason", "#weddingideas", "#bridesmaid", "#weddingdecor", "#weddingvenue", "#destinationwedding", "#justmarried"],
  yoga: ["#yoga", "#yogalife", "#yogainspiration", "#yogaeveryday", "#yogapractice", "#meditation", "#mindfulness", "#namaste", "#yogapose", "#yogateacher", "#yogalove", "#wellness", "#flexibility", "#balance", "#innerpeace", "#yogajourney", "#yogacommunity", "#yogaforbeginners", "#vinyasa", "#hatha"],
  coffee: ["#coffee", "#coffeelover", "#coffeetime", "#coffeeaddict", "#coffeeshop", "#espresso", "#latte", "#cappuccino", "#morningcoffee", "#coffeebreak", "#coffeegram", "#specialtycoffee", "#barista", "#coffeeculture", "#instacoffee", "#caffeine", "#coffeeroaster", "#brew", "#pourovercoffee", "#icedcoffee"],
  motivation: ["#motivation", "#motivational", "#inspiration", "#motivationalquotes", "#success", "#mindset", "#goals", "#hustle", "#entrepreneur", "#positivity", "#determination", "#nevergiveup", "#believe", "#dream", "#workhard", "#grind", "#ambition", "#discipline", "#growth", "#selfimprovement"],
};

export default function HashtagGeneratorClient({ locale = "en", dict }: { locale?: string; dict?: Record<string, unknown> } = {}) {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(20);
  const [copied, setCopied] = useState(false);
  const ht = (dict as any)?.hashtagGenerator || {};

  const hashtags = useMemo(() => {
    if (!input.trim()) return [];

    const lower = input.toLowerCase();
    const matched: string[] = [];
    const added = new Set<string>();

    // Match categories
    for (const [key, tags] of Object.entries(hashtagDB)) {
      if (lower.includes(key) || key.includes(lower)) {
        for (const tag of tags) {
          if (!added.has(tag)) {
            added.add(tag);
            matched.push(tag);
          }
        }
      }
    }

    // If no category match, add a generic set based on input words
    if (matched.length === 0) {
      const words = lower.split(/\s+/);
      for (const word of words) {
        const tag = `#${word.replace(/[^a-z0-9]/g, "")}`;
        if (tag.length > 1 && !added.has(tag)) {
          added.add(tag);
          matched.push(tag);
        }
      }
      // Add popular generic tags
      const generic = ["#trending", "#viral", "#instagood", "#explore", "#fyp", "#foryou", "#popular", "#like", "#follow", "#share"];
      for (const g of generic) {
        if (!added.has(g)) {
          added.add(g);
          matched.push(g);
        }
      }
    }

    // Mix in some popular general tags
    const popular = ["#instagood", "#photooftheday", "#love", "#beautiful", "#happy", "#cool", "#amazing"];
    for (const p of popular) {
      if (!added.has(p)) {
        added.add(p);
        matched.push(p);
      }
    }

    return matched.slice(0, count);
  }, [input, count]);

  const hashtagString = hashtags.join(" ");

  function handleCopy() {
    navigator.clipboard.writeText(hashtagString);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <ToolLayout {...metadata} locale={locale as any} dict={dict}>
      <div>
        <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          {ht.enterTopic || "Enter Your Topic or Keyword"}
        </label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={ht.placeholder || "e.g., travel, food, fitness, coffee"}
          className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
        />
      </div>

      <div className="mt-4 flex items-center gap-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {ht.numberOfHashtags || "Number of Hashtags"}
          </label>
          <select
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </select>
        </div>
      </div>

      {hashtags.length > 0 && (
        <>
          <div className="mt-6 rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex flex-wrap gap-2">
              {hashtags.map((tag, i) => (
                <span
                  key={i}
                  className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4 flex gap-3">
            <button
              onClick={handleCopy}
              className={`rounded-lg px-6 py-2 text-sm font-medium text-white transition-colors ${
                copied
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {copied ? (ht.copied || "Copied!") : (ht.copyAll || "Copy All")}
            </button>
            <div className="text-sm text-zinc-500 dark:text-zinc-400">
              {ht.hashtagsCount?.replace("{{count}}", String(hashtags.length)).replace("{{chars}}", String(hashtagString.length)) || `${hashtags.length} hashtags · ${hashtagString.length} characters`}
            </div>
          </div>
        </>
      )}
    </ToolLayout>
  );
}

"use client";

import { useState, useMemo } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "Free AI Tools Directory",
  description:
    "Curated directory of the best free AI tools organized by category.",
  keywords: [
    "free AI tools",
    "best free AI tools",
    "AI chatbot",
    "AI image generator",
    "AI coding assistant",
    "AI writing tool",
  ],
};

const categories = [
  { key: "all", label: "All", icon: "📋" },
  { key: "chatbot", label: "Chatbots", icon: "🤖" },
  { key: "image", label: "Image", icon: "🎨" },
  { key: "video", label: "Video", icon: "🎬" },
  { key: "audio", label: "Audio", icon: "🎵" },
  { key: "coding", label: "Coding", icon: "💻" },
  { key: "writing", label: "Writing", icon: "✍️" },
  { key: "productivity", label: "Productivity", icon: "📊" },
  { key: "research", label: "Research", icon: "🔍" },
  { key: "utilities", label: "Utilities", icon: "🛠️" },
];

interface AITool {
  name: string;
  url: string;
  description: string;
  category: string;
  pricing: "free" | "freemium" | "free-tier";
}

const aiTools: AITool[] = [
  // Chatbots
  { name: "ChatGPT", url: "https://chatgpt.com", description: "OpenAI's AI assistant with GPT-4o model. Free tier includes GPT-4o mini with unlimited usage.", category: "chatbot", pricing: "freemium" },
  { name: "Claude", url: "https://claude.ai", description: "Anthropic's conversational AI with strong reasoning and long context window.", category: "chatbot", pricing: "freemium" },
  { name: "Google Gemini", url: "https://gemini.google.com", description: "Google's AI with deep web integration and real-time information.", category: "chatbot", pricing: "freemium" },
  { name: "Microsoft Copilot", url: "https://copilot.microsoft.com", description: "Free AI with GPT-4 access, web search, and image creation via DALL-E.", category: "chatbot", pricing: "free-tier" },
  { name: "Perplexity AI", url: "https://perplexity.ai", description: "AI-powered search engine with source citations and follow-up questions.", category: "chatbot", pricing: "freemium" },
  { name: "Grok", url: "https://grok.com", description: "xAI's assistant with real-time X (Twitter) data access and humor.", category: "chatbot", pricing: "free-tier" },
  { name: "Mistral Le Chat", url: "https://chat.mistral.ai", description: "Open-source AI with strong multilingual capabilities.", category: "chatbot", pricing: "free-tier" },
  { name: "Qwen", url: "https://chat.qwen.ai", description: "Alibaba's large language model with strong reasoning and coding.", category: "chatbot", pricing: "free-tier" },
  { name: "DeepSeek", url: "https://chat.deepseek.com", description: "Free AI assistant with strong coding and math capabilities.", category: "chatbot", pricing: "free" },
  { name: "Meta AI", url: "https://meta.ai", description: "Meta's free AI with web search and image generation powered by Llama.", category: "chatbot", pricing: "free" },

  // Image
  { name: "Leonardo.ai", url: "https://leonardo.ai", description: "High-quality AI image generation with 150 free credits daily.", category: "image", pricing: "freemium" },
  { name: "Bing Image Creator", url: "https://www.bing.com/images/create", description: "Free DALL-E 3 powered image generation with Microsoft account.", category: "image", pricing: "free" },
  { name: "Playground AI", url: "https://playground.com", description: "Generate up to 500 images per day with multiple AI models.", category: "image", pricing: "freemium" },
  { name: "Stable Diffusion Online", url: "https://stablediffusionweb.com", description: "Free online interface for Stable Diffusion text-to-image generation.", category: "image", pricing: "free" },
  { name: "Pixlr AI", url: "https://pixlr.com", description: "AI-powered image editing suite with generation and enhancement.", category: "image", pricing: "freemium" },
  { name: "Canva AI", url: "https://canva.com", description: "AI design tools including Magic Write, Magic Media, and Magic Edit.", category: "image", pricing: "freemium" },

  // Video
  { name: "Runway ML", url: "https://runwayml.com", description: "AI video creation with text-to-video and motion brushes. Free tier includes credits.", category: "video", pricing: "freemium" },
  { name: "Pika Labs", url: "https://pika.art", description: "AI text-to-video and image-to-video generation with free credits.", category: "video", pricing: "freemium" },
  { name: "Luma Dream Machine", url: "https://lumalabs.ai/dream-machine", description: "High-quality AI video generation with realistic motion.", category: "video", pricing: "freemium" },
  { name: "Haiper AI", url: "https://haiper.ai", description: "Create short AI videos from text prompts or images.", category: "video", pricing: "freemium" },
  { name: "Clipchamp", url: "https://clipchamp.com", description: "AI video editor by Microsoft with text-to-speech and auto captions.", category: "video", pricing: "freemium" },
  { name: "CapCut", url: "https://capcut.com", description: "Free AI video editor with auto-captions, effects, and templates.", category: "video", pricing: "free" },

  // Audio
  { name: "ElevenLabs", url: "https://elevenlabs.io", description: "Realistic AI voice generation with 10,000 free characters per month.", category: "audio", pricing: "freemium" },
  { name: "Suno AI", url: "https://suno.com", description: "AI music generation with lyrics. Free tier includes 50 credits daily.", category: "audio", pricing: "freemium" },
  { name: "Udio", url: "https://udio.com", description: "AI song creation with vocals and instrumentation. Free tier available.", category: "audio", pricing: "freemium" },
  { name: "Adobe Podcast", url: "https://podcast.adobe.com", description: "AI audio enhancement to remove noise and improve recording quality.", category: "audio", pricing: "free" },
  { name: "TTSMaker", url: "https://ttsmaker.com", description: "Free unlimited text-to-speech with multiple voices and languages.", category: "audio", pricing: "free" },
  { name: "Murf AI", url: "https://murf.ai", description: "AI voiceover generator for presentations and videos. Free tier included.", category: "audio", pricing: "freemium" },

  // Coding
  { name: "Cursor", url: "https://cursor.com", description: "AI-native code editor with autocomplete, chat, and multi-file editing.", category: "coding", pricing: "freemium" },
  { name: "Replit AI", url: "https://replit.com", description: "Browser-based IDE with AI code assistant and deployment. Free tier.", category: "coding", pricing: "freemium" },
  { name: "v0 by Vercel", url: "https://v0.dev", description: "Generate React/Tailwind UI components from text prompts.", category: "coding", pricing: "freemium" },
  { name: "Codeium", url: "https://codeium.com", description: "Free AI code autocomplete and chat for 40+ IDEs.", category: "coding", pricing: "free" },
  { name: "Phind", url: "https://phind.com", description: "AI search engine optimized for developers with code examples.", category: "coding", pricing: "free" },
  { name: "GitHub Copilot", url: "https://github.com/features/copilot", description: "AI code completion powered by GPT-4. Free for students and OSS.", category: "coding", pricing: "freemium" },
  { name: "Bolt.new", url: "https://bolt.new", description: "AI-powered full-stack web development in the browser.", category: "coding", pricing: "freemium" },

  // Writing
  { name: "QuillBot", url: "https://quillbot.com", description: "AI paraphrasing, summarizing, and grammar checker. Free tier included.", category: "writing", pricing: "freemium" },
  { name: "Grammarly", url: "https://grammarly.com", description: "AI writing assistant with grammar, tone, and clarity suggestions.", category: "writing", pricing: "freemium" },
  { name: "DeepL Write", url: "https://deepl.com/write", description: "AI-powered writing improvement with translation capabilities.", category: "writing", pricing: "freemium" },
  { name: "Writesonic", url: "https://writesonic.com", description: "AI copywriting for blogs, ads, and product descriptions. Free tier.", category: "writing", pricing: "freemium" },
  { name: "Hemingway Editor", url: "https://hemingwayapp.com", description: "Free online tool to improve writing clarity and readability.", category: "writing", pricing: "free" },
  { name: "Paraphraser.io", url: "https://paraphraser.io", description: "Free AI text rewriter with multiple modes. Unlimited usage.", category: "writing", pricing: "free" },

  // Productivity
  { name: "Notion AI", url: "https://notion.so", description: "AI writing and summarization within Notion workspace. Free trial.", category: "productivity", pricing: "freemium" },
  { name: "Google NotebookLM", url: "https://notebooklm.google", description: "AI research assistant that analyzes your documents and sources.", category: "productivity", pricing: "free" },
  { name: "Otter.ai", url: "https://otter.ai", description: "AI meeting transcription and note-taking. 300 free minutes/month.", category: "productivity", pricing: "freemium" },
  { name: "Tome", url: "https://tome.app", description: "AI presentation maker from prompts. Free tier with credits.", category: "productivity", pricing: "freemium" },
  { name: "SlidesAI", url: "https://slidesai.io", description: "AI Google Slides extension to create presentations from text.", category: "productivity", pricing: "freemium" },
  { name: "Gamma", url: "https://gamma.app", description: "AI-powered presentation, doc, and webpage creation. Free tier.", category: "productivity", pricing: "freemium" },

  // Research
  { name: "Consensus", url: "https://consensus.app", description: "AI-powered academic search engine with evidence-based answers.", category: "research", pricing: "freemium" },
  { name: "Elicit", url: "https://elicit.org", description: "AI research assistant for literature review and paper analysis.", category: "research", pricing: "freemium" },
  { name: "Semantic Scholar", url: "https://semanticscholar.org", description: "AI-powered academic search engine with citation analysis.", category: "research", pricing: "free" },
  { name: "You.com", url: "https://you.com", description: "AI search engine with summarization and citation support.", category: "research", pricing: "free" },
  { name: "Kimi", url: "https://kimi.moonshot.cn", description: "AI assistant with ultra-long context window for document analysis.", category: "research", pricing: "free" },
  { name: "Explainpaper", url: "https://explainpaper.com", description: "Upload academic papers and AI explains complex sections.", category: "research", pricing: "freemium" },

  // Utilities
  { name: "remove.bg", url: "https://remove.bg", description: "AI background removal for images. Free for standard quality.", category: "utilities", pricing: "freemium" },
  { name: "Upscale.media", url: "https://www.upscale.media", description: "AI image upscaler to enhance resolution up to 4x. Free tier.", category: "utilities", pricing: "freemium" },
  { name: "Khroma", url: "https://www.khroma.co", description: "AI-powered color palette generator using neural networks.", category: "utilities", pricing: "free" },
  { name: "Hugging Face Spaces", url: "https://huggingface.co/spaces", description: "Open-source AI demos including models for text, image, and audio.", category: "utilities", pricing: "free" },
  { name: "PhotoRoom", url: "https://www.photoroom.com", description: "AI background editing and product photography. Free tier.", category: "utilities", pricing: "freemium" },
  { name: "MagicSchool AI", url: "https://magicschool.ai", description: "AI tools for teachers: lesson plans, rubrics, and assessments.", category: "utilities", pricing: "freemium" },
];

export default function AIToolsClient() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const query = search.toLowerCase().trim();
    return aiTools.filter((tool) => {
      const matchCategory = activeCategory === "all" || tool.category === activeCategory;
      const matchSearch = !query || tool.name.toLowerCase().includes(query) || tool.description.toLowerCase().includes(query);
      return matchCategory && matchSearch;
    });
  }, [activeCategory, search]);

  return (
    <ToolLayout {...metadata}>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        Curated directory of the best free AI tools. All tools listed are free to use or offer generous free tiers.
      </p>

      {/* Search */}
      <div className="mt-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search AI tools..."
          className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-900 dark:placeholder:text-zinc-600"
        />
      </div>

      {/* Category tabs */}
      <div className="mt-4 flex flex-wrap gap-2">
        {categories.map((cat) => {
          const count = cat.key === "all" ? aiTools.length : aiTools.filter((t) => t.category === cat.key).length;
          return (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                activeCategory === cat.key
                  ? "bg-blue-600 text-white"
                  : "bg-zinc-200 text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
              <span className={`rounded-full px-1.5 py-0.5 text-[10px] ${activeCategory === cat.key ? "bg-blue-500 text-white" : "bg-zinc-300 text-zinc-500 dark:bg-zinc-700 dark:text-zinc-400"}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Results count */}
      {search && (
        <div className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
          {filtered.length} tool{filtered.length !== 1 ? "s" : ""} found
        </div>
      )}

      {/* Tool grid */}
      {filtered.length > 0 ? (
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((tool) => (
            <a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-2 rounded-lg border border-zinc-200 bg-white p-4 shadow-sm transition-all hover:border-blue-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-blue-700"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-zinc-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                  {tool.name}
                </h3>
                <span
                  className={`shrink-0 rounded px-1.5 py-0.5 text-[10px] font-medium ${
                    tool.pricing === "free"
                      ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                      : tool.pricing === "free-tier"
                      ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                      : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
                  }`}
                >
                  {tool.pricing === "free" ? "Free" : tool.pricing === "free-tier" ? "Free Tier" : "Freemium"}
                </span>
              </div>
              <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                {tool.description}
              </p>
              <div className="mt-1 flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400">
                <span>Visit</span>
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="mt-12 text-center text-zinc-400 dark:text-zinc-500">
          <p className="text-lg">No AI tools found</p>
          <p className="mt-1 text-sm">Try adjusting your search or category filter.</p>
        </div>
      )}
    </ToolLayout>
  );
}

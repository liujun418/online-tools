"use client";

import { useState, useMemo } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "Famous Quotes Directory",
  description:
    "Search famous quotes by person name or keyword.",
  keywords: [
    "famous quotes",
    "inspirational quotes",
    "motivational quotes",
    "quote search",
    "famous sayings",
  ],
  toolId: "quotes",
};

interface Quote {
  text: string;
  author: string;
  source: string;
  year: string;
  tags: string[];
  category: string;
}

const quotes: Quote[] = [
  { text: "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.", author: "Albert Einstein", source: "Interview with George Sylvester Viereck, The Saturday Evening Post", year: "1929", tags: ["imagination", "knowledge", "creativity"], category: "Inspiration & Creativity" },
  { text: "Life is like riding a bicycle. To keep your balance, you must keep moving.", author: "Albert Einstein", source: "Letter to his son Eduard", year: "1930", tags: ["life", "perseverance", "courage"], category: "Courage & Strength" },
  { text: "Try not to become a man of success, but rather try to become a man of value.", author: "Albert Einstein", source: "Life magazine", year: "1955", tags: ["success", "value", "character"], category: "Success & Achievement" },
  { text: "The only source of knowledge is experience.", author: "Albert Einstein", source: "Essays in Science", year: "1934", tags: ["knowledge", "experience", "learning"], category: "Wisdom & Knowledge" },
  { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi", source: "Attributed in 'The Philosophy of Gandhi' by Arne Næss", year: "1913", tags: ["change", "action", "leadership"], category: "Change & Growth" },
  { text: "The weak can never forgive. Forgiveness is the attribute of the strong.", author: "Mahatma Gandhi", source: "Young India", year: "1926", tags: ["forgiveness", "strength", "character"], category: "Love & Compassion" },
  { text: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi", source: "Attributed in biographical accounts", year: "1920s", tags: ["life", "learning", "wisdom"], category: "Wisdom & Knowledge" },
  { text: "In a gentle way, you can shake the world.", author: "Mahatma Gandhi", source: "Speech at prayer meeting, New Delhi", year: "1947", tags: ["peace", "change", "gentleness"], category: "Peace & Serenity" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela", source: "Speech at the African National Congress", year: "1994", tags: ["perseverance", "achievement", "courage"], category: "Courage & Strength" },
  { text: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela", source: "Speech at the University of the Witwatersrand", year: "2003", tags: ["education", "change", "power"], category: "Wisdom & Knowledge" },
  { text: "There is no passion to be found playing small — in settling for a life that is less than the one you are capable of living.", author: "Nelson Mandela", source: "Inaugural address", year: "1994", tags: ["potential", "ambition", "life"], category: "Change & Growth" },
  { text: "A good head and a good heart are always a formidable combination.", author: "Nelson Mandela", source: "Interview with BBC", year: "1999", tags: ["character", "intelligence", "leadership"], category: "Character & Virtue" },
  { text: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.", author: "Martin Luther King Jr.", source: "Strength to Love", year: "1963", tags: ["love", "peace", "courage"], category: "Love & Compassion" },
  { text: "The time is always right to do what is right.", author: "Martin Luther King Jr.", source: "Speech at Oberlin College", year: "1965", tags: ["justice", "courage", "action"], category: "Character & Virtue" },
  { text: "If you can't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving forward.", author: "Martin Luther King Jr.", source: "Speech at Spelman College", year: "1959", tags: ["perseverance", "progress", "courage"], category: "Courage & Strength" },
  { text: "Faith is taking the first step even when you don't see the whole staircase.", author: "Martin Luther King Jr.", source: "Sermon at Dexter Avenue Baptist Church", year: "1957", tags: ["faith", "courage", "action"], category: "Hope & Dreams" },
  { text: "Stay hungry, stay foolish.", author: "Steve Jobs", source: "Stanford Commencement Address", year: "2005", tags: ["ambition", "creativity", "courage"], category: "Success & Achievement" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs", source: "Stanford Commencement Address", year: "2005", tags: ["work", "passion", "success"], category: "Success & Achievement" },
  { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs", source: "Apple Worldwide Developers Conference", year: "1997", tags: ["innovation", "leadership", "success"], category: "Inspiration & Creativity" },
  { text: "Design is not just what it looks like and feels like. Design is how it works.", author: "Steve Jobs", source: "Interview with The New York Times", year: "2003", tags: ["design", "innovation", "creativity"], category: "Inspiration & Creativity" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill", source: "Speech to the House of Commons", year: "1942", tags: ["courage", "perseverance", "success"], category: "Courage & Strength" },
  { text: "If you are going through hell, keep going.", author: "Winston Churchill", source: "Speech during World War II", year: "1941", tags: ["perseverance", "courage", "resilience"], category: "Courage & Strength" },
  { text: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.", author: "Winston Churchill", source: "Speech at the Conservative Party Conference", year: "1944", tags: ["optimism", "opportunity", "mindset"], category: "Hope & Dreams" },
  { text: "Courage is what it takes to stand up and speak; courage is also what it takes to sit down and listen.", author: "Winston Churchill", source: "Speech to the Royal College of Surgeons", year: "1944", tags: ["courage", "listening", "wisdom"], category: "Courage & Strength" },
  { text: "People will forget what you said, people will forget what you did, but people will never forget how you made them feel.", author: "Maya Angelou", source: "Interview with 'The Paris Review'", year: "1970", tags: ["feelings", "impact", "character"], category: "Action & Purpose" },
  { text: "There is no greater agony than bearing an untold story inside you.", author: "Maya Angelou", source: "I Know Why the Caged Bird Sings", year: "1969", tags: ["story", "voice", "courage"], category: "Character & Virtue" },
  { text: "You can't use up creativity. The more you use, the more you have.", author: "Maya Angelou", source: "Interview with 'The New Yorker'", year: "1989", tags: ["creativity", "growth", "abundance"], category: "Inspiration & Creativity" },
  { text: "We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty.", author: "Maya Angelou", source: "Letter to My Daughter", year: "2008", tags: ["change", "beauty", "growth"], category: "Change & Growth" },
  { text: "Whatever you are, be a good one.", author: "Abraham Lincoln", source: "Personal letter", year: "1860", tags: ["character", "excellence", "integrity"], category: "Character & Virtue" },
  { text: "The best way to predict the future is to create it.", author: "Abraham Lincoln", source: "Attributed in 'Lincoln: The Unknown' by Dale Carnegie", year: "1863", tags: ["future", "action", "leadership"], category: "Hope & Dreams" },
  { text: "In the end, it's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln", source: "Attributed in biographical accounts", year: "1860s", tags: ["life", "meaning", "purpose"], category: "Action & Purpose" },
  { text: "I have learned over the years that when one's mind is made up, this diminishes fear.", author: "Nelson Mandela", source: "Long Walk to Freedom", year: "1994", tags: ["courage", "decision", "fear"], category: "Courage & Strength" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius", source: "The Analects", year: "500 BC", tags: ["perseverance", "progress", "patience"], category: "Courage & Strength" },
  { text: "Our greatest glory is not in never falling, but in rising every time we fall.", author: "Confucius", source: "The Analects", year: "500 BC", tags: ["resilience", "perseverance", "courage"], category: "Courage & Strength" },
  { text: "The man who moves a mountain begins by carrying away small stones.", author: "Confucius", source: "The Analects", year: "500 BC", tags: ["perseverance", "progress", "patience"], category: "Courage & Strength" },
  { text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle", source: "Nicomachean Ethics", year: "340 BC", tags: ["excellence", "habits", "character"], category: "Success & Achievement" },
  { text: "Knowing yourself is the beginning of all wisdom.", author: "Aristotle", source: "Metaphysics", year: "340 BC", tags: ["wisdom", "self-awareness", "knowledge"], category: "Wisdom & Knowledge" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain", source: "Attributed in 'Mark Twain in Eruption'", year: "1910", tags: ["action", "progress", "beginning"], category: "Action & Purpose" },
  { text: "Kindness is the language which the deaf can hear and the blind can see.", author: "Mark Twain", source: "Attributed in biographical accounts", year: "1890s", tags: ["kindness", "compassion", "humanity"], category: "Love & Compassion" },
  { text: "The two most important days in your life are the day you are born and the day you find out why.", author: "Mark Twain", source: "Attributed in 'Mark Twain's Notebook'", year: "1900s", tags: ["purpose", "life", "meaning"], category: "Action & Purpose" },
  { text: "Alone we can do so little; together we can do so much.", author: "Helen Keller", source: "The Story of My Life", year: "1903", tags: ["teamwork", "collaboration", "unity"], category: "Life & Living" },
  { text: "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.", author: "Helen Keller", source: "The Story of My Life", year: "1903", tags: ["beauty", "love", "heart"], category: "Love & Compassion" },
  { text: "Life is either a daring adventure or nothing at all.", author: "Helen Keller", source: "The Open Door", year: "1957", tags: ["adventure", "courage", "life"], category: "Life & Living" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt", source: "Tomorrow Is Now", year: "1963", tags: ["dreams", "hope", "future"], category: "Hope & Dreams" },
  { text: "No one can make you feel inferior without your consent.", author: "Eleanor Roosevelt", source: "This Is My Story", year: "1937", tags: ["self-worth", "confidence", "dignity"], category: "Character & Virtue" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt", source: "Speech at the Republican National Convention", year: "1912", tags: ["belief", "confidence", "success"], category: "Success & Achievement" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt", source: "The Strenuous Life", year: "1900", tags: ["action", "resourcefulness", "courage"], category: "Action & Purpose" },
  { text: "He who has a why to live can bear almost any how.", author: "Friedrich Nietzsche", source: "Twilight of the Idols", year: "1888", tags: ["purpose", "meaning", "resilience"], category: "Action & Purpose" },
  { text: "That which does not kill us makes us stronger.", author: "Friedrich Nietzsche", source: "Twilight of the Idols", year: "1888", tags: ["resilience", "strength", "growth"], category: "Courage & Strength" },
  { text: "Learning never exhausts the mind.", author: "Leonardo da Vinci", source: "Notebooks", year: "1500s", tags: ["learning", "growth", "mind"], category: "Wisdom & Knowledge" },
  { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci", source: "Notebooks (attributed)", year: "1500s", tags: ["simplicity", "elegance", "wisdom"], category: "Character & Virtue" },
  { text: "The only true wisdom is in knowing you know nothing.", author: "Socrates", source: "Plato's Apology", year: "399 BC", tags: ["wisdom", "humility", "knowledge"], category: "Wisdom & Knowledge" },
  { text: "An unexamined life is not worth living.", author: "Socrates", source: "Plato's Apology", year: "399 BC", tags: ["reflection", "life", "purpose"], category: "Wisdom & Knowledge" },
  { text: "Tell me and I forget. Teach me and I remember. Involve me and I learn.", author: "Benjamin Franklin", source: "Attributed in Poor Richard's Almanack", year: "1736", tags: ["learning", "teaching", "experience"], category: "Wisdom & Knowledge" },
  { text: "An investment in knowledge pays the best interest.", author: "Benjamin Franklin", source: "Poor Richard's Almanack", year: "1736", tags: ["knowledge", "education", "investment"], category: "Wisdom & Knowledge" },
  { text: "Nothing in life is to be feared, everything is to be understood. Then life is worth living.", author: "Marie Curie", source: "Pierre Curie (memoir)", year: "1923", tags: ["courage", "understanding", "life"], category: "Courage & Strength" },
  { text: "Be less curious about people and more curious about ideas.", author: "Marie Curie", source: "Laboratory Notebook", year: "1905", tags: ["curiosity", "ideas", "science"], category: "Wisdom & Knowledge" },
  { text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison", source: "Interview in Harper's Monthly", year: "1896", tags: ["failure", "perseverance", "innovation"], category: "Courage & Strength" },
  { text: "Genius is one percent inspiration and ninety-nine percent perspiration.", author: "Thomas Edison", source: "Interview with The New York Times", year: "1903", tags: ["hard work", "genius", "perseverance"], category: "Success & Achievement" },
  { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey", source: "O Magazine", year: "2002", tags: ["wisdom", "resilience", "growth"], category: "Wisdom & Knowledge" },
  { text: "The biggest adventure you can take is to live the life of your dreams.", author: "Oprah Winfrey", source: "What I Know for Sure", year: "2014", tags: ["dreams", "adventure", "life"], category: "Life & Living" },
  { text: "You become what you believe.", author: "Oprah Winfrey", source: "Interview on The Oprah Winfrey Show", year: "2000", tags: ["belief", "mindset", "transformation"], category: "Change & Growth" },
  { text: "All our dreams can come true, if we have the courage to pursue them.", author: "Walt Disney", source: "Interview with TV Guide", year: "1956", tags: ["dreams", "courage", "pursuit"], category: "Hope & Dreams" },
  { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney", source: "Company Meeting (attributed)", year: "1955", tags: ["action", "beginning", "productivity"], category: "Action & Purpose" },
  { text: "A man who stands for nothing will fall for anything.", author: "Malcolm X", source: "Speech at the Audubon Ballroom", year: "1964", tags: ["principles", "conviction", "integrity"], category: "Character & Virtue" },
  { text: "Education is our passport to the future, for tomorrow belongs to the people who prepare for it today.", author: "Malcolm X", source: "Speech at the Militant Labor Forum", year: "1962", tags: ["education", "preparation", "future"], category: "Wisdom & Knowledge" },
  { text: "You must never be fearful about what you are doing when it is right.", author: "Rosa Parks", source: "My Story", year: "1992", tags: ["courage", "justice", "fear"], category: "Courage & Strength" },
  { text: "I have learned over the years that when one's mind is made up, fear diminishes.", author: "Rosa Parks", source: "Interview with NPR", year: "1990", tags: ["courage", "decision", "fear"], category: "Courage & Strength" },
  { text: "Not all of us can do great things. But we can do small things with great love.", author: "Mother Teresa", source: "A Gift for God", year: "1975", tags: ["love", "kindness", "service"], category: "Love & Compassion" },
  { text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", author: "Mother Teresa", source: "Speech at the United Nations", year: "1985", tags: ["love", "kindness", "happiness"], category: "Love & Compassion" },
  { text: "Happiness is not something ready-made. It comes from your own actions.", author: "Dalai Lama", source: "The Art of Happiness", year: "1998", tags: ["happiness", "action", "mindset"], category: "Peace & Serenity" },
  { text: "Be kind whenever possible. It is always possible.", author: "Dalai Lama", source: "The Art of Happiness", year: "1998", tags: ["kindness", "compassion", "wisdom"], category: "Love & Compassion" },
  { text: "The goal is not to be better than the other man, but your previous self.", author: "Dalai Lama", source: "Ethics for the New Millennium", year: "1999", tags: ["self-improvement", "growth", "comparison"], category: "Change & Growth" },
  { text: "Be water, my friend.", author: "Bruce Lee", source: "Interview with Pierre Berton", year: "1971", tags: ["flexibility", "adaptability", "wisdom"], category: "Change & Growth" },
  { text: "Absorb what is useful, discard what is not, add what is uniquely your own.", author: "Bruce Lee", source: "Tao of Jeet Kune Do", year: "1975", tags: ["learning", "individuality", "growth"], category: "Wisdom & Knowledge" },
  { text: "You have power over your mind — not outside events. Realize this, and you will find strength.", author: "Marcus Aurelius", source: "Meditations", year: "180 AD", tags: ["mind", "strength", "stoicism"], category: "Wisdom & Knowledge" },
  { text: "The best revenge is not to be like your enemy.", author: "Marcus Aurelius", source: "Meditations", year: "180 AD", tags: ["character", "dignity", "restraint"], category: "Character & Virtue" },
  { text: "The wound is the place where the light enters you.", author: "Rumi", source: "Mathnawi", year: "1250", tags: ["healing", "growth", "wisdom"], category: "Love & Compassion" },
  { text: "Let yourself be silently drawn by the strange pull of what you really love. It will not lead you astray.", author: "Rumi", source: "Mathnawi", year: "1250", tags: ["passion", "love", "purpose"], category: "Success & Achievement" },
  { text: "Luck is what happens when preparation meets opportunity.", author: "Seneca", source: "Moral Letters to Lucilius", year: "65 AD", tags: ["luck", "preparation", "opportunity"], category: "Life & Living" },
  { text: "Every new beginning comes from some other beginning's end.", author: "Seneca", source: "Moral Letters to Lucilius", year: "65 AD", tags: ["change", "beginning", "cycles"], category: "Change & Growth" },
  { text: "We know what we are, but know not what we may be.", author: "William Shakespeare", source: "Hamlet", year: "1603", tags: ["potential", "future", "self-awareness"], category: "Change & Growth" },
  { text: "Love all, trust a few, do wrong to none.", author: "William Shakespeare", source: "All's Well That Ends Well", year: "1602", tags: ["love", "trust", "integrity"], category: "Character & Virtue" },
  { text: "Our doubts are traitors, and make us lose the good we oft might win, by fearing to attempt.", author: "William Shakespeare", source: "Measure for Measure", year: "1604", tags: ["courage", "doubt", "action"], category: "Courage & Strength" },
  { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson", source: "Self-Reliance", year: "1841", tags: ["authenticity", "individuality", "courage"], category: "Character & Virtue" },
  { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson", source: "Essays: Second Series", year: "1844", tags: ["inner strength", "potential", "self"], category: "Change & Growth" },
  { text: "A journey of a thousand miles begins with a single step.", author: "Lao Tzu", source: "Tao Te Ching", year: "600 BC", tags: ["beginning", "journey", "action"], category: "Action & Purpose" },
  { text: "The master has failed more times than the beginner has even tried.", author: "Lao Tzu", source: "Tao Te Ching", year: "600 BC", tags: ["failure", "mastery", "perseverance"], category: "Courage & Strength" },
  { text: "When I let go of what I am, I become what I might be.", author: "Lao Tzu", source: "Tao Te Ching", year: "600 BC", tags: ["transformation", "letting go", "potential"], category: "Change & Growth" },
  { text: "Whether you think you can, or you think you can't — you're right.", author: "Henry Ford", source: "My Life and Work", year: "1922", tags: ["mindset", "belief", "self-confidence"], category: "Change & Growth" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon", source: "Beautiful Boy (Darling Boy)", year: "1980", tags: ["life", "plans", "acceptance"], category: "Life & Living" },
  { text: "Imagine all the people living life in peace. You may say I'm a dreamer, but I'm not the only one.", author: "John Lennon", source: "Imagine", year: "1971", tags: ["peace", "dreams", "hope"], category: "Hope & Dreams" },
  { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis", source: "Attributed in biographical accounts", year: "1950s", tags: ["dreams", "goals", "age"], category: "Hope & Dreams" },
  { text: "We are what we believe we are.", author: "C.S. Lewis", source: "The Chronicles of Narnia", year: "1950", tags: ["belief", "identity", "self"], category: "Character & Virtue" },
  { text: "It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all — in which case, you fail by default.", author: "J.K. Rowling", source: "Harvard Commencement Speech", year: "2008", tags: ["failure", "courage", "life"], category: "Courage & Strength" },
  { text: "When something is important enough, you do it even if the odds are not in your favor.", author: "Elon Musk", source: "Interview with TED", year: "2017", tags: ["courage", "determination", "importance"], category: "Courage & Strength" },
  { text: "Persistence is very important. You should not give up unless you are forced to give up.", author: "Elon Musk", source: "Interview at MIT", year: "2013", tags: ["persistence", "perseverance", "determination"], category: "Courage & Strength" },
  { text: "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for.", author: "Barack Obama", source: "Speech in New Hampshire", year: "2008", tags: ["change", "action", "responsibility"], category: "Change & Growth" },
  { text: "Yes, we can.", author: "Barack Obama", source: "Campaign Speech", year: "2008", tags: ["hope", "belief", "unity"], category: "Hope & Dreams" },
  { text: "One child, one teacher, one book, one pen can change the world.", author: "Malala Yousafzai", source: "Speech at the United Nations", year: "2013", tags: ["education", "change", "courage"], category: "Wisdom & Knowledge" },
  { text: "When the whole world is silent, even one voice becomes powerful.", author: "Malala Yousafzai", source: "I Am Malala", year: "2013", tags: ["voice", "courage", "power"], category: "Character & Virtue" },
  { text: "However difficult life may seem, there is always something you can do and succeed at.", author: "Stephen Hawking", source: "Speech at Cambridge", year: "2016", tags: ["hope", "perseverance", "life"], category: "Hope & Dreams" },
  { text: "Intelligence is the ability to adapt to change.", author: "Stephen Hawking", source: "A Brief History of Time (attributed)", year: "1988", tags: ["intelligence", "change", "adaptation"], category: "Change & Growth" },
  { text: "How wonderful it is that nobody need wait a single moment before starting to improve the world.", author: "Anne Frank", source: "The Diary of a Young Girl", year: "1947", tags: ["action", "change", "hope"], category: "Action & Purpose" },
  { text: "In spite of everything, I still believe that people are really good at heart.", author: "Anne Frank", source: "The Diary of a Young Girl", year: "1947", tags: ["goodness", "hope", "humanity"], category: "Hope & Dreams" },
  { text: "Hope is being able to see that there is light despite all of the darkness.", author: "Desmond Tutu", source: "The Book of Forgiving", year: "2014", tags: ["hope", "light", "perseverance"], category: "Hope & Dreams" },
  { text: "If you want peace, you don't talk to your friends. You talk to your enemies.", author: "Desmond Tutu", source: "Speech at the World Council of Churches", year: "1985", tags: ["peace", "courage", "dialogue"], category: "Peace & Serenity" },
  { text: "The whole world is watching, and we're all looking at the same thing. Let's make it beautiful.", author: "Jimi Hendrix", source: "Interview with Rolling Stone", year: "1969", tags: ["beauty", "unity", "vision"], category: "Life & Living" },
  { text: "Knowledge speaks, but wisdom listens.", author: "Jimi Hendrix", source: "Attributed in interviews", year: "1960s", tags: ["wisdom", "listening", "knowledge"], category: "Wisdom & Knowledge" },
  { text: "The most courageous act is still to think for yourself. Aloud.", author: "Coco Chanel", source: "Attributed in interviews", year: "1960s", tags: ["courage", "thinking", "voice"], category: "Courage & Strength" },
  { text: "Don't spend time beating on a wall, hoping to transform it into a door.", author: "Coco Chanel", source: "Attributed in biographical accounts", year: "1950s", tags: ["acceptance", "wisdom", "action"], category: "Peace & Serenity" },
  { text: "Injustice anywhere is a threat to justice everywhere.", author: "Martin Luther King Jr.", source: "Letter from Birmingham Jail", year: "1963", tags: ["justice", "equality", "responsibility"], category: "Character & Virtue" },
  { text: "Hate cannot drive out hate; only love can do that.", author: "Martin Luther King Jr.", source: "Strength to Love", year: "1963", tags: ["love", "hate", "peace"], category: "Love & Compassion" },
  { text: "There can be no keener revelation of a society's soul than the way in which it treats its children.", author: "Nelson Mandela", source: "Speech at the Children's Defence Fund", year: "1995", tags: ["children", "society", "compassion"], category: "Love & Compassion" },
  { text: "If you judge people, you have no time to love them.", author: "Mother Teresa", source: "A Gift for God", year: "1975", tags: ["love", "judgment", "compassion"], category: "Love & Compassion" },
  { text: "To find yourself, think for yourself.", author: "Socrates", source: "Plato's Dialogues (attributed)", year: "400 BC", tags: ["self-discovery", "thinking", "individuality"], category: "Change & Growth" },
  { text: "Whenever you find yourself on the side of the majority, it is time to pause and reflect.", author: "Mark Twain", source: "A Connecticut Yankee in King Arthur's Court", year: "1889", tags: ["reflection", "independence", "wisdom"], category: "Wisdom & Knowledge" },
  { text: "I've learned that making a 'living' is not the same thing as 'making a life'.", author: "Maya Angelou", source: "Wouldn't Take Nothing for My Journey Now", year: "1993", tags: ["life", "purpose", "meaning"], category: "Action & Purpose" },
  { text: "Success is liking yourself, liking what you do, and liking how you do it.", author: "Maya Angelou", source: "Interview with Oprah", year: "1989", tags: ["success", "self-love", "fulfillment"], category: "Success & Achievement" },
  { text: "Peace comes from within. Do not seek it without.", author: "Buddha", source: "Dhammapada", year: "400 BC", tags: ["peace", "inner self", "wisdom"], category: "Peace & Serenity" },
  { text: "The mind is everything. What you think you become.", author: "Buddha", source: "Dhammapada", year: "400 BC", tags: ["mind", "thought", "transformation"], category: "Wisdom & Knowledge" },
  { text: "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.", author: "Buddha", source: "Dhammapada", year: "400 BC", tags: ["happiness", "sharing", "abundance"], category: "Peace & Serenity" },
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde", source: "Attributed in conversations", year: "1890s", tags: ["authenticity", "individuality", "self"], category: "Character & Virtue" },
  { text: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde", source: "The Soul of Man Under Socialism", year: "1891", tags: ["life", "purpose", "existence"], category: "Life & Living" },
  { text: "There is no charm equal to tenderness of heart.", author: "Jane Austen", source: "Emma", year: "1815", tags: ["kindness", "heart", "charm"], category: "Love & Compassion" },
  { text: "It isn't what we say or think that defines us, but what we do.", author: "Jane Austen", source: "Sense and Sensibility", year: "1811", tags: ["action", "character", "integrity"], category: "Character & Virtue" },
  { text: "When we are no longer able to change a situation, we are challenged to change ourselves.", author: "Viktor Frankl", source: "Man's Search for Meaning", year: "1946", tags: ["change", "resilience", "meaning"], category: "Change & Growth" },
  { text: "Those who have a 'why' to live, can bear with almost any 'how'.", author: "Viktor Frankl", source: "Man's Search for Meaning", year: "1946", tags: ["purpose", "meaning", "resilience"], category: "Action & Purpose" },
  { text: "There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.", author: "Ernest Hemingway", source: "True at First Light", year: "1950s", tags: ["self-improvement", "growth", "humility"], category: "Change & Growth" },
  { text: "Keep your face always toward the sunshine — and shadows will fall behind you.", author: "Walt Whitman", source: "Leaves of Grass", year: "1855", tags: ["optimism", "hope", "sunshine"], category: "Hope & Dreams" },
  { text: "I contain multitudes.", author: "Walt Whitman", source: "Leaves of Grass", year: "1855", tags: ["complexity", "self", "identity"], category: "Character & Virtue" },
  { text: "I used to think I was the strangest person in the world because I thought so differently from other people.", author: "Frida Kahlo", source: "Diary of Frida Kahlo", year: "1950s", tags: ["individuality", "acceptance", "self-love"], category: "Character & Virtue" },
  { text: "Nothing is worth more than laughter. It is freedom and it is lightness.", author: "Frida Kahlo", source: "Attributed in interviews", year: "1940s", tags: ["laughter", "freedom", "joy"], category: "Peace & Serenity" },
  { text: "No matter what people tell you, words and ideas can change the world.", author: "Robin Williams", source: "Dead Poets Society", year: "1989", tags: ["ideas", "change", "words"], category: "Inspiration & Creativity" },
  { text: "It is not power that corrupts but fear. Fear of losing power corrupts those who wield it.", author: "Aung San Suu Kyi", source: "Speech at Rangoon University", year: "1990", tags: ["fear", "power", "courage"], category: "Courage & Strength" },
  { text: "Judge a man by his questions rather than his answers.", author: "Voltaire", source: "Attributed in philosophical writings", year: "1764", tags: ["questions", "wisdom", "judgment"], category: "Wisdom & Knowledge" },
  { text: "I have decided to stick with love. Hate is too great a burden to bear.", author: "Voltaire", source: "Letters (attributed)", year: "1750s", tags: ["love", "hate", "burden"], category: "Love & Compassion" },
  { text: "The only way to find true happiness is to risk being completely cut open.", author: "Albert Schweitzer", source: "Out of My Life and Thought", year: "1933", tags: ["happiness", "vulnerability", "courage"], category: "Peace & Serenity" },
  { text: "There are two kinds of people: those who do the work and those who take the credit. Try to be in the first group; there is less competition there.", author: "Indira Gandhi", source: "Speech at the Indian National Congress", year: "1972", tags: ["work", "credit", "integrity"], category: "Success & Achievement" },
  { text: "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.", author: "Harriet Tubman", source: "Attributed in biographical accounts", year: "1890s", tags: ["dreams", "strength", "change"], category: "Hope & Dreams" },
  { text: "When we see men of worth, we should think of equaling them; when we see men of a contrary character, we should turn inwards and examine ourselves.", author: "Confucius", source: "The Analects", year: "500 BC", tags: ["self-reflection", "growth", "comparison"], category: "Change & Growth" },
  { text: "I cannot live without books.", author: "Thomas Jefferson", source: "Letter to John Adams", year: "1815", tags: ["books", "learning", "passion"], category: "Wisdom & Knowledge" },
  { text: "Honesty is the first chapter in the book of wisdom.", author: "Thomas Jefferson", source: "Letter to Nathaniel Macon", year: "1815", tags: ["honesty", "wisdom", "integrity"], category: "Character & Virtue" },
  { text: "The future depends on what you do today.", author: "Mahatma Gandhi", source: "Harijan", year: "1932", tags: ["action", "future", "responsibility"], category: "Action & Purpose" },
  { text: "Strength does not come from physical capacity. It comes from an indomitable will.", author: "Mahatma Gandhi", source: "Young India", year: "1924", tags: ["strength", "will", "perseverance"], category: "Courage & Strength" },
  { text: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.", author: "Steve Jobs", source: "Stanford Commencement Address", year: "2005", tags: ["work", "satisfaction", "excellence"], category: "Success & Achievement" },
  { text: "Doing the best at this moment puts you in the best place for the next moment.", author: "Oprah Winfrey", source: "Interview with 'O Magazine'", year: "2006", tags: ["present", "excellence", "growth"], category: "Life & Living" },
  { text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", author: "Buddha", source: "Dhammapada", year: "400 BC", tags: ["mindfulness", "present", "wisdom"], category: "Peace & Serenity" },
  { text: "Three things cannot be long hidden: the sun, the moon, and the truth.", author: "Buddha", source: "Dhammapada", year: "400 BC", tags: ["truth", "wisdom", "nature"], category: "Wisdom & Knowledge" },
  { text: "You yourself, as much as anybody in the entire universe, deserve your love and affection.", author: "Buddha", source: "Dhammapada", year: "400 BC", tags: ["self-love", "compassion", "worthiness"], category: "Love & Compassion" },
  { text: "The first and greatest victory is to conquer yourself.", author: "Plato", source: "The Laws", year: "350 BC", tags: ["self-control", "discipline", "wisdom"], category: "Character & Virtue" },
  { text: "Opinion is the medium between knowledge and ignorance.", author: "Plato", source: "The Republic", year: "380 BC", tags: ["knowledge", "opinion", "wisdom"], category: "Wisdom & Knowledge" },
  { text: "Courage is knowing what not to fear.", author: "Plato", source: "The Republic", year: "380 BC", tags: ["courage", "fear", "wisdom"], category: "Courage & Strength" },
  { text: "It's not what happens to you, but how you react to it that matters.", author: "Epictetus", source: "Discourses", year: "108 AD", tags: ["stoicism", "reaction", "mindset"], category: "Change & Growth" },
  { text: "First say to yourself what you would be; and then do what you have to do.", author: "Epictetus", source: "Discourses", year: "108 AD", tags: ["purpose", "discipline", "identity"], category: "Character & Virtue" },
  { text: "No man is free who is not master of himself.", author: "Epictetus", source: "Discourses", year: "108 AD", tags: ["freedom", "self-control", "discipline"], category: "Character & Virtue" },
  { text: "Know yourself and you will win all battles.", author: "Sun Tzu", source: "The Art of War", year: "500 BC", tags: ["strategy", "self-awareness", "courage"], category: "Wisdom & Knowledge" },
  { text: "In the midst of chaos, there is also opportunity.", author: "Sun Tzu", source: "The Art of War", year: "500 BC", tags: ["opportunity", "chaos", "wisdom"], category: "Wisdom & Knowledge" },
  { text: "Supreme excellence consists of breaking the enemy's resistance without fighting.", author: "Sun Tzu", source: "The Art of War", year: "500 BC", tags: ["strategy", "peace", "wisdom"], category: "Peace & Serenity" },
  { text: "Nature does not hurry, yet everything is accomplished.", author: "Lao Tzu", source: "Tao Te Ching", year: "600 BC", tags: ["patience", "nature", "perseverance"], category: "Peace & Serenity" },
  { text: "Mastering others is strength. Mastering yourself is true power.", author: "Lao Tzu", source: "Tao Te Ching", year: "600 BC", tags: ["self-control", "power", "wisdom"], category: "Character & Virtue" },
  { text: "To see what is right and not do it is the want of courage.", author: "Confucius", source: "The Analects", year: "500 BC", tags: ["courage", "justice", "action"], category: "Courage & Strength" },
  { text: "Silence is a true friend who never betrays.", author: "Confucius", source: "The Analects", year: "500 BC", tags: ["silence", "wisdom", "loyalty"], category: "Peace & Serenity" },
  { text: "Wheresoever you go, go with all your heart.", author: "Confucius", source: "The Analects", year: "500 BC", tags: ["passion", "commitment", "heart"], category: "Success & Achievement" },
  { text: "Happiness depends upon ourselves.", author: "Aristotle", source: "Nicomachean Ethics", year: "340 BC", tags: ["happiness", "self-reliance", "philosophy"], category: "Peace & Serenity" },
  { text: "The whole is greater than the sum of its parts.", author: "Aristotle", source: "Metaphysics", year: "340 BC", tags: ["unity", "teamwork", "wisdom"], category: "Wisdom & Knowledge" },
  { text: "Patience is bitter, but its fruit is sweet.", author: "Aristotle", source: "Politics", year: "335 BC", tags: ["patience", "perseverance", "reward"], category: "Peace & Serenity" },
  { text: "Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.", author: "Rumi", source: "Mathnawi", year: "1250", tags: ["wisdom", "change", "self-improvement"], category: "Change & Growth" },
  { text: "Raise your words, not voice. It is rain that grows flowers, not thunder.", author: "Rumi", source: "Mathnawi", year: "1250", tags: ["communication", "gentleness", "wisdom"], category: "Wisdom & Knowledge" },
  { text: "What you seek is seeking you.", author: "Rumi", source: "Mathnawi", year: "1250", tags: ["seeking", "purpose", "destiny"], category: "Hope & Dreams" },
  { text: "To see a World in a Grain of Sand and a Heaven in a Wild Flower.", author: "William Blake", source: "Auguries of Innocence", year: "1803", tags: ["wonder", "nature", "wisdom"], category: "Wisdom & Knowledge" },
  { text: "If the doors of perception were cleansed, everything would appear to man as it is — infinite.", author: "William Blake", source: "The Marriage of Heaven and Hell", year: "1793", tags: ["perception", "infinity", "wisdom"], category: "Hope & Dreams" },
  { text: "Go confidently in the direction of your dreams! Live the life you've imagined.", author: "Henry David Thoreau", source: "Walden", year: "1854", tags: ["dreams", "confidence", "courage"], category: "Hope & Dreams" },
  { text: "I learned this, at least, by my experiment: that if one advances confidently in the direction of his dreams, he will meet with a success unexpected in common hours.", author: "Henry David Thoreau", source: "Walden", year: "1854", tags: ["dreams", "success", "confidence"], category: "Success & Achievement" },
  { text: "It's not what you look at that matters, it's what you see.", author: "Henry David Thoreau", source: "Walden", year: "1854", tags: ["perception", "vision", "wisdom"], category: "Wisdom & Knowledge" },
  { text: "One cannot think well, love well, sleep well, if one has not dined well.", author: "Virginia Woolf", source: "A Room of One's Own", year: "1929", tags: ["life", "wellbeing", "wisdom"], category: "Life & Living" },
  { text: "You cannot find peace by avoiding life.", author: "Virginia Woolf", source: "The Hours (adapted)", year: "1925", tags: ["peace", "life", "courage"], category: "Peace & Serenity" },
  { text: "Hope is the thing with feathers that perches in the soul and sings the tune without the words and never stops at all.", author: "Emily Dickinson", source: "Poem: Hope is the thing with feathers", year: "1861", tags: ["hope", "soul", "poetry"], category: "Hope & Dreams" },
  { text: "Forever is composed of nows.", author: "Emily Dickinson", source: "Letter to her cousins", year: "1862", tags: ["present", "time", "wisdom"], category: "Life & Living" },
  { text: "Resentment is like drinking poison and then hoping it will kill your enemies.", author: "Nelson Mandela", source: "Attributed in biographical accounts", year: "1990s", tags: ["forgiveness", "letting go", "wisdom"], category: "Love & Compassion" },
  { text: "A winner is a dreamer who never gives up.", author: "Nelson Mandela", source: "Speech at Robben Island", year: "1990", tags: ["dreams", "perseverance", "success"], category: "Hope & Dreams" },
  { text: "Give me six hours to chop down a tree and I will spend the first four sharpening the axe.", author: "Abraham Lincoln", source: "Attributed in speeches", year: "1850s", tags: ["preparation", "planning", "wisdom"], category: "Wisdom & Knowledge" },
  { text: "The best way to predict the future is to create it.", author: "Abraham Lincoln", source: "Attributed in biographical accounts", year: "1860s", tags: ["future", "action", "creation"], category: "Hope & Dreams" },
  { text: "It is hard to fail, but it is worse never to have tried to succeed.", author: "Theodore Roosevelt", source: "Speech at Hamilton Club, Chicago", year: "1899", tags: ["failure", "courage", "achievement"], category: "Courage & Strength" },
  { text: "Persistence and determination alone are omnipotent.", author: "George Washington", source: "Letter to the Presidents of Congress", year: "1781", tags: ["persistence", "determination", "courage"], category: "Courage & Strength" },
  { text: "Associate yourself with men of good quality, if you esteem your own reputation, for 'tis better to be alone than in bad company.", author: "George Washington", source: "Rules of Civility", year: "1744", tags: ["friendship", "character", "wisdom"], category: "Love & Compassion" },
  { text: "Those who dare to fail miserably can achieve greatly.", author: "John F. Kennedy", source: "Inaugural Address", year: "1961", tags: ["courage", "failure", "achievement"], category: "Courage & Strength" },
  { text: "Change is the law of life. And those who look only to the past or present are certain to miss the future.", author: "John F. Kennedy", source: "Speech at Columbia Stadium, Cork", year: "1963", tags: ["change", "future", "progress"], category: "Change & Growth" },
  { text: "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things.", author: "Ronald Reagan", source: "Speech", year: "1980s", tags: ["leadership", "inspiration", "people"], category: "Inspiration & Creativity" },
  { text: "If you want something said, ask a man; if you want something done, ask a woman.", author: "Margaret Thatcher", source: "Speech at the Conservative Party Conference", year: "1965", tags: ["action", "leadership", "women"], category: "Action & Purpose" },
  { text: "Being powerful is like being a lady. If you have to tell people you are, you aren't.", author: "Margaret Thatcher", source: "Interview with The Times", year: "1982", tags: ["power", "elegance", "humility"], category: "Character & Virtue" },
  { text: "Keep your face to the sunshine and you shall never see the shadows.", author: "Helen Keller", source: "The World I Live In", year: "1908", tags: ["optimism", "sunshine", "hope"], category: "Hope & Dreams" },
  { text: "What we achieve inwardly will change outer reality.", author: "Helen Keller", source: "Light in My Darkness", year: "1927", tags: ["inner change", "transformation", "mindset"], category: "Change & Growth" },
  { text: "It is better to light a candle than curse the darkness.", author: "Eleanor Roosevelt", source: "Address at the United Nations", year: "1950s", tags: ["action", "hope", "positivity"], category: "Action & Purpose" },
  { text: "Nothing can dim the light which shines from within.", author: "Maya Angelou", source: "Letter to My Daughter", year: "2008", tags: ["inner light", "confidence", "self-worth"], category: "Success & Achievement" },
  { text: "My mission in life is not merely to survive, but to thrive.", author: "Maya Angelou", source: "Interview on The Oprah Winfrey Show", year: "1993", tags: ["thriving", "purpose", "life"], category: "Action & Purpose" },
  { text: "Kites rise highest against the wind, not with it.", author: "Winston Churchill", source: "Speech during World War II", year: "1940s", tags: ["adversity", "courage", "strength"], category: "Courage & Strength" },
  { text: "A fanatic is one who can't change his mind and won't change the subject.", author: "Winston Churchill", source: "Speech in the House of Commons", year: "1947", tags: ["open-mindedness", "wisdom", "humor"], category: "Wisdom & Knowledge" },
  { text: "We make a living by what we get. We make a life by what we give.", author: "Winston Churchill", source: "Speech", year: "1943", tags: ["giving", "purpose", "generosity"], category: "Action & Purpose" },
  { text: "You must not lose faith in humanity. Humanity is an ocean; if a few drops of the ocean are dirty, the ocean does not become dirty.", author: "Mahatma Gandhi", source: "Young India", year: "1920", tags: ["humanity", "faith", "optimism"], category: "Hope & Dreams" },
  { text: "An eye for an eye only ends up making the whole world blind.", author: "Mahatma Gandhi", source: "Speech", year: "1930s", tags: ["peace", "forgiveness", "wisdom"], category: "Peace & Serenity" },
  { text: "A person who never made a mistake never tried anything new.", author: "Albert Einstein", source: "Attributed in interviews", year: "1930s", tags: ["mistakes", "innovation", "courage"], category: "Courage & Strength" },
  { text: "Peace cannot be kept by force; it can only be achieved by understanding.", author: "Albert Einstein", source: "Note on Pacifism", year: "1931", tags: ["peace", "understanding", "wisdom"], category: "Wisdom & Knowledge" },
  { text: "We cannot solve our problems with the same thinking we used when we created them.", author: "Albert Einstein", source: "Attributed in lectures", year: "1930s", tags: ["thinking", "innovation", "problems"], category: "Wisdom & Knowledge" },
  { text: "Wonder is the beginning of wisdom.", author: "Socrates", source: "Plato's Theaetetus", year: "369 BC", tags: ["wonder", "wisdom", "curiosity"], category: "Wisdom & Knowledge" },
  { text: "Be of good cheer about death, and know this of truth, that no evil can happen to a good man, either in life or after death.", author: "Socrates", source: "Plato's Apology", year: "399 BC", tags: ["death", "courage", "goodness"], category: "Life & Living" },
  { text: "Waste no more time arguing about what a good man should be. Be one.", author: "Marcus Aurelius", source: "Meditations", year: "180 AD", tags: ["action", "character", "goodness"], category: "Action & Purpose" },
  { text: "If it is not right, do not do it; if it is not true, do not say it.", author: "Marcus Aurelius", source: "Meditations", year: "180 AD", tags: ["integrity", "truth", "discipline"], category: "Character & Virtue" },
  { text: "The impediment to action advances action. What stands in the way becomes the way.", author: "Marcus Aurelius", source: "Meditations", year: "180 AD", tags: ["obstacles", "stoicism", "progress"], category: "Courage & Strength" },
  { text: "It is not that we have a short time to live, but that we waste a lot of it.", author: "Seneca", source: "On the Shortness of Life", year: "49 AD", tags: ["time", "life", "wisdom"], category: "Life & Living" },
  { text: "Difficulties strengthen the mind, as labor does the body.", author: "Seneca", source: "Moral Letters to Lucilius", year: "65 AD", tags: ["hardship", "strength", "growth"], category: "Courage & Strength" },
  { text: "I can resist everything except temptation.", author: "Oscar Wilde", source: "Lady Windermere's Fan", year: "1892", tags: ["humor", "temptation", "wit"], category: "Life & Living" },
  { text: "The truth is rarely pure and never simple.", author: "Oscar Wilde", source: "The Importance of Being Earnest", year: "1895", tags: ["truth", "complexity", "wisdom"], category: "Wisdom & Knowledge" },
  { text: "A lie can travel half way around the world while the truth is putting on its shoes.", author: "Mark Twain", source: "Attributed in Mark Twain's Notebook", year: "1900s", tags: ["truth", "lies", "wisdom"], category: "Wisdom & Knowledge" },
  { text: "Good friends, good books, and a sleepy conscience: this is the ideal life.", author: "Mark Twain", source: "Notebook", year: "1890s", tags: ["friendship", "books", "life"], category: "Love & Compassion" },
  { text: "The man who does not read has no advantage over the man who cannot read.", author: "Mark Twain", source: "Attributed in speeches", year: "1900s", tags: ["reading", "education", "wisdom"], category: "Wisdom & Knowledge" },
  { text: "Life isn't about finding yourself. Life is about creating yourself.", author: "George Bernard Shaw", source: "Man and Superman", year: "1903", tags: ["life", "creation", "purpose"], category: "Life & Living" },
  { text: "The single biggest problem in communication is the illusion that it has taken place.", author: "George Bernard Shaw", source: "Attributed in writings", year: "1930s", tags: ["communication", "understanding", "wisdom"], category: "Wisdom & Knowledge" },
  { text: "Progress is impossible without change, and those who cannot change their minds cannot change anything.", author: "George Bernard Shaw", source: "Intelligent Woman's Guide to Socialism", year: "1928", tags: ["change", "progress", "open-mindedness"], category: "Change & Growth" },
  { text: "Those who dream by day are cognizant of many things which escape those who dream only by night.", author: "Edgar Allan Poe", source: "Eleonora", year: "1841", tags: ["dreams", "imagination", "wisdom"], category: "Hope & Dreams" },
  { text: "All that we see or seem is but a dream within a dream.", author: "Edgar Allan Poe", source: "A Dream Within a Dream", year: "1849", tags: ["reality", "dreams", "philosophy"], category: "Hope & Dreams" },
  { text: "The soul is healed by being with children.", author: "Fyodor Dostoevsky", source: "The Brothers Karamazov", year: "1880", tags: ["children", "healing", "soul"], category: "Love & Compassion" },
  { text: "To go wrong in one's own way is better than to go right in someone else's.", author: "Fyodor Dostoevsky", source: "Crime and Punishment", year: "1866", tags: ["individuality", "authenticity", "freedom"], category: "Character & Virtue" },
  { text: "Everyone thinks of changing the world, but no one thinks of changing himself.", author: "Leo Tolstoy", source: "A Calendar of Wisdom", year: "1910", tags: ["change", "self-improvement", "wisdom"], category: "Change & Growth" },
  { text: "The two most powerful warriors are patience and time.", author: "Leo Tolstoy", source: "War and Peace", year: "1869", tags: ["patience", "time", "strength"], category: "Peace & Serenity" },
  { text: "All, everything that I understand, I understand only because I love.", author: "Leo Tolstoy", source: "War and Peace", year: "1869", tags: ["love", "understanding", "wisdom"], category: "Wisdom & Knowledge" },
  { text: "Have a heart that never hardens, and a temper that never tires, and a touch that never hurts.", author: "Charles Dickens", source: "Our Mutual Friend", year: "1865", tags: ["kindness", "compassion", "character"], category: "Love & Compassion" },
  { text: "It was the best of times, it was the worst of times.", author: "Charles Dickens", source: "A Tale of Two Cities", year: "1859", tags: ["duality", "time", "perspective"], category: "Life & Living" },
  { text: "What you do makes a difference, and you have to decide what kind of difference you want to make.", author: "Jane Goodall", source: "Interview", year: "1990s", tags: ["impact", "choice", "purpose"], category: "Action & Purpose" },
  { text: "The greatest danger of our future is apathy.", author: "Jane Goodall", source: "Speech at the United Nations", year: "2000", tags: ["apathy", "future", "action"], category: "Hope & Dreams" },
  { text: "Somewhere, something incredible is waiting to be known.", author: "Carl Sagan", source: "Cosmos", year: "1980", tags: ["curiosity", "knowledge", "discovery"], category: "Wisdom & Knowledge" },
  { text: "We are a way for the cosmos to know itself.", author: "Carl Sagan", source: "Cosmos", year: "1980", tags: ["cosmos", "consciousness", "wonder"], category: "Wisdom & Knowledge" },
  { text: "The good thing about science is that it's true whether or not you believe in it.", author: "Neil deGrasse Tyson", source: "Interview", year: "2012", tags: ["science", "truth", "knowledge"], category: "Wisdom & Knowledge" },
  { text: "I was taught that the way of progress was neither swift nor easy.", author: "Marie Curie", source: "Laboratory Notebook", year: "1910", tags: ["progress", "perseverance", "patience"], category: "Courage & Strength" },
  { text: "If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.", author: "Nikola Tesla", source: "Attributed in interviews", year: "1890s", tags: ["science", "energy", "wisdom"], category: "Wisdom & Knowledge" },
  { text: "The present is theirs; the future, for which I really worked, is mine.", author: "Nikola Tesla", source: "My Inventions", year: "1919", tags: ["future", "perseverance", "vision"], category: "Hope & Dreams" },
  { text: "You cannot teach a man anything; you can only help him find it within himself.", author: "Galileo Galilei", source: "Attributed in writings", year: "1632", tags: ["teaching", "self-discovery", "wisdom"], category: "Wisdom & Knowledge" },
  { text: "All truths are easy to understand once they are discovered; the point is to discover them.", author: "Galileo Galilei", source: "Dialogue Concerning the Two Chief World Systems", year: "1632", tags: ["truth", "discovery", "knowledge"], category: "Wisdom & Knowledge" },
  { text: "If I have seen further than others, it is by standing upon the shoulders of giants.", author: "Isaac Newton", source: "Letter to Robert Hooke", year: "1675", tags: ["humility", "knowledge", "progress"], category: "Wisdom & Knowledge" },
  { text: "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.", author: "Charles Darwin", source: "On the Origin of Species (adapted)", year: "1859", tags: ["adaptation", "change", "survival"], category: "Change & Growth" },
  { text: "Impossible is a word to be found only in the dictionary of fools.", author: "Napoleon Bonaparte", source: "Attributed in conversations", year: "1800s", tags: ["possibility", "courage", "determination"], category: "Courage & Strength" },
  { text: "Victory belongs to the most persevering.", author: "Napoleon Bonaparte", source: "Attributed in military writings", year: "1805", tags: ["perseverance", "victory", "determination"], category: "Courage & Strength" },
  { text: "I am not afraid of an army of lions led by a sheep; I am afraid of an army of sheep led by a lion.", author: "Alexander the Great", source: "Attributed in historical accounts", year: "326 BC", tags: ["leadership", "courage", "strategy"], category: "Courage & Strength" },
  { text: "Experience is the teacher of all things.", author: "Julius Caesar", source: "Commentaries on the Gallic War", year: "50 BC", tags: ["experience", "learning", "wisdom"], category: "Wisdom & Knowledge" },
  { text: "I will not be triumphed over.", author: "Cleopatra", source: "Attributed in historical accounts", year: "30 BC", tags: ["determination", "dignity", "courage"], category: "Courage & Strength" },
  { text: "Our lives begin to end the day we become silent about things that matter.", author: "Martin Luther King Jr.", source: "Sermon", year: "1965", tags: ["voice", "courage", "justice"], category: "Character & Virtue" },
  { text: "I tell my story not because it is unique, but because it is the story of many girls.", author: "Malala Yousafzai", source: "I Am Malala", year: "2013", tags: ["voice", "courage", "solidarity"], category: "Character & Virtue" },
  { text: "Let us remember: One book, one pen, one child, and one teacher can change the world.", author: "Malala Yousafzai", source: "Speech at the United Nations", year: "2014", tags: ["education", "change", "hope"], category: "Wisdom & Knowledge" },
  { text: "Look up at the stars and not down at your feet.", author: "Stephen Hawking", source: "Interview", year: "2016", tags: ["wonder", "stars", "curiosity"], category: "Wisdom & Knowledge" },
  { text: "Feet, what do I need you for when I have wings to fly?", author: "Frida Kahlo", source: "Diary of Frida Kahlo", year: "1950s", tags: ["freedom", "dreams", "transcendence"], category: "Peace & Serenity" },
  { text: "Courage is grace under pressure.", author: "Ernest Hemingway", source: "Attributed in interviews", year: "1929", tags: ["courage", "grace", "pressure"], category: "Courage & Strength" },
  { text: "The world breaks everyone, and afterward, some are strong at the broken places.", author: "Ernest Hemingway", source: "A Farewell to Arms", year: "1929", tags: ["resilience", "strength", "hardship"], category: "Courage & Strength" },
  { text: "It does not do to dwell on dreams and forget to live.", author: "J.K. Rowling", source: "Harry Potter and the Sorcerer's Stone", year: "1997", tags: ["dreams", "life", "balance"], category: "Life & Living" },
  { text: "We do not need magic to transform our world. We carry all the power we need inside ourselves already.", author: "J.K. Rowling", source: "Harvard Commencement Speech", year: "2008", tags: ["inner strength", "transformation", "empowerment"], category: "Change & Growth" },
  { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis", source: "The Problem of Pain", year: "1940", tags: ["hardship", "destiny", "purpose"], category: "Courage & Strength" },
  { text: "Humility is not thinking less of yourself, but thinking of yourself less.", author: "C.S. Lewis", source: "Mere Christianity", year: "1952", tags: ["humility", "selflessness", "wisdom"], category: "Wisdom & Knowledge" },
  { text: "Everything will be okay in the end. If it's not okay, it's not the end.", author: "John Lennon", source: "Attributed in interviews", year: "1970s", tags: ["hope", "perseverance", "optimism"], category: "Hope & Dreams" },
  { text: "Open your eyes and look within. Are you satisfied with the life you're living?", author: "Bob Marley", source: "Interview", year: "1970s", tags: ["self-reflection", "purpose", "life"], category: "Action & Purpose" },
  { text: "You never know how strong you are until being strong is the only choice you have.", author: "Bob Marley", source: "Attributed in songs", year: "1973", tags: ["strength", "adversity", "courage"], category: "Courage & Strength" },
  { text: "Impossible is nothing.", author: "Muhammad Ali", source: "Attributed in interviews", year: "1970s", tags: ["courage", "possibility", "determination"], category: "Courage & Strength" },
  { text: "I am the greatest, I said that even before I knew I was.", author: "Muhammad Ali", source: "Autobiography", year: "1975", tags: ["confidence", "self-belief", "greatness"], category: "Success & Achievement" },
  { text: "I've failed over and over and over again in my life. And that is why I succeed.", author: "Michael Jordan", source: "Nike Commercial", year: "1988", tags: ["failure", "success", "perseverance"], category: "Courage & Strength" },
  { text: "Talent wins games, but teamwork and intelligence win championships.", author: "Michael Jordan", source: "Interview", year: "1990s", tags: ["teamwork", "talent", "success"], category: "Success & Achievement" },
  { text: "I've grown most not from victories, but setbacks. If winning is God's reward, then losing is how He teaches us.", author: "Serena Williams", source: "Interview with Vogue", year: "2015", tags: ["setbacks", "growth", "resilience"], category: "Courage & Strength" },
  { text: "When you do something best in life, you don't really want to give that up — and for me it's tennis.", author: "Roger Federer", source: "Interview", year: "2010s", tags: ["passion", "dedication", "purpose"], category: "Success & Achievement" },
  { text: "Knowing is not enough, we must apply. Willing is not enough, we must do.", author: "Bruce Lee", source: "Tao of Jeet Kune Do", year: "1975", tags: ["action", "application", "discipline"], category: "Action & Purpose" },
  { text: "If you always put limit on everything you do, physical or anything else, it will spread into your work and into your life.", author: "Bruce Lee", source: "Interview", year: "1971", tags: ["limits", "potential", "freedom"], category: "Change & Growth" },
  { text: "I never wanted to be the next anyone. I was always the first myself.", author: "Jackie Chan", source: "I Am Jackie Chan", year: "1998", tags: ["individuality", "authenticity", "courage"], category: "Character & Virtue" },
  { text: "He who learns but does not think, is lost. He who thinks but does not learn is in great danger.", author: "Confucius", source: "The Analects", year: "500 BC", tags: ["learning", "thinking", "wisdom"], category: "Wisdom & Knowledge" },
  { text: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.", author: "Lao Tzu", source: "Tao Te Ching", year: "600 BC", tags: ["love", "strength", "courage"], category: "Courage & Strength" },
  { text: "An idea that is developed and put into action is more important than an idea that exists only as an idea.", author: "Buddha", source: "Dhammapada", year: "400 BC", tags: ["action", "ideas", "wisdom"], category: "Action & Purpose" },
  { text: "Music gives a soul to the universe, wings to the mind, flight to the imagination and life to everything.", author: "Plato", source: "The Republic", year: "380 BC", tags: ["music", "imagination", "soul"], category: "Inspiration & Creativity" },
  { text: "This above all: to thine own self be true.", author: "William Shakespeare", source: "Hamlet", year: "1603", tags: ["authenticity", "self", "integrity"], category: "Character & Virtue" },
  { text: "All the world's a stage, and all the men and women merely players.", author: "William Shakespeare", source: "As You Like It", year: "1599", tags: ["life", "theatre", "wisdom"], category: "Life & Living" },
  { text: "The course of true love never did run smooth.", author: "William Shakespeare", source: "A Midsummer Night's Dream", year: "1595", tags: ["love", "challenges", "wisdom"], category: "Love & Compassion" },
  { text: "Whatever our souls are made of, his and mine are the same.", author: "Emily Brontë", source: "Wuthering Heights", year: "1847", tags: ["love", "soul", "connection"], category: "Love & Compassion" },
  { text: "I am no bird; and no net ensnares me.", author: "Charlotte Brontë", source: "Jane Eyre", year: "1847", tags: ["freedom", "independence", "courage"], category: "Peace & Serenity" },
  { text: "I am not afraid of storms, for I am learning how to sail my ship.", author: "Louisa May Alcott", source: "Little Women", year: "1868", tags: ["courage", "growth", "resilience"], category: "Courage & Strength" },
  { text: "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.", author: "Helen Keller", source: "The Story of My Life", year: "1903", tags: ["optimism", "faith", "achievement"], category: "Hope & Dreams" },
  { text: "Peace begins with a smile.", author: "Mother Teresa", source: "A Gift for God", year: "1975", tags: ["peace", "smile", "kindness"], category: "Love & Compassion" },
  { text: "Do not wait for some future time to do great things. Be great in the little things you do today.", author: "Mother Teresa", source: "A Gift for God", year: "1975", tags: ["greatness", "present", "action"], category: "Success & Achievement" },
  { text: "Sleep is the best meditation.", author: "Dalai Lama", source: "The Art of Happiness", year: "1998", tags: ["rest", "meditation", "wisdom"], category: "Wisdom & Knowledge" },
  { text: "Love and compassion are necessities, not luxuries. Without them, humanity cannot survive.", author: "Dalai Lama", source: "The Art of Happiness", year: "1998", tags: ["love", "compassion", "humanity"], category: "Love & Compassion" },
  { text: "Lead from the back — and let others believe they are in front.", author: "Nelson Mandela", source: "Attributed in biographical accounts", year: "1994", tags: ["leadership", "humility", "strategy"], category: "Wisdom & Knowledge" },
  { text: "Focusing your life solely on making a buck shows a certain poverty of ambition. It asks too low an expectation from yourself. Go for something higher.", author: "Barack Obama", source: "Speech", year: "2005", tags: ["ambition", "purpose", "meaning"], category: "Action & Purpose" },
  { text: "Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other innovations.", author: "Steve Jobs", source: "Interview", year: "2004", tags: ["mistakes", "innovation", "learning"], category: "Courage & Strength" },
  { text: "Have the courage to follow your heart and intuition. They somehow already know what you truly want to become.", author: "Steve Jobs", source: "Stanford Commencement Address", year: "2005", tags: ["courage", "intuition", "purpose"], category: "Courage & Strength" },
  { text: "I think it is possible for ordinary people to choose to be extraordinary.", author: "Elon Musk", source: "Interview", year: "2018", tags: ["extraordinary", "choice", "courage"], category: "Action & Purpose" },
  { text: "Risk comes from not knowing what you're doing.", author: "Warren Buffett", source: "Interview with CNBC", year: "2008", tags: ["risk", "knowledge", "wisdom"], category: "Wisdom & Knowledge" },
  { text: "The most important investment you can make is in yourself.", author: "Warren Buffett", source: "Berkshire Hathaway Meeting", year: "2014", tags: ["self-improvement", "investment", "growth"], category: "Change & Growth" },
  { text: "We can't be successful playing it safe all the time. We need to take calculated risks.", author: "Jeff Bezos", source: "Interview with Wired", year: "2010s", tags: ["risk", "innovation", "courage"], category: "Courage & Strength" },
  { text: "We all need people who will give us feedback. That's how we improve.", author: "Bill Gates", source: "Interview", year: "2010s", tags: ["feedback", "improvement", "growth"], category: "Change & Growth" },
  { text: "Success is a lousy teacher. It seduces smart people into thinking they can't lose.", author: "Bill Gates", source: "The Road Ahead", year: "1995", tags: ["success", "learning", "humility"], category: "Wisdom & Knowledge" },
  { text: "Disneyland will never be completed. It will continue to grow as long as there is imagination left in the world.", author: "Walt Disney", source: "Opening Day Speech", year: "1955", tags: ["imagination", "growth", "creativity"], category: "Inspiration & Creativity" },
  { text: "It's kind of fun to do the impossible.", author: "Walt Disney", source: "Interview", year: "1950s", tags: ["impossible", "fun", "courage"], category: "Courage & Strength" },
  { text: "Nothing is impossible. The word itself says 'I'm possible!'", author: "Audrey Hepburn", source: "Attributed in interviews", year: "1980s", tags: ["possibility", "optimism", "wordplay"], category: "Hope & Dreams" },
  { text: "The best thing to hold onto in life is each other.", author: "Audrey Hepburn", source: "Interview", year: "1960s", tags: ["love", "connection", "life"], category: "Love & Compassion" },
  { text: "For beautiful eyes, look for the good in others; for beautiful lips, speak only words of kindness.", author: "Audrey Hepburn", source: "Attributed", year: "1960s", tags: ["kindness", "beauty", "compassion"], category: "Love & Compassion" },
  { text: "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.", author: "Marilyn Monroe", source: "Attributed in interviews", year: "1950s", tags: ["imperfection", "beauty", "genius"], category: "Life & Living" },
  { text: "Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone might do the same for you.", author: "Princess Diana", source: "Speech", year: "1990s", tags: ["kindness", "generosity", "compassion"], category: "Love & Compassion" },
  { text: "Only do what your heart tells you is right.", author: "Princess Diana", source: "Interview", year: "1995", tags: ["heart", "integrity", "wisdom"], category: "Love & Compassion" },
  { text: "Happiness is when what you think, what you say, and what you do are in harmony.", author: "Mahatma Gandhi", source: "Collected Works", year: "1930s", tags: ["happiness", "harmony", "integrity"], category: "Peace & Serenity" },
  { text: "The measure of intelligence is the ability to change.", author: "Albert Einstein", source: "Attributed in lectures", year: "1930s", tags: ["intelligence", "change", "adaptability"], category: "Change & Growth" },
  { text: "Logic will get you from A to B. Imagination will take you everywhere.", author: "Albert Einstein", source: "Attributed in interviews", year: "1929", tags: ["imagination", "logic", "creativity"], category: "Inspiration & Creativity" },
  { text: "If you don't like something, change it. If you can't change it, change your attitude.", author: "Maya Angelou", source: "Wouldn't Take Nothing for My Journey Now", year: "1993", tags: ["change", "attitude", "empowerment"], category: "Change & Growth" },
  { text: "It only takes one person to make changes, it doesn't need hundreds, thousands, or millions.", author: "Mark Twain", source: "Attributed in speeches", year: "1900s", tags: ["change", "individual", "impact"], category: "Change & Growth" },
  { text: "Attitude is a little thing that makes a big difference.", author: "Winston Churchill", source: "Attributed in speeches", year: "1942", tags: ["attitude", "impact", "mindset"], category: "Change & Growth" },
  { text: "The time to repair the roof is when the sun is shining.", author: "John F. Kennedy", source: "Message to Congress", year: "1962", tags: ["preparation", "timing", "wisdom"], category: "Wisdom & Knowledge" },
  { text: "Life's most persistent and urgent question is, 'What are you doing for others?'", author: "Martin Luther King Jr.", source: "Sermon", year: "1957", tags: ["service", "purpose", "compassion"], category: "Action & Purpose" },
  { text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", author: "Albert Schweitzer", source: "Attributed in writings", year: "1950s", tags: ["happiness", "success", "passion"], category: "Success & Achievement" },
  { text: "Look at how a single candle can both defy and define the darkness.", author: "Anne Frank", source: "The Diary of a Young Girl", year: "1947", tags: ["hope", "light", "courage"], category: "Hope & Dreams" },
  { text: "Without forgiveness, there is no future.", author: "Desmond Tutu", source: "No Future Without Forgiveness", year: "1999", tags: ["forgiveness", "future", "healing"], category: "Love & Compassion" },
  { text: "We are made for goodness. We are made for love. We are made for friendliness. We are made for peace.", author: "Desmond Tutu", source: "God Has a Dream", year: "2004", tags: ["goodness", "love", "peace"], category: "Love & Compassion" },
  { text: "Remember that not getting what you want is sometimes a wonderful stroke of luck.", author: "Dalai Lama", source: "The Art of Happiness", year: "1998", tags: ["perspective", "luck", "wisdom"], category: "Wisdom & Knowledge" },
  { text: "Real knowledge is to know the extent of one's ignorance.", author: "Confucius", source: "The Analects", year: "500 BC", tags: ["knowledge", "humility", "wisdom"], category: "Wisdom & Knowledge" },
  { text: "The energy of the mind is the essence of life.", author: "Aristotle", source: "Metaphysics", year: "340 BC", tags: ["mind", "energy", "life"], category: "Wisdom & Knowledge" },
  { text: "Don't grieve. Anything you lose comes round in another form.", author: "Rumi", source: "Mathnawi", year: "1250", tags: ["loss", "hope", "transformation"], category: "Hope & Dreams" },
  { text: "Let the beauty of what you love be what you do.", author: "Rumi", source: "Mathnawi", year: "1250", tags: ["passion", "beauty", "purpose"], category: "Success & Achievement" },
  { text: "Those who can make you believe absurdities can make you commit atrocities.", author: "Voltaire", source: "Questions sur les Miracles", year: "1763", tags: ["truth", "critical thinking", "wisdom"], category: "Wisdom & Knowledge" },
  { text: "To live is to suffer, to survive is to find some meaning in the suffering.", author: "Friedrich Nietzsche", source: "Notebooks", year: "1885", tags: ["suffering", "meaning", "resilience"], category: "Courage & Strength" },
  { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson", source: "Attributed in writings", year: "1841", tags: ["innovation", "courage", "leadership"], category: "Inspiration & Creativity" },
  { text: "Write it on your heart that every day is the best day in the year.", author: "Ralph Waldo Emerson", source: "Society and Solitude", year: "1870", tags: ["optimism", "present", "gratitude"], category: "Hope & Dreams" },
  { text: "The only rule is ever made is the law that likes and dislikes shall be consulted.", author: "Henry David Thoreau", source: "Walden", year: "1854", tags: ["freedom", "individuality", "wisdom"], category: "Peace & Serenity" },
  { text: "The strongest and sweetest songs yet remain to be sung.", author: "Walt Whitman", source: "Leaves of Grass", year: "1855", tags: ["hope", "future", "poetry"], category: "Hope & Dreams" },
  { text: "Elegance is refusal.", author: "Coco Chanel", source: "Attributed in interviews", year: "1960s", tags: ["elegance", "simplicity", "wisdom"], category: "Character & Virtue" },
  { text: "Empty your mind, be formless, shapeless — like water.", author: "Bruce Lee", source: "Interview with Pierre Berton", year: "1971", tags: ["mindset", "adaptability", "wisdom"], category: "Change & Growth" },
  { text: "The greatness of a nation can be judged by the way its animals are treated.", author: "Mahatma Gandhi", source: "Attributed in writings", year: "1920s", tags: ["compassion", "greatness", "humanity"], category: "Love & Compassion" },
  { text: "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.", author: "Marcus Aurelius", source: "Meditations", year: "180 AD", tags: ["happiness", "mindset", "stoicism"], category: "Peace & Serenity" },
  { text: "He who is brave is free.", author: "Seneca", source: "Moral Letters to Lucilius", year: "65 AD", tags: ["courage", "freedom", "wisdom"], category: "Courage & Strength" },
  { text: "True knowledge exists in knowing that you know nothing.", author: "Socrates", source: "Plato's Apology", year: "399 BC", tags: ["knowledge", "humility", "wisdom"], category: "Wisdom & Knowledge" },
  { text: "No one saves us but ourselves. No one can and no one may. We ourselves must walk the path.", author: "Buddha", source: "Dhammapada", year: "400 BC", tags: ["self-reliance", "path", "empowerment"], category: "Courage & Strength" },
  { text: "Better than a thousand hollow words, is one word that brings peace.", author: "Buddha", source: "Dhammapada", year: "400 BC", tags: ["peace", "meaning", "wisdom"], category: "Peace & Serenity" },
  { text: "I walk slowly, but I never walk backward.", author: "Abraham Lincoln", source: "Attributed in conversations", year: "1860s", tags: ["progress", "perseverance", "courage"], category: "Courage & Strength" },
  { text: "May your choices reflect your hopes, not your fears.", author: "Nelson Mandela", source: "Speech at the ANC rally", year: "1994", tags: ["hope", "courage", "choice"], category: "Hope & Dreams" },
  { text: "My favorite things in life don't cost any money. It's really clear that the most precious resource we all have is time.", author: "Steve Jobs", source: "Interview", year: "2004", tags: ["time", "simplicity", "value"], category: "Life & Living" },
  { text: "Think like a queen. A queen is not afraid to fail. Failure is another stepping stone to greatness.", author: "Oprah Winfrey", source: "What I Know for Sure", year: "2014", tags: ["failure", "courage", "greatness"], category: "Courage & Strength" },
  { text: "We must accept finite disappointment, but never lose infinite hope.", author: "Martin Luther King Jr.", source: "Sermon", year: "1965", tags: ["hope", "disappointment", "perseverance"], category: "Hope & Dreams" },
  { text: "Great minds discuss ideas; average minds discuss events; small minds discuss people.", author: "Eleanor Roosevelt", source: "This I Remember", year: "1949", tags: ["ideas", "thinking", "wisdom"], category: "Wisdom & Knowledge" },
  { text: "Never, never, never give up.", author: "Winston Churchill", source: "Speech at Harrow School", year: "1941", tags: ["perseverance", "courage", "determination"], category: "Courage & Strength" },
  { text: "When anger rises, think of the consequences.", author: "Confucius", source: "The Analects", year: "500 BC", tags: ["anger", "wisdom", "self-control"], category: "Wisdom & Knowledge" },
  { text: "Courage is resistance to fear, mastery of fear — not absence of fear.", author: "Mark Twain", source: "Pudd'nhead Wilson", year: "1894", tags: ["courage", "fear", "bravery"], category: "Courage & Strength" },
  { text: "With mirth and laughter let old wrinkles come.", author: "William Shakespeare", source: "The Merchant of Venice", year: "1596", tags: ["joy", "laughter", "aging"], category: "Life & Living" },
  { text: "Choose to be optimistic, it feels better.", author: "Dalai Lama", source: "Ethics for the New Millennium", year: "1999", tags: ["optimism", "choice", "happiness"], category: "Hope & Dreams" },
  { text: "In the end, only three things matter: how much you loved, how gently you lived, and how gracefully you let go of things not meant for you.", author: "Buddha", source: "Dhammapada (adapted)", year: "400 BC", tags: ["love", "letting go", "grace"], category: "Peace & Serenity" },
  { text: "You may not control all the events that happen to you, but you can decide not to be reduced by them.", author: "Maya Angelou", source: "Letter to My Daughter", year: "2008", tags: ["resilience", "empowerment", "courage"], category: "Courage & Strength" },
  { text: "Courageous people do not fear forgiving, for the sake of peace.", author: "Nelson Mandela", source: "Long Walk to Freedom", year: "1994", tags: ["forgiveness", "peace", "courage"], category: "Love & Compassion" },
  { text: "Kind words can be short and easy to speak, but their echoes are truly endless.", author: "Mother Teresa", source: "A Gift for God", year: "1975", tags: ["kindness", "words", "impact"], category: "Love & Compassion" },
  { text: "The world as we have created it is a process of our thinking. It cannot be changed without our thinking.", author: "Albert Einstein", source: "Attributed in writings", year: "1930s", tags: ["thinking", "change", "mindset"], category: "Change & Growth" },
  { text: "He who knows others is wise; he who knows himself is enlightened.", author: "Lao Tzu", source: "Tao Te Ching", year: "600 BC", tags: ["self-awareness", "wisdom", "enlightenment"], category: "Wisdom & Knowledge" },
  { text: "Stop acting so small. You are the universe in ecstatic motion.", author: "Rumi", source: "Mathnawi", year: "1250", tags: ["potential", "universe", "greatness"], category: "Change & Growth" },
  { text: "Every saint has a past, and every sinner has a future.", author: "Oscar Wilde", source: "Attributed in writings", year: "1890s", tags: ["forgiveness", "redemption", "hope"], category: "Love & Compassion" },
  { text: "All that glitters is not gold.", author: "William Shakespeare", source: "The Merchant of Venice", year: "1596", tags: ["wisdom", "appearance", "truth"], category: "Wisdom & Knowledge" },
  { text: "A coward is incapable of exhibiting love; it is the prerogative of the brave.", author: "Mahatma Gandhi", source: "Hind Swaraj", year: "1909", tags: ["courage", "love", "bravery"], category: "Courage & Strength" },
  { text: "Dwell on the beauty of life. Watch the stars, and see yourself running with them.", author: "Marcus Aurelius", source: "Meditations", year: "180 AD", tags: ["beauty", "stars", "wonder"], category: "Hope & Dreams" },
  { text: "Wealth consists not in having great possessions, but in having few wants.", author: "Epictetus", source: "Discourses", year: "108 AD", tags: ["wealth", "simplicity", "contentment"], category: "Character & Virtue" },
  { text: "The secret of being boring is to say everything.", author: "Voltaire", source: "Attributed in writings", year: "1760s", tags: ["wisdom", "restraint", "wit"], category: "Wisdom & Knowledge" },
  { text: "Do you want to know who you are? Don't ask. Act! Action will delineate and define you.", author: "Thomas Jefferson", source: "Letter to Thomas Law", year: "1814", tags: ["action", "identity", "self-discovery"], category: "Action & Purpose" },
  { text: "Well done is better than well said.", author: "Benjamin Franklin", source: "Poor Richard's Almanack", year: "1736", tags: ["action", "deeds", "wisdom"], category: "Action & Purpose" },
  { text: "By failing to prepare, you are preparing to fail.", author: "Benjamin Franklin", source: "Poor Richard's Almanack", year: "1757", tags: ["preparation", "planning", "success"], category: "Success & Achievement" },
  { text: "Energy and persistence conquer all things.", author: "Benjamin Franklin", source: "Letter to Jean-Baptiste Leroy", year: "1786", tags: ["persistence", "energy", "determination"], category: "Courage & Strength" },
  { text: "One never notices what has been done; one can only see what remains to be done.", author: "Marie Curie", source: "Laboratory Notebook", year: "1910", tags: ["progress", "humility", "purpose"], category: "Wisdom & Knowledge" },
  { text: "Many of life's failures are people who did not realize how close they were to success when they gave up.", author: "Thomas Edison", source: "Attributed in interviews", year: "1920s", tags: ["failure", "perseverance", "success"], category: "Courage & Strength" },
  { text: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.", author: "Thomas Edison", source: "Attributed in interviews", year: "1920s", tags: ["perseverance", "persistence", "success"], category: "Courage & Strength" },
  { text: "First, believe in the infinite, then believe in yourself.", author: "Walt Disney", source: "Interview", year: "1950s", tags: ["belief", "confidence", "infinity"], category: "Success & Achievement" },
  { text: "The most effective way to do it, is to do it.", author: "Amelia Earhart", source: "Attributed in writings", year: "1930s", tags: ["action", "efficiency", "courage"], category: "Action & Purpose" },
  { text: "Adventure is worthwhile in itself.", author: "Amelia Earhart", source: "Attributed in interviews", year: "1930s", tags: ["adventure", "courage", "experience"], category: "Life & Living" },
  { text: "I have learned that when one's mind is made up, fear diminishes.", author: "Rosa Parks", source: "My Story", year: "1992", tags: ["courage", "fear", "determination"], category: "Courage & Strength" },
  { text: "Every great dream begins with a dreamer.", author: "Harriet Tubman", source: "Attributed in biographical accounts", year: "1890s", tags: ["dreams", "courage", "inspiration"], category: "Hope & Dreams" },
  { text: "If you don't stand for something, you will fall for anything.", author: "Malcolm X", source: "Speech at the Audubon Ballroom", year: "1964", tags: ["principles", "conviction", "courage"], category: "Character & Virtue" },
  { text: "I alone cannot change the world, but I can cast a stone across the waters to create many ripples.", author: "Mother Teresa", source: "Speech", year: "1980s", tags: ["impact", "change", "ripples"], category: "Action & Purpose" },
  { text: "Parents can only give good advice or put them on the right path, but the final forming of a person's character lies in their own hands.", author: "Anne Frank", source: "The Diary of a Young Girl", year: "1947", tags: ["character", "self-determination", "growth"], category: "Character & Virtue" },
  { text: "Iron rusts from disuse; water loses its purity from disuse... even so does inaction sap the vigor of the mind.", author: "Leonardo da Vinci", source: "Notebooks", year: "1500s", tags: ["action", "vigor", "mind"], category: "Action & Purpose" },
  { text: "The greater danger for most of us lies not in setting our aim too high and falling short; but in setting our aim too low, and achieving our mark.", author: "Michelangelo", source: "Attributed in writings", year: "1500s", tags: ["ambition", "goals", "greatness"], category: "Success & Achievement" },
  { text: "I dream my painting and I paint my dream.", author: "Vincent van Gogh", source: "Letters to Theo", year: "1880s", tags: ["dreams", "art", "creativity"], category: "Inspiration & Creativity" },
  { text: "Great things are done by a series of small things brought together.", author: "Vincent van Gogh", source: "Letters to Theo", year: "1880s", tags: ["perseverance", "small steps", "greatness"], category: "Courage & Strength" },
  { text: "Music is the mediator between the spiritual and the sensual life.", author: "Ludwig van Beethoven", source: "Attributed in letters", year: "1820s", tags: ["music", "spirituality", "life"], category: "Inspiration & Creativity" },
  { text: "Everything you can imagine is real.", author: "Pablo Picasso", source: "Attributed in interviews", year: "1940s", tags: ["imagination", "creativity", "reality"], category: "Inspiration & Creativity" },
  { text: "I am always doing that which I cannot do, in order that I may learn how to do it.", author: "Pablo Picasso", source: "Attributed in interviews", year: "1950s", tags: ["learning", "growth", "courage"], category: "Wisdom & Knowledge" },
  { text: "Creativity is intelligence having fun.", author: "Albert Einstein", source: "Attributed in lectures", year: "1930s", tags: ["creativity", "intelligence", "fun"], category: "Inspiration & Creativity" },
  { text: "Coming together is a beginning, staying together is progress, and working together is success.", author: "Henry Ford", source: "My Life and Work", year: "1922", tags: ["teamwork", "progress", "success"], category: "Success & Achievement" },
  { text: "Face your deficiencies and acknowledge them; but do not let them master you.", author: "Helen Keller", source: "The Story of My Life", year: "1903", tags: ["self-awareness", "courage", "growth"], category: "Wisdom & Knowledge" },
  { text: "You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face.", author: "Eleanor Roosevelt", source: "You Learn by Living", year: "1960", tags: ["courage", "fear", "confidence"], category: "Courage & Strength" },
  { text: "Those who look for the bad in people will surely find it.", author: "Abraham Lincoln", source: "Attributed in conversations", year: "1860s", tags: ["perspective", "optimism", "wisdom"], category: "Hope & Dreams" },
  { text: "Liberty, when it begins to take root, is a plant of rapid growth.", author: "George Washington", source: "Letter to James Madison", year: "1788", tags: ["liberty", "growth", "freedom"], category: "Change & Growth" },
  { text: "The ignorance of one voter in a democracy impairs the security of all.", author: "John F. Kennedy", source: "Speech", year: "1960s", tags: ["democracy", "knowledge", "responsibility"], category: "Wisdom & Knowledge" },
  { text: "Any man who is under thirty and not a liberal has no heart; any man who is over thirty and not a conservative has no brain.", author: "Margaret Thatcher", source: "Attributed in speeches", year: "1970s", tags: ["wisdom", "growth", "perspective"], category: "Wisdom & Knowledge" },
  { text: "Now this is not the end. It is not even the beginning of the end. But it is, perhaps, the end of the beginning.", author: "Winston Churchill", source: "Speech at Harrow School", year: "1942", tags: ["perseverance", "hope", "perspective"], category: "Courage & Strength" },
  { text: "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.", author: "Martin Luther King Jr.", source: "Strength to Love", year: "1963", tags: ["character", "courage", "challenge"], category: "Courage & Strength" },
  { text: "Prayer is not asking. It is a longing of the soul.", author: "Mahatma Gandhi", source: "An Autobiography", year: "1927", tags: ["prayer", "soul", "spirituality"], category: "Life & Living" },
  { text: "Details matter, it's worth waiting to get it right.", author: "Steve Jobs", source: "Interview with Fortune", year: "2000s", tags: ["details", "excellence", "patience"], category: "Success & Achievement" },
  { text: "Constantly seek criticism. A well-thought-out critique of what you're doing wrong is as valuable as gold.", author: "Elon Musk", source: "Interview", year: "2014", tags: ["criticism", "growth", "improvement"], category: "Wisdom & Knowledge" },
  { text: "Someone is sitting in the shade today because someone planted a tree a long time ago.", author: "Warren Buffett", source: "Berkshire Hathaway Meeting", year: "2012", tags: ["planning", "foresight", "patience"], category: "Peace & Serenity" },
  { text: "Everyone needs a coach. It doesn't matter whether you're a basketball player, a tennis player, a gymnast or a bridge player.", author: "Bill Gates", source: "TED Talk", year: "2013", tags: ["coaching", "growth", "learning"], category: "Change & Growth" },
  { text: "Passion is energy. Feel the power that comes from focusing on what excites you.", author: "Oprah Winfrey", source: "What I Know for Sure", year: "2014", tags: ["passion", "energy", "focus"], category: "Success & Achievement" },
  { text: "Rock bottom became the solid foundation on which I rebuilt my life.", author: "J.K. Rowling", source: "Harvard Commencement Speech", year: "2008", tags: ["rock bottom", "rebuilding", "resilience"], category: "Courage & Strength" },
  { text: "Age is a case of mind over matter. If you don't mind, it doesn't matter.", author: "C.S. Lewis", source: "Attributed in writings", year: "1950s", tags: ["age", "mindset", "wisdom"], category: "Change & Growth" },
  { text: "Time you enjoy wasting is not wasted time.", author: "John Lennon", source: "Attributed in interviews", year: "1970s", tags: ["time", "enjoyment", "wisdom"], category: "Life & Living" },
  { text: "The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.", author: "Bob Marley", source: "Attributed in songs", year: "1973", tags: ["truth", "love", "relationships"], category: "Love & Compassion" },
  { text: "Don't count the days, make the days count.", author: "Muhammad Ali", source: "Attributed in interviews", year: "1970s", tags: ["purpose", "action", "life"], category: "Action & Purpose" },
  { text: "Yesterday is gone. Tomorrow has not yet come. We have only today.", author: "Mother Teresa", source: "A Gift for God", year: "1975", tags: ["present", "mindfulness", "wisdom"], category: "Life & Living" },
  { text: "With realization of one's own potential and self-confidence in one's ability, one can build a better world.", author: "Dalai Lama", source: "The Art of Happiness", year: "1998", tags: ["potential", "confidence", "world"], category: "Change & Growth" },
  { text: "To be free is not merely to cast off one's chains, but to live in a way that respects and enhances the freedom of others.", author: "Nelson Mandela", source: "Long Walk to Freedom", year: "1994", tags: ["freedom", "respect", "responsibility"], category: "Peace & Serenity" },
  { text: "Any fool can know. The point is to understand.", author: "Albert Einstein", source: "Attributed in lectures", year: "1930s", tags: ["knowledge", "understanding", "wisdom"], category: "Wisdom & Knowledge" },
  { text: "We are only as blind as we want to be.", author: "Maya Angelou", source: "Wouldn't Take Nothing for My Journey Now", year: "1993", tags: ["awareness", "truth", "wisdom"], category: "Wisdom & Knowledge" },
  { text: "The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time.", author: "Mark Twain", source: "Attributed in writings", year: "1900s", tags: ["life", "death", "courage"], category: "Life & Living" },
  { text: "Experience is simply the name we give our mistakes.", author: "Oscar Wilde", source: "The Picture of Dorian Gray", year: "1890", tags: ["experience", "mistakes", "wisdom"], category: "Life & Living" },
  { text: "You were born with wings. Why prefer to crawl through life?", author: "Rumi", source: "Mathnawi", year: "1250", tags: ["potential", "freedom", "courage"], category: "Change & Growth" },
  { text: "Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned.", author: "Buddha", source: "Dhammapada", year: "400 BC", tags: ["anger", "letting go", "wisdom"], category: "Peace & Serenity" },
  { text: "The superior man is modest in his speech, but exceeds in his actions.", author: "Confucius", source: "The Analects", year: "500 BC", tags: ["humility", "action", "character"], category: "Wisdom & Knowledge" },
  { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle", source: "Nicomachean Ethics (adapted)", year: "340 BC", tags: ["hope", "darkness", "focus"], category: "Hope & Dreams" },
  { text: "We suffer more often in imagination than in reality.", author: "Seneca", source: "Moral Letters to Lucilius", year: "65 AD", tags: ["suffering", "imagination", "stoicism"], category: "Courage & Strength" },
  { text: "Man is not worried by real problems so much as by his imagined anxieties about real problems.", author: "Epictetus", source: "Discourses", year: "108 AD", tags: ["anxiety", "worry", "stoicism"], category: "Life & Living" },
  { text: "You have power over your mind, not outside events.", author: "Marcus Aurelius", source: "Meditations", year: "180 AD", tags: ["stoicism", "control", "mind"], category: "Wisdom & Knowledge" },
  { text: "While I thought that I was learning how to live, I have been learning how to die.", author: "Leonardo da Vinci", source: "Notebooks", year: "1500s", tags: ["life", "death", "wisdom"], category: "Life & Living" },
  { text: "Good people do not need laws to tell them to act responsibly, while bad people will find a way around the laws.", author: "Plato", source: "The Republic", year: "380 BC", tags: ["character", "responsibility", "wisdom"], category: "Character & Virtue" },
  { text: "The creation of a thousand forests is in one acorn.", author: "Ralph Waldo Emerson", source: "Essays", year: "1844", tags: ["potential", "growth", "nature"], category: "Change & Growth" },
  { text: "Not until we are lost do we begin to understand.", author: "Henry David Thoreau", source: "Walden", year: "1854", tags: ["lost", "understanding", "wisdom"], category: "Wisdom & Knowledge" },
  { text: "If you hear a voice within you say 'you cannot paint,' then by all means paint, and that voice will be silenced.", author: "Vincent van Gogh", source: "Letters to Theo", year: "1880s", tags: ["doubt", "courage", "creativity"], category: "Courage & Strength" },
  { text: "The meaning of life is to find your gift. The purpose of life is to give it away.", author: "Pablo Picasso", source: "Attributed in interviews", year: "1950s", tags: ["purpose", "gift", "meaning"], category: "Action & Purpose" },
  { text: "Opportunity is missed by most people because it is dressed in overalls and looks like work.", author: "Thomas Edison", source: "Attributed in interviews", year: "1920s", tags: ["opportunity", "work", "perseverance"], category: "Success & Achievement" },
  { text: "The difference between winning and losing is most often not quitting.", author: "Walt Disney", source: "Interview", year: "1950s", tags: ["perseverance", "winning", "courage"], category: "Courage & Strength" },
  { text: "Success is like reaching an important birthday and finding you're exactly the same.", author: "Audrey Hepburn", source: "Attributed in interviews", year: "1970s", tags: ["success", "authenticity", "wisdom"], category: "Success & Achievement" },
  { text: "Courage is the price that life exacts for granting peace.", author: "Amelia Earhart", source: "Attributed in writings", year: "1930s", tags: ["courage", "peace", "life"], category: "Courage & Strength" },
  { text: "There is no better teacher than adversity. Every defeat, every heartbreak, every loss, contains its own seed, its own lesson on how to recover your strength.", author: "Malcolm X", source: "Attributed in speeches", year: "1964", tags: ["adversity", "learning", "resilience"], category: "Courage & Strength" },
  { text: "Stand for something or you will fall for anything. It's all right to have a voice.", author: "Rosa Parks", source: "My Story", year: "1992", tags: ["conviction", "voice", "courage"], category: "Character & Virtue" },
  { text: "However difficult life may seem, there is always something you can do.", author: "Stephen Hawking", source: "Speech at Cambridge", year: "2016", tags: ["perseverance", "hope", "action"], category: "Courage & Strength" },
  { text: "Raise your voice, not your fist.", author: "Malala Yousafzai", source: "Speech", year: "2014", tags: ["voice", "peace", "courage"], category: "Character & Virtue" },
  { text: "A change is brought about because ordinary people do extraordinary things.", author: "Barack Obama", source: "Campaign Speech", year: "2008", tags: ["change", "ordinary", "extraordinary"], category: "Change & Growth" },
  { text: "Failure is an option here. If things are not failing, you are not innovating enough.", author: "Elon Musk", source: "Interview", year: "2013", tags: ["failure", "innovation", "risk"], category: "Courage & Strength" },
  { text: "I'm convinced that about half of what separates successful entrepreneurs from the non-successful ones is pure perseverance.", author: "Steve Jobs", source: "Speech", year: "1990s", tags: ["perseverance", "entrepreneurship", "success"], category: "Courage & Strength" },
  { text: "The difference between successful people and really successful people is that really successful people say no to almost everything.", author: "Warren Buffett", source: "Interview", year: "2000s", tags: ["focus", "success", "discipline"], category: "Success & Achievement" },
  { text: "It's fine to celebrate success but it is more important to heed the lessons of failure.", author: "Bill Gates", source: "The Road Ahead", year: "1995", tags: ["success", "failure", "learning"], category: "Success & Achievement" },
  { text: "The greatest discovery of all time is that a person can change his future by simply changing his attitude.", author: "Oprah Winfrey", source: "Interview", year: "2006", tags: ["attitude", "future", "change"], category: "Change & Growth" },
  { text: "Words are, in my not-so-humble opinion, our most inexhaustible source of magic.", author: "J.K. Rowling", source: "Harry Potter and the Deathly Hallows", year: "2007", tags: ["words", "magic", "power"], category: "Inspiration & Creativity" },
  { text: "Some day you will be old enough to start reading fairy tales again.", author: "C.S. Lewis", source: "The Lion, the Witch and the Wardrobe", year: "1950", tags: ["fairy tales", "wisdom", "childhood"], category: "Wisdom & Knowledge" },
  { text: "In a time of deceit telling the truth is a revolutionary act.", author: "George Orwell", source: "Attributed in essays", year: "1940s", tags: ["truth", "courage", "revolution"], category: "Courage & Strength" },
  { text: "Freedom is the freedom to say that two plus two make four. If that is granted, all else follows.", author: "George Orwell", source: "1984", year: "1949", tags: ["freedom", "truth", "courage"], category: "Peace & Serenity" },
  { text: "If liberty means anything at all, it means the right to tell people what they do not want to hear.", author: "George Orwell", source: "Preface to Animal Farm", year: "1945", tags: ["liberty", "truth", "courage"], category: "Courage & Strength" },
  { text: "One is not born, but rather becomes, a woman.", author: "Simone de Beauvoir", source: "The Second Sex", year: "1949", tags: ["identity", "growth", "wisdom"], category: "Character & Virtue" },
  { text: "Change your life today. Don't gamble on the future, act now, without delay.", author: "Simone de Beauvoir", source: "The Ethics of Ambiguity", year: "1947", tags: ["action", "present", "courage"], category: "Action & Purpose" },
  { text: "Not everything that is faced can be changed, but nothing can be changed until it is faced.", author: "James Baldwin", source: "As Much Truth as One Can Bear", year: "1962", tags: ["change", "truth", "courage"], category: "Change & Growth" },
  { text: "Love does not begin and end the way we seem to think it does. Love is a battle, love is a war; love is a growing up.", author: "James Baldwin", source: "Notes of a Native Son", year: "1955", tags: ["love", "growth", "struggle"], category: "Love & Compassion" },
  { text: "If there is a book that you want to read, but it hasn't been written yet, then you must write it.", author: "Toni Morrison", source: "Speech", year: "1970s", tags: ["creativity", "action", "empowerment"], category: "Inspiration & Creativity" },
  { text: "You wanna fly, you got to give up the shit that weighs you down.", author: "Toni Morrison", source: "Song of Solomon", year: "1977", tags: ["freedom", "letting go", "courage"], category: "Peace & Serenity" },
  { text: "What counts in life is not the mere fact that we have lived. It is what difference we have made to the lives of others.", author: "Nelson Mandela", source: "Birthday speech", year: "2004", tags: ["purpose", "service", "impact"], category: "Action & Purpose" },
  { text: "Open your arms to change, but don't let go of your values.", author: "Dalai Lama", source: "The Art of Happiness", year: "1998", tags: ["change", "values", "wisdom"], category: "Change & Growth" },
  { text: "Courage is the most important of all the virtues because without courage, you can't practice any other virtue consistently.", author: "Maya Angelou", source: "Interview", year: "1990s", tags: ["courage", "virtue", "consistency"], category: "Character & Virtue" },
  { text: "Look deep into nature, and then you will understand everything better.", author: "Albert Einstein", source: "Attributed in writings", year: "1930s", tags: ["nature", "understanding", "wisdom"], category: "Wisdom & Knowledge" },
  { text: "The important thing is not to stop questioning. Curiosity has its own reason for existing.", author: "Albert Einstein", source: "Life magazine", year: "1955", tags: ["curiosity", "questioning", "learning"], category: "Wisdom & Knowledge" },
  { text: "Conquer anger with non-anger. Conquer badness with goodness. Conquer meanness with generosity. Conquer dishonesty with truth.", author: "Buddha", source: "Dhammapada", year: "400 BC", tags: ["anger", "generosity", "truth"], category: "Love & Compassion" },
  { text: "When it is obvious that the goals cannot be reached, don't adjust the goals, adjust the action steps.", author: "Confucius", source: "The Analects", year: "500 BC", tags: ["goals", "adaptation", "wisdom"], category: "Change & Growth" },
  { text: "Water is the softest thing, yet it can penetrate mountains and earth.", author: "Lao Tzu", source: "Tao Te Ching", year: "600 BC", tags: ["gentleness", "strength", "perseverance"], category: "Courage & Strength" },
  { text: "True happiness is to enjoy the present, without anxious dependence upon the future.", author: "Seneca", source: "Moral Letters to Lucilius", year: "65 AD", tags: ["happiness", "present", "stoicism"], category: "Peace & Serenity" },
  { text: "When you arise in the morning think of what a privilege it is to be alive, to think, to enjoy, to love.", author: "Marcus Aurelius", source: "Meditations", year: "180 AD", tags: ["gratitude", "morning", "life"], category: "Peace & Serenity" },
  { text: "Goodbyes are only for those who love with their eyes. For those who love with heart and soul, there is no such thing as separation.", author: "Rumi", source: "Mathnawi", year: "1250", tags: ["love", "connection", "soul"], category: "Love & Compassion" },
  { text: "Freedom is the only worthy goal in life. It is won by disregarding things that lie beyond our control.", author: "Epictetus", source: "Discourses", year: "108 AD", tags: ["freedom", "control", "stoicism"], category: "Peace & Serenity" },
  { text: "Let us always meet each other with a smile, for the smile is the beginning of love.", author: "Mother Teresa", source: "A Gift for God", year: "1975", tags: ["smile", "love", "kindness"], category: "Love & Compassion" },
  { text: "Around every corner there's always something new.", author: "Walt Disney", source: "Interview", year: "1950s", tags: ["curiosity", "discovery", "optimism"], category: "Wisdom & Knowledge" },
  { text: "Quality is more important than quantity. One home run is much better than two doubles.", author: "Steve Jobs", source: "Interview with BusinessWeek", year: "1998", tags: ["quality", "excellence", "focus"], category: "Success & Achievement" },
  { text: "Real integrity is doing the right thing, knowing that nobody's going to know whether you did it or not.", author: "Oprah Winfrey", source: "What I Know for Sure", year: "2014", tags: ["integrity", "character", "wisdom"], category: "Character & Virtue" },
  { text: "Before you can inspire with emotion, you must be swamped with it yourself. Before you can move their tears, your own must flow.", author: "Winston Churchill", source: "Speech on public speaking", year: "1930s", tags: ["emotion", "leadership", "authenticity"], category: "Character & Virtue" },
  { text: "Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great.", author: "Mark Twain", source: "Attributed in writings", year: "1900s", tags: ["ambition", "greatness", "support"], category: "Success & Achievement" },
  { text: "Understanding is a two-way street.", author: "Eleanor Roosevelt", source: "This I Remember", year: "1949", tags: ["understanding", "communication", "wisdom"], category: "Wisdom & Knowledge" },
  { text: "A man who won't die for something was not fit to live.", author: "Martin Luther King Jr.", source: "Speech", year: "1957", tags: ["courage", "conviction", "life"], category: "Courage & Strength" },
  { text: "My life is my message.", author: "Mahatma Gandhi", source: "An Autobiography", year: "1927", tags: ["authenticity", "life", "integrity"], category: "Character & Virtue" },
  { text: "I do the very best I know how — the very best I can; and I mean to keep on doing so until the end.", author: "Abraham Lincoln", source: "Attributed in conversations", year: "1860s", tags: ["perseverance", "excellence", "commitment"], category: "Courage & Strength" },
  { text: "A good head and a good heart are always a formidable combination.", author: "Nelson Mandela", source: "Conversations", year: "1990s", tags: ["intelligence", "heart", "leadership"], category: "Wisdom & Knowledge" },
  { text: "Your worst enemy cannot harm you as much as your own unguarded thoughts.", author: "Buddha", source: "Dhammapada", year: "400 BC", tags: ["thoughts", "mind", "wisdom"], category: "Wisdom & Knowledge" },
  { text: "The secret of change is to focus all your energy, not on fighting the old, but on building the new.", author: "Socrates", source: "Plato's Dialogues (adapted)", year: "400 BC", tags: ["change", "focus", "growth"], category: "Change & Growth" },
  { text: "Educating the mind without educating the heart is no education at all.", author: "Aristotle", source: "Attributed in writings", year: "340 BC", tags: ["education", "heart", "wisdom"], category: "Wisdom & Knowledge" },
  { text: "Obstacles cannot crush me; every obstacle yields to stern resolve.", author: "Leonardo da Vinci", source: "Notebooks", year: "1500s", tags: ["obstacles", "resolve", "courage"], category: "Courage & Strength" },
  { text: "What is done in love is done well.", author: "Vincent van Gogh", source: "Letters to Theo", year: "1880s", tags: ["love", "excellence", "passion"], category: "Success & Achievement" },
  { text: "A single act of courage throws a silken gleam on the whole of life.", author: "Amelia Earhart", source: "Attributed in writings", year: "1930s", tags: ["courage", "life", "bravery"], category: "Courage & Strength" },
  { text: "He who is not courageous enough to take risks will accomplish nothing in life.", author: "Muhammad Ali", source: "Attributed in interviews", year: "1970s", tags: ["courage", "risk", "achievement"], category: "Courage & Strength" },
  { text: "I really think a champion is defined not by their wins but by how they can recover when they fall.", author: "Serena Williams", source: "Interview", year: "2016", tags: ["resilience", "recovery", "champion"], category: "Courage & Strength" },
  { text: "I don't want to be thought of as the 'girl who was shot.' I want to be thought of as the 'girl who stood up.'", author: "Malala Yousafzai", source: "Interview with The New York Times", year: "2013", tags: ["courage", "identity", "standing up"], category: "Courage & Strength" },
  { text: "Your most unhappy customers are your greatest source of learning.", author: "Bill Gates", source: "Business @ the Speed of Thought", year: "1999", tags: ["learning", "customers", "growth"], category: "Wisdom & Knowledge" },
  { text: "Only when the tide goes out do you discover who's been swimming naked.", author: "Warren Buffett", source: "Berkshire Hathaway Meeting", year: "1980s", tags: ["truth", "risk", "wisdom"], category: "Courage & Strength" },
  { text: "Only put off until tomorrow what you are willing to die having left undone.", author: "Pablo Picasso", source: "Attributed in interviews", year: "1950s", tags: ["urgency", "purpose", "passion"], category: "Action & Purpose" },
  { text: "As you grow older, you will discover that you have two hands, one for helping yourself, the other for helping others.", author: "Audrey Hepburn", source: "Attributed in interviews", year: "1980s", tags: ["helping", "growth", "service"], category: "Change & Growth" },
  { text: "It is better to offer no excuse than a bad one.", author: "George Washington", source: "Rules of Civility", year: "1744", tags: ["integrity", "honesty", "character"], category: "Character & Virtue" },
  { text: "The doctor of the future will give no medicine, but will interest her or his patients in the care of the human frame, in a proper diet, and in the cause and prevention of disease.", author: "Thomas Edison", source: "Interview", year: "1903", tags: ["health", "future", "prevention"], category: "Hope & Dreams" },
  { text: "A dream you dream alone is only a dream. A dream you dream together is reality.", author: "John Lennon", source: "Attributed in interviews", year: "1970s", tags: ["dreams", "unity", "reality"], category: "Hope & Dreams" },
  { text: "At the end of the day, we can endure much more than we think we can.", author: "Frida Kahlo", source: "Letters", year: "1950s", tags: ["endurance", "strength", "resilience"], category: "Courage & Strength" },
  { text: "Emancipate yourselves from mental slavery. None but ourselves can free our minds.", author: "Bob Marley", source: "Redemption Song", year: "1980", tags: ["freedom", "mind", "empowerment"], category: "Peace & Serenity" },
  { text: "I don't go by the rule book... I lead from the heart, not the head.", author: "Princess Diana", source: "Interview", year: "1995", tags: ["heart", "leadership", "authenticity"], category: "Love & Compassion" },
  { text: "The more we value things, the less we value ourselves.", author: "Bruce Lee", source: "Tao of Jeet Kune Do", year: "1975", tags: ["self-worth", "values", "wisdom"], category: "Character & Virtue" },
  { text: "To some extent, the future can be predicted by studying the past.", author: "Confucius", source: "The Analects", year: "500 BC", tags: ["history", "future", "wisdom"], category: "Hope & Dreams" },
  { text: "Finish each day and be done with it. You have done what you could.", author: "Ralph Waldo Emerson", source: "Letters", year: "1860s", tags: ["acceptance", "peace", "letting go"], category: "Peace & Serenity" },
  { text: "A lady's imagination is very rapid; it jumps from admiration to love, from love to matrimony.", author: "Jane Austen", source: "Pride and Prejudice", year: "1813", tags: ["love", "imagination", "humor"], category: "Love & Compassion" },
  { text: "Have regular hours for work and play; make each day both useful and pleasant.", author: "Louisa May Alcott", source: "Letters", year: "1860s", tags: ["balance", "routine", "happiness"], category: "Life & Living" },
  { text: "The direction in which education starts a man will determine his future in life.", author: "Plato", source: "The Republic", year: "380 BC", tags: ["education", "future", "direction"], category: "Wisdom & Knowledge" },
  { text: "The individual has always had to struggle to keep from being overwhelmed by the tribe.", author: "Friedrich Nietzsche", source: "Beyond Good and Evil", year: "1886", tags: ["individuality", "struggle", "freedom"], category: "Character & Virtue" },
  { text: "Appreciation is a wonderful thing. It makes what is excellent in others belong to us as well.", author: "Voltaire", source: "Attributed in writings", year: "1760s", tags: ["appreciation", "excellence", "gratitude"], category: "Success & Achievement" },
  { text: "Walking with a friend in the dark is better than walking alone in the light.", author: "Helen Keller", source: "Attributed in writings", year: "1920s", tags: ["friendship", "companionship", "darkness"], category: "Love & Compassion" },
  { text: "Thinking about all the suffering makes me wonder whether I should not give up. But I don't. I still believe people are truly good at heart.", author: "Anne Frank", source: "The Diary of a Young Girl", year: "1947", tags: ["hope", "goodness", "perseverance"], category: "Hope & Dreams" },
  { text: "There are far, far better things ahead than any we leave behind.", author: "C.S. Lewis", source: "Attributed in letters", year: "1950s", tags: ["hope", "future", "optimism"], category: "Hope & Dreams" },
  { text: "It is our choices that show what we truly are, far more than our abilities.", author: "J.K. Rowling", source: "Harry Potter and the Chamber of Secrets", year: "1998", tags: ["choices", "character", "wisdom"], category: "Character & Virtue" },
  { text: "Remember to look up at the stars and not down at your feet. Try to make sense of what you see and wonder about what makes the universe exist.", author: "Stephen Hawking", source: "Interview", year: "2014", tags: ["wonder", "stars", "curiosity"], category: "Wisdom & Knowledge" },
  { text: "Goodness is stronger than evil; Love is stronger than hate; Light is more powerful than darkness; Life is more conquering than death.", author: "Desmond Tutu", source: "Speech", year: "1990s", tags: ["goodness", "love", "hope"], category: "Love & Compassion" },
  { text: "We realize the importance of our voices only when we are silenced.", author: "Malala Yousafzai", source: "I Am Malala", year: "2013", tags: ["voice", "freedom", "courage"], category: "Character & Virtue" },
  { text: "If life is a video game, the graphics are great, but the plot is confusing and the tutorial is way too long.", author: "Elon Musk", source: "Interview", year: "2018", tags: ["humor", "life", "wisdom"], category: "Life & Living" },
  { text: "The best way to not feel hopeless is to get up and do something.", author: "Barack Obama", source: "Interview", year: "2012", tags: ["action", "hope", "motivation"], category: "Action & Purpose" },
  { text: "Where there is no struggle, there is no strength.", author: "Oprah Winfrey", source: "What I Know for Sure", year: "2014", tags: ["struggle", "strength", "growth"], category: "Courage & Strength" }
];

const categories = [
  { key: "all", label: "All", icon: "📋" },
  { key: "Courage & Strength", label: "Courage", icon: "💪" },
  { key: "Wisdom & Knowledge", label: "Wisdom", icon: "📚" },
  { key: "Change & Growth", label: "Growth", icon: "🌱" },
  { key: "Character & Virtue", label: "Character", icon: "⭐" },
  { key: "Hope & Dreams", label: "Hope", icon: "✨" },
  { key: "Love & Compassion", label: "Love", icon: "❤️" },
  { key: "Action & Purpose", label: "Action", icon: "🎯" },
  { key: "Peace & Serenity", label: "Peace", icon: "☮️" },
  { key: "Success & Achievement", label: "Success", icon: "🏆" },
  { key: "Life & Living", label: "Life", icon: "🌍" },
  { key: "Inspiration & Creativity", label: "Creativity", icon: "🎨" },
];

export default function QuotesClient({ locale = "en", dict, titleOverride, descriptionOverride }: {
  locale?: string; dict?: Record<string, unknown>;
  titleOverride?: string;
  descriptionOverride?: string;
} = {}) {
  const [search, setSearch] = useState("");
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [page, setPage] = useState(1);
  const pageSize = 20;
  const q = (dict as any)?.quotes || {};

  const filtered = useMemo(() => {
    const query = search.toLowerCase().trim();
    return quotes.filter((q) => {
      const matchCategory = activeCategory === "all" || q.category === activeCategory;
      const matchSearch = !query || q.text.toLowerCase().includes(query) || q.author.toLowerCase().includes(query) || q.tags.some(t => t.includes(query));
      return matchCategory && matchSearch;
    });
  }, [activeCategory, search]);

  const paginated = useMemo(() => filtered.slice(0, page * pageSize), [filtered, page]);

  const todayQuote = useMemo(() => {
    const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
    return quotes[dayOfYear % quotes.length];
  }, []);

  return (
    <ToolLayout {...metadata}
        title={titleOverride || metadata.title}
        description={descriptionOverride || metadata.description} locale={locale as any} dict={dict}>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        Browse {quotes.length} famous quotes organized by category. Search by person name, quote text, or keyword. Each quote includes source and historical date.
      </p>

      {/* Quote of the day */}
      <div className="mt-4 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 p-4 dark:from-blue-950 dark:to-purple-950">
        <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          {q.quoteOfTheDay || "Quote of the Day"}
        </div>
        <p className="text-lg font-medium italic text-zinc-800 dark:text-zinc-200">
          "{todayQuote.text}"
        </p>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          — {todayQuote.author}, <span className="font-medium">{todayQuote.source}</span> ({todayQuote.year})
        </p>
      </div>

      {/* Search */}
      <div className="mt-4">
        <input
          type="text"
          value={search}
          onChange={(e) => { setSearch(e.target.value); setPage(1); }}
          placeholder={q.searchPlaceholder || "Search by name, quote, or keyword (e.g., courage, wisdom, life)..."}
          className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-900 dark:placeholder:text-zinc-600"
        />
      </div>

      {/* Category tabs */}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {categories.map((cat) => {
          const count = cat.key === "all" ? quotes.length : quotes.filter(q => q.category === cat.key).length;
          return (
            <button
              key={cat.key}
              onClick={() => { setActiveCategory(cat.key); setPage(1); }}
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
      {(search || activeCategory !== "all") && (
        <div className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          {filtered.length} {q.quotesLabel || "quote"}{filtered.length !== 1 ? (q.pluralSuffix || "s") : ""} {q.found || "found"}
        </div>
      )}

      {/* Quotes list */}
      {paginated.length > 0 ? (
        <div className="mt-4 space-y-3">
          {paginated.map((q, i) => (
            <div
              key={i}
              onClick={() => setSelectedQuote(selectedQuote === q ? null : q)}
              className={`cursor-pointer rounded-lg border p-4 transition-colors ${
                selectedQuote === q
                  ? "border-blue-300 bg-blue-50 dark:border-blue-700 dark:bg-blue-950"
                  : "border-zinc-200 bg-white hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
              }`}
            >
              <p className="text-base font-medium text-zinc-800 dark:text-zinc-200">
                "{q.text}"
              </p>
              <div className="mt-2 flex items-center gap-2 text-sm">
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  {q.author}
                </span>
                <span className="text-zinc-400">·</span>
                <span className="text-zinc-500 dark:text-zinc-400">
                  {q.source}
                </span>
                <span className="text-zinc-400">·</span>
                <span className="rounded bg-zinc-100 px-1.5 py-0.5 text-xs text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                  {q.year}
                </span>
              </div>
              {selectedQuote === q && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                    {categories.find(c => c.key === q.category)?.icon} {q.category}
                  </span>
                  {q.tags.map((tag) => (
                    <button
                      key={tag}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSearch(tag);
                        setSelectedQuote(null);
                        setActiveCategory("all");
                        setPage(1);
                      }}
                      className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-12 text-center text-zinc-400 dark:text-zinc-500">
          <p className="text-lg">{q.noQuotesFound || "No quotes found"}</p>
          <p className="mt-1 text-sm">{q.tryDifferent || "Try a different search term or category."}</p>
        </div>
      )}

      {/* Load More button */}
      {paginated.length < filtered.length && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setPage(p => p + 1)}
            className="rounded-lg border border-zinc-300 bg-white px-6 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            {q.loadMore || "Load More"} ({paginated.length} {q.of || "of"} {filtered.length} {q.shown || "shown"})
          </button>
        </div>
      )}
    </ToolLayout>
  );
}

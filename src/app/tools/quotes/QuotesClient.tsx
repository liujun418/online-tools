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
};

interface Quote {
  text: string;
  author: string;
  source: string;
  year: string;
  tags: string[];
}

const quotes: Quote[] = [
  // Albert Einstein
  { text: "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.", author: "Albert Einstein", source: "Interview with George Sylvester Viereck, The Saturday Evening Post", year: "1929", tags: ["imagination", "knowledge", "creativity"] },
  { text: "Life is like riding a bicycle. To keep your balance, you must keep moving.", author: "Albert Einstein", source: "Letter to his son Eduard", year: "1930", tags: ["life", "perseverance", "courage"] },
  { text: "Try not to become a man of success, but rather try to become a man of value.", author: "Albert Einstein", source: "Life magazine", year: "1955", tags: ["success", "value", "character"] },
  { text: "The only source of knowledge is experience.", author: "Albert Einstein", source: "Essays in Science", year: "1934", tags: ["knowledge", "experience", "learning"] },

  // Mahatma Gandhi
  { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi", source: "Attributed in 'The Philosophy of Gandhi' by Arne Næss", year: "1913", tags: ["change", "action", "leadership"] },
  { text: "The weak can never forgive. Forgiveness is the attribute of the strong.", author: "Mahatma Gandhi", source: "Young India", year: "1926", tags: ["forgiveness", "strength", "character"] },
  { text: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi", source: "Attributed in biographical accounts", year: "1920s", tags: ["life", "learning", "wisdom"] },
  { text: "In a gentle way, you can shake the world.", author: "Mahatma Gandhi", source: "Speech at prayer meeting, New Delhi", year: "1947", tags: ["peace", "change", "gentleness"] },

  // Nelson Mandela
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela", source: "Speech at the African National Congress", year: "1994", tags: ["perseverance", "achievement", "courage"] },
  { text: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela", source: "Speech at the University of the Witwatersrand", year: "2003", tags: ["education", "change", "power"] },
  { text: "There is no passion to be found playing small — in settling for a life that is less than the one you are capable of living.", author: "Nelson Mandela", source: "Inaugural address", year: "1994", tags: ["potential", "ambition", "life"] },
  { text: "A good head and a good heart are always a formidable combination.", author: "Nelson Mandela", source: "Interview with BBC", year: "1999", tags: ["character", "intelligence", "leadership"] },

  // Martin Luther King Jr.
  { text: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.", author: "Martin Luther King Jr.", source: "Strength to Love", year: "1963", tags: ["love", "peace", "courage"] },
  { text: "The time is always right to do what is right.", author: "Martin Luther King Jr.", source: "Speech at Oberlin College", year: "1965", tags: ["justice", "courage", "action"] },
  { text: "If you can't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving forward.", author: "Martin Luther King Jr.", source: "Speech at Spelman College", year: "1959", tags: ["perseverance", "progress", "courage"] },
  { text: "Faith is taking the first step even when you don't see the whole staircase.", author: "Martin Luther King Jr.", source: "Sermon at Dexter Avenue Baptist Church", year: "1957", tags: ["faith", "courage", "action"] },

  // Steve Jobs
  { text: "Stay hungry, stay foolish.", author: "Steve Jobs", source: "Stanford Commencement Address", year: "2005", tags: ["ambition", "creativity", "courage"] },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs", source: "Stanford Commencement Address", year: "2005", tags: ["work", "passion", "success"] },
  { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs", source: "Apple Worldwide Developers Conference", year: "1997", tags: ["innovation", "leadership", "success"] },
  { text: "Design is not just what it looks like and feels like. Design is how it works.", author: "Steve Jobs", source: "Interview with The New York Times", year: "2003", tags: ["design", "innovation", "creativity"] },

  // Winston Churchill
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill", source: "Speech to the House of Commons", year: "1942", tags: ["courage", "perseverance", "success"] },
  { text: "If you are going through hell, keep going.", author: "Winston Churchill", source: "Speech during World War II", year: "1941", tags: ["perseverance", "courage", "resilience"] },
  { text: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.", author: "Winston Churchill", source: "Speech at the Conservative Party Conference", year: "1944", tags: ["optimism", "opportunity", "mindset"] },
  { text: "Courage is what it takes to stand up and speak; courage is also what it takes to sit down and listen.", author: "Winston Churchill", source: "Speech to the Royal College of Surgeons", year: "1944", tags: ["courage", "listening", "wisdom"] },

  // Maya Angelou
  { text: "People will forget what you said, people will forget what you did, but people will never forget how you made them feel.", author: "Maya Angelou", source: "Interview with 'The Paris Review'", year: "1970", tags: ["feelings", "impact", "character"] },
  { text: "There is no greater agony than bearing an untold story inside you.", author: "Maya Angelou", source: "I Know Why the Caged Bird Sings", year: "1969", tags: ["story", "voice", "courage"] },
  { text: "You can't use up creativity. The more you use, the more you have.", author: "Maya Angelou", source: "Interview with 'The New Yorker'", year: "1989", tags: ["creativity", "growth", "abundance"] },
  { text: "We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty.", author: "Maya Angelou", source: "Letter to My Daughter", year: "2008", tags: ["change", "beauty", "growth"] },

  // Abraham Lincoln
  { text: "Whatever you are, be a good one.", author: "Abraham Lincoln", source: "Personal letter", year: "1860", tags: ["character", "excellence", "integrity"] },
  { text: "The best way to predict the future is to create it.", author: "Abraham Lincoln", source: "Attributed in 'Lincoln: The Unknown' by Dale Carnegie", year: "1863", tags: ["future", "action", "leadership"] },
  { text: "In the end, it's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln", source: "Attributed in biographical accounts", year: "1860s", tags: ["life", "meaning", "purpose"] },

  // Nelson Mandela
  { text: "I have learned over the years that when one's mind is made up, this diminishes fear.", author: "Nelson Mandela", source: "Long Walk to Freedom", year: "1994", tags: ["courage", "decision", "fear"] },

  // Confucius
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius", source: "The Analects", year: "500 BC", tags: ["perseverance", "progress", "patience"] },
  { text: "Our greatest glory is not in never falling, but in rising every time we fall.", author: "Confucius", source: "The Analects", year: "500 BC", tags: ["resilience", "perseverance", "courage"] },
  { text: "The man who moves a mountain begins by carrying away small stones.", author: "Confucius", source: "The Analects", year: "500 BC", tags: ["perseverance", "progress", "patience"] },

  // Aristotle
  { text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle", source: "Nicomachean Ethics", year: "340 BC", tags: ["excellence", "habits", "character"] },
  { text: "Knowing yourself is the beginning of all wisdom.", author: "Aristotle", source: "Metaphysics", year: "340 BC", tags: ["wisdom", "self-awareness", "knowledge"] },

  // Mark Twain
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain", source: "Attributed in 'Mark Twain in Eruption'", year: "1910", tags: ["action", "progress", "beginning"] },
  { text: "Kindness is the language which the deaf can hear and the blind can see.", author: "Mark Twain", source: "Attributed in biographical accounts", year: "1890s", tags: ["kindness", "compassion", "humanity"] },
  { text: "The two most important days in your life are the day you are born and the day you find out why.", author: "Mark Twain", source: "Attributed in 'Mark Twain's Notebook'", year: "1900s", tags: ["purpose", "life", "meaning"] },

  // Helen Keller
  { text: "Alone we can do so little; together we can do so much.", author: "Helen Keller", source: "The Story of My Life", year: "1903", tags: ["teamwork", "collaboration", "unity"] },
  { text: "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.", author: "Helen Keller", source: "The Story of My Life", year: "1903", tags: ["beauty", "love", "heart"] },
  { text: "Life is either a daring adventure or nothing at all.", author: "Helen Keller", source: "The Open Door", year: "1957", tags: ["adventure", "courage", "life"] },

  // Eleanor Roosevelt
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt", source: "Tomorrow Is Now", year: "1963", tags: ["dreams", "hope", "future"] },
  { text: "No one can make you feel inferior without your consent.", author: "Eleanor Roosevelt", source: "This Is My Story", year: "1937", tags: ["self-worth", "confidence", "dignity"] },

  // Theodore Roosevelt
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt", source: "Speech at the Republican National Convention", year: "1912", tags: ["belief", "confidence", "success"] },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt", source: "The Strenuous Life", year: "1900", tags: ["action", "resourcefulness", "courage"] },

  // Friedrich Nietzsche
  { text: "He who has a why to live can bear almost any how.", author: "Friedrich Nietzsche", source: "Twilight of the Idols", year: "1888", tags: ["purpose", "meaning", "resilience"] },
  { text: "That which does not kill us makes us stronger.", author: "Friedrich Nietzsche", source: "Twilight of the Idols", year: "1888", tags: ["resilience", "strength", "growth"] },

  // Leonardo da Vinci
  { text: "Learning never exhausts the mind.", author: "Leonardo da Vinci", source: "Notebooks", year: "1500s", tags: ["learning", "growth", "mind"] },
  { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci", source: "Notebooks (attributed)", year: "1500s", tags: ["simplicity", "elegance", "wisdom"] },

  // Socrates
  { text: "The only true wisdom is in knowing you know nothing.", author: "Socrates", source: "Plato's Apology", year: "399 BC", tags: ["wisdom", "humility", "knowledge"] },
  { text: "An unexamined life is not worth living.", author: "Socrates", source: "Plato's Apology", year: "399 BC", tags: ["reflection", "life", "purpose"] },

  // Benjamin Franklin
  { text: "Tell me and I forget. Teach me and I remember. Involve me and I learn.", author: "Benjamin Franklin", source: "Attributed in Poor Richard's Almanack", year: "1736", tags: ["learning", "teaching", "experience"] },
  { text: "An investment in knowledge pays the best interest.", author: "Benjamin Franklin", source: "Poor Richard's Almanack", year: "1736", tags: ["knowledge", "education", "investment"] },

  // Marie Curie
  { text: "Nothing in life is to be feared, everything is to be understood. Then life is worth living.", author: "Marie Curie", source: "Pierre Curie (memoir)", year: "1923", tags: ["courage", "understanding", "life"] },
  { text: "Be less curious about people and more curious about ideas.", author: "Marie Curie", source: "Laboratory Notebook", year: "1905", tags: ["curiosity", "ideas", "science"] },

  // Thomas Edison
  { text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison", source: "Interview in Harper's Monthly", year: "1896", tags: ["failure", "perseverance", "innovation"] },
  { text: "Genius is one percent inspiration and ninety-nine percent perspiration.", author: "Thomas Edison", source: "Interview with The New York Times", year: "1903", tags: ["hard work", "genius", "perseverance"] },

  // Oprah Winfrey
  { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey", source: "O Magazine", year: "2002", tags: ["wisdom", "resilience", "growth"] },
  { text: "The biggest adventure you can take is to live the life of your dreams.", author: "Oprah Winfrey", source: "What I Know for Sure", year: "2014", tags: ["dreams", "adventure", "life"] },
  { text: "You become what you believe.", author: "Oprah Winfrey", source: "Interview on The Oprah Winfrey Show", year: "2000", tags: ["belief", "mindset", "transformation"] },

  // Walt Disney
  { text: "All our dreams can come true, if we have the courage to pursue them.", author: "Walt Disney", source: "Interview with TV Guide", year: "1956", tags: ["dreams", "courage", "pursuit"] },
  { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney", source: "Company Meeting (attributed)", year: "1955", tags: ["action", "beginning", "productivity"] },

  // Malcolm X
  { text: "A man who stands for nothing will fall for anything.", author: "Malcolm X", source: "Speech at the Audubon Ballroom", year: "1964", tags: ["principles", "conviction", "integrity"] },
  { text: "Education is our passport to the future, for tomorrow belongs to the people who prepare for it today.", author: "Malcolm X", source: "Speech at the Militant Labor Forum", year: "1962", tags: ["education", "preparation", "future"] },

  // Rosa Parks
  { text: "You must never be fearful about what you are doing when it is right.", author: "Rosa Parks", source: "My Story", year: "1992", tags: ["courage", "justice", "fear"] },
  { text: "I have learned over the years that when one's mind is made up, fear diminishes.", author: "Rosa Parks", source: "Interview with NPR", year: "1990", tags: ["courage", "decision", "fear"] },

  // Mother Teresa
  { text: "Not all of us can do great things. But we can do small things with great love.", author: "Mother Teresa", source: "A Gift for God", year: "1975", tags: ["love", "kindness", "service"] },
  { text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", author: "Mother Teresa", source: "Speech at the United Nations", year: "1985", tags: ["love", "kindness", "happiness"] },

  // Dalai Lama
  { text: "Happiness is not something ready-made. It comes from your own actions.", author: "Dalai Lama", source: "The Art of Happiness", year: "1998", tags: ["happiness", "action", "mindset"] },
  { text: "Be kind whenever possible. It is always possible.", author: "Dalai Lama", source: "The Art of Happiness", year: "1998", tags: ["kindness", "compassion", "wisdom"] },
  { text: "The goal is not to be better than the other man, but your previous self.", author: "Dalai Lama", source: "Ethics for the New Millennium", year: "1999", tags: ["self-improvement", "growth", "comparison"] },

  // Bruce Lee
  { text: "Be water, my friend.", author: "Bruce Lee", source: "Interview with Pierre Berton", year: "1971", tags: ["flexibility", "adaptability", "wisdom"] },
  { text: "Absorb what is useful, discard what is not, add what is uniquely your own.", author: "Bruce Lee", source: "Tao of Jeet Kune Do", year: "1975", tags: ["learning", "individuality", "growth"] },

  // Marcus Aurelius
  { text: "You have power over your mind — not outside events. Realize this, and you will find strength.", author: "Marcus Aurelius", source: "Meditations", year: "180 AD", tags: ["mind", "strength", "stoicism"] },
  { text: "The best revenge is not to be like your enemy.", author: "Marcus Aurelius", source: "Meditations", year: "180 AD", tags: ["character", "dignity", "restraint"] },

  // Rumi
  { text: "The wound is the place where the light enters you.", author: "Rumi", source: "Mathnawi", year: "1250", tags: ["healing", "growth", "wisdom"] },
  { text: "Let yourself be silently drawn by the strange pull of what you really love. It will not lead you astray.", author: "Rumi", source: "Mathnawi", year: "1250", tags: ["passion", "love", "purpose"] },

  // Seneca
  { text: "Luck is what happens when preparation meets opportunity.", author: "Seneca", source: "Moral Letters to Lucilius", year: "65 AD", tags: ["luck", "preparation", "opportunity"] },
  { text: "Every new beginning comes from some other beginning's end.", author: "Seneca", source: "Moral Letters to Lucilius", year: "65 AD", tags: ["change", "beginning", "cycles"] },

  // William Shakespeare
  { text: "We know what we are, but know not what we may be.", author: "William Shakespeare", source: "Hamlet", year: "1603", tags: ["potential", "future", "self-awareness"] },
  { text: "Love all, trust a few, do wrong to none.", author: "William Shakespeare", source: "All's Well That Ends Well", year: "1602", tags: ["love", "trust", "integrity"] },
  { text: "Our doubts are traitors, and make us lose the good we oft might win, by fearing to attempt.", author: "William Shakespeare", source: "Measure for Measure", year: "1604", tags: ["courage", "doubt", "action"] },

  // Ralph Waldo Emerson
  { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson", source: "Self-Reliance", year: "1841", tags: ["authenticity", "individuality", "courage"] },
  { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson", source: "Essays: Second Series", year: "1844", tags: ["inner strength", "potential", "self"] },

  // Lao Tzu
  { text: "A journey of a thousand miles begins with a single step.", author: "Lao Tzu", source: "Tao Te Ching", year: "600 BC", tags: ["beginning", "journey", "action"] },
  { text: "The master has failed more times than the beginner has even tried.", author: "Lao Tzu", source: "Tao Te Ching", year: "600 BC", tags: ["failure", "mastery", "perseverance"] },
  { text: "When I let go of what I am, I become what I might be.", author: "Lao Tzu", source: "Tao Te Ching", year: "600 BC", tags: ["transformation", "letting go", "potential"] },

  // Henry Ford
  { text: "Whether you think you can, or you think you can't — you're right.", author: "Henry Ford", source: "My Life and Work", year: "1922", tags: ["mindset", "belief", "self-confidence"] },

  // John Lennon
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon", source: "Beautiful Boy (Darling Boy)", year: "1980", tags: ["life", "plans", "acceptance"] },
  { text: "Imagine all the people living life in peace. You may say I'm a dreamer, but I'm not the only one.", author: "John Lennon", source: "Imagine", year: "1971", tags: ["peace", "dreams", "hope"] },

  // C.S. Lewis
  { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis", source: "Attributed in biographical accounts", year: "1950s", tags: ["dreams", "goals", "age"] },
  { text: "We are what we believe we are.", author: "C.S. Lewis", source: "The Chronicles of Narnia", year: "1950", tags: ["belief", "identity", "self"] },

  // J.K. Rowling
  { text: "It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all — in which case, you fail by default.", author: "J.K. Rowling", source: "Harvard Commencement Speech", year: "2008", tags: ["failure", "courage", "life"] },

  // Elon Musk
  { text: "When something is important enough, you do it even if the odds are not in your favor.", author: "Elon Musk", source: "Interview with TED", year: "2017", tags: ["courage", "determination", "importance"] },
  { text: "Persistence is very important. You should not give up unless you are forced to give up.", author: "Elon Musk", source: "Interview at MIT", year: "2013", tags: ["persistence", "perseverance", "determination"] },

  // Barack Obama
  { text: "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for.", author: "Barack Obama", source: "Speech in New Hampshire", year: "2008", tags: ["change", "action", "responsibility"] },
  { text: "Yes, we can.", author: "Barack Obama", source: "Campaign Speech", year: "2008", tags: ["hope", "belief", "unity"] },

  // Malala Yousafzai
  { text: "One child, one teacher, one book, one pen can change the world.", author: "Malala Yousafzai", source: "Speech at the United Nations", year: "2013", tags: ["education", "change", "courage"] },
  { text: "When the whole world is silent, even one voice becomes powerful.", author: "Malala Yousafzai", source: "I Am Malala", year: "2013", tags: ["voice", "courage", "power"] },

  // Stephen Hawking
  { text: "However difficult life may seem, there is always something you can do and succeed at.", author: "Stephen Hawking", source: "Speech at Cambridge", year: "2016", tags: ["hope", "perseverance", "life"] },
  { text: "Intelligence is the ability to adapt to change.", author: "Stephen Hawking", source: "A Brief History of Time (attributed)", year: "1988", tags: ["intelligence", "change", "adaptation"] },

  // Anne Frank
  { text: "How wonderful it is that nobody need wait a single moment before starting to improve the world.", author: "Anne Frank", source: "The Diary of a Young Girl", year: "1947", tags: ["action", "change", "hope"] },
  { text: "In spite of everything, I still believe that people are really good at heart.", author: "Anne Frank", source: "The Diary of a Young Girl", year: "1947", tags: ["goodness", "hope", "humanity"] },

  // Desmond Tutu
  { text: "Hope is being able to see that there is light despite all of the darkness.", author: "Desmond Tutu", source: "The Book of Forgiving", year: "2014", tags: ["hope", "light", "perseverance"] },
  { text: "If you want peace, you don't talk to your friends. You talk to your enemies.", author: "Desmond Tutu", source: "Speech at the World Council of Churches", year: "1985", tags: ["peace", "courage", "dialogue"] },

  // Jimi Hendrix
  { text: "The whole world is watching, and we're all looking at the same thing. Let's make it beautiful.", author: "Jimi Hendrix", source: "Interview with Rolling Stone", year: "1969", tags: ["beauty", "unity", "vision"] },
  { text: "Knowledge speaks, but wisdom listens.", author: "Jimi Hendrix", source: "Attributed in interviews", year: "1960s", tags: ["wisdom", "listening", "knowledge"] },

  // Coco Chanel
  { text: "The most courageous act is still to think for yourself. Aloud.", author: "Coco Chanel", source: "Attributed in interviews", year: "1960s", tags: ["courage", "thinking", "voice"] },
  { text: "Don't spend time beating on a wall, hoping to transform it into a door.", author: "Coco Chanel", source: "Attributed in biographical accounts", year: "1950s", tags: ["acceptance", "wisdom", "action"] },

  // Martin Luther King Jr.
  { text: "Injustice anywhere is a threat to justice everywhere.", author: "Martin Luther King Jr.", source: "Letter from Birmingham Jail", year: "1963", tags: ["justice", "equality", "responsibility"] },
  { text: "Hate cannot drive out hate; only love can do that.", author: "Martin Luther King Jr.", source: "Strength to Love", year: "1963", tags: ["love", "hate", "peace"] },

  // Nelson Mandela
  { text: "There can be no keener revelation of a society's soul than the way in which it treats its children.", author: "Nelson Mandela", source: "Speech at the Children's Defence Fund", year: "1995", tags: ["children", "society", "compassion"] },

  // Mother Teresa
  { text: "If you judge people, you have no time to love them.", author: "Mother Teresa", source: "A Gift for God", year: "1975", tags: ["love", "judgment", "compassion"] },

  // Socrates
  { text: "To find yourself, think for yourself.", author: "Socrates", source: "Plato's Dialogues (attributed)", year: "400 BC", tags: ["self-discovery", "thinking", "individuality"] },

  // Mark Twain
  { text: "Whenever you find yourself on the side of the majority, it is time to pause and reflect.", author: "Mark Twain", source: "A Connecticut Yankee in King Arthur's Court", year: "1889", tags: ["reflection", "independence", "wisdom"] },

  // Maya Angelou
  { text: "I've learned that making a 'living' is not the same thing as 'making a life'.", author: "Maya Angelou", source: "Wouldn't Take Nothing for My Journey Now", year: "1993", tags: ["life", "purpose", "meaning"] },
  { text: "Success is liking yourself, liking what you do, and liking how you do it.", author: "Maya Angelou", source: "Interview with Oprah", year: "1989", tags: ["success", "self-love", "fulfillment"] },

  // Buddha
  { text: "Peace comes from within. Do not seek it without.", author: "Buddha", source: "Dhammapada", year: "400 BC", tags: ["peace", "inner self", "wisdom"] },
  { text: "The mind is everything. What you think you become.", author: "Buddha", source: "Dhammapada", year: "400 BC", tags: ["mind", "thought", "transformation"] },
  { text: "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.", author: "Buddha", source: "Dhammapada", year: "400 BC", tags: ["happiness", "sharing", "abundance"] },

  // Oscar Wilde
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde", source: "Attributed in conversations", year: "1890s", tags: ["authenticity", "individuality", "self"] },
  { text: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde", source: "The Soul of Man Under Socialism", year: "1891", tags: ["life", "purpose", "existence"] },

  // Jane Austen
  { text: "There is no charm equal to tenderness of heart.", author: "Jane Austen", source: "Emma", year: "1815", tags: ["kindness", "heart", "charm"] },
  { text: "It isn't what we say or think that defines us, but what we do.", author: "Jane Austen", source: "Sense and Sensibility", year: "1811", tags: ["action", "character", "integrity"] },

  // Viktor Frankl
  { text: "When we are no longer able to change a situation, we are challenged to change ourselves.", author: "Viktor Frankl", source: "Man's Search for Meaning", year: "1946", tags: ["change", "resilience", "meaning"] },
  { text: "Those who have a 'why' to live, can bear with almost any 'how'.", author: "Viktor Frankl", source: "Man's Search for Meaning", year: "1946", tags: ["purpose", "meaning", "resilience"] },

  // Ernest Hemingway
  { text: "There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.", author: "Ernest Hemingway", source: "True at First Light", year: "1950s", tags: ["self-improvement", "growth", "humility"] },

  // Walt Whitman
  { text: "Keep your face always toward the sunshine — and shadows will fall behind you.", author: "Walt Whitman", source: "Leaves of Grass", year: "1855", tags: ["optimism", "hope", "sunshine"] },
  { text: "I contain multitudes.", author: "Walt Whitman", source: "Leaves of Grass", year: "1855", tags: ["complexity", "self", "identity"] },

  // Frida Kahlo
  { text: "I used to think I was the strangest person in the world because I thought so differently from other people.", author: "Frida Kahlo", source: "Diary of Frida Kahlo", year: "1950s", tags: ["individuality", "acceptance", "self-love"] },
  { text: "Nothing is worth more than laughter. It is freedom and it is lightness.", author: "Frida Kahlo", source: "Attributed in interviews", year: "1940s", tags: ["laughter", "freedom", "joy"] },

  // Robin Williams
  { text: "No matter what people tell you, words and ideas can change the world.", author: "Robin Williams", source: "Dead Poets Society", year: "1989", tags: ["ideas", "change", "words"] },

  // Aung San Suu Kyi
  { text: "It is not power that corrupts but fear. Fear of losing power corrupts those who wield it.", author: "Aung San Suu Kyi", source: "Speech at Rangoon University", year: "1990", tags: ["fear", "power", "courage"] },

  // Voltaire
  { text: "Judge a man by his questions rather than his answers.", author: "Voltaire", source: "Attributed in philosophical writings", year: "1764", tags: ["questions", "wisdom", "judgment"] },
  { text: "I have decided to stick with love. Hate is too great a burden to bear.", author: "Voltaire", source: "Letters (attributed)", year: "1750s", tags: ["love", "hate", "burden"] },

  // Albert Schweitzer
  { text: "The only way to find true happiness is to risk being completely cut open.", author: "Albert Schweitzer", source: "Out of My Life and Thought", year: "1933", tags: ["happiness", "vulnerability", "courage"] },

  // Indira Gandhi
  { text: "There are two kinds of people: those who do the work and those who take the credit. Try to be in the first group; there is less competition there.", author: "Indira Gandhi", source: "Speech at the Indian National Congress", year: "1972", tags: ["work", "credit", "integrity"] },

  // Harriet Tubman
  { text: "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.", author: "Harriet Tubman", source: "Attributed in biographical accounts", year: "1890s", tags: ["dreams", "strength", "change"] },

  // Confucius
  { text: "When we see men of worth, we should think of equaling them; when we see men of a contrary character, we should turn inwards and examine ourselves.", author: "Confucius", source: "The Analects", year: "500 BC", tags: ["self-reflection", "growth", "comparison"] },

  // Thomas Jefferson
  { text: "I cannot live without books.", author: "Thomas Jefferson", source: "Letter to John Adams", year: "1815", tags: ["books", "learning", "passion"] },
  { text: "Honesty is the first chapter in the book of wisdom.", author: "Thomas Jefferson", source: "Letter to Nathaniel Macon", year: "1815", tags: ["honesty", "wisdom", "integrity"] },

  // Mahatma Gandhi
  { text: "The future depends on what you do today.", author: "Mahatma Gandhi", source: "Harijan", year: "1932", tags: ["action", "future", "responsibility"] },
  { text: "Strength does not come from physical capacity. It comes from an indomitable will.", author: "Mahatma Gandhi", source: "Young India", year: "1924", tags: ["strength", "will", "perseverance"] },

  // Steve Jobs
  { text: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.", author: "Steve Jobs", source: "Stanford Commencement Address", year: "2005", tags: ["work", "satisfaction", "excellence"] },

  // Oprah Winfrey
  { text: "Doing the best at this moment puts you in the best place for the next moment.", author: "Oprah Winfrey", source: "Interview with 'O Magazine'", year: "2006", tags: ["present", "excellence", "growth"] },
];

export default function QuotesClient() {
  const [search, setSearch] = useState("");
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null);
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const query = search.toLowerCase().trim();
    return quotes.filter((q) => {
      const matchSearch = !query || q.text.toLowerCase().includes(query) || q.author.toLowerCase().includes(query) || q.tags.some(t => t.includes(query));
      const matchTag = !activeTag || q.tags.includes(activeTag);
      return matchSearch && matchTag;
    });
  }, [search, activeTag]);

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    quotes.forEach((q) => q.tags.forEach((t) => tagSet.add(t)));
    return Array.from(tagSet).sort();
  }, []);

  const todayQuote = useMemo(() => {
    const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
    return quotes[dayOfYear % quotes.length];
  }, []);

  return (
    <ToolLayout {...metadata}>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        Search famous quotes by person name, quote text, or keyword. Each quote includes source and historical date.
      </p>

      {/* Quote of the day */}
      <div className="mt-4 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 p-4 dark:from-blue-950 dark:to-purple-950">
        <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          Quote of the Day
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
          onChange={(e) => { setSearch(e.target.value); setActiveTag(null); }}
          placeholder="Search by name, quote, or keyword (e.g., courage, wisdom, life)..."
          className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-900 dark:placeholder:text-zinc-600"
        />
      </div>

      {/* Tag cloud */}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {allTags.filter(t => !search).slice(0, 30).map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            className={`rounded-full px-2.5 py-0.5 text-xs transition-colors ${
              activeTag === tag
                ? "bg-blue-600 text-white"
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Results count */}
      {search && (
        <div className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          {filtered.length} quote{filtered.length !== 1 ? "s" : ""} found
        </div>
      )}

      {/* Quotes list */}
      {filtered.length > 0 ? (
        <div className="mt-4 space-y-3">
          {filtered.slice(0, 50).map((q, i) => (
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
                  {q.tags.map((tag) => (
                    <button
                      key={tag}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSearch(tag);
                        setSelectedQuote(null);
                        setActiveTag(null);
                      }}
                      className="rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-600 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800"
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          {filtered.length > 50 && (
            <div className="text-center text-sm text-zinc-400 dark:text-zinc-500">
              Showing first 50 of {filtered.length} results. Refine your search to see more specific results.
            </div>
          )}
        </div>
      ) : (
        <div className="mt-12 text-center text-zinc-400 dark:text-zinc-500">
          <p className="text-lg">No quotes found</p>
          <p className="mt-1 text-sm">Try a different search term or tag.</p>
        </div>
      )}
    </ToolLayout>
  );
}

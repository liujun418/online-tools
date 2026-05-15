/** Local lateral thinking puzzle bank — fallback when Gemini API is unavailable. */

export interface Puzzle {
  id: string;
  category: "classic" | "horror" | "brain-hole";
  difficulty: "easy" | "medium" | "hard";
  scenario: string;
  hint: string;
  answer: string;
  twist: string;
}

export const puzzles: Puzzle[] = [
  // ── Classic Mystery (6) ──
  {
    id: "classic-01",
    category: "classic",
    difficulty: "medium",
    scenario:
      "A man is found dead in a locked room with 53 bicycles scattered around him. There is no sign of forced entry. How did he die?",
    hint: "Think about what the bicycles actually represent — they're not real bicycles.",
    answer:
      "The man was cheating at poker. He was caught with an extra card, and the other players shot him. The '53 bicycles' refers to the Bicycle brand of playing cards — a standard deck has 52 cards, plus the one he was hiding makes 53.",
    twist: "Bicycles = Bicycle brand playing cards, not actual bicycles.",
  },
  {
    id: "classic-02",
    category: "classic",
    difficulty: "easy",
    scenario:
      "A woman enters a restaurant and orders albatross soup. She takes one spoonful, then immediately leaves the restaurant and kills herself. Why?",
    hint: "What she tasted confirmed a terrible truth about her past — something she had been hoping wasn't real.",
    answer:
      "Years ago, the woman was shipwrecked on an island. Her companion told her the meat they ate was albatross to keep her alive, and later died. At the restaurant, she realized that real albatross tastes completely different — meaning she had actually eaten her companion's flesh to survive. The horror of this revelation drove her to suicide.",
    twist: "The 'albatross' she ate years ago was actually her dead companion.",
  },
  {
    id: "classic-03",
    category: "classic",
    difficulty: "medium",
    scenario:
      "A man pushes his car to a hotel. When he arrives, he knows he is bankrupt. Why?",
    hint: "He's not literally bankrupt — it's about the board game he's playing.",
    answer:
      "The man is playing Monopoly. He landed on a hotel space with no money to pay. By pushing his car (token) to the hotel, he's admitting he can't afford it and loses the game — going bankrupt.",
    twist: "It's a game of Monopoly — 'car' is his game token, 'hotel' is on the board.",
  },
  {
    id: "classic-04",
    category: "classic",
    difficulty: "hard",
    scenario:
      "A man lives on the 10th floor. Every morning he takes the elevator down to the lobby and goes to work. When he returns, he takes the elevator to the 5th floor and walks the remaining 5 flights — except on rainy days when he goes straight to the 10th floor. Why?",
    hint: "He has an unusual physical limitation that the rain helps him overcome.",
    answer:
      "The man is very short. He can reach the ground floor button and the 5th floor button in the elevator, but he can't reach the 10th floor button. On rainy days, he carries an umbrella, which he uses to press the 10th floor button.",
    twist: "He's too short to reach the higher button — the umbrella lets him press it.",
  },
  {
    id: "classic-05",
    category: "classic",
    difficulty: "easy",
    scenario:
      "A father and son are in a car accident. The father dies. The boy is rushed to the hospital. The surgeon enters and says, 'I cannot operate on this boy — he is my son.' How is this possible?",
    hint: "Don't assume the surgeon's gender.",
    answer:
      "The surgeon is the boy's mother. The puzzle relies on the listener's unconscious gender bias — assuming the surgeon must be male.",
    twist: "The surgeon is the boy's mother.",
  },
  {
    id: "classic-06",
    category: "classic",
    difficulty: "medium",
    scenario:
      "A woman buys a new pair of shoes, goes to work, and dies. What happened?",
    hint: "Think about where she works and what the shoes signify in that context.",
    answer:
      "The woman is a circus performer — specifically a knife thrower's assistant. The new shoes have higher heels than she's used to, making her slightly taller. When the knife thrower aims at his usual spot, the knife hits her in a vital area instead of the board behind her.",
    twist: "New shoes changed her height, making the knife thrower's aim fatally off.",
  },

  // ── Horror Dark (6) ──
  {
    id: "horror-01",
    category: "horror",
    difficulty: "medium",
    scenario:
      "A woman wakes up in the middle of the night. She hears her mother calling her from the kitchen. As she walks downstairs, she passes her mother's bedroom and sees her mother sleeping in bed. Yet the voice from the kitchen continues. What is happening?",
    hint: "One of them is not actually her mother.",
    answer:
      "The woman calling from the kitchen is an intruder who has been living in the house secretly. She knows the woman's name and imitates the mother's voice to lure her downstairs. The real mother is asleep in bed, unaware.",
    twist: "An intruder has been secretly living in the house, imitating the mother's voice.",
  },
  {
    id: "horror-02",
    category: "horror",
    difficulty: "easy",
    scenario:
      "A man receives a phone call from his wife, who screams and then goes silent. He rushes home, but the house is empty. No sign of struggle. The police find nothing. Months later, he moves the couch and finds a small door in the wall. He opens it and screams. What did he find?",
    hint: "His wife never left the house — she was trapped in a space he never thought to check.",
    answer:
      "Behind the small door was a crawlspace where his wife had accidentally trapped herself while cleaning. She had her phone with her and called him, but dropped it when she fell. She died in there, and her body was in the crawlspace all along — right under the living room where he had been sitting for months.",
    twist: "His wife was dead in an undiscovered crawlspace the entire time.",
  },
  {
    id: "horror-03",
    category: "horror",
    difficulty: "hard",
    scenario:
      "A girl is home alone at night. She hears a knock on the door. Looking through the peephole, she sees a man standing there. She doesn't open the door. The knocking continues for hours — soft, rhythmic, never stopping. In the morning, she looks out and finds the man gone, but something on the porch makes her blood run cold. What did she find?",
    hint: "Why would someone knock continuously without leaving? They were physically unable to stop.",
    answer:
      "The man had been in a car accident outside her house. He crawled to her door for help, but was too injured to speak or stand. The 'knocking' was his head lolling against the door as he sat slumped against it. He had died there during the night. What she found was a trail of blood leading from the road to her doorstep — and the realization she had listened to a man slowly die on her porch.",
    twist: "The knocking was an injured man's head hitting the door as he slowly died.",
  },
  {
    id: "horror-04",
    category: "horror",
    difficulty: "medium",
    scenario:
      "Every night at exactly 3:03 AM, a man is woken by the sound of his dog scratching at his bedroom door. He opens the door, lets the dog in, and goes back to sleep. One night, he wakes up at 3:03 AM. The dog is already in the room, sleeping on the floor. But the scratching continues at the door. Who — or what — is scratching?",
    hint: "If the dog is already inside, what's outside learned the dog's routine?",
    answer:
      "For weeks, the scratching was never the dog. Someone — an intruder — had been living in the house's basement, coming up at night. They had learned the man's routine: at 3:03, he'd open the door and let 'the dog' in. Each night, the intruder entered the bedroom while the man was half-asleep. On the final night, the intruder had already let the real dog out and was now trying to get into the room alone.",
    twist: "An intruder was using the dog's scratching routine to enter the bedroom undetected.",
  },
  {
    id: "horror-05",
    category: "horror",
    difficulty: "easy",
    scenario:
      "A person takes a selfie in a dimly lit room. When they look at the photo, they see someone standing behind them in the background — but they were completely alone in the house. They turn around. Nothing. But the photo clearly shows another person. Who was it?",
    hint: "Check the reflection in the photo more carefully — it's not a ghost.",
    answer:
      "The 'person' in the background was the person's own reflection in a window or mirror behind them. The dim lighting and camera angle made it appear as if another person was standing there, when in reality it was just their own reflection captured at an odd angle.",
    twist: "It was their own distorted reflection in a window behind them.",
  },
  {
    id: "horror-06",
    category: "horror",
    difficulty: "medium",
    scenario:
      "A babysitter puts the children to bed and watches TV. A strange clown statue in the corner of the living room creeps her out. She calls the father and asks, 'Is it okay if I cover the clown statue? It's really unsettling.' The father pauses, then says in a shaking voice: 'Get the children and run out of the house RIGHT NOW. We don't own a clown statue.' What is really in the living room?",
    hint: "The 'statue' moved when they weren't looking — it's not a statue at all.",
    answer:
      "The 'clown statue' was an intruder dressed as a clown — a real person who had broken into the house and was standing perfectly still in the corner, watching the babysitter. The father recognized immediately that no such statue existed, meaning a stranger was inside with his children.",
    twist: "The clown statue was a live intruder standing motionless in the room.",
  },

  // ── Brain Hole Fun (6) ──
  {
    id: "brain-01",
    category: "brain-hole",
    difficulty: "easy",
    scenario:
      "A man throws a ball as hard as he can. It comes straight back to him without hitting anything or anyone else. How?",
    hint: "He's not throwing it horizontally — think vertically.",
    answer:
      "He threw the ball straight up into the air. Gravity brought it straight back down to him.",
    twist: "He threw the ball straight up, and gravity returned it.",
  },
  {
    id: "brain-02",
    category: "brain-hole",
    difficulty: "medium",
    scenario:
      "A man walks into a bar and asks for a glass of water. The bartender pulls out a gun and points it at him. The man says 'Thank you' and leaves. Why?",
    hint: "The man wasn't asking for water because he was thirsty — he had a different problem entirely.",
    answer:
      "The man had hiccups. He asked for water hoping it would cure them. The bartender recognized this and scared him with the gun instead — the shock cured the hiccups instantly. The man thanked him for the unconventional but effective treatment.",
    twist: "The man had hiccups; the gun scare was the cure.",
  },
  {
    id: "brain-03",
    category: "brain-hole",
    difficulty: "easy",
    scenario:
      "A man lives in a house with all four walls facing south. A bear walks by. What color is the bear?",
    hint: "Think about where you'd need to be for all four walls to face south.",
    answer:
      "The only place where a house can have all four walls facing south is at the North Pole. Bears at the North Pole are polar bears. Polar bears are white.",
    twist: "The house is at the North Pole; the only bear there is a white polar bear.",
  },
  {
    id: "brain-04",
    category: "brain-hole",
    difficulty: "hard",
    scenario:
      "A man is lying dead in a field with an unopened backpack next to him. There are no footprints or tracks leading to or from the body. How did he die?",
    hint: "He didn't walk there. He fell from above.",
    answer:
      "The man was skydiving. His parachute failed to open. The 'unopened backpack' was his parachute pack. There were no footprints because he fell from the sky and never touched the ground alive.",
    twist: "He fell from the sky — the backpack was his unopened parachute.",
  },
  {
    id: "brain-05",
    category: "brain-hole",
    difficulty: "medium",
    scenario:
      "A man is trapped in a room with no windows and no doors. The only objects in the room are a table and a mirror. How does he escape?",
    hint: "The solution is a pun — think about what you can do with each object phonetically.",
    answer:
      "He looks in the mirror and sees what he saw. He takes the saw from the mirror's reflection (wordplay: 'saw' = past tense of 'see' AND a cutting tool). He uses the saw to cut the table in half. Two halves make a whole (hole). He climbs through the hole to escape. It's a classic riddle using phonetic wordplay.",
    twist: "Pure wordplay: saw (mirror) → saw (tool) → cut table → two halves = whole = hole.",
  },
  {
    id: "brain-06",
    category: "brain-hole",
    difficulty: "easy",
    scenario:
      "A rooster lays an egg on the exact peak of a triangular roof. The roof's left side slopes east, the right side slopes west. Which side does the egg roll down?",
    hint: "Read the first sentence again — very carefully.",
    answer:
      "Roosters don't lay eggs. Only hens (female chickens) lay eggs. The premise is biologically impossible, so the egg doesn't roll at all.",
    twist: "Roosters are male and don't lay eggs.",
  },
];

export function getPuzzleById(id: string): Puzzle | undefined {
  return puzzles.find((p) => p.id === id);
}

export function getRandomPuzzle(category?: string): Puzzle {
  const pool = category
    ? puzzles.filter((p) => p.category === category)
    : puzzles;
  const index = Math.floor(Math.random() * pool.length);
  return pool[index];
}

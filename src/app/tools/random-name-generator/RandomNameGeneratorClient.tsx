"use client";

import { useState, useCallback } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "Random Name Generator",
  description:
    "Generate random names for characters, profiles, or testing.",
  keywords: [
    "random name generator",
    "name generator",
    "fake name generator",
    "character name generator",
    "random names",
  ],
};

const nameData: Record<string, { firstMale: string[]; firstFemale: string[]; last: string[] }> = {
  english: {
    firstMale: ["James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Thomas", "Charles", "Daniel", "Matthew", "Anthony", "Mark", "Steven", "Andrew", "Joshua", "Christopher", "Benjamin", "Edward"],
    firstFemale: ["Mary", "Patricia", "Jennifer", "Linda", "Barbara", "Elizabeth", "Susan", "Jessica", "Sarah", "Karen", "Nancy", "Lisa", "Betty", "Margaret", "Sandra", "Ashley", "Emily", "Donna", "Michelle", "Dorothy"],
    last: ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin"],
  },
  italian: {
    firstMale: ["Marco", "Luca", "Giovanni", "Alessandro", "Giuseppe", "Antonio", "Francesco", "Lorenzo", "Matteo", "Andrea", "Stefano", "Paolo", "Roberto", "Massimo", "Davide", "Simone", "Federico", "Nicola", "Vincenzo", "Pietro"],
    firstFemale: ["Sofia", "Giulia", "Aurora", "Alice", "Ginevra", "Emma", "Giorgia", "Greta", "Beatrice", "Anna", "Maria", "Francesca", "Chiara", "Elena", "Valentina", "Alessandra", "Silvia", "Laura", "Martina", "Lucia"],
    last: ["Rossi", "Russo", "Ferrari", "Esposito", "Bianchi", "Romano", "Colombo", "Ricci", "Marino", "Greco", "Bruno", "Gallo", "Conti", "De Luca", "Mancini", "Costa", "Giordano", "Rizzo", "Lombardi", "Moretti"],
  },
  spanish: {
    firstMale: ["Carlos", "José", "Miguel", "Juan", "Luis", "Pedro", "Jorge", "Diego", "Fernando", "Alejandro", "Rafael", "Antonio", "Manuel", "Francisco", "Javier", "Daniel", "Pablo", "Santiago", "Andrés", "Ricardo"],
    firstFemale: ["María", "Ana", "Carmen", "Laura", "Sofia", "Isabella", "Elena", "Lucia", "Paula", "Daniela", "Valentina", "Camila", "Gabriela", "Andrea", "Patricia", "Rosa", "Marta", "Claudia", "Natalia", "Alejandra"],
    last: ["García", "Rodríguez", "Martínez", "López", "González", "Hernández", "Pérez", "Sánchez", "Ramírez", "Torres", "Flores", "Rivera", "Gómez", "Díaz", "Cruz", "Morales", "Reyes", "Gutiérrez", "Ortiz", "Ramos"],
  },
  french: {
    firstMale: ["Jean", "Pierre", "Michel", "Philippe", "François", "Louis", "Nicolas", "David", "Christophe", "Daniel", "Patrick", "Olivier", "Thomas", "André", "René", "Bernard", "Laurent", "Sébastien", "Julien", "Antoine"],
    firstFemale: ["Marie", "Sophie", "Isabelle", "Nathalie", "Catherine", "Anne", "Chantal", "Françoise", "Monique", "Valérie", "Sandrine", "Céline", "Camille", "Léa", "Manon", "Juliette", "Margaux", "Océane", "Lucie", "Émilie"],
    last: ["Martin", "Bernard", "Thomas", "Petit", "Robert", "Richard", "Durand", "Dubois", "Moreau", "Laurent", "Simon", "Michel", "Lefebvre", "Leroy", "Roux", "David", "Bertrand", "Morel", "Fournier", "Girard"],
  },
  german: {
    firstMale: ["Hans", "Peter", "Klaus", "Wolfgang", "Michael", "Stefan", "Thomas", "Andreas", "Markus", "Christian", "Martin", "Jürgen", "Dieter", "Uwe", "Frank", "Bernd", "Rainer", "Werner", "Karl", "Heinrich"],
    firstFemale: ["Anna", "Maria", "Ursula", "Monika", "Elisabeth", "Sabine", "Renate", "Ingrid", "Brigitte", "Petra", "Claudia", "Susanne", "Andrea", "Karin", "Gisela", "Helga", "Irmgard", "Christa", "Barbara", "Margarete"],
    last: ["Müller", "Schmidt", "Schneider", "Fischer", "Weber", "Meyer", "Wagner", "Becker", "Schulz", "Hoffmann", "Schäfer", "Koch", "Bauer", "Richter", "Klein", "Wolf", "Schröder", "Neumann", "Schwarz", "Braun"],
  },
};

function getRandom(arr: string[]): string {
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  return arr[array[0] % arr.length];
}

export default function RandomNameGeneratorClient() {
  const [gender, setGender] = useState<"male" | "female" | "random">("random");
  const [origin, setOrigin] = useState("english");
  const [count, setCount] = useState(5);
  const [names, setNames] = useState<string[]>([]);

  const handleGenerate = useCallback(() => {
    const data = nameData[origin];
    if (!data) return;
    const g = gender === "random" ? (Math.random() < 0.5 ? "male" : "female") : gender;
    const firstPool = g === "male" ? data.firstMale : data.firstFemale;
    const newNames = Array.from({ length: count }, () => {
      const first = getRandom(firstPool);
      const last = getRandom(data.last);
      return `${first} ${last}`;
    });
    setNames(newNames);
  }, [origin, gender, count]);

  function handleCopy(name: string) {
    navigator.clipboard.writeText(name);
  }

  function handleCopyAll() {
    navigator.clipboard.writeText(names.join("\n"));
  }

  return (
    <ToolLayout {...metadata}>
      <div className="grid gap-4 sm:grid-cols-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Gender
          </label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value as "male" | "female" | "random")}
            className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="random">Random</option>
          </select>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Origin
          </label>
          <select
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
          >
            <option value="english">English</option>
            <option value="italian">Italian</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>
            <option value="german">German</option>
          </select>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Count
          </label>
          <input
            type="number"
            min={1}
            max={20}
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
          />
        </div>
        <div className="flex items-end">
          <button
            onClick={handleGenerate}
            className="w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            Generate
          </button>
        </div>
      </div>

      {names.length > 0 && (
        <div className="mt-6">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
              Generated Names
            </h3>
            <button
              onClick={handleCopyAll}
              className="rounded-lg bg-zinc-200 px-4 py-1.5 text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
            >
              Copy All
            </button>
          </div>
          <div className="space-y-2">
            {names.map((name, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <span className="text-zinc-700 dark:text-zinc-300">{name}</span>
                <button
                  onClick={() => handleCopy(name)}
                  className="ml-2 shrink-0 rounded bg-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
                >
                  Copy
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </ToolLayout>
  );
}

import { useEffect, useState } from "react";

export interface HighscoreEntry {
  id: string;
  name: string;
  score: number;
  accuracy: number;
  date: string;
}

const STORAGE_KEY = "pyrr-highscores";
const MAX_ENTRIES = 10;

const readEntries = (): HighscoreEntry[] => {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored ? (JSON.parse(stored) as HighscoreEntry[]) : [];
  } catch {
    return [];
  }
};

export const useHighscores = () => {
  const [entries, setEntries] = useState<HighscoreEntry[]>(() => readEntries());

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  }, [entries]);

  const addEntry = (payload: Omit<HighscoreEntry, "id" | "date">) => {
    const newEntry: HighscoreEntry = {
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
      ...payload
    };

    setEntries((prev) =>
      [...prev, newEntry]
        .sort((a, b) => b.score - a.score)
        .slice(0, MAX_ENTRIES)
    );
  };

  const reset = () => setEntries([]);

  return { entries, addEntry, reset };
};

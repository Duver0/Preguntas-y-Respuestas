import { useMemo, useState } from "react";
import type { Question } from "../data/questions";

export type QuizStatus = "idle" | "playing" | "finished";

export interface AnswerRecord {
  questionId: string;
  question: string;
  selected: number;
  correctOption: number;
  selectedLabel: string;
  correctLabel: string;
  wasCorrect: boolean;
  earnedPoints: number;
  category: string;
  totalScore: number;
  streakCount: number;
  bestStreak: number;
}

interface QuizOptions {
  rounds?: number;
  basePoints?: number;
  streakBonus?: number;
}

const shuffle = <T,>(list: T[]): T[] => {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

export const useQuizEngine = (
  pool: Question[],
  options: QuizOptions = {}
) => {
  const rounds = Math.min(options.rounds ?? 12, pool.length);
  const basePoints = options.basePoints ?? 100;
  const streakBonus = options.streakBonus ?? 15;

  const [status, setStatus] = useState<QuizStatus>("idle");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [history, setHistory] = useState<AnswerRecord[]>([]);
  const [lastAnswer, setLastAnswer] = useState<AnswerRecord | null>(null);
  const [failure, setFailure] = useState<AnswerRecord | null>(null);

  const currentQuestion = questions[currentIndex] ?? null;
  const totalRounds = questions.length;

  const accuracy = useMemo(() => {
    if (history.length === 0) return 0;
    const correct = history.filter((entry) => entry.wasCorrect).length;
    return Math.round((correct / history.length) * 100);
  }, [history]);

  const progress = useMemo(() => {
    if (!totalRounds) return 0;
    return history.length / totalRounds;
  }, [history.length, totalRounds]);

  const resetCoreState = () => {
    setQuestions([]);
    setCurrentIndex(0);
    setSelectedOption(null);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setHistory([]);
    setLastAnswer(null);
  };

  const clearFailure = () => setFailure(null);

  const start = () => {
    const picked = shuffle(pool).slice(0, rounds);
    setQuestions(picked);
    setStatus("playing");
    setCurrentIndex(0);
    setSelectedOption(null);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setHistory([]);
    setLastAnswer(null);
    setFailure(null);
  };

  const selectOption = (optionIndex: number) => {
    if (!currentQuestion || status !== "playing" || selectedOption !== null) {
      return;
    }

    const wasCorrect = optionIndex === currentQuestion.answer;
    let earnedPoints = 0;
    let totalScore = score;
    let streakCount = streak;
    let bestStreak = maxStreak;

    if (wasCorrect) {
      const nextStreak = streak + 1;
      earnedPoints = basePoints + nextStreak * streakBonus;
      setScore((prev) => prev + earnedPoints);
      setStreak(nextStreak);
      setMaxStreak((prev) => Math.max(prev, nextStreak));
      totalScore = score + earnedPoints;
      streakCount = nextStreak;
      bestStreak = Math.max(maxStreak, nextStreak);
    } else {
      totalScore = score;
      streakCount = streak;
      bestStreak = maxStreak;
      setStreak(0);
    }

    const record: AnswerRecord = {
      questionId: currentQuestion.id,
      question: currentQuestion.question,
      selected: optionIndex,
      correctOption: currentQuestion.answer,
      selectedLabel: currentQuestion.options[optionIndex],
      correctLabel: currentQuestion.options[currentQuestion.answer],
      wasCorrect,
      earnedPoints,
      category: currentQuestion.category,
      totalScore,
      streakCount,
      bestStreak
    };

    if (!wasCorrect) {
      setFailure(record);
      resetCoreState();
      setStatus("idle");
      return;
    }

    setHistory((prev) => [...prev, record]);
    setLastAnswer(record);
    setSelectedOption(optionIndex);
  };

  const goNext = () => {
    if (status !== "playing" || selectedOption === null) return;

    if (currentIndex + 1 < totalRounds) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setStatus("finished");
    }
  };

  const restart = () => {
    start();
  };

  return {
    status,
    questions,
    currentQuestion,
    currentIndex,
    totalRounds,
    score,
    streak,
    maxStreak,
    accuracy,
    selectedOption,
    history,
    lastAnswer,
    progress,
    failure,
    clearFailure,
    start,
    selectOption,
    goNext,
    restart
  };
};

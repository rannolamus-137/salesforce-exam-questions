import { createFileRoute } from "@tanstack/react-router";
import { QuizScreen } from "@/components/quiz-screen";

export const Route = createFileRoute("/quiz")({ component: QuizScreen });

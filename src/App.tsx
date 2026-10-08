import { Home } from "./home";
import { QuizScreen } from "./components/quiz-screen";
import { useRoute } from "./lib/route";

export function App() {
  const route = useRoute();
  return route === "quiz" ? <QuizScreen /> : <Home />;
}

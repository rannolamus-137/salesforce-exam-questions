import { useEffect, useState } from "react";

// Pages are switched with the part after "#" in the address (#/ and #/quiz).
// GitHub Pages only serves real files, so this keeps refresh and back/forward
// working without a server.

export type Route = "home" | "quiz";

function read(): Route {
  return window.location.hash.startsWith("#/quiz") ? "quiz" : "home";
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(read);
  useEffect(() => {
    const onChange = () => setRoute(read());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return route;
}

export function go(to: Route) {
  window.location.hash = to === "quiz" ? "#/quiz" : "#/";
  window.scrollTo(0, 0);
}

export const HOME_HREF = "#/";

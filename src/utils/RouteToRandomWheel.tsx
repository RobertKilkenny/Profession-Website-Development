import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const RouteToRandomWheel = () => {
  const query = new URLSearchParams(useLocation().search);
  const queryElements = query.get("elements");
  const queryCheat = query.get("cheat");
  let href = "https://robertkilkenny.github.io/Random-Wheel/";

  if (queryElements) {
    href = href + "?elements=" + queryElements;
    if (queryCheat) {
      href = href + "&cheat=" + queryCheat;
    }
  }

  useEffect(() => {
    window.location.href = href;
  }, [href]);

  return <div>Redirecting to the Random Wheel...</div>;
};

export default RouteToRandomWheel;

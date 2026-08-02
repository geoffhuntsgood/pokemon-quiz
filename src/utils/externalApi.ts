import type { BestTime } from "./types";

export const getTime = async (category: string) => {
  const response = await fetch(
    `https://geoff-server.onrender.com/quiz-best-time/${category}`,
    {
      mode: "no-cors"
    }
  );
  if (response.ok) {
    const result: BestTime = await response.json();
    return `Best: ${result.best_time} by ${result.player_name}`;
  } else {
    console.log(response.status);
    return "No best yet!";
  }
};

import type { BestTime } from "./types";

const url = "https://geoff-server.onrender.com/quiz-best-time/";

export const getTime = async (category: string) => {
  const response = await fetch(`${url}${category}`, {
    mode: "no-cors"
  });

  if (response.ok) {
    const result: BestTime = await response.json();
    return `Best: ${result.best_time} by ${result.player_name}`;
  } else {
    return "No best yet!";
  }
};

export const setTime = async (bestTime: BestTime) => {
  const response = await fetch(url, {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify(bestTime)
  });

  if (response.ok) {
    const result = await response.json();
    if (result.info) {
      return result.info;
    } else if (result.err) {
      return result.err;
    }
  } else {
    return "Times not updated!";
  }
};

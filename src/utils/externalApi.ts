import axios from "axios";
import type { BestTime } from "./types";

const url = "https://geoff-server.onrender.com/quiz-best-time/";

export const getTime = async (category: string) => {
  const response = await axios.get(`${url}${category}`);
  const data = response.data;
  if (data) {
    if (data.missing) {
      return "No best yet!";
    } else if (data.json_agg) {
      const best: BestTime = data.json_agg[0];
      return `Best: ${best.best_time} by ${best.player_name}`;
    } else {
      return "Can't get times";
    }
  } else {
    return "Can't get times!";
  }
};

export const setTime = async (bestTime: BestTime) => {
  const response = await axios.post(url, bestTime, {
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data = response.data;
  if (data) {
    if (data.info) {
      return `Saved time ${bestTime.best_time} for ${bestTime.player_name}`;
    } else if (data.err) {
      return data.err as string;
    } else {
      return "Time not saved";
    }
  } else {
    return "Time not saved!";
  }
};

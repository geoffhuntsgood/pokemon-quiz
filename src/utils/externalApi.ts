import axios from "axios";
import type { BestTime } from "./types";

const baseUrl = "https://geoff-server.onrender.com";

export const getTime = async (category: string) => {
  const response = await axios.get(`${baseUrl}/get-best-time/${category}`);

  switch (response.status) {
    case 500:
      return "Can't get times.";
    case 204:
      return "No best yet!";
    case 200: {
      const best: BestTime = response.data.json_agg[0];
      return `Best: ${best.best_time} by ${best.player_name}`;
    }
    default:
      return "Can't get times...";
  }
};

export const saveTime = async (bestTime: BestTime) => {
  const response = await axios.post(`${baseUrl}/save-best-time`, bestTime, {
    headers: {
      "Content-Type": "application/json"
    }
  });

  switch (response.status) {
    case 500:
      return "Couldn't save time :(";
    case 200:
      return response.data.msg;
    case 201:
      return `Saved ${bestTime.best_time} for ${bestTime.player_name}!`;
    default:
      return "Couldn't save time...";
  }
};

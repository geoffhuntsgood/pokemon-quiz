import axios from "axios";
import type { BestTime } from "./types";

const url = "https://geoff-server.onrender.com/quiz-best-time/";

export const getTime = async (category: string) => {
  axios
    .get(url, {
      params: {
        category
      }
    })
    .then((response) => {
      const data = response.data;
      if (data) {
        if (data.missing) {
          return "No best yet!";
        } else if (data.best) {
          const best: BestTime = data.best;
          return `Best: ${best.best_time} by ${best.player_name}`;
        }
      } else {
        return "Can't get times!";
      }
    });
};

export const setTime = async (bestTime: BestTime) => {
  axios
    .post(url, {
      headers: {
        "Content-Type": "application/json"
      },
      body: bestTime
    })
    .then((response) => {
      const data = response.data;
      if (data) {
        if (data.info) {
          return `Saved time ${bestTime.best_time} for ${bestTime.player_name}`;
        } else if (data.err) {
          return data.err;
        }
      } else {
        return "Time not saved!";
      }
    });
};

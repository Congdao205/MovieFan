// /api/getMovie.ts
import axios from "axios";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { slug } = req.query;

  try {
    const response = await axios.get(
      `${import.meta.env.VITE_MOVIE_DETAIL_URL}${slug}`,
      { headers: { Accept: "application/json" } }
    );

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Proxy API error:", error);
    res.status(500).json({ error: "Failed to fetch movie" });
  }
}
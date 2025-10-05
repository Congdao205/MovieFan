import { useParams } from "react-router-dom";
import type { EpisodeItem, Movies } from "../models/Movies";
import { useEffect, useRef, useState } from "react";
import { axiosCall } from "../plugin/axiosCall";
import { Play } from "lucide-react";
import Hls from 'hls.js';

export const Watch = () => {
  const { slug } = useParams<{ slug: string }>();
  const [movie, setMovie] = useState<Movies | null>(null);
  const [episodes, setEpisodes] = useState<EpisodeItem[]>([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Fetch movie + episodes
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const data = await axiosCall.get(
          `${import.meta.env.VITE_MOVIE_DETAIL_URL}${slug}`
        );
        setMovie(data.movie);
        const flatEpisodes = data.episodes?.[0]?.server_data || [];
        setEpisodes(flatEpisodes);
        setCurrentEpisodeIndex(0);
      } catch (error) {
        console.error("Error fetching movie:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchMovie();
  }, [slug]);

  // Setup video player
  useEffect(() => {
    if (!episodes.length || !videoRef.current) return;

    const src = episodes[currentEpisodeIndex]?.link_m3u8;

    if (!src) return;

    const video = videoRef.current;
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      video.play();
    } else if (Hls.isSupported()) {
      const hls = new Hls();  
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_LOADED, () => {
        video.play().catch(err => console.log("Play error:", err));;
      });
      return () => hls.destroy();
    }else {
        video.src = "";
    }

  }, [episodes, currentEpisodeIndex]);

  if (loading) {
    return <p className="text-white container mx-auto my-6">Đang tải...</p>;
  }

  if (!movie) {
    return <p className="text-white container mx-auto my-6">Không tìm thấy phim</p>;
  }

  const serverData = episodes;

  return (
    <div className="text-white container mx-auto my-6">
      <div className="rounded-lg border mb-5">
        <video ref={videoRef} controls className="w-full h-full rounded-lg" />
      </div>

      <div className="rounded-lg border">
        <div className="p-4">
          <h3 className="font-semibold mb-4">
            Danh sách tập phim ({movie.episode_total})
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {serverData.map((episode, idx) => {
              const isActive = idx === currentEpisodeIndex;
              return (
                <div
                  key={episode.slug}
                  className={`p-3 rounded-lg border cursor-pointer transition-all hover:bg-accent/50 
                    ${isActive ? "bg-primary/10 border-primary" : "bg-card border-border"}`}
                  onClick={() => setCurrentEpisodeIndex(idx)}
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <img
                        src={movie.thumb_url || "https://i.pinimg.com/1200x/d0/4a/b4/d04ab4a87c283f94fd6e156a6a405580.jpg"}
                        alt={episode.filename}
                        className="w-16 h-10 object-cover rounded"
                      />
                      {isActive && (
                        <div className="absolute inset-0 bg-primary/20 rounded flex items-center justify-center">
                          <Play className="h-4 w-4 text-primary" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">
                        {movie.episode_total === "1"
                          ? movie.name
                          : `${movie.name} Tập ${idx + 1}`}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

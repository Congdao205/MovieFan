import { useState } from "react";
import type { Movies } from "../../models/Movies";
import { useNavigate } from "react-router-dom";

type Props = {
    data: Movies;
}

export const MoviePoster = ({ data }: Props) => {
    const [showTrailer, setShowTrailer] = useState(false);
    const navigate = useNavigate();
    const getYouTubeEmbed = (url: string) => {
        const regExp = /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return match && match[1] ? `https://www.youtube.com/embed/${match[1]}` : "";
    }

    return (
        <div className="mb-12 relative">
            <div className="relative aspect-video bg-muted rounded-lg overflow-hidden mb-6">
                {!showTrailer ? (
                    <>
                        <img
                            src={data.thumb_url}
                            alt={data.name}
                            loading="lazy"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center gap-4">
                            {data.trailer_url && (
                                <button
                                    onClick={() => setShowTrailer(true)}
                                    className="px-4 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200"
                                >
                                    Trailer
                                </button>
                            )}

                            <button
                                onClick={() => navigate(`/watch/${data.slug}`)}
                                className="px-4 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700"
                            >
                                Xem ngay
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="relative w-full h-full">
                        <iframe
                            className="w-full h-full rounded-lg"
                            src={getYouTubeEmbed(data.trailer_url)}
                            title={data.name}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <button
                            onClick={() => setShowTrailer(false)}
                            className="absolute top-2 right-2 px-3 py-1 bg-black/70 text-white rounded hover:bg-black"
                        >
                            X
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

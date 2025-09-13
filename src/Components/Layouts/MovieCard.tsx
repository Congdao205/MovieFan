import { Card } from "./Card";
import { type Movies } from "../../models/Movies"


type Props = {
    data: Movies
}

export const MovieCard = ({ data }: Props) => {

    const getRating = (rating: number) => {
        if (!rating) return "0.0";
        return (rating/2).toFixed(1);
    }
    return (
        <div key={data.slug} className="group relative p-2 overflow-hidden rounded-2xl shadow-lg">
            {/* Card  */}
            <Card data={data} imageUrl={data.thumb_url || data.poster_url}></Card>

            {/* Rating badge */}
            <div className="absolute left-3 top-3 z-20 rounded-full bg-black/70 px-2 py-1 text-xs text-yellow-400 shadow">
                ⭐ {getRating(data.tmdb.vote_average)}
            </div>

            {/* Info bottom */}
            <div className="absolute bottom-4 left-3 z-20 text-white">
                <p className="mb-1 line-clamp-1 text-sm font-semibold md:text-base">
                    {data.name}
                </p>
            </div>
        </div>
    )
}

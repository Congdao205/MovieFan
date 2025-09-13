import { Star, StarBorder, StarHalf } from "@mui/icons-material";
import type { Movies } from "../../models/Movies";

type Props = {
    data: Movies
}

export const MovieRating = ({data} : Props) => {
    const renderLucideStars = (rating: number) => {
        const scaled = rating / 2;
        return Array.from({ length: 5 }).map((_, i) => {
            if (scaled  >= i + 1) return <Star key={i} className="text-yellow-400" />;
            if (scaled  >= i + 0.5) return <StarHalf key={i} className="text-yellow-400" />;
            return <StarBorder key={i} className="text-gray-500" />;
        });
    };
    return (
        <div className="p-6 text-white bg-neutral-800 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-4">Đánh giá</h3>
            <div className="flex items-center space-x-2 text-yellow-400 mb-3">
                {renderLucideStars(data.tmdb.vote_average)}
                <span className="text-white text-sm ml-2">
                    {(data.tmdb.vote_average/2).toFixed(1)} / 5 ({data.tmdb.vote_count} votes)
                </span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Tóm tắt</h3>
            <p className="text-muted-foreground leading-relaxed">{data.content}</p>
        </div>
    )
}

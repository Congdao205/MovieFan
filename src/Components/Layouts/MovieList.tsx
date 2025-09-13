import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MovieCard} from "./MovieCard";
import { LoadingSkeleton } from "../Common/LoadingSkeleton";
import type { Movies } from "../../models/Movies";

const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 2 }
};

type Props = {
    data: Movies[];
    title: string;
    loading?: boolean;
}

export const MovieList = ({ title, data = [], loading }: Props) => {
    return (
        <div className="p-6">
            <h2 className="mb-3 ml-2 text-xl font-bold uppercase tracking-wide text-white">
                {title}
            </h2>
            {loading ? (
                <Carousel responsive={responsive}>
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i}>
                            <LoadingSkeleton loading items={1}/>
                        </div>
                    ))}
                </Carousel>
            ) : data && data.length > 0 ? (
                <Carousel responsive={responsive}>
                    {data.map((movie) => (
                        <MovieCard key={movie.slug} data={movie}></MovieCard>
                    ))}
                </Carousel>
            ) : (
                <LoadingSkeleton empty emptyMessage="Không tải được phim"/>
            )}

        </div>
    )
}

import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { axiosCall } from "../plugin/axiosCall";
import { type Movies } from "../models/Movies"
import { MovieInfo } from "../Components/Movie/MovieInfo";
import { MovieRating } from "../Components/Movie/MovieRating";
import { MovieActors } from "../Components/Movie/MovieActors";
import { MoviePoster } from "../Components/Movie/MoviePoster";


export const Detail = () => {
    const [movie, setMovie] = useState<Movies | null>(null);
    const { slug } = useParams<{ slug: string }>();

    type Props = {
        slug?: string,
    }

    const handlerMovie = async ({ slug }: Props) => {
        try {
            const data = await axiosCall.get(`${import.meta.env.VITE_MOVIE_DETAIL_URL}${slug}`);
            setMovie(data.movie);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handlerMovie({ slug });
    }, [slug])

    return (
        <div className="w-full h-auto lg:min-h-[800px] bg-no-repeat bg-cover">
            {movie && (
                <div className="container mx-auto px-6 py-8">             
                    <MovieInfo data={movie}></MovieInfo>
                    <MoviePoster data={movie}></MoviePoster>
                    <MovieRating data={movie}></MovieRating>
                    <MovieActors data={movie}></MovieActors>
                </div>
            )}
        </div>
    )
}

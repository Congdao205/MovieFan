import { useEffect, useState } from "react"
import { MovieList } from "../Components/Layouts/MovieList"
import { axiosCall } from "../plugin/axiosCall";
import { type Movies } from "../models/Movies"

export const Home = () => {
  const [moviesNew, setNewMovies] = useState<Movies[]>([]);
  const [movieSeries, setmovieSeries] = useState<Movies[]>([]);
  const [movieSingle, setmovieSingle] = useState<Movies[]>([]);
  const [moviesCartoon, settheaterMovies] = useState<Movies[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const [newMovies, seriesMovies, singleMovies, cartoonMovies] = await Promise.all([
        axiosCall.get(`${import.meta.env.VITE_MOVIE_LIST_URL}`),
        axiosCall.get(`${import.meta.env.VITE_MOVIE_SERIES_URL}`),
        axiosCall.get(`${import.meta.env.VITE_MOVIE_SINGLE_URL}`),
        axiosCall.get(`${import.meta.env.VITE_MOVIE_CARTOON_URL}`),
      ]);
      setNewMovies(newMovies.items);
      setmovieSeries(seriesMovies.data.items);
      setmovieSingle(singleMovies.data.items);
      settheaterMovies(cartoonMovies.data.items);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <MovieList title={"Phim Mới Cập Nhập"} data={moviesNew} loading={loading}></MovieList>
      <MovieList title={"Phim Bộ"} data={movieSeries} loading={loading}></MovieList>
      <MovieList title={"Phim Lẻ"} data={movieSingle} loading={loading}></MovieList>
      <MovieList title={"Phim Hoạt Hình"} data={moviesCartoon} loading={loading}></MovieList>
    </div>

  )
}

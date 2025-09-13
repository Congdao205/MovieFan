import { useParams } from "react-router-dom"
import { axiosCall } from "../plugin/axiosCall";
import { useEffect, useState } from "react";
import { type Movies } from "../models/Movies"
import { Pagination } from "../Components/Common/Pagination";
import { LoadingSkeleton } from "../Components/Common/LoadingSkeleton";
import { MovieCard } from "../Components/Layouts/MovieCard";

export const Search = () => {
  const { keyword } = useParams();
  const [movieSeach, setMovieSearch] = useState<Movies[]>([]);
  const [page, setPage] = useState(1);
  const [titlePage, setTitlePage] = useState();
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  type Props = {
    keyword?: string,
    page: number
  }
  const hanlderMoviesSearch = async ({ keyword, page }: Props) => {
    try {
      setLoading(true)
      const data = await axiosCall.get(`${import.meta.env.VITE_MOVIE_SEARCH_URL}${keyword}&page=${page}&limit=12`)
      setMovieSearch(data.data.items ?? [])
      setTitlePage(data.data.titlePage)
      setTotalPages(data.data.params.pagination.totalPages)
    } catch (error) {
      setLoading(false)
      console.log(error)
      setMovieSearch([])
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    hanlderMoviesSearch({ keyword, page });
  }, [keyword, page])
  return (
    <div>
      <h1 className="ml-2 text-xl font-bold my-3 uppercase tracking-wide text-white">{titlePage}</h1>
      {loading ? (
        <div className="grid grid-cols-2 gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <LoadingSkeleton loading items={12}></LoadingSkeleton>
        </div>
      ) : movieSeach && movieSeach.length > 0 ? (
        <div className="grid grid-cols-2 gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {movieSeach.map((movie) => (
            <MovieCard key={movie.slug} data={movie} />
          ))}
        </div>
      ) : (
        <LoadingSkeleton empty emptyMessage="Không tìm thấy phim"></LoadingSkeleton>
      )}


      <Pagination onPageChange={setPage} totalPages={totalPages} page={page}></Pagination>
    </div>
  )
}

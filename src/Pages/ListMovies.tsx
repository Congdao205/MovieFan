import { useEffect, useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom"
import { axiosCall } from "../plugin/axiosCall";
import { MovieCard } from "../Components/Layouts/MovieCard";
import { Pagination } from "../Components/Common/Pagination";
import { LoadingSkeleton } from "../Components/Common/LoadingSkeleton";
import type { Movies } from "../models/Movies";



export const ListMovies = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState<Movies[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [titlePage, setTitlePage] = useState();
  const [loading, setLoading] = useState(true);

  const page = Number(searchParams.get("page")) || 1;

  const fetchMovies = async () => {
    try {
      setLoading(true);
      setMovies([]);
      const baseUrl = location.pathname.includes("/Type/")
        ? import.meta.env.VITE_MOVIE_TYPE_LIST
        : import.meta.env.VITE_MOVIE_CATEGORY;
      const data = await axiosCall.get(`${baseUrl}${slug}?page=${page}&limit=24`)
      setMovies(data.data.items)
      setTitlePage(data.data.titlePage)
      setTotalPages(data.data.params.pagination.totalPages)
    } catch (error) {
      setLoading(false);
      console.error("lỗi khi lây giữ liệu", error)
    } finally {
      setLoading(false);
    }
  }
  
  useEffect(() => {
    fetchMovies();
  }, [slug, page]);

  return (
    <div>
      <h1 className="ml-2 text-xl font-bold my-3 uppercase tracking-wide text-white">{titlePage}</h1>
      {loading ? (
        <div className="grid grid-cols-2 gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <LoadingSkeleton loading items={12}></LoadingSkeleton>
        </div>

      ) : movies && movies.length > 0 ? (
        <div className="grid grid-cols-2 gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {movies.map((movie) => (
            <MovieCard key={movie.slug} data={movie} />
          ))}
        </div>
      ) : (
        <LoadingSkeleton empty></LoadingSkeleton>
      )}
      <Pagination onPageChange={(setPage) => setSearchParams({ page: setPage.toString() })} totalPages={totalPages} page={page}></Pagination>
    </div>
  )
}

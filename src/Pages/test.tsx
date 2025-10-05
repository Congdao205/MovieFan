// import { useParams } from "react-router-dom"
// import { useEffect, useState } from "react";
// import { axiosCall } from "../plugin/axiosCall";
// import iconPlay from "../../assets/play.png"
// import Backgroud from "../../assets/image.png"
// import { type Movies } from "../models/Movies"

// export const Detail = () => {
//     const [movie, setMovie] = useState<Movies | null>(null);
//     const { keyword } = useParams<{ keyword: string }>();

//     type Props = {
//         keyword?: string,
//     }
//     const handlerMovie = async ({ keyword }: Props) => {
//         try {
//             const data = await axiosCall.get(`${import.meta.env.VITE_MOVIE_DETAIL_URL}${keyword}`)
//             setMovie(data.movie)
            
//         } catch (error) {
//             console.log(error)
//         }
//     }
//     useEffect(() => {
//         handlerMovie({ keyword });
//     }, [keyword])
//     return (
//         <div>
//             {movie && (
//                 <div className="w-full h-auto lg:h-[800px] bg-no-repeat bg-cover relative"
//                     style={{ backgroundImage: `url(${Backgroud}` }}>
//                     <div className="absolute w-full h-full opacity-40 bg-black" />
//                     <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-[30px] p-4 relative z-10">
//                         <div className='flex flex-col space-y-5 items-center lg:items-start w-full lg:w-[50%] text-center lg:text-left'>
//                             {/* Tên phim */}
//                             <h1 className="text-3xl lg:text-5xl font-bold text-white">{movie.name}</h1>
                            

//                             {/* Một số thông tin phụ */}
//                             <div className="flex flex-wrap gap-4 text-sm lg:text-base text-gray-300 justify-center lg:justify-start">
//                                 <span>🎬 Thể loại: {movie.category.map(c => c.name).join(", ")}</span>
//                                 <span>🌍 Quốc gia: {movie.country.map(c => c.name).join(", ")}</span>
//                                 <span>⏱️ Thời lượng: {movie.time}</span>
//                             </div>

//                             {/* Mô tả */}
//                             <p className="text-gray-200 text-sm lg:text-base leading-relaxed max-w-2xl">
//                                 {movie.name}
//                             </p>

//                             {/* Nút hành động */}
//                             <div className="flex space-x-4 mt-4">
//                                 <button className="px-6 py-3 bg-red-600 rounded-2xl font-semibold hover:bg-red-700 transition duration-300">
//                                     Xem Ngay
//                                 </button>
//                                 <button className="px-6 py-3 bg-gray-700 rounded-2xl font-semibold hover:bg-gray-600 transition duration-300">
//                                     Trailer
//                                 </button>
//                             </div>
//                         </div>
//                         <div className='w-full lg:w-[50%] flex items-center justify-center'>
//                             <div className='w-[300px] h-[500px] relative group cursor-pointer'>
//                                 <img src={movie.poster_url} className='h-full w-full object-cover' alt="Mật Danh: Kế Toán 2" />
//                                 <div className='absolute w-full h-full top-0 left-0 
//                                     flex items-center justify-center 
//                                     backdrop-blur-sm opacity-0 group-hover:opacity-90
//                                     transition-opacity duration-500 ease-out'>
//                                     <img src={iconPlay} className='w-16 h-16 relative z-10' alt="Icon Play" />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     )
// }

import { Link } from "react-router-dom"
import { type Movies } from "../../models/Movies"
import iconPlay from "../../assets/play.png"



type Props ={
    data: Movies
    imageUrl: string
}
export const Card = ({data, imageUrl}:Props) => {

    const getImageUrl = (url: string) => {
        if (!url) return "";
        return url.startsWith("https://phimimg.com/") ? url : `https://phimimg.com/${url}`;
    };

    return (
        <div className='h-full w-full relative group cursor-pointer'>
            <img src={getImageUrl(imageUrl)}
                loading="lazy"
                alt={data.name}
                className='rounded-lg h-full w-full aspect-[16/9] 
                    object-cover transition-transform duration-500 group-hover:scale-105' />
            <div className='absolute w-full h-full top-0 left-0 
                                flex items-center justify-center 
                                backdrop-blur-sm opacity-0 
                                group-hover:opacity-60 group-hover:scale-105
                                duration-700 ease-out'>
                <Link to={`/Detail/${data.slug}`}>
                    <img src={iconPlay} className='w-12 h-12 relative z-10' alt="Icon Play" />
                </Link>
            </div>
        </div>
    )
}

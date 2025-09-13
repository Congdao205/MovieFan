import { Calendar, Clock, Users } from "lucide-react"
import type { Movies } from "../../models/Movies"
import { LinkRouter } from "../Common/LinkRouter"

type Props = {
    data: Movies
}

export const MovieInfo = ({ data }: Props) => {
    return (
        <div className="mb-6 sm:mb-8 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-1 mb-2">
                {data.category.map((cate) => (
                    <div key={cate.slug}>
                        <LinkRouter
                            link={cate.slug}
                            name={cate.name}
                            domain="Category"
                            className="text-white pl-2"
                            style="bg-green-600 m-1 rounded">
                        </LinkRouter>
                    </div>
                ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance text-white">{data.name}</h1>
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground text-white">
                <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{data.year}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{data.time}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>Đạo diễn: {data.director}</span>
                </div>
            </div>
        </div>
    )
}

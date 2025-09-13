import { Avatar } from "@mui/material"
import type { Movies } from "../../models/Movies"
import { axiosCall } from "../../plugin/axiosCall"
import { useEffect, useState } from "react"

type Props = {
    data: Movies
}

export const MovieActors = ({ data }: Props) => {
    const [actors, setActors] = useState<any[]>([]);

    const fetchActor = async () => {
        if (data.actor && data.actor.length > 0) {
            try {
                const results = await Promise.all(
                    data.actor.map(async (name) => {
                        const query = encodeURIComponent(name);
                        const res = await axiosCall.get(`${import.meta.env.VITE_ACTOR}${query}`);
                        if (res.results && res.results.length > 0) {
                            return res.results[0];
                        }
                        return { name, profile_path: "" };;
                    })
                );
                setActors(results.filter((a) => a !== null));
            } catch (error) {
                console.error("Fetch actors failed:", error);
            }
        }
    }

    useEffect(() => {
        fetchActor();
    }, [])

    return (
        <div className="p-6 text-white bg-neutral-800 rounded-lg">
            <h3 className="text-xl font-semibold mb-6">Diễn viên</h3>
            <div className="grid grid-cols-2 gap-4">
                {actors.map((act, id) => (
                    <div key={id} className="flex ml-1 items-center gap-4 ">
                        <div>
                            <Avatar src={`${import.meta.env.VITE_IMG_URL}${act.profile_path}`}
                                sx={{ width: 50, height: 50 }}></Avatar>
                        </div>
                        <div>
                            <p className="font-medium">{act.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

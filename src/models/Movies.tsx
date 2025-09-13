export interface Movies {
    slug: string;
    name: string;
    thumb_url: string;
    poster_url: string;
    time?: string;
    episode_current?: string;
    episode_total?: string;
    year?: number;
    director?: string;
    actor: string[];
    content: string;
    trailer_url: string;
    tmdb: {
        vote_average: number;
        vote_count: number;
    },
    category:
    {
        slug: string;
        name: string;
    }[];
    country:
    {
        slug: string;
        name: string;
    }[];

}

export interface Episodes {
    server_name: string;
    server_data: {
        name: string;
        slug: string;
        filename: string;
        link_embed: string;
        link_m3u8: string;
    }[];
}
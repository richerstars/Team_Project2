export interface IGetMovieParam {
    adult?: boolean,
    page?: number,
    pre_page?: number,
    budget_min?: number,
    budget_max?: number,
    language?: string,
    title?: string,
    popularity_min?: number,
    popularity_max?: number,
    release_date_first?: string,
    release_date_last?: string,
    revenue_min?: number,
    revenue_max?: number,
}

export interface IMovies {
    adult: boolean,
    backdrop_path: string,
    budget: number,
    genre_ids: Array<number>,
    homepage: string,
    id: number,
    imdb_id: string,
    movie_rate?: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    revenue: number,
    runtime: number,
    status: string,
    tagline: string,
    title: string
}

export interface ILanguages {
    value: string,
    name: string
}

export interface IGenres {
    id: number,
    name: string
}
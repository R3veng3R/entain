export interface Movie {
  id: number;
  title: string;
  overview: string;
  originalTitle: string;
  posterPath: string;
  genres: string[];
}

export interface MovieFilters {
  title?: string;
  genreIds?: number[];
  overview?: string;
}

export interface Genre {
  id: number;
  name: string;
}

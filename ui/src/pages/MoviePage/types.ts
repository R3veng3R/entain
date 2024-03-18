export interface Movie {
  id: number;
  title: string;
  overview: string;
  originalTitle: string;
  posterPath: string;
}

export interface MovieFilters {
  title?: string;
  genreIds?: number[];
}

export interface Genre {
  id: number;
  name: string;
}
export interface Movie {
  id: number;
  title: string;
  overview: string;
  originalTitle: string;
  posterPath: string;
}

export interface MovieFilters {
  title?: string;
}

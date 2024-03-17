export interface Movie {
  id: number;
  title: string;
  overview: string;
  originalTitle: string;
  posterPath: string;
}

export interface MovieRequest {
  title?: string;
}

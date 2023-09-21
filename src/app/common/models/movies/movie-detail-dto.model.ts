export interface IMovieDetailDto {
  movieId: number,
  name: string,
  releaseDate: string,
  synopsis: string,
  actors: IMovieDetailActorDto[]
}

export interface IMovieDetailActorDto {
  actorId: number,
  firstName: string,
  lastName: string
}
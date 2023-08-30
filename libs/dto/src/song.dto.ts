import { Song } from "../entities"

export type SongIdDTO = Pick<Song, "id">["id"]

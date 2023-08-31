import { Song } from "Domain"

export type SongIdDTO = Pick<Song, "id">["id"]

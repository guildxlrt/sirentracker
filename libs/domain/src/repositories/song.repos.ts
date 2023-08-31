import { Song } from "../entities"

export interface SongRepository {
	get(id: number): Promise<Song>
}

import { Song, SongRepository } from "Domain"

export class SongImplement implements SongRepository {
	async get(params: any): Promise<Song> {
		const dbRes: any = {}

		return dbRes
	}
}

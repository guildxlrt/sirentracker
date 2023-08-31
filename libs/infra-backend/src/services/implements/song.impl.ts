import { Song, SongRepository } from "Domain"
import { ArtistIdDTO, ReleaseIdDTO, SongIdDTO } from "Dto"

export class SongImplement implements SongRepository {
	async get(id: SongIdDTO): Promise<Song> {
		const dbRes: any = {}

		return dbRes
	}

	async findManyByArtist(id: ArtistIdDTO): Promise<Song[]> {
		const dbRes: Song[] = []

		return dbRes
	}

	async findManyByRelease(id: ReleaseIdDTO): Promise<Song[]> {
		const dbRes: Song[] = []

		return dbRes
	}
}

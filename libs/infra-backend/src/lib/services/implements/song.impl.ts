import { Song, SongRepository } from "Domain"
import { ArtistIdDTO, ReleaseIdDTO, ResponseDTO, SongIdDTO } from "Dto"

export class SongImplement implements SongRepository {
	async get(id: SongIdDTO): Promise<ResponseDTO<Song>> {
		const dbRes: any = {}

		const res = new ResponseDTO(200, null, dbRes)

		return res
	}

	async findManyByArtist(id: ArtistIdDTO): Promise<ResponseDTO<Song[]>> {
		const dbRes: Song[] = []

		const res = new ResponseDTO(200, null, dbRes)

		return res
	}

	async findManyByRelease(id: ReleaseIdDTO): Promise<ResponseDTO<Song[]>> {
		const dbRes: Song[] = []

		const res = new ResponseDTO(200, null, dbRes)

		return res
	}
}

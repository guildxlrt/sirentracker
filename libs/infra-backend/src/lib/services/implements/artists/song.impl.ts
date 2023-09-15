import { Song, SongRepository } from "Domain"
import { FindSongsByArtistDTO, FindSongsByReleaseDTO, GetSongDTO, ResponseDTO } from "Dto"

export class SongImplement implements SongRepository {
	async get(inputs: GetSongDTO): Promise<ResponseDTO<Song>> {
		const dbRes: any = {}

		const res = new ResponseDTO(200, null, dbRes)

		return res
	}

	async findManyByArtist(inputs: FindSongsByArtistDTO): Promise<ResponseDTO<Song[]>> {
		const dbRes: Song[] = []

		const res = new ResponseDTO(200, null, dbRes)

		return res
	}

	async findManyByRelease(inputs: FindSongsByReleaseDTO): Promise<ResponseDTO<Song[]>> {
		const dbRes: Song[] = []

		const res = new ResponseDTO(200, null, dbRes)

		return res
	}
}

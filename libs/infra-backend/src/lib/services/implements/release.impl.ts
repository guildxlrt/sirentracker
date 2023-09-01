import { Release, ReleaseRepository } from "Domain"
import { ArtistIdDTO, CreateReleaseDTO, ReleaseIdDTO, ReleasePriceDTO, ResponseDTO } from "Dto"
import { GenreType } from "Shared-utils"

export class ReleaseImplement implements ReleaseRepository {
	async fetchAll(): Promise<ResponseDTO<Release[]>> {
		const dbRes: Release[] = []

		const res = new ResponseDTO(200, null, dbRes)

		return res
	}

	async findManyByGenre(genre: GenreType): Promise<ResponseDTO<Release[]>> {
		const dbRes: Release[] = []

		const res = new ResponseDTO(200, null, dbRes)

		return res
	}

	async findManyByArtist(params: ArtistIdDTO): Promise<ResponseDTO<Release[]>> {
		const dbRes: Release[] = []

		const res = new ResponseDTO(200, null, dbRes)

		return res
	}

	async create(params: CreateReleaseDTO): Promise<ResponseDTO<boolean>> {
		const res = new ResponseDTO(200, null, true)

		return res
	}

	async get(id: ReleaseIdDTO): Promise<ResponseDTO<Release>> {
		const dbRes: any = {}

		const res = new ResponseDTO(200, null, dbRes)

		return res
	}

	async modifyPrice(price: ReleasePriceDTO): Promise<ResponseDTO<boolean>> {
		const res = new ResponseDTO(200, null, true)

		return res
	}
}

import { Release, ReleaseRepository } from "Domain"
import {
	ArtistIdDTO,
	CreateReleaseDTO,
	ModifyReleasePriceDTO,
	ReleaseIdDTO,
	ResponseDTO,
} from "Dto"
import { GenreType } from "Shared-utils"

export class ReleaseImplement implements ReleaseRepository {
	async getAll(): Promise<ResponseDTO<Release[]>> {
		const dbRes: Release[] = []

		const res = new ResponseDTO(200, null, dbRes)

		return res
	}

	async findManyByGenre(genre: GenreType): Promise<ResponseDTO<Release[]>> {
		const dbRes: Release[] = []

		const res = new ResponseDTO(200, null, dbRes)

		return res
	}

	async findManyByArtist(id: ArtistIdDTO): Promise<ResponseDTO<Release[]>> {
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

	async modifyPrice(price: ModifyReleasePriceDTO): Promise<ResponseDTO<boolean>> {
		const res = new ResponseDTO(200, null, true)

		return res
	}

	async getUserReleases(): Promise<ResponseDTO<Release[]>> {
		const dbRes: Release[] = []

		const res = new ResponseDTO(200, null, dbRes)

		return res
	}
}

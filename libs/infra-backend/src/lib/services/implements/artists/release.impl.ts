import { Release, ReleaseRepository } from "Domain"
import {
	CreateReleaseDTO,
	FindReleasesByArtistDTO,
	FindReleasesByGenreDTO,
	GetAllReleasesDTO,
	GetReleaseDTO,
	GetUserReleasesDTO,
	ModifyReleasePriceDTO,
	ResponseDTO,
} from "Dto"

export class ReleaseImplement implements ReleaseRepository {
	async create(inputs: CreateReleaseDTO): Promise<ResponseDTO<boolean>> {
		const res = new ResponseDTO(200, null, true)

		return res
	}

	async modifyPrice(price: ModifyReleasePriceDTO): Promise<ResponseDTO<boolean>> {
		const res = new ResponseDTO(200, null, true)

		return res
	}

	async get(id: GetReleaseDTO): Promise<ResponseDTO<Release>> {
		const dbRes: any = {}

		const res = new ResponseDTO(200, null, dbRes)

		return res
	}

	async getAll(inputs: GetAllReleasesDTO): Promise<ResponseDTO<Release[]>> {
		const dbRes: Release[] = []

		const res = new ResponseDTO(200, null, dbRes)

		return res
	}

	async findManyByGenre(genre: FindReleasesByGenreDTO): Promise<ResponseDTO<Release[]>> {
		const dbRes: Release[] = []

		const res = new ResponseDTO(200, null, dbRes)

		return res
	}

	async findManyByArtist(id: FindReleasesByArtistDTO): Promise<ResponseDTO<Release[]>> {
		const dbRes: Release[] = []

		const res = new ResponseDTO(200, null, dbRes)

		return res
	}

	async getUserReleases(inputs: GetUserReleasesDTO): Promise<ResponseDTO<Release[]>> {
		const dbRes: Release[] = []

		const res = new ResponseDTO(200, null, dbRes)

		return res
	}
}

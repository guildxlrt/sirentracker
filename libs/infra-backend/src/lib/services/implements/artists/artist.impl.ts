import { Artist, ArtistRepository } from "Domain"
import {
	CreateArtistDTO,
	ResponseDTO,
	ModifyArtistDTO,
	FindArtistsByGenreDTO,
	GetAllArtistsDTO,
	GetArtistByEmailDTO,
	GetArtistByIdDTO,
} from "Dto"
import { ErrorMsg } from "Shared-utils"

export class ArtistImplement implements ArtistRepository {
	async create(inputs: CreateArtistDTO): Promise<ResponseDTO<boolean>> {
		try {
			const res = new ResponseDTO(200, null, true)

			return res
		} catch (error) {
			throw new ErrorMsg(500, "error during DB saving")
		}
	}

	async modify(inputs: ModifyArtistDTO): Promise<ResponseDTO<boolean>> {
		try {
			const res = new ResponseDTO(200, null, true)

			return res
		} catch (error) {
			throw new ErrorMsg(500, "error during DB saving")
		}
	}

	async getById(inputs: GetArtistByIdDTO): Promise<ResponseDTO<Artist>> {
		const dbRes: any = {}

		const res = new ResponseDTO(200, null, dbRes)

		return res
	}

	async getByEmail(inputs: GetArtistByEmailDTO): Promise<ResponseDTO<Artist>> {
		const dbRes: any = {}

		const res = new ResponseDTO(200, null, dbRes)

		return res
	}

	async getAll(inputs: GetAllArtistsDTO): Promise<ResponseDTO<Artist[]>> {
		const dbRes: Artist[] = []

		const res = new ResponseDTO(200, null, dbRes)

		return res
	}

	async findManyByGenre(inputs: FindArtistsByGenreDTO): Promise<ResponseDTO<Artist[]>> {
		const dbRes: Artist[] = []

		const res = new ResponseDTO(200, null, dbRes)

		return res
	}
}

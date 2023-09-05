import { Artist, ArtistRepository } from "Domain"
import { ArtistIdDTO, CreateArtistDTO, EmailDTO, ModifyArtistDTO, ResponseDTO } from "Dto"
import { GenreType } from "Shared-utils"

export class ArtistImplement implements ArtistRepository {
	async getAll(): Promise<ResponseDTO<Artist[]>> {
		const dbRes: Artist[] = []

		const res = new ResponseDTO(200, null, dbRes)

		return res
	}

	async findManyByGenre(genre: GenreType): Promise<ResponseDTO<Artist[]>> {
		const dbRes: Artist[] = []

		const res = new ResponseDTO(200, null, dbRes)

		return res
	}

	async create(params: CreateArtistDTO): Promise<ResponseDTO<boolean>> {
		const res = new ResponseDTO(200, null, true)

		return res
	}

	async modify(params: ModifyArtistDTO): Promise<ResponseDTO<boolean>> {
		const res = new ResponseDTO(200, null, true)

		return res
	}

	async getById(id: ArtistIdDTO): Promise<ResponseDTO<Artist>> {
		const dbRes: any = {}

		const res = new ResponseDTO(200, null, dbRes)

		return res
	}

	async getByEmail(email: EmailDTO): Promise<ResponseDTO<Artist>> {
		const dbRes: any = {}

		const res = new ResponseDTO(200, null, dbRes)

		return res
	}
}

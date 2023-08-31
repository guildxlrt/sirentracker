import { Artist, ArtistRepository } from "Domain"
import { ArtistIdDTO, CreateArtistDTO, EmailDTO, ModifyArtistDTO } from "Dto"
import { GenreType } from "Shared-utils"

export class ArtistImplement implements ArtistRepository {
	async getAll(): Promise<Artist[]> {
		const dbRes: Artist[] = []

		return dbRes
	}

	async findManyByGenre(params: GenreType): Promise<Artist[]> {
		const dbRes: Artist[] = []

		return dbRes
	}

	async create(params: CreateArtistDTO): Promise<boolean> {
		return true
	}

	async modify(params: ModifyArtistDTO): Promise<boolean> {
		return true
	}

	async getById(params: ArtistIdDTO): Promise<Artist> {
		const dbRes: any = {}

		return dbRes
	}

	async getByEmail(params: EmailDTO): Promise<Artist> {
		const dbRes: any = {}

		return dbRes
	}
}

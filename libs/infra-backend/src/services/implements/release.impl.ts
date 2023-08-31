import { Release, ReleaseRepository } from "Domain"
import { ArtistIdDTO, CreateReleaseDTO, ReleaseIdDTO, ReleasePriceDTO } from "Dto"
import { GenreType } from "Shared-utils"

export class ReleaseImplement implements ReleaseRepository {
	async getAll(): Promise<Release[]> {
		const dbRes: Release[] = []

		return dbRes
	}

	async findManyByGenre(genre: GenreType): Promise<Release[]> {
		const dbRes: Release[] = []

		return dbRes
	}

	async findManyByArtist(params: ArtistIdDTO): Promise<Release[]> {
		const dbRes: Release[] = []

		return dbRes
	}

	async create(params: CreateReleaseDTO): Promise<boolean> {
		return true
	}

	async get(id: ReleaseIdDTO): Promise<Release> {
		const dbRes: any = {}

		return dbRes
	}

	async modifyPrice(price: ReleasePriceDTO): Promise<boolean> {
		return true
	}
}

import { Release, ReleaseRepository } from "Domain"
import { CreateReleaseDTO, ReleaseIdDTO } from "Dto"
import { GenreType } from "Shared-utils"

export class ReleaseImplement implements ReleaseRepository {
	async getAll(): Promise<Release[]> {
		const dbRes: Release[] = []

		return dbRes
	}

	async findManyByGenre(params: GenreType): Promise<Release[]> {
		const dbRes: Release[] = []

		return dbRes
	}

	async create(params: CreateReleaseDTO): Promise<boolean> {
		return true
	}

	async get(params: ReleaseIdDTO): Promise<Release> {
		const dbRes: any = {}

		return dbRes
	}
}

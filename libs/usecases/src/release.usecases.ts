import { DataServices } from "Infra-backend"
import { ReleaseIdDTO, CreateReleaseDTO } from "Dto"
import { Release, ReleaseRepository } from "Domain"
import { GenreType } from "Shared-utils"

export class ReleaseUsecases implements ReleaseRepository {
	private readonly service: DataServices

	constructor(service: DataServices) {
		this.service = service
	}

	async getAll(): Promise<Release[]> {
		return await this.service.release.getAll()
	}

	async findManyByGenre(genre: GenreType): Promise<Release[]> {
		return await this.service.release.findManyByGenre(genre)
	}

	async create(data: CreateReleaseDTO): Promise<boolean> {
		return await this.service.release.create(data)
	}

	async get(id: ReleaseIdDTO): Promise<Release | null> {
		return await this.service.release.get(id)
	}
}

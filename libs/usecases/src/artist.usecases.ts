import { DataServices } from "Infra-backend"
import { ArtistIdDTO, CreateArtistDTO, ModifyArtistDTO } from "Dto"
import { Artist, ArtistRepository } from "Domain"
import { GenreType } from "Shared-utils"

export class ArtistUsecases implements ArtistRepository {
	private readonly service: DataServices

	constructor(service: DataServices) {
		this.service = service
	}

	async getAll(): Promise<Artist[]> {
		return await this.service.artist.getAll()
	}

	async findManyByGenre(genre: GenreType): Promise<Artist[]> {
		return await this.service.artist.findManyByGenre(genre)
	}

	async create(data: CreateArtistDTO): Promise<boolean> {
		return await this.service.artist.create(data)
	}

	async get(id: ArtistIdDTO): Promise<Artist> {
		return await this.service.artist.get(id)
	}

	async modify(data: ModifyArtistDTO): Promise<boolean> {
		return await this.service.artist.modify(data)
	}
}

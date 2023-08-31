import { DataServices } from "Infra-backend"
import { Artist } from "Domain"
import { GenreType } from "Shared-utils"
import { BaseUsecase } from "../base-usecase"

export class FindArtistsByGenreUsecase implements BaseUsecase<GenreType, Artist[]> {
	private readonly service: DataServices

	constructor(service: DataServices) {
		this.service = service
	}

	async execute(genre: GenreType): Promise<Artist[]> {
		return await this.service.artist.findManyByGenre(genre)
	}
}

import { DatabaseServices } from "Infra-backend"
import { Artist } from "Domain"
import { GenreType } from "Shared-utils"
import { BaseUsecase } from "../base-usecase"

export class FindArtistsByGenreUsecase extends BaseUsecase<GenreType, Artist[]> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(genre: GenreType): Promise<Artist[]> {
		return await this.service.artist.findManyByGenre(genre)
	}
}

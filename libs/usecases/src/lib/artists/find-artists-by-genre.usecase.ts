import { DatabaseServices } from "Infra-backend"
import { Artist } from "Domain"
import { GenreType } from "Shared-utils"
import { BaseUsecase } from "../../assets"
import { ResponseDTO } from "Dto"

export class FindArtistsByGenreUsecase extends BaseUsecase<GenreType, ResponseDTO<Artist[]>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(genre: GenreType): Promise<ResponseDTO<Artist[]>> {
		return await this.service.artist.findManyByGenre(genre)
	}
}

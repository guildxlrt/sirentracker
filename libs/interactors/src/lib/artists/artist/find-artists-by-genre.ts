import { DatabaseServices } from "Infra-backend"
import { Artist } from "Domain"
import { BaseUsecase } from "../../../assets"
import { FindArtistsByGenreDTO, ResponseDTO } from "Dto"

export class FindArtistsByGenreUsecase extends BaseUsecase<
	FindArtistsByGenreDTO,
	ResponseDTO<Artist[]>
> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(inputs: FindArtistsByGenreDTO): Promise<ResponseDTO<Artist[]>> {
		return await this.service.artist.findManyByGenre(inputs)
	}
}

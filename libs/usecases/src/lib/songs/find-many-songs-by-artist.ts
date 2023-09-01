import { DatabaseServices } from "Infra-backend"
import { Song } from "Domain"
import { BaseUsecase } from "../../assets"
import { ArtistIdDTO, ResponseDTO } from "Dto"

export class FindSongsByArtistUsecase extends BaseUsecase<ArtistIdDTO, ResponseDTO<Song[]>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(id: ArtistIdDTO): Promise<ResponseDTO<Song[]>> {
		return await this.service.song.findManyByArtist(id)
	}
}

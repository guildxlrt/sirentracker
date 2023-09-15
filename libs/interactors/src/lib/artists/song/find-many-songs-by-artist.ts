import { DatabaseServices } from "Infra-backend"
import { Song } from "Domain"
import { BaseUsecase } from "../../../assets"
import { FindSongsByArtistDTO, ResponseDTO } from "Dto"

export class FindSongsByArtistUsecase extends BaseUsecase<
	FindSongsByArtistDTO,
	ResponseDTO<Song[]>
> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(id: FindSongsByArtistDTO): Promise<ResponseDTO<Song[]>> {
		return await this.service.song.findManyByArtist(id)
	}
}

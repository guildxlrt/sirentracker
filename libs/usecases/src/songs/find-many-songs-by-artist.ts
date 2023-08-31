import { DatabaseServices } from "Infra-backend"
import { Song } from "Domain"
import { BaseUsecase } from "../base-usecase"
import { ArtistIdDTO } from "Dto"

export class FindSongsByArtistUsecase extends BaseUsecase<ArtistIdDTO, Song[]> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(id: ArtistIdDTO): Promise<Song[]> {
		return await this.service.song.findManyByArtist(id)
	}
}

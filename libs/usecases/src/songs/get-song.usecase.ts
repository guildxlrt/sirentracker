import { DatabaseServices } from "Infra-backend"
import { SongIdDTO } from "Dto"
import { Song } from "Domain"
import { BaseUsecase } from "../base-usecase"

export class GetSongUsecase extends BaseUsecase<SongIdDTO, Song> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(id: SongIdDTO): Promise<Song> {
		return await this.service.song.get(id)
	}
}

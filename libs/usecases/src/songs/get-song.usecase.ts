import { DataServices } from "Infra-backend"
import { SongIdDTO } from "Dto"
import { Song } from "Domain"
import { BaseUsecase } from "../base-usecase"

export class GetSongUsecase implements BaseUsecase<SongIdDTO, Song> {
	private readonly service: DataServices

	constructor(service: DataServices) {
		this.service = service
	}

	async execute(id: SongIdDTO): Promise<Song> {
		return await this.service.song.get(id)
	}
}

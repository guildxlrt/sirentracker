import { DatabaseServices } from "Infra-backend"
import { ResponseDTO, SongIdDTO } from "Dto"
import { Song } from "Domain"
import { BaseUsecase } from "../../assets"

export class GetSongUsecase extends BaseUsecase<SongIdDTO, ResponseDTO<Song>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(id: SongIdDTO): Promise<ResponseDTO<Song>> {
		return await this.service.song.get(id)
	}
}

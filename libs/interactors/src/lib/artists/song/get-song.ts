import { DatabaseServices } from "Infra-backend"
import { GetSongDTO, ResponseDTO } from "Dto"
import { Song } from "Domain"
import { BaseUsecase } from "../../../assets"

export class GetSongUsecase extends BaseUsecase<GetSongDTO, ResponseDTO<Song>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(inputs: GetSongDTO): Promise<ResponseDTO<Song>> {
		return await this.service.song.get(inputs)
	}
}

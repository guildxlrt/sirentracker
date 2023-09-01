import { DatabaseServices } from "Infra-backend"
import { Song } from "Domain"
import { BaseUsecase } from "../../assets"
import { ReleaseIdDTO, ResponseDTO } from "Dto"

export class FindSongsByReleaseUsecase extends BaseUsecase<ReleaseIdDTO, ResponseDTO<Song[]>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(id: ReleaseIdDTO): Promise<ResponseDTO<Song[]>> {
		return await this.service.song.findManyByRelease(id)
	}
}

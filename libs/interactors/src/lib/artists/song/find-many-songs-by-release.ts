import { DatabaseServices } from "Infra-backend"
import { Song } from "Domain"
import { BaseUsecase } from "../../../assets"
import { FindSongsByReleaseDTO, ResponseDTO } from "Dto"

export class FindSongsByReleaseUsecase extends BaseUsecase<
	FindSongsByReleaseDTO,
	ResponseDTO<Song[]>
> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(id: FindSongsByReleaseDTO): Promise<ResponseDTO<Song[]>> {
		return await this.service.song.findManyByRelease(id)
	}
}

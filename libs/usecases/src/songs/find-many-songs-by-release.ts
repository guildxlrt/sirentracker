import { DatabaseServices } from "Infra-backend"
import { Song } from "Domain"
import { BaseUsecase } from "../base-usecase"
import { ReleaseIdDTO } from "Dto"

export class FindSongsByReleaseUsecase extends BaseUsecase<ReleaseIdDTO, Song[]> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(id: ReleaseIdDTO): Promise<Song[]> {
		return await this.service.song.findManyByRelease(id)
	}
}

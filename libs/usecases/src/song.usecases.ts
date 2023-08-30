import { DataServices } from "Infra-backend"
import { SongIdDTO } from "Dto"
import { Song, SongRepository } from "Domain"

export class SongUsecases implements SongRepository {
	private readonly service: DataServices

	constructor(service: DataServices) {
		this.service = service
	}

	async get(id: SongIdDTO): Promise<Song | null> {
		return await this.service.song.get(id)
	}
}

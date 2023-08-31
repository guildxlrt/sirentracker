import { DataServices } from "Infra-backend"
import { EmailDTO } from "Dto"
import { Artist } from "Domain"
import { BaseUsecase } from "../base-usecase"

export class GetArtistByEmailUsecase implements BaseUsecase<EmailDTO, Artist> {
	private readonly service: DataServices

	constructor(service: DataServices) {
		this.service = service
	}

	async execute(email: EmailDTO): Promise<Artist> {
		return await this.service.artist.getByEmail(email)
	}
}

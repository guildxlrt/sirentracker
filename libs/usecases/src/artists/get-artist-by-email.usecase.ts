import { DatabaseServices } from "Infra-backend"
import { EmailDTO } from "Dto"
import { Artist } from "Domain"
import { BaseUsecase } from "../base-usecase"

export class GetArtistByEmailUsecase extends BaseUsecase<EmailDTO, Artist> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(email: EmailDTO): Promise<Artist> {
		return await this.service.artist.getByEmail(email)
	}
}

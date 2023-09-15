import { DatabaseServices } from "Infra-backend"
import { EmailDTO, ResponseDTO } from "Dto"
import { Artist } from "Domain"
import { BaseUsecase } from "../../../assets"

export class GetArtistByEmailUsecase extends BaseUsecase<EmailDTO, ResponseDTO<Artist>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(email: EmailDTO): Promise<ResponseDTO<Artist>> {
		return await this.service.artist.getByEmail(email)
	}
}

import { DatabaseServices } from "Infra-backend"
import { CleanPassDTO, ResponseDTO } from "Dto"
import { BaseUsecase } from "../../assets"

export class ChangePassUsecase extends BaseUsecase<CleanPassDTO, ResponseDTO<boolean>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(params: CleanPassDTO): Promise<ResponseDTO<boolean>> {
		return await this.service.userConnect.changePass(params)
	}
}

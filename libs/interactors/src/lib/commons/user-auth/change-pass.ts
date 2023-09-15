import { DatabaseServices } from "Infra-backend"
import { ChangePassDTO, ResponseDTO } from "Dto"
import { BaseUsecase } from "../../../assets"

export class ChangePassUsecase extends BaseUsecase<ChangePassDTO, ResponseDTO<boolean>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(params: ChangePassDTO): Promise<ResponseDTO<boolean>> {
		return await this.service.userAuth.changePass(params)
	}
}

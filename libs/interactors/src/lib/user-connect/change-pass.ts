import { DatabaseServices } from "Infra-backend"
import { ChangePassDTO, ResponseDTO } from "Dto"
import { BaseUsecase } from "../../assets"

export class ChangePassUsecase extends BaseUsecase<ChangePassDTO, ResponseDTO<boolean>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(params: ChangePassDTO): Promise<ResponseDTO<boolean>> {
		const password = params.isValid()

		if (password) {
			return await this.service.userConnect.changePass(password)
		} else throw Error(password)
	}
}

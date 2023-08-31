import { DatabaseServices } from "Infra-backend"
import { PassCleanDTO, PassUncleanDTO } from "Dto"
import { BaseUsecase } from "../base-usecase"

export class UpdatePassUsecase extends BaseUsecase<PassUncleanDTO, boolean> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(params: PassUncleanDTO): Promise<boolean> {
		const { password, confirm } = params

		const validData: PassCleanDTO = password

		return await this.service.userConnect.updatePass(validData)
	}
}

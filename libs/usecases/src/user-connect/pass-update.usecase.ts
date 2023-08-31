import { DataServices } from "Infra-backend"
import { PassCleanDTO, PassUncleanDTO } from "Dto"
import { BaseUsecase } from "../base-usecase"

export class PassUpdateUsecase implements BaseUsecase<PassUncleanDTO, boolean> {
	private readonly service: DataServices

	constructor(service: DataServices) {
		this.service = service
	}

	async execute(params: PassUncleanDTO): Promise<boolean> {
		const { password, confirm } = params

		const validData: PassCleanDTO = password

		return await this.service.userConnect.passUpdate(validData)
	}
}

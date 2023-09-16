import { DatabaseServices } from "Infra-backend"
import { FindOrdersByUserDTO } from "Dto"
import { BaseUsecase } from "../../../assets"

export class FindOrdersByUserUsecase extends BaseUsecase<FindOrdersByUserDTO> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(params: FindOrdersByUserDTO): Promise<FindOrdersByUserDTO> {
		return await this.service.order.findManyByUser(params)
	}
}

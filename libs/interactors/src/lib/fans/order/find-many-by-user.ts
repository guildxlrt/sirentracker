import { DatabaseServices } from "Infra-backend"
import { FindOrdersByUserDTO, ResponseDTO } from "Dto"
import { BaseUsecase } from "../../../assets"
import { Order } from "Domain"

export class FindOrdersByUserUsecase extends BaseUsecase<
	FindOrdersByUserDTO,
	ResponseDTO<Order[]>
> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(params: FindOrdersByUserDTO): Promise<ResponseDTO<Order[]>> {
		return await this.service.order.findManyByUser(params)
	}
}

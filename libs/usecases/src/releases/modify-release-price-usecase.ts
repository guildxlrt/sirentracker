import { DatabaseServices } from "Infra-backend"
import { BaseUsecase } from "../base-usecase"
import { ReleasePriceDTO } from "Dto"

export class ModifyReleasePriceUsecase extends BaseUsecase<number, boolean> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(price: ReleasePriceDTO): Promise<boolean> {
		return await this.service.release.modifyPrice(price)
	}
}

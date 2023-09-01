import { DatabaseServices } from "Infra-backend"
import { BaseUsecase } from "../../assets"
import { ReleasePriceDTO, ResponseDTO } from "Dto"

export class ModifyReleasePriceUsecase extends BaseUsecase<number, ResponseDTO<boolean>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(price: ReleasePriceDTO): Promise<ResponseDTO<boolean>> {
		return await this.service.release.modifyPrice(price)
	}
}

import { DatabaseServices } from "Infra-backend"
import { BaseUsecase } from "../../assets"
import { ModifyReleasePriceDTO, ResponseDTO } from "Dto"

export class ModifyReleasePriceUsecase extends BaseUsecase<
	ModifyReleasePriceDTO,
	ResponseDTO<boolean>
> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(price: ModifyReleasePriceDTO): Promise<ResponseDTO<boolean>> {
		return await this.service.release.modifyPrice(price)
	}
}

import { Fan, FanRepository } from "Domain"
import { FanIdDTO, CreateFanDTO, ModifyFanDTO, EmailDTO, ResponseDTO } from "Dto"

export class FanImplement implements FanRepository {
	async create(params: CreateFanDTO): Promise<ResponseDTO<boolean>> {
		const res = new ResponseDTO(200, null, true)

		return res
	}

	async modify(params: ModifyFanDTO): Promise<ResponseDTO<boolean>> {
		const res = new ResponseDTO(200, null, true)

		return res
	}

	async getById(id: FanIdDTO): Promise<ResponseDTO<Fan>> {
		const dbRes: any = {}

		return dbRes
	}

	async getByEmail(email: EmailDTO): Promise<ResponseDTO<Fan>> {
		const dbRes: any = {}

		return dbRes
	}
}

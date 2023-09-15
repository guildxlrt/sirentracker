import { Fan, FanRepository } from "Domain"
import { CreateFanDTO, GetFanByEmailDTO, ResponseDTO, ModifyFanDTO, GetFanByIdDTO } from "Dto"
import { ErrorMsg } from "Shared-utils"

export class FanImplement implements FanRepository {
	async create(inputs: CreateFanDTO): Promise<ResponseDTO<boolean>> {
		try {
			const res = new ResponseDTO(200, null, true)

			return res
		} catch (error) {
			throw new ErrorMsg(500, "error during DB saving")
		}
	}

	async modify(inputs: ModifyFanDTO): Promise<ResponseDTO<boolean>> {
		try {
			const res = new ResponseDTO(200, null, true)

			return res
		} catch (error) {
			throw new ErrorMsg(500, "error during DB saving")
		}
	}

	async getById(id: GetFanByIdDTO): Promise<ResponseDTO<Fan>> {
		const dbRes: any = {}

		return dbRes
	}

	async getByEmail(email: GetFanByEmailDTO): Promise<ResponseDTO<Fan>> {
		const dbRes: any = {}

		return dbRes
	}
}

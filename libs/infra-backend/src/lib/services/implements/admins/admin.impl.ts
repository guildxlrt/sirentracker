import { AdminRepository } from "Domain"
import { CreateAdminDTO, ResponseDTO } from "Dto"

export class AdminImplement implements AdminRepository {
	async create(params: CreateAdminDTO): Promise<ResponseDTO<boolean>> {
		const res = new ResponseDTO(200, null, true)

		return res
	}
}

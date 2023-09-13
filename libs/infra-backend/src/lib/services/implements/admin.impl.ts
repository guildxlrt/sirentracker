import { AdminRepository } from "Domain"
import { CleanNewAdminDTO, ResponseDTO } from "Dto"

export class AdminImplement implements AdminRepository {
	async create(params: CleanNewAdminDTO): Promise<ResponseDTO<boolean>> {
		const res = new ResponseDTO(200, null, true)

		return res
	}
}

import { IResponse } from "../../../assets"

export abstract class AdminRepository {
	abstract create(data: any): Promise<IResponse<boolean>>
}

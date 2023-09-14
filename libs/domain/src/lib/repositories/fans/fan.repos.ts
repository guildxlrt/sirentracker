import { IResponse, BaseReposUser } from "../../../assets"
import { Fan, FanId, UserAuthEmail } from "../../entities"

export abstract class FanRepository implements BaseReposUser<Fan> {
	abstract create(data: any): Promise<IResponse<boolean>>

	abstract modify(data: any): Promise<IResponse<boolean>>

	abstract getById(id: FanId): Promise<IResponse<Fan>>

	abstract getByEmail(email: UserAuthEmail): Promise<IResponse<Fan>>
}

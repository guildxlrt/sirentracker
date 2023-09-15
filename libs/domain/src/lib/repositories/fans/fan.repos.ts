import { IResponse, BaseReposUser, InputsLayer } from "../../../assets"
import { Fan, FanId, UserAuthEmail } from "../../entities"

export abstract class FanRepository implements BaseReposUser<Fan> {
	abstract create(inputs: InputsLayer<unknown, boolean>): Promise<IResponse<boolean>>

	abstract modify(inputs: InputsLayer<unknown, boolean>): Promise<IResponse<boolean>>

	abstract getById(inputs: InputsLayer<FanId, Fan>): Promise<IResponse<Fan>>

	abstract getByEmail(inputs: InputsLayer<UserAuthEmail, Fan>): Promise<IResponse<Fan>>
}

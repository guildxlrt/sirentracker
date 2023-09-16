import { BaseReposUser, InputsLayer } from "../../../assets"
import { Fan, FanId, UserAuthEmail } from "../../entities"

export abstract class FanRepository implements BaseReposUser<Fan> {
	abstract create(inputs: InputsLayer<unknown, boolean>): Promise<InputsLayer<unknown, boolean>>

	abstract modify(inputs: InputsLayer<unknown, boolean>): Promise<InputsLayer<unknown, boolean>>

	abstract getById(inputs: InputsLayer<FanId, Fan>): Promise<InputsLayer<FanId, Fan>>

	abstract getByEmail(
		inputs: InputsLayer<UserAuthEmail, Fan>
	): Promise<InputsLayer<UserAuthEmail, Fan>>
}

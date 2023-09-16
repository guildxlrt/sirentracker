import { InputsLayer } from "../../../assets"

export abstract class AdminRepository {
	abstract create(inputs: InputsLayer<unknown, boolean>): Promise<InputsLayer<unknown, boolean>>
}

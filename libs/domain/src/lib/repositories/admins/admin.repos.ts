import { IResponse, InputsLayer } from "../../../assets"

export abstract class AdminRepository {
	abstract create(inputs: InputsLayer<unknown, boolean>): Promise<IResponse<boolean>>
}

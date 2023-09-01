import { IResponse } from "../../assets"
import { ReleaseId } from "../entities"
import { Order, OrderId } from "../entities"

export abstract class OrderRepository {
	abstract make(id: ReleaseId): Promise<IResponse<boolean>>

	abstract get(id: OrderId): Promise<IResponse<Order>>
}

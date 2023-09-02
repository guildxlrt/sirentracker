import { IResponse } from "../../assets"
import { FanId, Order, OrderId } from "../entities"

export abstract class OrderRepository {
	abstract make(params: any): Promise<IResponse<boolean>>

	abstract get(id: OrderId): Promise<IResponse<Order>>

	abstract findManyByUser(id: FanId): Promise<IResponse<Order[]>>
}

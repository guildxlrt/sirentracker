import { Order } from "@prisma/client"
import { IResponse } from "../../../assets"
import { OrderId } from "../../entities/fans/order"
import { FanId } from "../../entities"

export abstract class OrderRepository {
	abstract make(params: any): Promise<IResponse<boolean>>

	abstract get(id: OrderId): Promise<IResponse<Order>>

	abstract findManyByUser(id: FanId): Promise<IResponse<Order[]>>

	abstract getUserOrders(): Promise<IResponse<Order[]>>
}

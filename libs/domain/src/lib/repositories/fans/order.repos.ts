import { Order } from "@prisma/client"
import { IResponse, InputsLayer } from "../../../assets"
import { OrderId } from "../../entities/fans/order"
import { FanId } from "../../entities"

export abstract class OrderRepository {
	abstract make(inputs: InputsLayer<unknown, boolean>): Promise<IResponse<boolean>>

	abstract get(inputs: InputsLayer<OrderId, Order>): Promise<IResponse<Order>>

	abstract findManyByUser(inputs: InputsLayer<FanId, Order[]>): Promise<IResponse<Order[]>>

	abstract getUserOrders(inputs: InputsLayer<FanId, Order[]>): Promise<IResponse<Order[]>>
}

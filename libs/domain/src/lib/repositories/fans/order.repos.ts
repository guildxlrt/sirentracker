import { Order } from "@prisma/client"
import { InputsLayer } from "../../../assets"
import { OrderId } from "../../entities/fans/order"
import { FanId } from "../../entities"

export abstract class OrderRepository {
	abstract make(inputs: InputsLayer<unknown, boolean>): Promise<InputsLayer<unknown, boolean>>

	abstract get(inputs: InputsLayer<OrderId, Order>): Promise<InputsLayer<OrderId, Order>>

	abstract findManyByUser(
		inputs: InputsLayer<FanId, Order[]>
	): Promise<InputsLayer<FanId, Order[]>>

	abstract getUserOrders(
		inputs: InputsLayer<FanId, Order[]>
	): Promise<InputsLayer<FanId, Order[]>>
}

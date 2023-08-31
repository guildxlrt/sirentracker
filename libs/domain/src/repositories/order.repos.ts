import { ReleaseId } from "../entities"
import { Order, OrderId } from "../entities/order"

export abstract class OrderRepository {
	abstract make(id: ReleaseId): Promise<boolean>

	abstract get(id: OrderId): Promise<Order>
}

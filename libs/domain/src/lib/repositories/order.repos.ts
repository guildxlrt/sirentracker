import { BaseReposResponse } from "../../assets"
import { ReleaseId } from "../entities"
import { Order, OrderId } from "../entities"

export abstract class OrderRepository {
	abstract make(id: ReleaseId): Promise<BaseReposResponse<boolean>>

	abstract get(id: OrderId): Promise<BaseReposResponse<Order>>
}

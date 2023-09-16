import { FanId, Order, OrderId, ReleaseId, UserAuthId } from "Domain"
import { BasicDTO } from "../../assets"

// MAKE ORDER
interface INewOrderData {
	release_id: ReleaseId
	fan_id: UserAuthId
	amount: number
}

export class MakeOrderDTO extends BasicDTO<INewOrderData, boolean> {}

// GET ORDER
export class GetOrderByIdDTO extends BasicDTO<OrderId, Order> {}

// FIND MANY BY USER
export class FindOrdersByUserDTO extends BasicDTO<FanId, Order[]> {}

// FIND MANY BY USER
export class GetUserOrdersDTO extends BasicDTO<FanId, Order[]> {}

import { Order } from "Domain"

export type OrderIdDTO = Pick<Order, "id">["id"]

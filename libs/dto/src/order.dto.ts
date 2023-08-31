import { Order } from "libs/domain/src/entities/order"

export type OrderIdDTO = Pick<Order, "id">["id"]

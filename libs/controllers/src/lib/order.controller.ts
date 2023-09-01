import { FastifyReply, FastifyRequest } from "fastify"
import { IParams } from "../assets"
import { apiError } from "Shared-utils"
import { Order } from "Domain"
import { OrderIdDTO, ResponseDTO } from "Dto"
import { GetOrderUsecase, MakeOrderUsecase } from "interactors"
import { databaseServices } from "Infra-backend"

const makeOrder = new MakeOrderUsecase(databaseServices)
const getOrder = new GetOrderUsecase(databaseServices)

interface IOrderController {
	make(request: unknown, reply: unknown): Promise<ResponseDTO<boolean>>
	get(request: unknown, reply: unknown): Promise<ResponseDTO<Order>>
}

export class OrderController implements IOrderController {
	async make(
		request: FastifyRequest<IParams<OrderIdDTO>>,
		reply: FastifyReply
	): Promise<ResponseDTO<boolean>> {
		if (request.method !== "POST") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const input = request.params

			const { data, error, status } = await makeOrder.execute(input)
			if (error) reply.status(status).send({ error: error })

			return reply.status(202).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async get(
		request: FastifyRequest<IParams<OrderIdDTO>>,
		reply: FastifyReply
	): Promise<ResponseDTO<Order>> {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		const input = request.params

		try {
			const { data, error, status } = await getOrder.execute(input)
			if (error) reply.status(status).send({ error: error })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}
}

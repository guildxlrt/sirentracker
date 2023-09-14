import { FastifyReply, FastifyRequest } from "fastify"
import { apiError } from "Shared-utils"
import { Order } from "Domain"
import { MakeOrderDTO, ResponseDTO } from "Dto"
import {
	FindOrdersByUserUsecase,
	GetOrderUsecase,
	MakeOrderUsecase,
	GetUserOrdersUsecase,
} from "Interactors"
import { databaseServices } from "Infra-backend"
import { ParamsId } from "../../assets"

const makeOrder = new MakeOrderUsecase(databaseServices)
const getOrder = new GetOrderUsecase(databaseServices)
const findOrdersByUser = new FindOrdersByUserUsecase(databaseServices)
const getUserOrders = new GetUserOrdersUsecase(databaseServices)

interface IOrderController {
	make(request: unknown, reply: unknown): Promise<ResponseDTO<boolean>>
	get(request: unknown, reply: unknown): Promise<ResponseDTO<Order>>
	findManyByUser(request: unknown, reply: unknown): Promise<ResponseDTO<Order[]>>
}

export class OrderController implements IOrderController {
	async make(request: FastifyRequest, reply: FastifyReply): Promise<ResponseDTO<boolean>> {
		if (request.method !== "POST") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const inputs: MakeOrderDTO = request.body as MakeOrderDTO

			const { data, error, status } = await makeOrder.execute(inputs)
			if (error) reply.status(status).send({ error: error })

			return reply.status(202).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async get(request: FastifyRequest<ParamsId>, reply: FastifyReply): Promise<ResponseDTO<Order>> {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		const { id } = request.params

		try {
			const { data, error, status } = await getOrder.execute(id)
			if (error) reply.status(status).send({ error: error })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async findManyByUser(
		request: FastifyRequest<ParamsId>,
		reply: FastifyReply
	): Promise<ResponseDTO<Order[]>> {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		const { id } = request.params

		try {
			const { data, error, status } = await findOrdersByUser.execute(id)
			if (error) reply.status(status).send({ error: error })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async getUserOrders(
		request: FastifyRequest,
		reply: FastifyReply
	): Promise<ResponseDTO<Order[]>> {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const { data, error, status } = await getUserOrders.execute()
			if (error) reply.status(status).send({ error: error })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}
}

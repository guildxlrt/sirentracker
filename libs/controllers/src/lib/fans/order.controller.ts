import { FastifyReply, FastifyRequest } from "fastify"
import { apiError } from "Shared-utils"
import { FindOrdersByUserDTO, GetOrderByIdDTO, GetUserOrdersDTO, MakeOrderDTO } from "Dto"
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
	make(request: unknown, reply: unknown): Promise<never>
	get(request: unknown, reply: unknown): Promise<never>
	findManyByUser(request: unknown, reply: unknown): Promise<never>
}

export class OrderController implements IOrderController {
	async make(request: FastifyRequest, reply: FastifyReply) {
		if (request.method !== "POST") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const inputs: MakeOrderDTO = request.body as MakeOrderDTO

			const { data, error } = await makeOrder.execute(inputs)
			if (error) reply.status(error.status).send({ error: error.message })

			return reply.status(202).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async get(request: FastifyRequest<ParamsId>, reply: FastifyReply) {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const { id } = request.params
			const inputs: GetOrderByIdDTO = new GetOrderByIdDTO(id)

			const { data, error } = await getOrder.execute(inputs)
			if (error) reply.status(error.status).send({ error: error.message })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async findManyByUser(request: FastifyRequest<ParamsId>, reply: FastifyReply) {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const { id } = request.params
			const inputs: FindOrdersByUserDTO = new FindOrdersByUserDTO(id)

			const { data, error } = await findOrdersByUser.execute(inputs)
			if (error) reply.status(error.status).send({ error: error.message })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async getUserOrders(request: FastifyRequest, reply: FastifyReply) {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const inputs: GetUserOrdersDTO = request.body as GetUserOrdersDTO

			const { data, error } = await getUserOrders.execute(inputs)
			if (error) reply.status(error.status).send({ error: error.message })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}
}

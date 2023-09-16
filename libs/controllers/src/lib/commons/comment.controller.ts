import {
	CreateCommentDTO,
	DeleteCommentDTO,
	FindCommentsByPostDTO,
	FindCommentsByReleaseDTO,
} from "Dto"
import { databaseServices } from "Infra-backend"
import {
	CreateCommentUsecase,
	DeleteCommentUsecase,
	FindCommentsByPostUsecase,
	FindCommentsByReleaseUsecase,
} from "Interactors"
import { apiError } from "Shared-utils"
import { FastifyReply, FastifyRequest } from "fastify"
import { ParamsId } from "../../assets"

const createComment = new CreateCommentUsecase(databaseServices)
const deleteComment = new DeleteCommentUsecase(databaseServices)
const findCommentsByRelease = new FindCommentsByReleaseUsecase(databaseServices)
const findCommentsByPost = new FindCommentsByPostUsecase(databaseServices)

interface ICommentController {
	create(request: unknown, reply: unknown): Promise<never>
	delete(request: unknown, reply: unknown): Promise<never>
	findManyByRelease(request: unknown, reply: unknown): Promise<never>
	findManyByPost(request: unknown, reply: unknown): Promise<never>
}

export class CommentController implements ICommentController {
	async create(request: FastifyRequest, reply: FastifyReply) {
		if (request.method !== "POST") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const inputs: CreateCommentDTO = request.body as CreateCommentDTO

			const { data, error } = await createComment.execute(inputs)
			if (error) reply.status(error.status).send({ error: error.message })

			return reply.status(202).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async delete(request: FastifyRequest<ParamsId>, reply: FastifyReply) {
		if (request.method !== "DELETE") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const { id } = request.params
			const inputs: DeleteCommentDTO = new DeleteCommentDTO(id)

			const { data, error } = await deleteComment.execute(inputs)
			if (error) reply.status(error.status).send({ error: error.message })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async findManyByRelease(request: FastifyRequest<ParamsId>, reply: FastifyReply) {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const { id } = request.params
			const inputs: FindCommentsByReleaseDTO = new FindCommentsByReleaseDTO(id)

			const { data, error } = await findCommentsByRelease.execute(inputs)
			if (error) reply.status(error.status).send({ error: error.message })

			return reply.status(202).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async findManyByPost(request: FastifyRequest<ParamsId>, reply: FastifyReply) {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const { id } = request.params
			const inputs: FindCommentsByPostDTO = new FindCommentsByPostDTO(id)

			const { data, error } = await findCommentsByPost.execute(inputs)
			if (error) reply.status(error.status).send({ error: error.message })

			return reply.status(202).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}
}

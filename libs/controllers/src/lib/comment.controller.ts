import { CreateCommentDTO, PostIdDTO, ResponseDTO } from "Dto"
import { databaseServices } from "Infra-backend"
import {
	CreateCommentUsecase,
	DeleteCommentUsecase,
	FindCommentsByPostUsecase,
	FindCommentsByReleaseUsecase,
} from "Interactors"
import { apiError } from "Shared-utils"
import { FastifyReply, FastifyRequest } from "fastify"
import { ParamsId } from "../assets"

const createComment = new CreateCommentUsecase(databaseServices)
const deleteComment = new DeleteCommentUsecase(databaseServices)
const findCommentsByRelease = new FindCommentsByReleaseUsecase(databaseServices)
const findCommentsByPost = new FindCommentsByPostUsecase(databaseServices)

interface ICommentController {
	create(request: unknown, reply: unknown): Promise<ResponseDTO<boolean>>
	delete(request: unknown, reply: unknown): Promise<ResponseDTO<unknown>>
	findManyByRelease(request: unknown, reply: unknown): Promise<ResponseDTO<Comment[]>>
	findManyByPost(request: unknown, reply: unknown): Promise<ResponseDTO<Comment[]>>
}

export class CommentController implements ICommentController {
	async create(request: FastifyRequest, reply: FastifyReply): Promise<ResponseDTO<boolean>> {
		if (request.method !== "POST") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const inputs: CreateCommentDTO = request.body as CreateCommentDTO

			const { data, error, status } = await createComment.execute(inputs)
			if (error) reply.status(status).send({ error: error })

			return reply.status(202).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async delete(request: FastifyRequest, reply: FastifyReply): Promise<ResponseDTO<boolean>> {
		if (request.method !== "DELETE") return reply.status(405).send({ error: apiError.e405.msg })

		const inputs: PostIdDTO = request.body as PostIdDTO

		try {
			const { data, error, status } = await deleteComment.execute(inputs)
			if (error) reply.status(status).send({ error: error })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async findManyByRelease(
		request: FastifyRequest<ParamsId>,
		reply: FastifyReply
	): Promise<ResponseDTO<Comment[]>> {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const { id } = request.params

			const { data, error, status } = await findCommentsByRelease.execute(id)
			if (error) reply.status(status).send({ error: error })

			return reply.status(202).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async findManyByPost(
		request: FastifyRequest<ParamsId>,
		reply: FastifyReply
	): Promise<ResponseDTO<Comment[]>> {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const { id } = request.params

			const { data, error, status } = await findCommentsByPost.execute(id)
			if (error) reply.status(status).send({ error: error })

			return reply.status(202).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}
}

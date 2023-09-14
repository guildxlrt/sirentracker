import { Post } from "Domain"
import { CommentIdDTO, CreatePostDTO, ResponseDTO } from "Dto"
import { databaseServices } from "Infra-backend"
import {
	CreatePostUsecase,
	DeletePostUsecase,
	FindPostsByArtistUsecase,
	GetAllPostsUsecase,
	GetPostUsecase,
} from "Interactors"
import { apiError } from "Shared-utils"
import { FastifyReply, FastifyRequest } from "fastify"
import { ParamsId } from "../../assets"

const createPost = new CreatePostUsecase(databaseServices)
const deletePost = new DeletePostUsecase(databaseServices)
const getPost = new GetPostUsecase(databaseServices)
const getAll = new GetAllPostsUsecase(databaseServices)
const findManyByArtist = new FindPostsByArtistUsecase(databaseServices)

interface IPostController {
	create(request: FastifyRequest, reply: FastifyReply): Promise<ResponseDTO<boolean>>
	delete(request: FastifyRequest, reply: FastifyReply): Promise<ResponseDTO<unknown>>
	get(request: FastifyRequest, reply: FastifyReply): Promise<ResponseDTO<Post>>
	getAll(request: FastifyRequest, reply: FastifyReply): Promise<ResponseDTO<Post[]>>
	findManyByArtist(request: FastifyRequest, reply: FastifyReply): Promise<ResponseDTO<Post[]>>
}

export class PostController implements IPostController {
	async create(request: FastifyRequest, reply: FastifyReply): Promise<ResponseDTO<boolean>> {
		if (request.method !== "POST") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const inputs: CreatePostDTO = request.body as CreatePostDTO

			const { data, error, status } = await createPost.execute(inputs)
			if (error) reply.status(status).send({ error: error })

			return reply.status(202).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async delete(request: FastifyRequest, reply: FastifyReply): Promise<ResponseDTO<unknown>> {
		if (request.method !== "DELETE") return reply.status(405).send({ error: apiError.e405.msg })

		const inputs: CommentIdDTO = request.body as CommentIdDTO

		try {
			const { data, error, status } = await deletePost.execute(inputs)
			if (error) reply.status(status).send({ error: error })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async get(request: FastifyRequest, reply: FastifyReply): Promise<ResponseDTO<Post>> {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		const inputs: CommentIdDTO = request.body as CommentIdDTO

		try {
			const { data, error, status } = await getPost.execute(inputs)
			if (error) reply.status(status).send({ error: error })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async getAll(request: FastifyRequest, reply: FastifyReply): Promise<ResponseDTO<Post[]>> {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const { data, error, status } = await getAll.execute()
			if (error) reply.status(status).send({ error: error })

			return reply.status(status).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async findManyByArtist(
		request: FastifyRequest<ParamsId>,
		reply: FastifyReply
	): Promise<ResponseDTO<Post[]>> {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const { id } = request.params

			const { data, error, status } = await findManyByArtist.execute(id)
			if (error) reply.status(status).send({ error: error })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}
}

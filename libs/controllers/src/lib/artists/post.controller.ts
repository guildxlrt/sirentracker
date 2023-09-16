import {
	CreatePostDTO,
	DeletePostsDTO,
	FindPostsByArtistDTO,
	GetAllPostsDTO,
	GetPostDTO,
} from "Dto"
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
	create(request: FastifyRequest, reply: FastifyReply): Promise<never>
	delete(request: FastifyRequest, reply: FastifyReply): Promise<never>
	get(request: FastifyRequest, reply: FastifyReply): Promise<never>
	getAll(request: FastifyRequest, reply: FastifyReply): Promise<never>
	findManyByArtist(request: FastifyRequest, reply: FastifyReply): Promise<never>
}

export class PostController implements IPostController {
	async create(request: FastifyRequest, reply: FastifyReply) {
		if (request.method !== "POST") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const inputs: CreatePostDTO = request.body as CreatePostDTO

			const { data, error } = await createPost.execute(inputs)
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
			const inputs: DeletePostsDTO = new DeletePostsDTO(id)

			const { data, error } = await deletePost.execute(inputs)
			if (error) reply.status(error.status).send({ error: error.message })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async get(request: FastifyRequest<ParamsId>, reply: FastifyReply) {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const { id } = request.params
			const inputs: GetPostDTO = new GetPostDTO(id)

			const { data, error } = await getPost.execute(inputs)
			if (error) reply.status(error.status).send({ error: error.message })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async getAll(request: FastifyRequest, reply: FastifyReply) {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const inputs: GetAllPostsDTO = request.body as GetAllPostsDTO

			const { data, error } = await getAll.execute(inputs)
			if (error) reply.status(error.status).send({ error: error.message })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async findManyByArtist(request: FastifyRequest<ParamsId>, reply: FastifyReply) {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const { id } = request.params
			const inputs: FindPostsByArtistDTO = new FindPostsByArtistDTO(id)

			const { data, error } = await findManyByArtist.execute(inputs)
			if (error) reply.status(error.status).send({ error: error.message })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}
}

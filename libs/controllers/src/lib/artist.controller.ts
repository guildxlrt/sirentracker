import { FastifyReply, FastifyRequest } from "fastify"
import { apiError } from "Shared-utils"
import { Artist } from "Domain"
import { CreateArtistDTO, ModifyArtistDTO, ResponseDTO } from "Dto"
import {
	CreateArtistUsecase,
	GetAllArtistsUsecase,
	FindArtistsByGenreUsecase,
	GetArtistByEmailUsecase,
	GetArtistByIdUsecase,
	ModifyArtistUsecase,
} from "Interactors"
import { databaseServices } from "Infra-backend"
import { ParamsEmail, ParamsGenre, ParamsId } from "../assets"

const createArtist = new CreateArtistUsecase(databaseServices)
const modifyArtist = new ModifyArtistUsecase(databaseServices)
const getAllArtists = new GetAllArtistsUsecase(databaseServices)
const findArtistsByGenre = new FindArtistsByGenreUsecase(databaseServices)
const getArtistById = new GetArtistByIdUsecase(databaseServices)
const getArtistByEmail = new GetArtistByEmailUsecase(databaseServices)

interface IArtistController {
	create(request: unknown, reply: unknown): Promise<ResponseDTO<boolean>>
	modify(request: unknown, reply: unknown): Promise<ResponseDTO<boolean>>
	getAll(request: unknown, reply: unknown): Promise<ResponseDTO<Artist[]>>
	findManyByGenre(request: unknown, reply: unknown): Promise<ResponseDTO<Artist[]>>
	getById(request: unknown, reply: unknown): Promise<ResponseDTO<Artist>>
	getByEmail(request: unknown, reply: unknown): Promise<ResponseDTO<Artist>>
}

export class ArtistsController implements IArtistController {
	async create(request: FastifyRequest, reply: FastifyReply): Promise<ResponseDTO<boolean>> {
		if (request.method !== "POST") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const inputs: CreateArtistDTO = request.body as CreateArtistDTO

			const { data, error, status } = await createArtist.execute(inputs)
			if (error) reply.status(status).send({ error: error })

			return reply.status(202).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async modify(request: FastifyRequest, reply: FastifyReply): Promise<ResponseDTO<boolean>> {
		if (request.method !== "PUT") return reply.status(405).send({ error: apiError.e405.msg })

		const inputs: ModifyArtistDTO = request.body as ModifyArtistDTO

		try {
			const { data, error, status } = await modifyArtist.execute(inputs)
			if (error) reply.status(status).send({ error: error })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async getAll(request: FastifyRequest, reply: FastifyReply): Promise<ResponseDTO<Artist[]>> {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const { data, error, status } = await getAllArtists.execute()
			if (error) reply.status(status).send({ error: error })

			return reply.status(status).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async findManyByGenre(
		request: FastifyRequest<ParamsGenre>,
		reply: FastifyReply
	): Promise<ResponseDTO<Artist[]>> {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const { genre } = request.params

			const { data, error, status } = await findArtistsByGenre.execute(genre)
			if (error) reply.status(status).send({ error: error })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async getById(
		request: FastifyRequest<ParamsId>,
		reply: FastifyReply
	): Promise<ResponseDTO<Artist>> {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		const { id } = request.params

		try {
			const { data, error, status } = await getArtistById.execute(id)
			if (error) reply.status(status).send({ error: error })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async getByEmail(
		request: FastifyRequest<ParamsEmail>,
		reply: FastifyReply
	): Promise<ResponseDTO<Artist>> {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		const { email } = request.params

		try {
			const { data, error, status } = await getArtistByEmail.execute(email)
			if (error) reply.status(status).send({ error: error })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}
}

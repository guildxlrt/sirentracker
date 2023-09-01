import { FastifyReply, FastifyRequest } from "fastify"
import { IParams } from "../assets"
import { GenreType, apiError } from "Shared-utils"
import { Artist } from "Domain"
import { ArtistIdDTO, CreateArtistDTO, EmailDTO, ModifyArtistDTO, ResponseDTO } from "Dto"
import {
	CreateArtistUsecase,
	FetchAllArtistsUsecase,
	FindArtistsByGenreUsecase,
	GetArtistByEmailUsecase,
	GetArtistByIdUsecase,
	ModifyArtistUsecase,
} from "interactors"
import { databaseServices } from "Infra-backend"

const fetchAllArtists = new FetchAllArtistsUsecase(databaseServices)
const findArtistsByGenre = new FindArtistsByGenreUsecase(databaseServices)
const createArtist = new CreateArtistUsecase(databaseServices)
const modifyArtist = new ModifyArtistUsecase(databaseServices)
const getArtistById = new GetArtistByIdUsecase(databaseServices)
const getArtistByEmail = new GetArtistByEmailUsecase(databaseServices)

interface IAuthorController {
	fetchAll(request: unknown, reply: unknown): Promise<ResponseDTO<Artist[]>>
	findManyByGenre(request: unknown, reply: unknown): Promise<ResponseDTO<Artist[]>>
	create(request: unknown, reply: unknown): Promise<ResponseDTO<boolean>>
	modify(request: unknown, reply: unknown): Promise<ResponseDTO<boolean>>
	getById(request: unknown, reply: unknown): Promise<ResponseDTO<Artist>>
	getByEmail(request: unknown, reply: unknown): Promise<ResponseDTO<Artist>>
}

export class AuthorsController implements IAuthorController {
	async fetchAll(request: FastifyRequest, reply: FastifyReply): Promise<ResponseDTO<Artist[]>> {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const { data, error, status } = await fetchAllArtists.execute()
			if (error) reply.status(status).send({ error: error })

			return reply.status(status).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async findManyByGenre(
		request: FastifyRequest<IParams<GenreType>>,
		reply: FastifyReply
	): Promise<ResponseDTO<Artist[]>> {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const input = request.params

			const { data, error, status } = await findArtistsByGenre.execute(input)
			if (error) reply.status(status).send({ error: error })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async create(
		request: FastifyRequest<IParams<CreateArtistDTO>>,
		reply: FastifyReply
	): Promise<ResponseDTO<boolean>> {
		if (request.method !== "POST") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const input = request.params

			const { data, error, status } = await createArtist.execute(input)
			if (error) reply.status(status).send({ error: error })

			return reply.status(202).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async modify(
		request: FastifyRequest<IParams<ModifyArtistDTO>>,
		reply: FastifyReply
	): Promise<ResponseDTO<boolean>> {
		if (request.method !== "PUT") return reply.status(405).send({ error: apiError.e405.msg })

		const input = request.params

		try {
			const { data, error, status } = await modifyArtist.execute(input)
			if (error) reply.status(status).send({ error: error })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async getById(
		request: FastifyRequest<IParams<ArtistIdDTO>>,
		reply: FastifyReply
	): Promise<ResponseDTO<Artist>> {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		const input = request.params

		try {
			const { data, error, status } = await getArtistById.execute(input)
			if (error) reply.status(status).send({ error: error })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async getByEmail(
		request: FastifyRequest<IParams<EmailDTO>>,
		reply: FastifyReply
	): Promise<ResponseDTO<Artist>> {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		const input = request.params

		try {
			const { data, error, status } = await getArtistByEmail.execute(input)
			if (error) reply.status(status).send({ error: error })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}
}

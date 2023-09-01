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
} from "Usecases"
import { databaseServices } from "Infra-backend"

const fetchAllArtistsUsecase = new FetchAllArtistsUsecase(databaseServices)
const findArtistsByGenreUsecase = new FindArtistsByGenreUsecase(databaseServices)
const createArtistUsecase = new CreateArtistUsecase(databaseServices)
const modifyArtistUsecase = new ModifyArtistUsecase(databaseServices)
const getArtistByIdUsecase = new GetArtistByIdUsecase(databaseServices)
const getArtistByEmailUsecase = new GetArtistByEmailUsecase(databaseServices)

interface IAuthorController {
	fetchAll(request: unknown, reply: unknown): Promise<ResponseDTO<Artist[]>>
	findMunknownByGenre(request: unknown, reply: unknown): Promise<ResponseDTO<Artist[]>>
	create(request: unknown, reply: unknown): Promise<ResponseDTO<boolean>>
	modify(request: unknown, reply: unknown): Promise<ResponseDTO<boolean>>
	getById(request: unknown, reply: unknown): Promise<ResponseDTO<Artist>>
	getByEmail(request: unknown, reply: unknown): Promise<ResponseDTO<Artist>>
}

export class AuthorController implements IAuthorController {
	async fetchAll(request: FastifyRequest, reply: FastifyReply): Promise<ResponseDTO<Artist[]>> {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const { data, error, status } = await fetchAllArtistsUsecase.execute()
			if (error) reply.status(status).send({ error: error })

			return reply.status(status).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async findMunknownByGenre(
		request: FastifyRequest<IParams<GenreType>>,
		reply: FastifyReply
	): Promise<ResponseDTO<Artist[]>> {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const input = request.params

			const { data, error, status } = await findArtistsByGenreUsecase.execute(input)
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
		try {
			const input = request.params

			const { data, error, status } = await createArtistUsecase.execute(input)
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
		const input = request.params

		try {
			const { data, error, status } = await modifyArtistUsecase.execute(input)
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
		const input = request.params

		try {
			const { data, error, status } = await getArtistByIdUsecase.execute(input)
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
		const input = request.params

		try {
			const { data, error, status } = await getArtistByEmailUsecase.execute(input)
			if (error) reply.status(status).send({ error: error })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}
}

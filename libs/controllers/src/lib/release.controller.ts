import { FastifyReply, FastifyRequest } from "fastify"
import { IParams } from "../assets"
import { GenreType, apiError } from "Shared-utils"
import { ArtistId, Release } from "Domain"
import { ArtistIdDTO, CreateReleaseDTO, ReleasePriceDTO, ResponseDTO } from "Dto"
import {
	CreateReleaseUsecase,
	FetchAllReleasesUsecase,
	FindReleasesByArtistUsecase,
	FindReleasesByGenreUsecase,
	GetReleaseUsecase,
	ModifyReleasePriceUsecase,
} from "interactors"
import { databaseServices } from "Infra-backend"

const fetchAllReleases = new FetchAllReleasesUsecase(databaseServices)
const findReleasesByGenre = new FindReleasesByGenreUsecase(databaseServices)
const findReleasesByArtist = new FindReleasesByArtistUsecase(databaseServices)
const createRelease = new CreateReleaseUsecase(databaseServices)
const modifyReleasePrice = new ModifyReleasePriceUsecase(databaseServices)
const getRelease = new GetReleaseUsecase(databaseServices)

interface IAuthorController {
	fetchAll(request: unknown, reply: unknown): Promise<ResponseDTO<Release[]>>
	findManyByGenre(request: unknown, reply: unknown): Promise<ResponseDTO<Release[]>>
	findManyByArtist(request: unknown, reply: unknown): Promise<ResponseDTO<Release[]>>
	create(request: unknown, reply: unknown): Promise<ResponseDTO<boolean>>
	get(request: unknown, reply: unknown): Promise<ResponseDTO<Release>>
	modifyPrice(request: unknown, reply: unknown): Promise<ResponseDTO<boolean>>
}

export class AuthorController implements IAuthorController {
	async fetchAll(request: FastifyRequest, reply: FastifyReply): Promise<ResponseDTO<Release[]>> {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const { data, error, status } = await fetchAllReleases.execute()
			if (error) reply.status(status).send({ error: error })

			return reply.status(status).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async findManyByGenre(
		request: FastifyRequest<IParams<GenreType>>,
		reply: FastifyReply
	): Promise<ResponseDTO<Release[]>> {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const input = request.params

			const { data, error, status } = await findReleasesByGenre.execute(input)
			if (error) reply.status(status).send({ error: error })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async findManyByArtist(
		request: FastifyRequest<IParams<ArtistId>>,
		reply: FastifyReply
	): Promise<ResponseDTO<Release[]>> {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const input = request.params

			const { data, error, status } = await findReleasesByArtist.execute(input)
			if (error) reply.status(status).send({ error: error })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async create(
		request: FastifyRequest<IParams<CreateReleaseDTO>>,
		reply: FastifyReply
	): Promise<ResponseDTO<boolean>> {
		if (request.method !== "POST") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const input = request.params

			const { data, error, status } = await createRelease.execute(input)
			if (error) reply.status(status).send({ error: error })

			return reply.status(202).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async modifyPrice(
		request: FastifyRequest<IParams<ReleasePriceDTO>>,
		reply: FastifyReply
	): Promise<ResponseDTO<boolean>> {
		if (request.method !== "PUT") return reply.status(405).send({ error: apiError.e405.msg })

		const input = request.params

		try {
			const { data, error, status } = await modifyReleasePrice.execute(input)
			if (error) reply.status(status).send({ error: error })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async get(
		request: FastifyRequest<IParams<ArtistIdDTO>>,
		reply: FastifyReply
	): Promise<ResponseDTO<Release>> {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		const input = request.params

		try {
			const { data, error, status } = await getRelease.execute(input)
			if (error) reply.status(status).send({ error: error })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}
}

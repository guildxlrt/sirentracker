import { FastifyReply, FastifyRequest } from "fastify"
import { ParamsGenre, ParamsId } from "../../assets"
import { apiError } from "Shared-utils"
import {
	CreateReleaseDTO,
	FindReleasesByArtistDTO,
	FindReleasesByGenreDTO,
	GetAllReleasesDTO,
	GetReleaseDTO,
	GetUserReleasesDTO,
	ModifyReleasePriceDTO,
} from "Dto"
import {
	CreateReleaseUsecase,
	GetAllReleasesUsecase,
	FindReleasesByArtistUsecase,
	FindReleasesByGenreUsecase,
	GetReleaseUsecase,
	ModifyReleasePriceUsecase,
	GetUserReleasesUsecase,
} from "Interactors"
import { databaseServices } from "Infra-backend"

const getAllReleases = new GetAllReleasesUsecase(databaseServices)
const findReleasesByGenre = new FindReleasesByGenreUsecase(databaseServices)
const findReleasesByArtist = new FindReleasesByArtistUsecase(databaseServices)
const createRelease = new CreateReleaseUsecase(databaseServices)
const modifyReleasePrice = new ModifyReleasePriceUsecase(databaseServices)
const getRelease = new GetReleaseUsecase(databaseServices)
const getUserReleases = new GetUserReleasesUsecase(databaseServices)

interface IReleaseController {
	getAll(request: unknown, reply: unknown): Promise<never>
	findManyByGenre(request: unknown, reply: unknown): Promise<never>
	findManyByArtist(request: unknown, reply: unknown): Promise<never>
	create(request: unknown, reply: unknown): Promise<never>
	get(request: unknown, reply: unknown): Promise<never>
	modifyPrice(request: unknown, reply: unknown): Promise<never>
	getUserReleases(request: unknown, reply: unknown): Promise<never>
}

export class ReleaseController implements IReleaseController {
	async create(request: FastifyRequest, reply: FastifyReply) {
		if (request.method !== "POST") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const inputs: CreateReleaseDTO = request.body as CreateReleaseDTO

			const { data, error } = await createRelease.execute(inputs)
			if (error) reply.status(error.status).send({ error: error.message })

			return reply.status(202).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async modifyPrice(request: FastifyRequest, reply: FastifyReply) {
		if (request.method !== "PUT") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const inputs: ModifyReleasePriceDTO = request.body as ModifyReleasePriceDTO

			const { data, error } = await modifyReleasePrice.execute(inputs)
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
			const inputs: GetReleaseDTO = new GetReleaseDTO(id)

			const { data, error } = await getRelease.execute(inputs)
			if (error) reply.status(error.status).send({ error: error.message })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async getAll(request: FastifyRequest, reply: FastifyReply) {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const inputs: GetAllReleasesDTO = request.body as GetAllReleasesDTO

			const { data, error } = await getAllReleases.execute(inputs)
			if (error) reply.status(error.status).send({ error: error.message })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async findManyByGenre(request: FastifyRequest<ParamsGenre>, reply: FastifyReply) {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const { genre } = request.params
			const inputs: FindReleasesByGenreDTO = new FindReleasesByGenreDTO(genre)

			const { data, error } = await findReleasesByGenre.execute(inputs)
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
			const inputs: FindReleasesByArtistDTO = new FindReleasesByArtistDTO(id)

			const { data, error } = await findReleasesByArtist.execute(inputs)
			if (error) reply.status(error.status).send({ error: error.message })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async getUserReleases(request: FastifyRequest, reply: FastifyReply) {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const inputs: GetUserReleasesDTO = request.body as GetUserReleasesDTO

			const { data, error } = await getUserReleases.execute(inputs)
			if (error) reply.status(error.status).send({ error: error.message })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}
}

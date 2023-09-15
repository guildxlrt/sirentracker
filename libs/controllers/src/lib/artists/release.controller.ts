import { FastifyReply, FastifyRequest } from "fastify"
import { ParamsGenre, ParamsId } from "../../assets"
import { apiError } from "Shared-utils"
import { Release } from "Domain"
import {
	CreateReleaseDTO,
	FindReleasesByArtistDTO,
	FindReleasesByGenreDTO,
	GetAllReleasesDTO,
	GetReleaseDTO,
	GetUserReleasesDTO,
	ModifyReleasePriceDTO,
	ResponseDTO,
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
	getAll(request: unknown, reply: unknown): Promise<ResponseDTO<Release[]>>
	findManyByGenre(request: unknown, reply: unknown): Promise<ResponseDTO<Release[]>>
	findManyByArtist(request: unknown, reply: unknown): Promise<ResponseDTO<Release[]>>
	create(request: unknown, reply: unknown): Promise<ResponseDTO<boolean>>
	get(request: unknown, reply: unknown): Promise<ResponseDTO<Release>>
	modifyPrice(request: unknown, reply: unknown): Promise<ResponseDTO<boolean>>
	getUserReleases(request: unknown, reply: unknown): Promise<ResponseDTO<Release[]>>
}

export class ReleaseController implements IReleaseController {
	async create(request: FastifyRequest, reply: FastifyReply): Promise<ResponseDTO<boolean>> {
		if (request.method !== "POST") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const inputs: CreateReleaseDTO = request.body as CreateReleaseDTO

			const { data, error, status } = await createRelease.execute(inputs)
			if (error) reply.status(status).send({ error: error })

			return reply.status(202).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async modifyPrice(request: FastifyRequest, reply: FastifyReply): Promise<ResponseDTO<boolean>> {
		if (request.method !== "PUT") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const inputs: ModifyReleasePriceDTO = request.body as ModifyReleasePriceDTO

			const { data, error, status } = await modifyReleasePrice.execute(inputs)
			if (error) reply.status(status).send({ error: error })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async get(
		request: FastifyRequest<ParamsId>,
		reply: FastifyReply
	): Promise<ResponseDTO<Release>> {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const { id } = request.params
			const inputs: GetReleaseDTO = new GetReleaseDTO(id)

			const { data, error, status } = await getRelease.execute(inputs)
			if (error) reply.status(status).send({ error: error })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async getAll(request: FastifyRequest, reply: FastifyReply): Promise<ResponseDTO<Release[]>> {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const inputs: GetAllReleasesDTO = request.body as GetAllReleasesDTO

			const { data, error, status } = await getAllReleases.execute(inputs)
			if (error) reply.status(status).send({ error: error })

			return reply.status(status).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async findManyByGenre(
		request: FastifyRequest<ParamsGenre>,
		reply: FastifyReply
	): Promise<ResponseDTO<Release[]>> {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const { genre } = request.params
			const inputs: FindReleasesByGenreDTO = new FindReleasesByGenreDTO(genre)

			const { data, error, status } = await findReleasesByGenre.execute(inputs)
			if (error) reply.status(status).send({ error: error })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async findManyByArtist(
		request: FastifyRequest<ParamsId>,
		reply: FastifyReply
	): Promise<ResponseDTO<Release[]>> {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const { id } = request.params
			const inputs: FindReleasesByArtistDTO = new FindReleasesByArtistDTO(id)

			const { data, error, status } = await findReleasesByArtist.execute(inputs)
			if (error) reply.status(status).send({ error: error })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async getUserReleases(
		request: FastifyRequest,
		reply: FastifyReply
	): Promise<ResponseDTO<Release[]>> {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const inputs: GetUserReleasesDTO = request.body as GetUserReleasesDTO

			const { data, error, status } = await getUserReleases.execute(inputs)
			if (error) reply.status(status).send({ error: error })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}
}

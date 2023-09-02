import { FastifyReply, FastifyRequest } from "fastify"
import { ParamsGenre, ParamsId } from "../assets"
import { apiError } from "Shared-utils"
import { Release } from "Domain"
import { ArtistIdDTO, CreateReleaseDTO, ModifyReleasePriceDTO, ResponseDTO } from "Dto"
import {
	CreateReleaseUsecase,
	FetchAllReleasesUsecase,
	FindReleasesByArtistUsecase,
	FindReleasesByGenreUsecase,
	GetReleaseUsecase,
	ModifyReleasePriceUsecase,
} from "Interactors"
import { databaseServices } from "Infra-backend"

const fetchAllReleases = new FetchAllReleasesUsecase(databaseServices)
const findReleasesByGenre = new FindReleasesByGenreUsecase(databaseServices)
const findReleasesByArtist = new FindReleasesByArtistUsecase(databaseServices)
const createRelease = new CreateReleaseUsecase(databaseServices)
const modifyReleasePrice = new ModifyReleasePriceUsecase(databaseServices)
const getRelease = new GetReleaseUsecase(databaseServices)

interface IReleaseController {
	fetchAll(request: unknown, reply: unknown): Promise<ResponseDTO<Release[]>>
	findManyByGenre(request: unknown, reply: unknown): Promise<ResponseDTO<Release[]>>
	findManyByArtist(request: unknown, reply: unknown): Promise<ResponseDTO<Release[]>>
	create(request: unknown, reply: unknown): Promise<ResponseDTO<boolean>>
	get(request: unknown, reply: unknown): Promise<ResponseDTO<Release>>
	modifyPrice(request: unknown, reply: unknown): Promise<ResponseDTO<boolean>>
}

export class ReleaseController implements IReleaseController {
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
		request: FastifyRequest<ParamsGenre>,
		reply: FastifyReply
	): Promise<ResponseDTO<Release[]>> {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const { genre } = request.params

			const { data, error, status } = await findReleasesByGenre.execute(genre)
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

			const { data, error, status } = await findReleasesByArtist.execute(id)
			if (error) reply.status(status).send({ error: error })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async create(request: FastifyRequest, reply: FastifyReply): Promise<ResponseDTO<boolean>> {
		if (request.method !== "POST") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const body: CreateReleaseDTO = request.body as CreateReleaseDTO

			const { data, error, status } = await createRelease.execute(body)
			if (error) reply.status(status).send({ error: error })

			return reply.status(202).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async modifyPrice(request: FastifyRequest, reply: FastifyReply): Promise<ResponseDTO<boolean>> {
		if (request.method !== "PUT") return reply.status(405).send({ error: apiError.e405.msg })

		const body: ModifyReleasePriceDTO = request.body as ModifyReleasePriceDTO

		try {
			const { data, error, status } = await modifyReleasePrice.execute(body)
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

		const { id } = request.params

		try {
			const { data, error, status } = await getRelease.execute(id)
			if (error) reply.status(status).send({ error: error })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}
}

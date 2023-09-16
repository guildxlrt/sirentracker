import { FastifyReply, FastifyRequest } from "fastify"
import { apiError } from "Shared-utils"
import { FindSongsByArtistDTO, FindSongsByReleaseDTO, GetSongDTO } from "Dto"
import { FindSongsByArtistUsecase, FindSongsByReleaseUsecase, GetSongUsecase } from "Interactors"
import { databaseServices } from "Infra-backend"
import { ParamsId } from "../../assets"

const getSong = new GetSongUsecase(databaseServices)
const findSongsByArtist = new FindSongsByArtistUsecase(databaseServices)
const findSongsByRelease = new FindSongsByReleaseUsecase(databaseServices)

interface ISongController {
	get(request: unknown, reply: unknown): Promise<never>
	findManyByArtist(request: unknown, reply: unknown): Promise<never>
	findManyByRelease(request: unknown, reply: unknown): Promise<never>
}

export class SongController implements ISongController {
	async get(request: FastifyRequest<ParamsId>, reply: FastifyReply) {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const { id } = request.params
			const inputs: GetSongDTO = new GetSongDTO(id)

			const { data, error } = await getSong.execute(inputs)
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
			const inputs: FindSongsByArtistDTO = new FindSongsByArtistDTO(id)

			const { data, error } = await findSongsByArtist.execute(inputs)
			if (error) reply.status(error.status).send({ error: error.message })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async findManyByRelease(request: FastifyRequest<ParamsId>, reply: FastifyReply) {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const { id } = request.params
			const inputs: FindSongsByReleaseDTO = new FindSongsByReleaseDTO(id)

			const { data, error } = await findSongsByRelease.execute(inputs)
			if (error) reply.status(error.status).send({ error: error.message })

			return reply.status(202).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}
}

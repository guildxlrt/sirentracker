import { FastifyReply, FastifyRequest } from "fastify"
import { apiError } from "Shared-utils"
import { Song } from "Domain"
import { FindSongsByArtistDTO, FindSongsByReleaseDTO, GetSongDTO, ResponseDTO } from "Dto"
import { FindSongsByArtistUsecase, FindSongsByReleaseUsecase, GetSongUsecase } from "Interactors"
import { databaseServices } from "Infra-backend"
import { ParamsId } from "../../assets"

const getSong = new GetSongUsecase(databaseServices)
const findSongsByArtist = new FindSongsByArtistUsecase(databaseServices)
const findSongsByRelease = new FindSongsByReleaseUsecase(databaseServices)

interface ISongController {
	get(request: unknown, reply: unknown): Promise<ResponseDTO<Song>>
	findManyByArtist(request: unknown, reply: unknown): Promise<ResponseDTO<Song[]>>
	findManyByRelease(request: unknown, reply: unknown): Promise<ResponseDTO<Song[]>>
}

export class SongController implements ISongController {
	async get(request: FastifyRequest<ParamsId>, reply: FastifyReply): Promise<ResponseDTO<Song>> {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const { id } = request.params
			const inputs: GetSongDTO = new GetSongDTO(id)

			const { data, error, status } = await getSong.execute(inputs)
			if (error) reply.status(status).send({ error: error })

			return reply.status(status).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async findManyByArtist(
		request: FastifyRequest<ParamsId>,
		reply: FastifyReply
	): Promise<ResponseDTO<Song[]>> {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const { id } = request.params
			const inputs: FindSongsByArtistDTO = new FindSongsByArtistDTO(id)

			const { data, error, status } = await findSongsByArtist.execute(inputs)
			if (error) reply.status(status).send({ error: error })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async findManyByRelease(
		request: FastifyRequest<ParamsId>,
		reply: FastifyReply
	): Promise<ResponseDTO<Song[]>> {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const { id } = request.params
			const inputs: FindSongsByReleaseDTO = new FindSongsByReleaseDTO(id)

			const { data, error, status } = await findSongsByRelease.execute(inputs)
			if (error) reply.status(status).send({ error: error })

			return reply.status(202).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}
}

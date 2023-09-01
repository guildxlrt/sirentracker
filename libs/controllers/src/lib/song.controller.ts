import { FastifyReply, FastifyRequest } from "fastify"
import { IParams } from "../assets"
import { apiError } from "Shared-utils"
import { ArtistId, ReleaseId, Song, SongId } from "Domain"
import { ResponseDTO } from "Dto"
import { FindSongsByArtistUsecase, FindSongsByReleaseUsecase, GetSongUsecase } from "interactors"
import { databaseServices } from "Infra-backend"

const getSong = new GetSongUsecase(databaseServices)
const findSongsByArtist = new FindSongsByArtistUsecase(databaseServices)
const findSongsByRelease = new FindSongsByReleaseUsecase(databaseServices)

interface IAuthorController {
	get(request: unknown, reply: unknown): Promise<ResponseDTO<Song>>
	findManyByArtist(request: unknown, reply: unknown): Promise<ResponseDTO<Song[]>>
	findManyByRelease(request: unknown, reply: unknown): Promise<ResponseDTO<Song[]>>
}

export class SongsController implements IAuthorController {
	async get(
		request: FastifyRequest<IParams<SongId>>,
		reply: FastifyReply
	): Promise<ResponseDTO<Song>> {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const input = request.params

			const { data, error, status } = await getSong.execute(input)
			if (error) reply.status(status).send({ error: error })

			return reply.status(status).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async findManyByArtist(
		request: FastifyRequest<IParams<ArtistId>>,
		reply: FastifyReply
	): Promise<ResponseDTO<Song[]>> {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const input = request.params

			const { data, error, status } = await findSongsByArtist.execute(input)
			if (error) reply.status(status).send({ error: error })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async findManyByRelease(
		request: FastifyRequest<IParams<ReleaseId>>,
		reply: FastifyReply
	): Promise<ResponseDTO<Song[]>> {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const input = request.params

			const { data, error, status } = await findSongsByRelease.execute(input)
			if (error) reply.status(status).send({ error: error })

			return reply.status(202).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}
}

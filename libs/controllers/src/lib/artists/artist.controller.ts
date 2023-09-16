import { FastifyReply, FastifyRequest } from "fastify"
import { ErrorMsg, apiError } from "Shared-utils"
import {
	CreateArtistDTO,
	FindArtistsByGenreDTO,
	GetAllArtistsDTO,
	GetArtistByEmailDTO,
	GetArtistByIdDTO,
	ModifyArtistDTO,
} from "Dto"
import {
	CreateArtistUsecase,
	GetAllArtistsUsecase,
	FindArtistsByGenreUsecase,
	GetArtistByEmailUsecase,
	GetArtistByIdUsecase,
	ModifyArtistUsecase,
} from "Interactors"
import { databaseServices } from "Infra-backend"
import { ParamsGenre, ParamsId } from "../../assets"

const createArtist = new CreateArtistUsecase(databaseServices)
const modifyArtist = new ModifyArtistUsecase(databaseServices)
const getAllArtists = new GetAllArtistsUsecase(databaseServices)
const findArtistsByGenre = new FindArtistsByGenreUsecase(databaseServices)
const getArtistById = new GetArtistByIdUsecase(databaseServices)
const getArtistByEmail = new GetArtistByEmailUsecase(databaseServices)

interface IArtistController {
	create(request: unknown, reply: unknown): Promise<never>
	modify(request: unknown, reply: unknown): Promise<never>
	getAll(request: unknown, reply: unknown): Promise<never>
	findManyByGenre(request: unknown, reply: unknown): Promise<never>
	getById(request: unknown, reply: unknown): Promise<never>
	getByEmail(request: unknown, reply: unknown): Promise<never>
}

export class ArtistsController implements IArtistController {
	async create(request: FastifyRequest, reply: FastifyReply) {
		if (request.method !== "POST") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const inputs: CreateArtistDTO = request.body as CreateArtistDTO

			// Verify image format
			inputs.verifyImgFormat()

			// Saveing Credentials
			inputs.validAuths()

			// Saving Profile
			const { data, error } = await createArtist.execute(inputs)
			if (error) reply.status(error.status).send({ error: error.message })

			return reply.status(202).send(data)
		} catch (error: ErrorMsg | any) {
			if (error?.status) return reply.status(error.status).send({ error: error.message })
			else return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async modify(request: FastifyRequest, reply: FastifyReply) {
		if (request.method !== "PUT") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const inputs: ModifyArtistDTO = request.body as ModifyArtistDTO

			inputs.verifyImgFormat()

			const { data, error } = await modifyArtist.execute(inputs)
			if (error) reply.status(error.status).send({ error: error.message })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async getAll(request: FastifyRequest, reply: FastifyReply) {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const inputs: GetAllArtistsDTO = request.body as GetAllArtistsDTO

			const { data, error } = await getAllArtists.execute(inputs)
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
			const inputs: FindArtistsByGenreDTO = new FindArtistsByGenreDTO(genre)

			const { data, error } = await findArtistsByGenre.execute(inputs)
			if (error) reply.status(error.status).send({ error: error.message })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async getById(request: FastifyRequest<ParamsId>, reply: FastifyReply) {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const { id } = request.params
			const inputs: GetArtistByIdDTO = new GetArtistByIdDTO(id)

			const { data, error } = await getArtistById.execute(inputs)
			if (error) reply.status(error.status).send({ error: error.message })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}

	async getByEmail(request: FastifyRequest, reply: FastifyReply) {
		if (request.method !== "GET") return reply.status(405).send({ error: apiError.e405.msg })

		try {
			const inputs: GetArtistByEmailDTO = request.body as GetArtistByEmailDTO

			const { data, error } = await getArtistByEmail.execute(inputs)
			if (error) reply.status(error.status).send({ error: error.message })

			return reply.status(200).send(data)
		} catch (error) {
			return reply.status(500).send({ error: apiError.e500.msg })
		}
	}
}

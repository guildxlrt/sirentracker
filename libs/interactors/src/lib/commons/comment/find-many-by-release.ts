import { DatabaseServices } from "Infra-backend"
import { Comment } from "Domain"
import { BaseUsecase } from "../../../assets"
import { FindCommentsByReleaseDTO, ResponseDTO } from "Dto"

export class FindCommentsByReleaseUsecase extends BaseUsecase<
	FindCommentsByReleaseDTO,
	ResponseDTO<Comment[]>
> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(id: FindCommentsByReleaseDTO): Promise<ResponseDTO<Comment[]>> {
		return await this.service.comment.findManyByRelease(id)
	}
}

import { DatabaseServices } from "Infra-backend"
import { Comment } from "Domain"
import { BaseUsecase } from "../../assets"
import { ReleaseIdDTO, ResponseDTO } from "Dto"

export class FindCommentsByReleaseUsecase extends BaseUsecase<
	ReleaseIdDTO,
	ResponseDTO<Comment[]>
> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(id: ReleaseIdDTO): Promise<ResponseDTO<Comment[]>> {
		return await this.service.comment.findManyByRelease(id)
	}
}

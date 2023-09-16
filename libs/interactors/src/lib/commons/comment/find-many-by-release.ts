import { DatabaseServices } from "Infra-backend"
import { BaseUsecase } from "../../../assets"
import { FindCommentsByReleaseDTO } from "Dto"

export class FindCommentsByReleaseUsecase extends BaseUsecase<FindCommentsByReleaseDTO> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(id: FindCommentsByReleaseDTO): Promise<FindCommentsByReleaseDTO> {
		return await this.service.comment.findManyByRelease(id)
	}
}

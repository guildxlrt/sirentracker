import { BaseReposRemovableItem, IResponse } from "../../assets"
import { Comment, CommentId, PostId, ReleaseId } from "../entities"

export abstract class CommentRepository implements BaseReposRemovableItem {
	abstract create(params: any): Promise<IResponse<boolean>>

	abstract delete(id: CommentId): Promise<IResponse<unknown>>

	abstract findManyByRelease(id: ReleaseId): Promise<IResponse<Comment[]>>

	abstract findManyByPost(id: PostId): Promise<IResponse<Comment[]>>
}

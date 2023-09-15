import { BaseReposRemovableItem, IResponse, InputsLayer } from "../../../assets"
import { Comment, CommentId, PostId, ReleaseId } from "../../entities"

export abstract class CommentRepository implements BaseReposRemovableItem {
	abstract create(inputs: InputsLayer<unknown, boolean>): Promise<IResponse<boolean>>

	abstract delete(id: InputsLayer<CommentId, unknown>): Promise<IResponse<unknown>>

	abstract findManyByRelease(id: InputsLayer<ReleaseId, Comment[]>): Promise<IResponse<Comment[]>>

	abstract findManyByPost(id: InputsLayer<PostId, Comment[]>): Promise<IResponse<Comment[]>>
}

import { BaseReposRemovableItem, InputsLayer } from "../../../assets"
import { Comment, CommentId, PostId, ReleaseId } from "../../entities"

export abstract class CommentRepository implements BaseReposRemovableItem {
	abstract create(inputs: InputsLayer<unknown, boolean>): Promise<InputsLayer<unknown, boolean>>

	abstract delete(id: InputsLayer<CommentId, unknown>): Promise<InputsLayer<CommentId, unknown>>

	abstract findManyByRelease(
		id: InputsLayer<ReleaseId, Comment[]>
	): Promise<InputsLayer<ReleaseId, Comment[]>>

	abstract findManyByPost(
		id: InputsLayer<PostId, Comment[]>
	): Promise<InputsLayer<PostId, Comment[]>>
}

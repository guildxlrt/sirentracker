export abstract class BaseUsecase<Input, Output> {
	abstract execute(input: Input): Promise<Output>
}

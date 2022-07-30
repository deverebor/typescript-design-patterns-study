export interface ISmartHouseCommand {
	execute(): void
	undo(): void
}

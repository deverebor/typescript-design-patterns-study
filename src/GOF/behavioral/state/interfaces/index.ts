export interface IShoppingOrderState {
	getName(): string
	approvePayment(): void
	rejectPayment(): void
	waitPayment(): void
	shipOrder(): void
}

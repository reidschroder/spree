export interface Customer {
    customerId: number,
    customerUsername: string
}

export type AppState = {
    customer: Customer
}
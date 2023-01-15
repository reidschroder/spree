export interface Customer {
    customerId: number,
    customerUsername: string
}

export interface DarkModeState {
    darkmode: string
}

export type AppState = {
    customer: Customer,
    darkMode: DarkModeState
}


export interface Customer {
    customerId: number,
    customerUsername: string,
    customerFirstName: string,
    customerLastName: string,
    customerEmail: string,
    customerAddress: string
}

export interface DarkModeState {
    darkmode: string
}

export interface ProductList {
    products: Array<any>
}

export interface CartList {
    cart: Array<any>
}

export type AppState = {
    customer: Customer,
    darkMode: DarkModeState,
    productList: ProductList,
    cartList: CartList
}

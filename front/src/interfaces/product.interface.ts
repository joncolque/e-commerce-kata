export interface Price {
    currency: string
    amount: string
    decimals: string
}

export interface Product {
    id: number
    title: string
    price: Price
    picture: string
    condition: string
    free_shipping: boolean
}

export type ProductDetail = Product & {
    sold_quantity: number,
    description: string
}
import { Author, KNOWN_CONDITIONS } from "./common"

export const mapExternalDetailToFrontend = (externalProduct: ExternalDetailReponse, externalDescription: ExternalDescriptionReponse): FrontendDetailReponse => {
    return {
        author: {
            name: "unknown",
            lastname: "unknown",
        },
        item: {
            id: externalProduct.id,
            title: externalProduct.title,
            price: formatPrice(externalProduct),
            picture: externalProduct.pictures[0]?.url || "",
            condition: KNOWN_CONDITIONS[externalProduct.condition] ?? externalProduct.condition,
            free_shipping: externalProduct.shipping.free_shipping,
            sold_quantity: externalProduct.initial_quantity,
            description: externalDescription.plain_text || "",
        },
    };
}

export interface ExternalDetailReponse {
    id: string
    title: string
    pictures: { url: string }[]
    condition: string
    shipping: { free_shipping: boolean }
    initial_quantity: number
}

export interface ExternalDescriptionReponse{
    plain_text:string
}

export interface FrontendDetailReponse {
    author: Author
    item: ProductDetail
}

interface ProductDetail {
    id: string,
    title: string,
    price: {
        currency: string,
        amount: number,
        decimals: number
    },
    picture: string,
    condition: string,
    free_shipping: boolean,
    sold_quantity: number
    description: string
}

const formatPrice = (item: any) => {
    return {
        currency: item.currency_id,
        amount: item.price.toString().split('.')[0],
        decimals: item.price.toString().split('.')[1]
    };
};
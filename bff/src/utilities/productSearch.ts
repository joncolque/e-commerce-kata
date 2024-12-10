import { Author, KNOWN_CONDITIONS } from "./common"

export const mapExternalSearchToFrontend = (external: ExternalSearchReponse): FrontendSearchReponse => {
    const filters = external.filters
    const path_from_root = filters.length === 0 ? [] : filters[0].values[0].path_from_root
    const categories = path_from_root ? path_from_root.map((categorie: any) => categorie.name) : []
    const items = external.results.slice(0, 4)
    return {
        author: {
            name: "unknown",
            lastname: "unknown",
        },
        categories: categories,
        items: items.map((item: any) => ({
            id: item.id,
            title: item.title,
            price: {
                currency: item.currency_id,
                amount: item.price.toString().split('.')[0],
                decimals: item.price.toString().split('.')[1]
            },
            picture: item.thumbnail,
            condition: KNOWN_CONDITIONS[item.condition] ?? item.condition,
            free_shipping: item.shipping.free_shipping
        }))
    }
}

export interface ExternalSearchReponse {
    filters: { values: { path_from_root: { name: string }[] }[] }[],
    results: ExternalSearchedProduct[]
}

export interface FrontendSearchReponse {
    author: Author
    categories: string[]
    items: SearchedProduct[]
}

interface SearchedProduct {
    id: string,
    title: string,
    price: {
        currency: string,
        amount: number,
        decimals: number
    },
    picture: string,
    condition: string,
    free_shipping: boolean
}

interface ExternalSearchedProduct {
    id: string,
    title: string,
    currency_id: string,
    price: number,
    thumbnail: string,
    condition: string,
    shipping: { free_shipping: boolean }
}
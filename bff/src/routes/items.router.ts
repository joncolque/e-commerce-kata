import axios from "axios";
import { Router, Request, Response } from "express";
import { mapExternalSearchToFrontend } from "../utilities/productSearch";
import { mapExternalDetailToFrontend } from "../utilities/productDetail";

const router = Router();

const API_BASE_URL = "https://api.mercadolibre.com";
const QUERY_URL = `${API_BASE_URL}/sites/MLA/search?q=`;
const PRODUCT_URL = `${API_BASE_URL}/items/:id`;
const PRODUCT_DESCRIPTION_URL = `${API_BASE_URL}/items/:id/description`;

router.get("/", async (req: Request, res: Response): Promise<any> => {
    const query = req.query.search as string | undefined;

    if (!query) {
        return res.json([]);
    }

    try {
        const data = await fetchData(QUERY_URL + query);
        const response = mapExternalSearchToFrontend(data)
        res.json(response);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/:id", async (req: Request, res: Response): Promise<any> => {

    const id = req.params.id;

    try {
        const [product, description] = await Promise.all([
            fetchData(PRODUCT_URL.replace(":id", id)),
            fetchData(PRODUCT_DESCRIPTION_URL.replace(":id", id)),
        ]);

        const response = mapExternalDetailToFrontend(product, description)
        res.json(response);
    } catch (error: any) {
        res.status(404).json({ error: error.message || "Item not found" });
    }
});

export default router;

const fetchData = async (url: string): Promise<any> => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || "Failed to fetch data");
    }
};


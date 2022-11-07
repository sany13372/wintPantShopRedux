import { client } from "../../../backend/lib/client.js";

export const ProductServices = {

    async getProducts(){
        const query = '*[_type == "product"]';
        return products = await client.fetch(query);
    }
}
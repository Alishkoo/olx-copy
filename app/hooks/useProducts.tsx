import { useQuery } from "react-query";
import { ProductType } from "../types/productType";
import { getAllProducts } from "../api/services/productsService";

const fetchProducts = async () : Promise<ProductType[]> => {
    const res = await getAllProducts();

    return res.data;
}

const useProducts = () => {
    return useQuery<ProductType[], Error>({
        queryKey: ['products'],
        queryFn: fetchProducts
    });
};

export default useProducts;



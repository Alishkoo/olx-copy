import {axiosInstance} from '../apiClient';
import { ProductType } from '@/app/types/productType';


export const getAllProducts = () => {
    return axiosInstance.get<ProductType[]>('/products')
}


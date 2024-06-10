import { use, useState } from "react";
import { axiosQueryInstance, axiosInstance } from "../api/apiClient";
import { ProductType } from "../types/productType";
import { ImageType } from "../types/imageType";
import { useQuery, useMutation, UseMutationResult, useQueryClient } from "react-query";

interface ProductData {
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
}

const uploadImage = async (imageData: File) : Promise<ImageType> => {
    const res = await axiosQueryInstance.post('/api/v1/files/upload', imageData)

    return res.data;
}

const createProduct = async (product: ProductData) => {
    const res = await axiosInstance.post('/products', product);

    return res.data;
}

const useUploadImage = () => {
    const queryClient = useQueryClient();

    return useMutation<ImageType, Error, File>({
        mutationFn: uploadImage,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['images']});
        },
    });
}

const useCreateProducts = () => {
    const queryClient = useQueryClient();

    return useMutation<ProductType, Error, ProductData>({
        mutationFn: createProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['products']});
        },
    });
}

export {useCreateProducts, useUploadImage}
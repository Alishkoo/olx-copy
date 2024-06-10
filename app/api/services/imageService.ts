import {axiosQueryInstance} from '../apiClient';
import { ImageType } from '@/app/types/imageType';


export const postImage = (image: File) => {
    return axiosQueryInstance.post<ImageType>('/api/v1/files/upload', image)
}

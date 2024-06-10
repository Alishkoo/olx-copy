'use client'

import { useState } from 'react';
import {useUploadImage, useCreateProducts} from '../hooks/useCreateProducts';
import {postImage} from '../api/services/imageService';
import { axiosQueryInstance } from '../api/apiClient';
import { ImageType } from '../types/imageType';

const Product = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [photos, setPhotos] = useState<File[]>([]);
  const [price, setPrice] = useState(0 as number | number);
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState(true);
  const {mutate: createProduct, isLoading: isLoadingProduct} = useCreateProducts();



  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(parseFloat(e.target.value));
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPhotos([...photos, ...Array.from(e.target.files)]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(photos[0])

    try {
      const response = axiosQueryInstance.post<ImageType>('/api/v1/files/upload', photos[0], {
        onUploadProgress: (progressEvent) => {
  
          setStatus(false);
        }
      })
      .then((responce) => {
        setStatus(true);
        createProduct({title, price, category, description, image: responce.data.location});
      })
      .catch((error) => {
        setStatus(true);
      });


      alert('Product created successfully!');
      setCategory('');
      setDescription('');
      setPhotos([]);
      setPrice(0);
      setTitle('');
    } catch (error) {
      alert('Failed to create ad.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded-md shadow-md">
      <h1 className="text-gray-700 text-2xl font-bold mb-4">Создать объявление</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Укажите название*</label>
        <input
          type="text"
          placeholder="Например, iPhone 11 с гарантией"
          value={title}
          onChange={handleTitleChange}
          maxLength={70}
          required
          className="text-[#000] mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Цена*</label>
        <input
          type="text"
          placeholder="Напишите цену скок буйт стоит есже"
          value={price}
          onChange={handlePriceChange}
          maxLength={70}
          required
          className="text-[#000] mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Категория*</label>
        <input
          type="text"
          placeholder="Напишите категорию"
          value={category}
          onChange={handleCategoryChange}
          maxLength={70}
          required
          className="text-[#000] mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Описание*</label>
        <input
          type="text"
          placeholder="Напишите описание есже"
          value={description}
          onChange={handleDescriptionChange}
          maxLength={70}
          required
          className="text-[#000] mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Фото</label>
        <div className="flex flex-wrap gap-2 mt-2">
          {photos.map((photo, index) => (
            <img
              key={index}
              src={URL.createObjectURL(photo)}
              alt={`photo-${index}`}
              className="w-24 h-24 object-cover rounded-md"
            />
          ))}
          {photos.length < 8 && (
            <div className="relative w-24 h-24 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center">
              <input
                type="file"
                multiple
                onChange={handlePhotoUpload}
                accept=".jpg,.jpeg,.png,.gif"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <span className="text-gray-500">Добавить фото</span>
            </div>
          )}
        </div>
        <small className="text-gray-500">Добавьте в объявление настоящие фото товара, а не фото из интернета, чтобы повысить доверие покупателей. Поддерживаются файлы до 5МБ в формате .jpg, .jpeg, .png, .gif.</small>
      </div>
      <button
        type="submit"
        disabled={!status}
        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Отправить
      </button>
    </form>
  );
};

export default Product;

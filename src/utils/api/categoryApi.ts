import axios from "@/app/lib/axiosInstance";
import { ICategory } from "@/app/types/apiTypes";
import { ApiConstants } from "@/enum/apiConstants";
import { useMutation, useQuery } from "react-query";

export const fetchCategories = async (type: string) => {
  try {
    const response = await axios.get(ApiConstants.ADMIN_CATEGORIES+type);

    return response.data.categories;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const useFetchCategories = (type: string) =>
  // useQuery(ApiConstants.ADMIN_CATEGORIES, fetchCategories);
useQuery(ApiConstants.ADMIN_CATEGORIES, () => fetchCategories(type));

export const createCategory = async (payload: ICategory) => {
  try {
    const response = await axios.post(ApiConstants.ADMIN_CATEGORIES_CREATE, {
      ...payload,
    });
    return response;
  } catch (error) {
    console.error("Error creating category:", error);
  }
};
export const useCreateCategory = () => useMutation(createCategory);

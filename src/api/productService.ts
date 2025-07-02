import api from "./axios";

export const getAllProducts =async() =>{
    const response=await api.get("/products");
    return response.data.data;
};

export const getProductByID =async(id:string) =>{
    const response =await api.get(`/products/${id}`);
    return response.data.data;
};
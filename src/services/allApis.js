import { BASE_URL } from "./base_url";
import { commonRequest } from "./commonRequest";


//to upload videos
 export const addVideos=async (body)=>{
    return await commonRequest("POST",`${BASE_URL}/videos`,body)
}

//to get all videos
export const getVideos=async()=>{
    return await commonRequest("GET",`${BASE_URL}/videos`,'')


}

//to delete videos
export const deleteVideo=async(id)=>{
    return await commonRequest("DELETE",`${BASE_URL}/videos/${id}`,{})
}

//to add category
export const addCat=async(body)=>{
    return await commonRequest("POST",`${BASE_URL}/categories`,body)
   
}

//to get category
export const getCateg=async()=>{
    return await commonRequest("GET",`${BASE_URL}/categories`,'')
  
}

//to delete category
export const deleteCateg=async(id)=>{
    return await commonRequest("DELETE",`${BASE_URL}/categories/${id}`,{})
}

//to get watch history
export const getHistory=async()=>{
    return await commonRequest("GET",`${BASE_URL}/watch-history`,'')
}

//to add history
export const addHistory=async(body)=>{
    return await commonRequest("POST",`${BASE_URL}/watch-history`,body)
   
}

//to get specific video
export const getSpecificVideo=async(id)=>{
    return await commonRequest("GET",`${BASE_URL}/videos/${id}`,'')
}

//to update category
export const updatecategory=async(id,body)=>{
    return await commonRequest("PUT",`${BASE_URL}/categories/${id}`,body)
   
}

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const categoriesApi = createApi({
  reducerPath: 'categories',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.thecatapi.com/v1/' }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: (params) => `${params}`,
      
    }),
    }),
  })


export const { useGetCategoriesQuery } = categoriesApi
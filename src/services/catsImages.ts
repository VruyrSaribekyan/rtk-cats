import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface IParams {category_ids: number | "", limit?: number, page?: number}

export const getCatsByCategory = createApi({
  reducerPath: 'getCatsByCategory',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.thecatapi.com/v1/images/search' }),
  endpoints: (builder) => ({
    getCats: builder.query<any, IParams>({
      query: (params) => ({
        url: "",
        params
      }),
    }),
  }),
})

export const { useGetCatsQuery } = getCatsByCategory
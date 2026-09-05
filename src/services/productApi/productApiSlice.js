import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const ProductApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://dummyjson.com"
    }),
    tagTypes: ['Products'],
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => `products/categories`,
            providesTags: ['Products']
        }),
        getProducts: builder.query({
            query: (name) => `products/category/${name}`
        }),
        getProductDetails: builder.query({
            query: (id) => `/products/${id}`
        }),

        getProductCategoryList: builder.query({
            query: () => `/products/category-list`
        }),
        addProduct: builder.mutation({
            query: (product) => ({
                url: `/products/add`,
                method: 'POST',
                body: product
            }),
            invalidatesTags: ['Products']
        }),

        updateProduct: builder.mutation({
            query: ({ id, product }) => ({
                url: `/products/${id}`,
                method: "PUT", body: product
            }),
            invalidatesTags: ["Products"]
        })




    })


})
export const { useGetCategoriesQuery, useGetProductsQuery, useGetProductDetailsQuery, useGetProductCategoryListQuery, useAddProductMutation,useUpdateProductMutation } = ProductApi;
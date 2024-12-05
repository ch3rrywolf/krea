import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../api/api'
export const add_product = createAsyncThunk(
    'product/add_product',
    async (product, { rejectWithValue, fulfillWithValue }) => {
        try {
            // if (!name || typeof name !== 'string' || name.trim() === '') {
            //     return rejectWithValue({ error: 'Invalid category name' })
            // }

            

            const { data } = await api.post('/product-add', product, { withCredentials: true })
            console.log(data)
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response?.data || { error: 'Something went wrong' })
        }
    }
)

export const get_product = createAsyncThunk(
    'product/get_product',
    async ({ parPage, page, searchValue }, { rejectWithValue, fulfillWithValue }) => {
        try {

            const { data } = await api.get(`/product-get?page=${page}&searchValue=${searchValue}&parPage=${parPage}`, { withCredentials: true })
            console.log(data)
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response?.data || { error: 'Something went wrong' })
        }
    }
)




export const productReducer = createSlice({
    name: 'product',
    initialState: {
        successMessage: '',
        errorMessage: '',
        loader: false,
        products: [],
        totalProduct : 0
    },
    reducers: {
        messageClear: (state, _) => {
            state.errorMessage = ""
            state.successMessage = ""
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(add_product.pending, (state, _) => {
            state.loader = true;
            state.successMessage = '';
        state.errorMessage = '';
          })
          
          .addCase(add_product.rejected, (state, { payload }) => {
            state.loader = false;
            state.errorMessage = payload.error ;
          }) 

          .addCase(add_product.fulfilled, (state, { payload }) => {
            state.loader = false;
            state.successMessage = 'Category add successful' ;
            state.products = [...state.products, payload.category]
          }) 
          .addCase(get_product.fulfilled, (state, { payload }) => {
            state.totalProduct = payload.totalProduct
            state.products = payload.products
          }) 
          
      }
    });
export const { messageClear } = productReducer.actions
export default productReducer.reducer
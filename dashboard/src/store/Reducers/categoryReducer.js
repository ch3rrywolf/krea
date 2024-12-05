import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../api/api'
export const categoryAdd = createAsyncThunk(
    'category/categoryAdd',
    async ({ name, image }, { rejectWithValue, fulfillWithValue }) => {
        try {
            if (!name || typeof name !== 'string' || name.trim() === '') {
                return rejectWithValue({ error: 'Invalid category name' })
            }

            const formData = new FormData()
            formData.append('name', name)
            formData.append('image', image)

            const { data } = await api.post('/category-add', formData, { withCredentials: true })
            console.log(data)
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response?.data || { error: 'Something went wrong' })
        }
    }
)

export const get_category = createAsyncThunk(
    'category/get_category',
    async ({ parPage, page, searchValue }, { rejectWithValue, fulfillWithValue }) => {
        try {

            const { data } = await api.get(`/category-get?page=${page}&searchValue=${searchValue}&parPage=${parPage}`, { withCredentials: true })
            console.log(data)
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response?.data || { error: 'Something went wrong' })
        }
    }
)




export const categoryReducer = createSlice({
    name: 'category',
    initialState: {
        successMessage: '',
        errorMessage: '',
        loader: false,
        categorys: [],
    },
    reducers: {
        messageClear: (state, _) => {
            state.errorMessage = ""
            state.successMessage = ""
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(categoryAdd.pending, (state, _) => {
            state.loader = true;
          })
          
          .addCase(categoryAdd.rejected, (state, { payload }) => {
            state.loader = false;
            state.errorMessage = payload.error ;
          }) 

          .addCase(categoryAdd.fulfilled, (state, { payload }) => {
            state.loader = true;
            state.successMessage = 'Category add successful' ;
            state.categorys = [...state.categorys, payload.category]
          }) 
          
      }
    });
export const { messageClear } = categoryReducer.actions
export default categoryReducer.reducer
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../api/api'


export const get_archi_request = createAsyncThunk(
    'archi/get_archi_request',
    async ({ parPage, page, searchValue }, { rejectWithValue, fulfillWithValue }) => {
        try {

            const { data } = await api.get(`/request-archi-get?page=${page}&searchValue=${searchValue}&parPage=${parPage}`, { withCredentials: true })
            console.log(data)
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response?.data || { error: 'Something went wrong' })
        }
    }
)




export const archiReducer = createSlice({
    name: 'category',
    initialState: {
        successMessage: '',
        errorMessage: '',
        loader: false,
        archis : [],
        totalArchi : 0,
    },
    reducers: {
        messageClear: (state, _) => {
            state.errorMessage = ""
            state.successMessage = ""
        }
    },
    extraReducers: (builder) => {
        
        builder
        
        .addCase(get_archi_request.fulfilled, (state, { payload }) => {
          state.archis = payload.archis
          state.totalArchi = payload.totalArchi
        })
         
      }
    });
export const { messageClear } = archiReducer.actions
export default archiReducer.reducer
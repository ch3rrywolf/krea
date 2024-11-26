import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from '../../api/api';

// Async thunk
export const admin_login = createAsyncThunk(
  'auth/admin_login',
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post('/admin-login', info, { withCredentials: true });
      return fulfillWithValue(data) // Return the data from the API
    } catch (error) {
      throw rejectWithValue(error.response.data)
    }
  }
);

// Slice
const authReducer = createSlice({
  name: 'auth',
  initialState: {
    successMessage: '',
    errorMessage: '',
    loader: false,
    userInfo: ''
  },
  reducers: {
    // Add your synchronous reducers here if needed
    messageClear: (state, _) => {
        state.errorMessage = ""
        state.successMessage = ""
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(admin_login.pending, (state) => {
        state.loader = true;
        state.successMessage = '';
        state.errorMessage = '';
      })
      .addCase(admin_login.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.successMessage = 'Login successful';
        state.userInfo = payload;
      })
      .addCase(admin_login.rejected, (state, { error }) => {
        state.loader = false;
        state.errorMessage = error.message || 'Login failed';
      });
  }
});

export const { messageClear } = authReducer.actions
export default authReducer.reducer;

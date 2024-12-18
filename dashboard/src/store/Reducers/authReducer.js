import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from '../../api/api';
import { jwtDecode } from 'jwt-decode';



// Async thunk
export const admin_login = createAsyncThunk(
  'auth/admin_login',
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post('/admin-login', info, { withCredentials: true });
      localStorage.setItem('accessToken', data.token)
      return fulfillWithValue(data)
    } catch (error) {
      throw rejectWithValue(error.response.data)
    }
  }
)

export const archi_login = createAsyncThunk(
  'auth/archi_login',
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post('/archi-login', info, { withCredentials: true });
      localStorage.setItem('accessToken', data.token)
      return fulfillWithValue(data)
    } catch (error) {
      throw rejectWithValue(error.response.data)
    }
  }
)

export const archi_register = createAsyncThunk(
  'auth/archi_register',
  async (info, { rejectWithValue, fulfillWithValue }) => {
      try {
          const { data } = await api.post('/archi-register', info, { withCredentials: true });
          localStorage.setItem('accessToken', data.token)
          return fulfillWithValue(data);
      } catch (error) {
          console.error("Error during archi_register:", error);
          return rejectWithValue(error.response?.data || { error: 'Unknown error occurred' });
      }
  }
)


export const profile_image_upload = createAsyncThunk(
  'auth/profile_image_upload',
  async (file, { rejectWithValue, fulfillWithValue }) => {
    try {
      const formData = new FormData();
      formData.append('image', file);

      const { data } = await api.post('/profile-image-upload', formData, {
        withCredentials: true,
        headers: {
        },
      });

      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Unknown error');
    }
  }
);


export const profile_info_add = createAsyncThunk(
  'auth/profile_info_add',
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
        const { data } = await api.post('/profile-info-add', info, {
        withCredentials: true });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Unknown error');
    }
  }
);




export const get_user_info = createAsyncThunk(
  'auth/get_user_info',
  async (_, { rejectWithValue, fulfillWithValue }) => {
      try {
          const { data } = await api.get('/get-user', { withCredentials: true });
          return fulfillWithValue(data);
      } catch (error) {
          console.error("Error during archi_register:", error);
          return rejectWithValue(error.response?.data || { error: 'Unknown error occurred' });
      }
  }
);

const returnRole = (token) => {
  if (token) {
      const decodeToken = jwtDecode(token)
      const expireTime = new Date(decodeToken.exp * 1000)
      if (new Date() > expireTime) {
          localStorage.removeItem('accessToken')
          return ''
      } else {
          return decodeToken.role
      }
  } else {
      return ''
  }
}

export const authReducer = createSlice({
  name: 'auth',
  initialState: {
      successMessage: '',
      errorMessage: '',
      loader: false,
      userInfo: '',
      role: returnRole(localStorage.getItem('accessToken')),
      token: localStorage.getItem('accessToken')
  },
  reducers: {
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
        state.token = payload.token;
        state.role = returnRole(payload.token);
        state.userInfo = payload;
      })
      .addCase(admin_login.rejected, (state, { error }) => {
        state.loader = false;
        state.errorMessage = error.message || 'Login failed';
      })

      .addCase(archi_login.pending, (state) => {
        state.loader = true;
        state.successMessage = '';
        state.errorMessage = '';
      })
      .addCase(archi_login.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.successMessage = 'Login successful';
        state.userInfo = payload;
        state.token = payload.token;
        state.role = returnRole(payload.token);
      })
      .addCase(archi_login.rejected, (state, { error }) => {
        state.loader = false;
        state.errorMessage = error.message || 'Login failed';
      })

      .addCase(archi_register.pending, (state) => {
        state.loader = true;
        state.successMessage = '';
        state.errorMessage = '';
      })
      .addCase(archi_register.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.successMessage = 'Register successful';
        state.userInfo = payload;
        state.token = payload.token;
        state.role = returnRole(payload.token);
      })
      .addCase(archi_register.rejected, (state, { error }) => {
        state.loader = false;
        state.errorMessage = error.message || 'Register failed';
      })
      
      .addCase(get_user_info.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.successMessage = 'Register successful';
        state.userInfo = payload.userInfo;
        state.role = payload.userInfo.role
      })

      .addCase(profile_image_upload.pending, (state, _) => {
        state.loader = true;
      })
      .addCase(profile_image_upload.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.successMessage = 'Image updated successful';
        state.userInfo = payload.userInfo;
        
      })
      .addCase(profile_info_add.pending, (state, _) => {
        state.loader = true;
      })
      .addCase(profile_info_add.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.successMessage = 'info updated successful';
        state.userInfo = payload.userInfo;
        
      })
  }
});

export const { messageClear } = authReducer.actions
export default authReducer.reducer;

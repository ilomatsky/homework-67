import {configureStore, createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AuthState {
  password: string;
  isAccessGranted: boolean;
  message: string;
}

const initialState: AuthState = {
  password: '',
  isAccessGranted: false,
  message: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    clearPassword: (state) => {
      state.password = '';
    },
    grantAccess: (state) => {
      state.isAccessGranted = true;
      state.message = 'Access Granted';
    },
    denyAccess: (state) => {
      state.isAccessGranted = false;
      state.message = 'Access Denied';
    },
  },
});

export const {setPassword, clearPassword, grantAccess, denyAccess} = authSlice.actions;

export const authReducer = authSlice.reducer;

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

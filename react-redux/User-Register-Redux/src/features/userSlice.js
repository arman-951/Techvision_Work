import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// ✅ Register user - save data in localStorage
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      // Get existing users
      const users = JSON.parse(localStorage.getItem("users")) || [];

      // Check if username already exists
      const existingUser = users.find(
        (user) => user.email === userData.email
      );

      if (existingUser) {
        throw new Error("User already exists!");
      }

      // Save new user
      users.push(userData);
      localStorage.setItem("users", JSON.stringify(users));

      // Optionally, save current user (logged-in user)
      localStorage.setItem("currentUser", JSON.stringify(userData));

      return userData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// ✅ Get all users - from localStorage
export const getUser = createAsyncThunk(
  "user/getUser",
  async (_, { rejectWithValue }) => {
    try {
      const storedData = localStorage.getItem("users");
      const users = storedData ? JSON.parse(storedData) : [];
      return users;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// ✅ Initial State
const initialState = {
  user: JSON.parse(localStorage.getItem("currentUser")) || null, // single logged-in user
  users: localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [], // all registered users
  loading: false,
  error: null,
};

// ✅ Slice
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("currentUser");
    },
    removeUser: (state, action) => {
  state.users = state.users.filter((user) => user.id !== action.payload);
  localStorage.setItem("users", JSON.stringify(state.users));
}

  },
  extraReducers: (builder) => {
    builder
      // -------- Register User --------
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // -------- Get All Users --------
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.error = null;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// ✅ Export reducer and actions
export const { logoutUser, removeUser } = userSlice.actions;
export default userSlice.reducer;

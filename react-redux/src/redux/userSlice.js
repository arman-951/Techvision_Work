import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/* ================================
   REGISTER USER
================================ */
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      const existingUser = users.find(
        (user) => user.email === userData.email
      );

      if (existingUser) {
        return rejectWithValue("User already exists!");
      }

      // ✅ Save new user
      users.push(userData);
      localStorage.setItem("users", JSON.stringify(users));

      return userData; // success
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/* ================================
   LOGIN USER
================================ */
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      // ✅ If no users exist yet
      if (users.length === 0) {
        return rejectWithValue("No registered users found! Please sign up first.");
      }

      const existingUser = users.find(
        (user) =>
          user.email === credentials.email &&
          user.password === credentials.password
      );

      if (!existingUser) {
        // ✅ Check if email exists but password is wrong
        const emailExists = users.find(
          (user) => user.email === credentials.email
        );

        if (!emailExists) {
          return rejectWithValue("User not registered with this email! Please register first.");
        } else {
          return rejectWithValue("Incorrect password! Please try again.");
        }
      }

      // ✅ Save logged-in user
      localStorage.setItem("currentUser", JSON.stringify(existingUser));

      return existingUser;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/* ================================
   SLICE SETUP
================================ */
const initialState = {
  users: JSON.parse(localStorage.getItem("users")) || [],
  loggedUser: JSON.parse(localStorage.getItem("currentUser")) || null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.loggedUser = null;
      localStorage.removeItem("currentUser");
    },
    // setLoggedUser: (state, action) => {
    //   state.loggedUser = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      /* REGISTER */
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload); // ✅ keep users in sync
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      /* LOGIN */
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.loggedUser = action.payload; // ✅ fixes instant header update
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logoutUser, /*setLoggedUser*/ } = userSlice.actions;
export default userSlice.reducer;

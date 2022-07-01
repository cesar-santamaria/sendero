import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import jobService from "./jobsService"

const initialState = {
  jobs: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ""
}

export const jobSlice = createSlice({
  name:"job",
  initialState,
  reducers: {
    reset: (state) => initialState
  }
})

export const {reset} = jobSlice.actions
export default jobSlice.reducer
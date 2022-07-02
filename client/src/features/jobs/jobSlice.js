import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import jobService from './jobService'

const initialState = {
  jobs: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// create new job
export const createJob = createAsyncThunk(
  'jobs/create',
  async (jobData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await jobService.createJob(jobData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// get user jobs
export const getJob = createAsyncThunk(
  'jobs/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await jobService.getJobs(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// delete job
export const deleteJob = createAsyncThunk(
  'jobs/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await jobService.deleteJobs(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// edit job
export const editJob = createAsyncThunk(
  'jobs/edit',
  async ({id, jobData}, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await jobService.editJobs(id, jobData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createJob.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.jobs.push(action.payload)
      })
      .addCase(createJob.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getJob.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getJob.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.jobs = action.payload
      })
      .addCase(getJob.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteJob.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteJob.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.jobs = state.jobs.filter((job) => job._id !== action.payload.id)
      })
      .addCase(deleteJob.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(editJob.pending, (state) => {
        state.isLoading = true
      })
      .addCase(editJob.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.jobs = state.jobs.map(job => {
          return job._id === action.payload._id ? action.payload : job 
        })
      })
      .addCase(editJob.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = jobSlice.actions
export default jobSlice.reducer

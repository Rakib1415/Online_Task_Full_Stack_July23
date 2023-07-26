/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { State } from '../project/projectSlice';

interface ProjectItems {
  projects: Array<State>;
}

const initialState: ProjectItems = {
  projects: [],
};

const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    addProject: (state, action: PayloadAction<State>) => {
      state.projects.push(action.payload);
    },
  },
});

export default resultSlice.reducer;
export const { addProject } = resultSlice.actions;

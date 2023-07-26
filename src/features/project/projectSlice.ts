/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProjectInfo } from '../../components/project/ProjectForm';
import { ProjectSettings } from '../../components/project/ProjectSettingForm';

export interface State {
  projectInformations: ProjectInfo;
  projectSettings: ProjectSettings;
}

const initialState: State = {
  projectInformations: {
    projectName: '',
    projectDescription: '',
    clientName: '',
    contractorName: '',
  },
  projectSettings: {
    max_x: 0,
    max_y: 0,
    max_z: 0,
    min_x: 0,
    min_y: 0,
    min_z: 0,
  },
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    createProjectInfo: (state: State, action: PayloadAction<ProjectInfo>) => {
      state.projectInformations = action.payload;
    },
    createSettings: (state: State, action: PayloadAction<ProjectSettings>) => {
      state.projectSettings = action.payload;
    },
  },
});

export default projectSlice.reducer;
export const { createProjectInfo, createSettings } = projectSlice.actions;

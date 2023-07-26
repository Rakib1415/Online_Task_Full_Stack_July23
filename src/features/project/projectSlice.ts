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
    max_x: NaN,
    max_y: NaN,
    max_z: NaN,
    min_x: NaN,
    min_y: NaN,
    min_z: NaN,
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
    clearProjectItem: (state: State) => {
      state.projectInformations = initialState.projectInformations;
      state.projectSettings = initialState.projectSettings;
    },
  },
});

export default projectSlice.reducer;
export const { createProjectInfo, createSettings, clearProjectItem } =
  projectSlice.actions;

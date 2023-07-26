/* eslint-disable import/no-cycle */
import { Button, Form } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/redux-hooks';
import { createSettings } from '../../features/project/projectSlice';
import { addProject } from '../../features/result/resultSlice';
import CustomInput from '../CustomInput';
import ProjectForm from './ProjectForm';

export interface ProjectSettings {
  max_x: number;
  max_y: number;
  max_z: number;
  min_x: number;
  min_y: number;
  min_z: number;
}

export default function ProjectSettingForm({
  setCurrent,
  current,
}: {
  setCurrent: (current: number) => void;
  current: number;
}) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { projectInformations } = useAppSelector((state) => state.project);

  const onFinish = (values: ProjectSettings) => {
    dispatch(createSettings(values));
    dispatch(
      addProject({
        projectInformations,
        projectSettings: values,
      })
    );
    console.log('Success:', values);
    navigate('/result');
  };
  return (
    <>
      <h2 className="text-2xl text-center mt-3 text-purple-700 font-bold">
        Project Informations :{' '}
      </h2>
      <ProjectForm current={0} setCurrent={() => {}} disabled />
      <h2 className="text-2xl text-center mt-3 text-purple-700 font-bold">
        Project Setting Informations :{' '}
      </h2>
      <Form
        initialValues={{ remember: true }}
        onFinish={onFinish}
        className="w-[1000px] mx-auto space-y-8 my-5"
      >
        <div className="bg-white w-full px-5 py-7  billing-box-border ">
          <CustomInput
            name="max_x"
            label="Max_X"
            message="Please input max X number!"
            type="number"
            placeHolder="Enter max x number"
          />

          <CustomInput
            name="min_x"
            label="Min_X"
            message="Please input min X number!"
            type="number"
            placeHolder="Enter min x number"
          />
          <CustomInput
            name="max_y"
            label="Max_Y"
            message="Please input max Y number!"
            type="number"
            placeHolder="Enter max y number"
          />
          <CustomInput
            name="min_y"
            label="Min_Y"
            message="Please input min Y number!"
            type="number"
            placeHolder="Enter min y number"
          />
          <CustomInput
            name="max_z"
            label="Max_Z"
            message="Please input max Z number!"
            type="number"
            placeHolder="Enter max z number"
          />
          <CustomInput
            name="min_z"
            label="Min_Z"
            message="Please input min Z number!"
            type="number"
            placeHolder="Enter min z number"
          />
        </div>
        <div className="flex justify-between">
          <Button
            className="bg-white text-purple-700 text-[18px] opacity-75 font-bold w-[135px] h-[49px]"
            onClick={() => setCurrent(current - 1)}
          >
            Back
          </Button>
          <Button
            htmlType="submit"
            className="bg-purple-700 text-white text-sm text-bold  w-[135px] h-[49px] "
          >
            Done
          </Button>
        </div>
      </Form>
    </>
  );
}
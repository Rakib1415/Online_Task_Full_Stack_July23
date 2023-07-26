import { Button } from 'antd';
import CustomInput from '../CustomInput';

export default function ProjectSetting({
  setCurrent,
  current,
}: {
  setCurrent: (current: number) => void;
  current: number;
}) {
  return (
    <div className="w-[1000px] mx-auto space-y-8 my-5">
      <div className="bg-white w-full px-5 py-7  billing-box-border ">
        <CustomInput
          label="Max_X"
          placeHolder="Enter Max_X Number"
          type="number"
          handleChange={() => {}}
        />
        <CustomInput
          label="Min_X"
          placeHolder="Enter Min_X Number"
          type="number"
          handleChange={() => {}}
        />
        <CustomInput
          label="Max_Y"
          placeHolder="Enter Max_Y Number"
          type="number"
          handleChange={() => {}}
        />
        <CustomInput
          label="Min_Y"
          placeHolder="Enter Min_Y Number"
          type="number"
          handleChange={() => {}}
        />
        <CustomInput
          label="Max_Z"
          placeHolder="Enter Max_Z Number"
          type="number"
          handleChange={() => {}}
        />
        <CustomInput
          label="Min_Z"
          placeHolder="Enter Min_Z Number"
          type="number"
          handleChange={() => {}}
        />
      </div>
      <div className="flex justify-between">
        <Button
          className="bg-white text-purple-700 text-[18px] opacity-75 font-bold w-[135px] h-[49px]"
          onClick={() => setCurrent(current - 1)}
        >
          Back
        </Button>
        <Button className="bg-purple-700 text-white text-sm text-bold  w-[135px] h-[49px] ">
          Done
        </Button>
      </div>
    </div>
  );
}

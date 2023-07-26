import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import CustomInput from '../CustomInput';

const { TextArea } = Input;

export default function CreateProject({
  setCurrent,
  current,
}: {
  setCurrent: (current: number) => void;
  current: number;
}) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="w-[1000px] mx-auto space-y-8 my-5">
      <div className="bg-white w-full px-5 py-7  billing-box-border ">
        <CustomInput
          label="Project Name"
          placeHolder="Enter Project Name"
          type="text"
          handleChange={() => {}}
        />
        <div className="text-gray-450 opacity-[0.8] text-sm font-bold">
          Project Description
        </div>
        <div>
          <div className="mt-4">
            <div className="w-full">
              <Form.Item
                className="float-container"
                name={['user', 'name']}
                rules={[{ required: true }]}
              >
                <TextArea
                  rows={5}
                  placeholder="Insert your tracking URL and include the mandatory macros"
                  className=" mt-2"
                />
              </Form.Item>
            </div>
          </div>
        </div>
        <CustomInput
          label="Client Name"
          placeHolder="Enter Client Name"
          type="text"
          handleChange={() => {}}
        />
        <CustomInput
          label="Contractor Name"
          placeHolder="Enter Contractor Name"
          type="text"
          handleChange={() => {}}
        />
      </div>
      <div className="flex justify-end">
        <Button
          className="bg-purple-700 text-white text-sm text-bold  w-[135px] h-[49px] "
          onClick={() => setCurrent(current + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

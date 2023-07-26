import { Form, Input } from 'antd';
import React from 'react';

interface InputProps {
  label: string;
  type: string;
  placeHolder: string;
  handleChange: () => void;
}

const CustomInput: React.FC<InputProps> = ({
  label,
  type,
  placeHolder,
  handleChange,
  ...rest
}) => {
  return (
    <>
      <div className="text-gray-450 opacity-[0.8] text-sm font-bold">
        {label}
      </div>
      <div>
        <div className="mt-4">
          <div className="w-full">
            <Form.Item
              className="float-container"
              name={['user', 'name']}
              rules={[{ required: true }]}
            >
              <Input
                onChange={handleChange}
                type={type}
                placeholder={placeHolder}
                {...rest}
              />
            </Form.Item>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomInput;

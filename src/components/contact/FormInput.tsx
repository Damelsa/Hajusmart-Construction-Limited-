import React from 'react';

interface FormInputProps {
  id: string;
  label: string;
  type: string;
}

const FormInput = ({ id, label, type }: FormInputProps) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      type={type}
      id={id}
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
    />
  </div>
);

export default FormInput;
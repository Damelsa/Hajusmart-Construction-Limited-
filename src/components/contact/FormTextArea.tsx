import React from 'react';

interface FormTextAreaProps {
  id: string;
  label: string;
  rows: number;
}

const FormTextArea = ({ id, label, rows }: FormTextAreaProps) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <textarea
      id={id}
      rows={rows}
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
    ></textarea>
  </div>
);

export default FormTextArea;
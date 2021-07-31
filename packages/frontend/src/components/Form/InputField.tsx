import { ErrorMessage, Field } from "formik";
import React from "react";

interface InputFieldProps {
  name: string;
  type: string;
  placeholder: string;
  errors: any;
  touched: any;
}

export const InputField: React.FC<InputFieldProps> = ({
  name,
  type,
  placeholder,
  children,
  errors,
  touched,
}) => {
  return (
    <div className="mt-6 mb-4">
      <div className="flex justify-between">
        <label
          htmlFor={name}
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          {name}
        </label>
        {children}
      </div>
      <Field
        className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
      />
      <ErrorMessage name={name}>
        {(msg) => <div className="text-red-500 truncate">{msg}</div>}
      </ErrorMessage>
    </div>
  );
};

export default InputField;

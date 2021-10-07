import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode
} from "react";
import {Spinner} from "./Spinner";

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  loading?: boolean;
  icon?: ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  loading,
  icon,
  className = "",
  ...props
}) => {
  return (
    <button
      disabled={disabled || loading}
      className={`bg-gray-200 p-2 font-bold flex items-center justify-center ${className}`}
      {...props}
    >
      {loading ? (
        <Spinner />
      ) : (
        <span className="flex items-center`">
          {icon && <span className={`mr-2 items-center`}>{icon}</span>}
          {children}
        </span>
      )}
    </button>
  );
};

import React from "react";

interface AvatarProps {
  url: string
}

export const Avatar: React.FC<AvatarProps> = ({url}) => {
  return <div>{url}</div>;
};

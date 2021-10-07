import React from "react";

interface AvatarProps {
  url: string;
}

export const Avatar: React.FC<AvatarProps> = ({ url }) => {
  return <img src={url} alt="avatar" className="w-24 h-24 rounded-full" />;
};

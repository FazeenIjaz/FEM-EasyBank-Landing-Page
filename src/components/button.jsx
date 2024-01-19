import React from "react";

const Button = ({ className }) => {
  return (
    <button
      style={{
        background:
          "linear-gradient(to right, hsl(136, 65%, 51%) , hsl(192, 70%, 51%) 80%)",
      }}
      className={`${className} text-white w-[180px] h-[45px] px-5 py-2 rounded-full transition-all ease-in duration-300	hover:scale-105`}
    >
      Request Invite
    </button>
  );
};

export default Button;

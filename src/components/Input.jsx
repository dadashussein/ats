import React from "react";
import {
  DefaultCheckInputIcon,
  HideEyeIcon,
  InputErrorCheckIcon,
  ShowEyeIcon,
} from "../../Icons";

const Input = ({
  Label,
  type,
  pleaceHolder,
  maxlength,
  isError,
  value,
  className,
  inputClassName,
  showIcon = false,
  ...props
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const HandleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="base_input">
      <label
        className={`text-slate-700 text-sm font-medium leading-5 mt-5 ${className}`}
      >
        {Label}
      </label>
      <div
        className={`
        focus-within:border-1 focus-within:border-black  bg-transparent relative
        overflow-hidden flex items-center justify-between text-gray-500 text-ellipsis text-base leading-6 whitespace  border
         ${isError
            ? "border-red-500"
            : "border-[color:var(--Colors-Border-border-primary,#D0D5DD)]"
          }
         shadow-sm bg-white 
          max-w-full justify-center mt-1.5 px-3.5 py-3 rounded-md border-solid
         ${inputClassName}
          `}
      >
        {type === "password" ? (
          showPassword ? (
            <ShowEyeIcon
              onClick={HandleShowPassword}
              className="w-5 h-5 text-gray-500 absolute right-3 cursor-pointer"
            />
          ) : (
            <HideEyeIcon
              onClick={HandleShowPassword}
              className="w-5 h-5 text-gray-500 absolute right-3 cursor-pointer"
            />
          )
        ) : null}
        <input
          {...props}
          type={showPassword ? "text" : type}
          placeholder={pleaceHolder}
          value={value}
          className="w-full h-full outline-none bg-transparent text-gray-950 border-none p-0 focus:outline-none focus:border-none focus:ring-transparent"
          maxLength={maxlength}
        />
        {showIcon ? (
          isError ? (
            <InputErrorCheckIcon />
          ) : (
            <DefaultCheckInputIcon />
          )
        ) : null}
      </div>
    </div>
  );
};

export default Input;

import { useId } from "react";

const Input = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  showToggle = false,
  isVisible,
  onToggle,
}) => {
  const id = useId();

  return (
    <div className="flex flex-col items-center h-11.5 w-64.5 md:w-[449px] gap-[6px]">
      <div className="self-start">
        <label
          htmlFor={id}
          className="text-[10px] font-normal leading-[140%] md:text-[18px]"
        >
          {label}
        </label>
      </div>

      <div>
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-64 h-7 pl-[11.55px] py-[8.09px] border-[0.58px] border-solid border-[rgba(231,227,252,1)] gap-[5.7px] rounded-xl placeholder:px-[11.55px] md:placeholder:px-5 md:w-[449px] md:h-[47px] md:rounded-3xl"
        />
      </div>
    </div>
  );
};

export default Input;

import React from "react";

const Button = ({
  children,
  variant = "primary",
  icon: Icon,
  className = "",
}) => {
  // Base style untuk semua tombol (rounded, padding, font)
  const baseStyles =
    "flex items-center justify-center gap-2 rounded-full  transition-all duration-200 text-[12px] leading-[140%] tracking-[0.2px] md:text-[16px] h-full  ";

  // Variasi gaya berdasarkan properti 'variant'
  const variants = {
    primary: "px-6 py-2 font-bold bg-[rgba(15,30,147,1)] hover:bg-blue-800",
    secondary: "px-6 py-2  font-bold bg-[rgba(47,51,52,1)] hover:bg-gray-700",
    outline:
      "border border-white/50 bg-transparent cursor-default text-white/50",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`}>
      {Icon && <Icon className="w-3 h-3 md:w-5 md:h-5" />}
      {children}
    </button>
  );
};

export default Button;

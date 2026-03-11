import React from "react";

const Button = ({
  children,
  variant = "primary",
  icon: Icon,
  className = "",
}) => {
  // Base style untuk semua tombol (rounded, padding, font)
  const baseStyles =
    "flex items-center justify-center gap-2 px-6 py-2 rounded-full font-bold transition-all duration-200 text-[12px] leading-[140%] tracking-[0.2px] md:text-[16px] h-full ";

  // Variasi gaya berdasarkan properti 'variant'
  const variants = {
    primary: "bg-[rgba(15,30,147,1)] hover:bg-blue-800", // Biru (Mulai)
    secondary: "bg-[rgba(47,51,52,1)] hover:bg-gray-700", // Abu-abu (Selengkapnya)
    outline:
      "border border-white/50 bg-transparent cursor-default text-white/50", // Border tipis (18+)
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`}>
      {Icon && <Icon className="w-3 h-3 md:w-5 md:h-5" />}
      {children}
    </button>
  );
};

export default Button;

// export const Button = ({ children, variant = "primary", ...props }) => {
//   const baseStyle =
//     "px-6 py-2 rounded-md font-bold flex items-center gap-2 transition";
//   const variants = {
//     primary: "bg-blue-600 text-white hover:bg-blue-700",
//     secondary:
//       "bg-gray-600/50 text-white hover:bg-gray-500/50 backdrop-blur-md",
//   };

//   return (
//     <button className={`${baseStyle} ${variants[variant]}`} {...props}>
//       {children}
//     </button>
//   );
// };

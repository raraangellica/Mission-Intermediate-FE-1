import { NavLink, useNavigate } from "react-router"; // penting saat mau ngelink pake navlink

const Link = ({ children, href = "#" }) => (
  <NavLink
    href={href}
    className="text-white hover:text-gray-300 text-[10px] md:text-lg font-medium line-height-[140%] tracking-[0.2px] md:text-lg  "
  >
    {children}
  </NavLink>
);

export default Link;

export const FooterNav = ({ name }) => {
  return <NavLink href="/">{name}</NavLink>;
};

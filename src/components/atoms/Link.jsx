import { NavLink, useNavigate } from "react-router"; // penting saat mau ngelink pake navlink

const Link = ({ children, href = "#" }) => (
  <NavLink
    href={href}
    className="text-white hover:text-gray-300 text-sm font-medium"
  >
    {children}
  </NavLink>
);

export default Link;

export const FooterNav = ({ name }) => {
  return <NavLink href="/">{name}</NavLink>;
};

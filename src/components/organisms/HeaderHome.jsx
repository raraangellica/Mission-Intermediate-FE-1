import { Navbar, ProfileMenu } from "../molecules/Navbar";

const Header = () => {
  return (
    <header className="flex justify-between items-center h-min-14 h-max-24 ">
      <Navbar />
      <ProfileMenu />
    </header>
  );
};
export default Header;

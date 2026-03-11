import GoogleLogo from "../../assets/GoogleLogo.png";

export const ButtonSubmit = ({ name }) => {
  return (
    <button
      type="submit"
      className="w-full rounded-full border-[1px] border-[rgba(231,227,252,0.23)] px-[11.55px] py-[8.09px] bg-[rgba(61,65,66,1)] md:rounded-3xl"
    >
      {name}
    </button>
  );
};

const HandleGoogleRegister = () => {
  alert("Register menggunakan Google (Hanya Contoh)");
};

const HandleGoogleLogin = () => {
  alert("Anda Login menggunakan Google (Hanya Contoh)");
};

export const ButtonGoogleLogin = () => {
  return (
    <button
      type="button"
      onClick={HandleGoogleLogin}
      className="!bg-transparent w-full rounded-full border-[1px] border-[rgba(231,227,252,0.23)]  px-[11.55px] py-[8.09px] cursor-pointer flex items-center justify-center gap-2"
    >
      <img src={GoogleLogo} alt="Google Logo" className="w-[25px] h-[25px]" />
      <span>Masuk dengan Google</span>
    </button>
  );
};

export const ButtonGoogleRegister = () => {
  return (
    <button
      type="button"
      onClick={HandleGoogleRegister}
      className="!bg-transparent h-[27px] rounded-xl border-[1px] border-[rgba(231,227,252,0.23)]  px-[11.55px] py-[8.09px] cursor-pointer flex items-center justify-center gap-2 md:rounded-3xl md:px-5 md:py-[14px] md:h-[47px] w-full"
    >
      <img
        src={GoogleLogo}
        alt="Google Logo"
        className="w-[10px] lg:w-[18px]"
      />
      <span>Daftar dengan Google</span>
    </button>
  );
};

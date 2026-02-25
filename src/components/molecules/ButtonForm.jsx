import GoogleLogo from "../../assets/GoogleLogo.png";

export const ButtonSubmit = () => {
  return (
    <button
      type="submit"
      className="w-[258px] h-[30.17px] rounded-[13.86px] border-[1px] border-[rgba(231,227,252,0.23)] px-[11.55px] py-[8.09px] bg-[rgba(61,65,66,1)] md:w-[449px] md:h-[50px] md:rounded-3xl md:px-[20px] md:py-[24px] md:font-[600]"
    >
      Masuk
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
      className="!bg-transparent w-[258px] h-[27px] rounded-xl border-[1px] border-[rgba(231,227,252,0.23)]  px-[11.55px] py-[8.09px] cursor-pointer flex items-center justify-center gap-2 md:w-[449px] md:h-[47px] md:rounded-3xl md:px-5 md:py-[14px]"
    >
      <img
        src={GoogleLogo}
        alt="Google Logo"
        className="w-[10px] lg:w-[18px]"
      />
      <span>Masuk dengan Google</span>
    </button>
  );
};

export const ButtonGoogleRegister = () => {
  return (
    <button
      type="button"
      onClick={HandleGoogleRegister}
      className="!bg-transparent w-[258px] h-[27px] rounded-xl border-[1px] border-[rgba(231,227,252,0.23)]  px-[11.55px] py-[8.09px] cursor-pointer flex items-center justify-center gap-2 md:w-[449px] md:h-[47px] md:rounded-3xl md:px-5 md:py-[14px]"
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

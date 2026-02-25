import { useState } from "react";
import Input from "../atoms/InputForm";
import HeaderForm from "../molecules/HeaderForm";
import { ButtonGoogleLogin, ButtonSubmit } from "../molecules/ButtonForm";
import { Eye, EyeOff } from "lucide-react";
import { NavLink } from "react-router"; // penting saat mau ngelink pake navlink

const LoginCard = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const savedUser = JSON.parse(localStorage.getItem("user_data"));

    if (
      savedUser?.username === formData.username &&
      savedUser?.password === formData.password
    ) {
      alert("Login berhasil!");
    } else {
      setError("Username atau password salah");
    }
  };

  return (
    <div className="flex flex-col items-center  bg-[rgba(24,26,28,0.84)] w-[306px] h-[384px] rounded-lg p-6 md:w-[529px] md:h-[663px]">
      <HeaderForm name="Masuk" />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-5 md:gap-[37px]"
      >
        <Input
          label="Username"
          name="username"
          placeholder="Masukkan username"
          value={formData.username}
          onChange={handleChange}
        />

        <div className="flex flex-col h-[66.4px] md:h-[112px] gap-[7px] md:gap-[12px]">
          {/* ini tolong juga ybg ga mau dikasih gap 12 */}
          <div className="h-[66px] md:h-[78.9] relative">
            <Input
              label="Kata Sandi"
              name="password"
              placeholder="Masukkan kata sandi"
              value={formData.password}
              onChange={handleChange}
              showToggle
              isVisible={showPassword}
              onToggle={() => setShowPassword(!showPassword)}
              type={showPassword ? "text" : "password"}
            />
            <span
              onClick={togglePassword}
              className="absolute right-3 top-[87%] cursor-pointer md:top-[70%] md:right-4"
            >
              {showPassword ? (
                <Eye className="w-[11.5px] h-[9.5px] md:w-5 md:h-5" />
              ) : (
                <EyeOff className="w-[11.5px] h-[9.5px] md:w-5 md:h-5" />
              )}
            </span>
          </div>

          <div className="flex h-[14px] justify-between text-[10px] font-normal leading-[140%] tracking-[0.2px] md:text-[16px] md:w-[449px] md:h-[22px]">
            <p className="text-[rgba(193,194,196,1)]">
              Belum punya akun?{" "}
              <NavLink
                to="/register"
                className="text-[rgba(255,255,255,1)] font-medium md:text-[14px]"
              >
                Daftar
              </NavLink>
            </p>

            <NavLink to="/register">Lupa kata sandi?</NavLink>
          </div>
        </div>

        <div className="flex flex-col items-center w-[258px] h-[79.33px] gap-1 md:w-[449px] md:h-[133px] md:gap-2">
          {error && <p style={{ color: "red" }}>{error}</p>}
          <ButtonSubmit name="Masuk" />

          <p>Atau</p>

          <ButtonGoogleLogin />
        </div>
      </form>
    </div>
  );
};

export default LoginCard;

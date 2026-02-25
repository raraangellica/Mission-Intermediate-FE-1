import { useState } from "react";
import Input from "../atoms/InputForm";
import HeaderForm from "../molecules/HeaderForm";
import { ButtonGoogleRegister, ButtonSubmit } from "../molecules/ButtonForm";
import { Eye, EyeOff } from "lucide-react";
import { NavLink } from "react-router";

const RegisterCard = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (formData.username.length < 3) {
      setError("Username minimal 3 karakter");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password minimal 8 karakter");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Password dan Confirm Password tidak sama");
      return;
    }

    localStorage.setItem("user_data", JSON.stringify(formData));
    alert("Register berhasil!");
  };

  const handleGoogleRegister = () => {
    alert("Register menggunakan Google (simulasi)");
  };

  return (
    <div className="flex flex-col items-center  bg-[rgba(24,26,28,0.84)] w-[306px] h-[452.28px] rounded-lg p-6 md:w-[529px] md:h-[778px]">
      <HeaderForm name="Daftar" />
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

        <Input
          label="Kata Sandi"
          name="password"
          placeholder="Masukan kata sandi"
          value={formData.password}
          onChange={handleChange}
          showToggle
          isVisible={showPassword}
          onToggle={() => setShowPassword(!showPassword)}
          type={showPassword ? "text" : "password"}
        />

        <div className="flex flex-col gap-[7px] md:gap-3">
          <Input
            label="Konfimasi Kata Sandi"
            name="confirmPassword"
            placeholder="Masukan kata sandi"
            value={formData.confirmPassword}
            onChange={handleChange}
            showToggle
            isVisible={showPassword}
            onToggle={() => setShowPassword(!showPassword)}
            type={showPassword ? "text" : "password"}
          />
          <p className="text-[rgba(193,194,196,1)]">
            Belum punya akun?{" "}
            <NavLink
              to="/login"
              className="text-[rgba(255,255,255,1)] font-medium md:text-[14px]"
            >
              Masuk
            </NavLink>
          </p>
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <div className="flex flex-col items-center w-[258px] h-[79.33px] gap-1 md:w-[449px] md:h-[133px] md:gap-2">
          {error && <p style={{ color: "red" }}>{error}</p>}
          <ButtonSubmit />

          <p>Atau</p>

          <ButtonGoogleRegister />
        </div>
      </form>
    </div>
  );
};

export default RegisterCard;

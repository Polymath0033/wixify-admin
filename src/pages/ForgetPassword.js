import AuthNotification from "../components/UI/AuthNotification";
import png from "../assets/forget.png";
import { useNavigate } from "react-router-dom";
const ForgetPassword = () => {
  const navigate = useNavigate();

  return (
    <AuthNotification
      title="Forget  Password"
      paragraph="We sent a password reset link to kel....@gmail.com. Click on the link in your email to reset your password."
      btnValue={"Reset  Password"}
      onclick={() => navigate("/reset-pin")}
    >
      <img src={png} alt="Avatar" />
    </AuthNotification>
  );
};
export default ForgetPassword;

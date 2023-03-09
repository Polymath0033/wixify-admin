import AuthNotification from "../components/UI/AuthNotification";
import png from "../assets/forget.png";
const ForgetPassword = () => {
  return (
    <AuthNotification
      title="Forget  Password"
      paragraph="We sent a password reset link to kel....@gmail.com. Click on the link in your email to reset your password."
      btnValue={"Reset  Password"}
    >
      <img src={png} alt="Avatar" />
    </AuthNotification>
  );
};
export default ForgetPassword;

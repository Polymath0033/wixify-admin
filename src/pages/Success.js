import AuthNotification from "../components/UI/AuthNotification";
import success from "../assets/success.png";
const Success = () => {
  return (
    <AuthNotification btnValue={"Back to Login"}>
      <img src={success} alt="success" />
      <h3 style={{ color: "#100C2A", textAlign: "center" }}>Congratulation!</h3>
      <p style={{ textAlign: "center" }}>
        Your password have been reset successfully
      </p>
    </AuthNotification>
  );
};
export default Success;

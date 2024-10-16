import OtpLogin from "../components/OtpLogin";

export default function Loginpage() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-center mb-5">
        How to add one-time Password phone Authentication
      </h1>
      <OtpLogin />
    </div>
  );
}

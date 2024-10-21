// "use client";
// import { useState } from "react";

// export default function Login() {
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [code, setCode] = useState("");
//   const [message, setMessage] = useState("");

//   const requestCode = async () => {
//     const res = await fetch("/api/auth/requestCode", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ phoneNumber }),
//     });

//     const data = await res.json();
//     setMessage(data.message);
//   };

//   const verifyCode = async () => {
//     const res = await fetch("/api/auth/verifyCode", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ phoneNumber, code }),
//     });

//     const data = await res.json();
//     setMessage(data.message);
//   };

//   return (
//     <div className="flex flex-col gap-4">
//       <h1 className="text-left mt-5">SMS Authentication</h1>
//       <input
//         type="text"
//         placeholder="Phone number"
//         value={phoneNumber}
//         onChange={(e) => setPhoneNumber(e.target.value)}
//       />
//       <button onClick={requestCode}>Get Code</button>

//       <input
//         type="text"
//         placeholder="Verification Code"
//         value={code}
//         onChange={(e) => setCode(e.target.value)}
//       />
//       <button onClick={verifyCode}>Verify Code</button>

//       {message && <p>{message}</p>}
//     </div>
//   );
// }
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [generatedCode, setGeneratedCode] = useState<string | null>(null);
  const router = useRouter(); // Initialize the router for navigation

  // Function to generate a random 6-digit code
  const generateCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const requestCode = async () => {
    const newCode = generateCode();
    alert(`Your verification code is: ${newCode}`);
    setGeneratedCode(newCode);
    setMessage("Verification code sent to your phone.");
  };

  // Function to verify the code
  const verifyCode = async () => {
    try {
      const res = await fetch("/api/auth/verifyCode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber, code }),
      });

      const data = await res.json();

      if (res.ok) {
        // If the response is OK (status 200), redirect to dashboard
        setMessage("Code verified successfully!");
        router.push("/dashboard"); // Redirect to the dashboard page
      } else {
        // Show error message if the code is invalid
        setMessage(data.message || "Invalid verification code");
      }
    } catch (error) {
      setMessage("Something went wrong, please try again.");
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-left mt-5">SMS Authentication</h1>

      <input
        type="text"
        placeholder="Phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />

      <button onClick={requestCode}>Get Code</button>

      <input
        type="text"
        placeholder="Verification Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <button onClick={verifyCode}>Verify Code</button>

      {message && <p>{message}</p>}
    </div>
  );
}

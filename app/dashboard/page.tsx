// "use client";
import { getServerSession } from "next-auth";

import { NoUser, ThereIsUser } from "../components/DashboardPageComponents";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session) return <NoUser />;
  return (
    <div>
      <div>
        <ThereIsUser />
      </div>
    </div>
  );
}

// 'use client';

// import { OTP, advanceSms, simpleSms } from '@/actions/sms';

// export default function HomePage() {
//   const handleOtp = async () => {
//     const res = await OTP();
//     console.log(res);
//   };

//   const handleSimple = async () => {
//     const res = await simpleSms();
//     console.log(res);
//   };

//   const handleAdvance = async () => {
//     const res = await advanceSms();
//     console.log(res);
//   };

//   return (
//     <main className='flex justify-center items-center h-80 gap-x-3'>
//       <button
//         className='bg-blue-500 px-12 py-2 rounded text-white'
//         onClick={handleOtp}
//       >
//         OTP
//       </button>
//       <button
//         className='bg-blue-500 px-12 py-2 rounded text-white'
//         onClick={handleSimple}
//       >
//         ساده
//       </button>
//       <button
//         className='bg-blue-500 px-12 py-2 rounded text-white'
//         onClick={handleAdvance}
//       >
//         پیشرفته
//       </button>
//     </main>
//   );
// }

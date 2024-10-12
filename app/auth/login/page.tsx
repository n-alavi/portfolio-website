"use client";

import Link from "next/link";

import { useRef, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

export default function LoginPage() {
  const router = useRouter();
  const { data: session } = useSession(); // Check user session
  // const [error, setError] = useState("");

  const username = useRef("");
  const password = useRef("");

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";

  // Redirect if already logged in
  useEffect(() => {
    if (session) {
      router.push(callbackUrl);
    }
  }, [session, router, callbackUrl]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log(
      `Username: ${username.current} , Password: ${password.current}`
    );

    try {
      const result = await signIn("credentials", {
        username: username.current,
        password: password.current,
        redirect: false,
        callbackUrl,
      });

      console.log(result);

      if (!result?.error) {
        router.push(callbackUrl);
      } else {
        // setError("نام کاربری یا کلمه عبور اشتباه است");
      }
    } catch (err: unknown) {
      console.log("error: ", err);
    }
  };

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                وارد اکانت خود شوید
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
                {/* {error && (
                  <p className="text-center bg-red-300 py-4 mb-6 rounded">
                    {error}
                  </p>
                )} */}
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    نام کاربری
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="نام کاربری"
                    onChange={(e) => (username.current = e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    کلمه عبور
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="کلمه عبور"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    onChange={(e) => (password.current = e.target.value)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="px-7 py-2 text-sm rounded shadow bg-gray-600 hover:bg-gray-400 text-gray-200 w-full cursor-pointer"
                >
                  ورود
                </button>
                <p className="text-sm font-light text-gray-500 ">
                  اکانت نداری ؟{" "}
                  <Link
                    href="/auth/register"
                    className="font-medium text-primary-600 hover:underline "
                  >
                    ثبت نام کن
                  </Link>
                </p>
              </form>
              {/* <button
                            type="button"
                            className="px-7 py-2 text-white text-sm rounded bg-gray-600 shadow-md hover:shadow-lg w-full flex justify-center items-center"
                            onClick={() =>
                                signIn("github", { callbackUrl: "/dashboard" })
                            }
                        >
                            ورود با گیت هاب{" "}
                            <Image
                                className="mr-4"
                                src={GithubImage}
                                height={20}
                                width={20}
                                alt=""
                            />
                        </button> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

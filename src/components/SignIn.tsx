import Link from "next/link";
import { SocialAuth } from "./SocialAuth";
import googleSvg from "../assets/googleSvg.svg";
import Image from "next/image";
import { Button } from "../components/ui/button";
export function SignIn() {
  return (
    <div className="flex flex-col justify-center items-start gap-10 w-[381px]">
      <h1 className="text-[32px]">
        <span className="text-firstHex font-bold">Task</span>Manager
      </h1>
      <ul className="flex flex-col justify-center items-center gap-[12px]">
        <Link
          href=""
          className="flex w-[381px] h-[60px] rounded-md bg-[#363041] hover:filter hover:brightness-110 "
        >
          <span
            id="icon"
            className="w-[64px] bg-firstHex rounded-md rounded-r-none px-[20px] py-[18px]"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_7_4245)">
                <path
                  d="M20.283 10.356H11.956V13.807H16.748C16.302 16 14.435 17.26 11.956 17.26C11.2623 17.2612 10.5753 17.1254 9.9342 16.8605C9.29312 16.5955 8.71065 16.2067 8.2202 15.7161C7.72975 15.2256 7.34097 14.643 7.07615 14.0019C6.81134 13.3608 6.6757 12.6737 6.67701 11.98C6.67583 11.2864 6.81156 10.5994 7.07644 9.95842C7.34131 9.3174 7.73012 8.73498 8.22055 8.24454C8.71099 7.75411 9.29341 7.3653 9.93443 7.10043C10.5754 6.83556 11.2624 6.69982 11.956 6.701C13.215 6.701 14.353 7.14801 15.246 7.879L17.846 5.28C16.262 3.899 14.231 3.047 11.956 3.047C10.7818 3.04357 9.61854 3.27231 8.53306 3.72007C7.44759 4.16783 6.46135 4.82578 5.63107 5.65606C4.80079 6.48634 4.14284 7.47258 3.69508 8.55805C3.24732 9.64353 3.01858 10.8068 3.02201 11.981C3.01845 13.1552 3.2471 14.3186 3.69481 15.4041C4.14253 16.4896 4.80046 17.4759 5.63077 18.3062C6.46108 19.1366 7.44737 19.7945 8.53291 20.2422C9.61844 20.6899 10.7818 20.9186 11.956 20.915C16.423 20.915 20.485 17.666 20.485 11.981C20.485 11.453 20.404 10.884 20.283 10.356Z"
                  fill="#2E2938"
                />
              </g>
              <defs>
                <clipPath id="clip0_7_4245">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <span
            id="socialName"
            className="font-[500] text-base flex justify-start items-center pl-[18px] "
          >
            Google
          </span>
        </Link>
        <Link
          href=""
          className="flex w-[381px] h-[60px] rounded-md bg-[#363041] hover:filter hover:brightness-110 "
        >
          <span
            id="icon"
            className="w-[64px] bg-firstHex rounded-md rounded-r-none px-[20px] py-[18px]"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.397 20.997V12.801H16.162L16.573 9.592H13.397V7.548C13.397 6.622 13.655 5.988 14.984 5.988H16.668V3.127C15.8487 3.03919 15.0251 2.99679 14.201 3C11.757 3 10.079 4.492 10.079 7.231V9.586H7.33203V12.795H10.085V20.997H13.397Z"
                fill="#2E2938"
              />
            </svg>
          </span>
          <span
            id="socialName"
            className="font-[500] text-base flex justify-start items-center pl-[18px] "
          >
            Facebook
          </span>
        </Link>
      </ul>
      <div className="flex flex-col justify-start items-center  w-[381px]">
        <form action="" className="flex flex-col justify-start items-center  w-[381px] gap-5">
          <label
            htmlFor="email"
            className="font-[500] text-[16px] leading-[18.34px] text-firstHex flex flex-col gap-[8px]"
          >
            Your email
            <input
              type="email"
              name="email"
              id="email"
              className="w-[381px] h-[60px] rounded-[6px] bg-[#363041] font-[500] text-[12px] leading-[13.75px] px-[23px] outline-none text-textColor"
              placeholder="Please insert your e-mail address"
            />
          </label>
          <label
            htmlFor="password"
            className="font-[500] text-[16px] leading-[18.34px] text-firstHex flex flex-col gap-[8px]"
          >
            Password
            <input
              type="password"
              name="pass"
              id="password"
              className="w-[381px] h-[60px] rounded-[6px] bg-[#363041] font-[500] text-[12px] leading-[13.75px] px-[23px] outline-none text-textColor mb-[20px]"
              placeholder="Please insert your password"
            />
          </label>

          <Button
            type="submit"
            className="w-[381px] h-[60px] bg-firstHex rounded-md font-[500] text-[18px] leading-[20.63px] text-secondHex hover:filter hover:brightness-110 mb-3"
          >
            Sign In
          </Button>
        </form>
        <Link href="/auth/signup">Não tens uma conta? Criar conta agora.</Link>
      </div>
    </div>
  );
}

'use client'
import Link from "next/link";
import { SocialAuth } from "./SocialAuth";
import googleSvg from "../assets/googleSvg.svg";
import Image from "next/image";
import { Button } from "../components/ui/button";
import { api } from "@/lib/api";
import { FormEvent } from "react";
import { useRouter } from 'next/navigation'


export function SignUp() {
  const router = useRouter()
  async function handleCreateUser(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
     await api.post("/api/users/",
      {
        name:formData.get('name'),
        email:formData.get('email'),
        password: formData.get('password')

      }
    )
    router.push('/auth/login')

    }
  return (
    <div className="flex flex-col justify-center items-start gap-10 w-[381px]">
      <h1 className="text-[32px]">
        <span className="text-firstHex font-bold">Task</span>Manager
      </h1>
     
      <div className="flex flex-col justify-start items-center  w-[381px]">
        <form method="post" onSubmit={handleCreateUser}  className="flex flex-col justify-start items-center  w-[381px] gap-5">
          <label
            htmlFor="name"
            className="font-[500] text-[16px] leading-[18.34px] text-firstHex flex flex-col gap-[8px]"
          >
            Your name
            <input
              type="text"
              name="name"
              id="name"
              className="w-[381px] h-[60px] rounded-[6px] bg-[#363041] font-[500] text-[12px] leading-[13.75px] px-[23px] outline-none text-textColor"
              placeholder="Please insert your name "
            />
          </label>
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
              name="password"
              id="password"
              className="w-[381px] h-[60px] rounded-[6px] bg-[#363041] font-[500] text-[12px] leading-[13.75px] px-[23px] outline-none text-textColor mb-[20px]"
              placeholder="Please insert your password"
            />
          </label>

          <Button
            type="submit"
            className="w-[381px] h-[60px] bg-firstHex rounded-md font-[500] text-[18px] leading-[20.63px] text-secondHex hover:filter hover:brightness-110 "
          >
            Sign Up
          </Button>
        </form>
       
      </div>
    </div>
  );
}

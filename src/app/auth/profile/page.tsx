import { NavBar } from "@/components/NavBar";

import {  ArrowLeftComponent } from "@/components/ArrowLeftComponent";
import {  ArrowRight, User } from "lucide-react";
import profileImage from "../../../../public/pexels-caio-cardenas-2101839 1.png";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Profile() {

  return (
    <main>
      <NavBar />
      <div className="flex justify-center items-center  h-screen w-screen">
        <div className="flex flex-col justify-center items-start  ">
          <span className="flex justify-center items-center gap-[18px] mb-[48px]">
            <ArrowLeftComponent />
            <span>
              <h1 className="font-bold text-[32px] leading-[36.67px] mb-[12px]">
                My Profile
              </h1>
              <p className="font-[500] text-[18px] leading-[20.63px]">
                Preview my informations
              </p>
            </span>
          </span>
          <figure className="flex items-center justify-center gap-[8px] mb-[24px]">
            <Image
              src={profileImage}
              alt="image1"
              width={96}
              height={96}
              className="rounded-full"
            />
            <span className="flex justify-center items-start flex-col gap-[6px]">
              <h3 className="font-[500] text-[24px] leading-[16px]">
                My name here
              </h3>
              <Link
                href="/auth/profile"
                className="flex gap-[2px] justify-center items-center"
              >
                <span className="font-bold text-[12px] leading-[13.75px] text-firstHex">
                  My account
                </span>
           
              </Link>
            </span>
          </figure>

          <span className="flex justify-start items-center gap-[90px] mb-[32px]">
            <span className="flex flex-col gap-5">
              <div>
                <p className="font-bold text-[14px] leading-[16.04px] text-op mb-1">Display name</p>
                <h3 className="font-[500] text-[18px] leading-[20.63px]">Lorem, ipsum dolor.</h3>
              </div>
              <div>
                <p className="font-bold text-[14px] leading-[16.04px] text-op mb-1">Email</p>
                <h3 className="font-[500] text-[18px] leading-[20.63px]">Lorem, ipsum dolor.</h3>
              </div>
            </span>
            <User width={196} height={196}/>
          </span>
            <Button asChild className="bg-[#363041] w-[381px] h-[60px] hover:filter hover:brightness-110">
                <Link href="" className="font-[500] text-[18px] leading-[20.63px]">
                        Sign Out
                </Link>
            </Button>
        </div>
      </div>
    </main>
  );
}

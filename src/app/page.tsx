import Image from "next/image";
import image1 from '../../public/image1.png'
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="mx-[94px] mt-[57px] ">
    <header>
      <nav className=" w-full flex flex-row justify-between items-center  font-[500] text-[18px] leading-[20.63px]">
        <a href="" className="font-bold text-[32px]  leading-[36.67px]">
          <span className="text-[#8b84c5]">TASK</span>Manager
        </a>
        <ul 
        className="flex items-center justify-center gap-[44px] text-[18px] font-[500] leading-[20.63px] ">
          <li><Link href="" className="hover:text-firstHex hover:font-bold">About us</Link></li>
          <li><Link href="" className="hover:text-firstHex hover:font-bold">Cases</Link></li>
          <li><Link href="" className="hover:text-firstHex hover:font-bold">Resources</Link></li>
        </ul>
        <Button asChild className="border-none outline-none bg-firstHex w-[158px] px-[48px] rounded-[6px] text-secondHex font-[500] text-[18px] leading-[20.63px] hover:filter hover:brightness-110 h-[49px]">
          <Link href="/auth/login" >Sign In</Link>
        </Button>
      </nav>
    </header>
    <div className="flex justify-between items-center gap-[66px]">
      <div className="w-[608px] flex flex-col gap-8 justify-center items-start">
        <h1 className="font-[500] text-[44px] leading-[50.42px]"><span className="text-firstHex font-bold">Creative Digital</span> Design Agency is looking for new talent</h1>
        <p className="font-bold text-[18px]
        leading-[20.63px]">Creative Digital Design Agency is looking for new talent</p>
         <Button asChild className="border-none outline-none bg-firstHex px-12 rounded-md text-secondHex font-[500] text-[18px] leading-[20.63px] hover:filter hover:brightness-110 h-[49px]">
          <Link href="/auth/signup" >Sign Up</Link>
        </Button>
      </div>
      <figure className="w-[584px]">
        <Image src={image1} alt="app's image"></Image>
      </figure>
    </div>
    </main>
  )
}

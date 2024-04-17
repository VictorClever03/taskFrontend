import Link from "next/link";

import Image from "next/image";
import profileImage from "../../public/pexels-caio-cardenas-2101839 1.png"
import { ArrowRight,CopyPlus,Menu } from "lucide-react";

export function NavBar(){
    
    return(
        <header className="flex justify-between items-center bg-[#363041] h-[76px] w-screen pl-[24px] pr-[64px] fixed">
                <nav className="flex gap-[18px]">
                    <span className="">
                        <button>
                            <Menu width={24}/>
                        </button>
                        <ul className="hidden">
                            <li>About us</li>
                            <li>Cases</li>
                            <li>Resources</li>
                        </ul>
                    </span>
                    <Link href='/tasks/new' className="flex gap-[8px] ">
                        <CopyPlus width={24}/>  
                        <h3 className="font-[500] text-[18px] leading-[20.63px]">Add Task</h3>
                    </Link>
                </nav>
                <figure className="flex items-center justify-center gap-[8px]">
                    <Image src={profileImage} alt="image1" width={52} height={52} className="rounded-full"/>
                    <span>
                        <h3 className="font-[500] text-[14px] leading-[16px]">My name here</h3>
                        <Link href='/auth/profile' className="flex gap-[2px] justify-center items-center">
                           <span className="font-bold text-[12px] leading-[13.75px] text-firstHex">
                            My account
                            </span> 
                            <ArrowRight width={16} />
                        </Link>
                    </span>
                </figure>
            </header>
    )
}
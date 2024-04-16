import Link from "next/link";

interface LinkProps{
    svg: string 
    title: string
}
export function SocialAuth(props: LinkProps){
    return(
        <Link 
                href='' className='flex w-[381px] h-[60px] rounded-md bg-[#363041] hover:filter hover:brightness-110 '>
                    <span 
                    id='icon' className='w-[64px] bg-firstHex rounded-md rounded-r-none px-[20px] py-[18px]'>
                        
                    </span>
                    <span 
                    id='socialName' className='font-[500] text-base flex justify-start items-center pl-[18px] '>
                        {props.title}
                    </span>
        </Link>
    )
}
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function ArrowLeftComponent(path: any) {
  return (
    <Link
      href=''
      className="bg-[#363041] w-[56px] h-[56px] rounded-full flex items-center justify-center hover:filter hover:brightness-110"
    >
      <ArrowLeft />
    </Link>
  );
}

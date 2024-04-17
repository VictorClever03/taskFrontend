import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function ArrowLeftComponent(path: any) {
  const router = useRouter();
  const handleGoBack = () => 
  {
    router.back();
  }
  return (
    <Link
      href=""
      onClick={handleGoBack}
      className="bg-[#363041] w-[56px] h-[56px] rounded-full flex items-center justify-center hover:filter hover:brightness-110"
    >
      <ArrowLeft />
    </Link>
  );
}

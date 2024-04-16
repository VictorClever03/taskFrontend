import Image from "next/image";
import image1 from '../../public/image1.png'
import { SignIn } from "@/components/SignIn";

export default function Login() {
  return (
    <main className="w-screen h-screen flex justify-center items-center">

        <SignIn/>
    </main>
  )
}

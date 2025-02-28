'use client';
import SignInForm from "@/components/auth/SignInForm";
import GridShape from "@/components/common/GridShape";
// import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import logoImage from "../../../../../public/images/logo/vegalogo_transparent.png";

// export const metadata: Metadata = {
//   title: "Next.js SignIn Page | TailAdmin - Next.js Dashboard Template",
//   description: "This is Next.js Signin Page TailAdmin Dashboard Template",
// };
export default function SignIn() {

  
console.log("This is Next.js Signin Page TailAdmin Dashboard Template");
  return (
    <div className="relative flex w-full h-screen px-4 py-6 overflow-hidden bg-white z-1 dark:bg-gray-900 sm:p-0">
      <SignInForm />
      <div className="relative items-center justify-center flex-1 hidden p-8 z-1 bg-brand-950 dark:bg-white/5 lg:flex">
        {/* <!-- ===== Common Grid Shape Start ===== --> */}
        <GridShape />
        <div className="flex flex-col items-center max-w-xs">
          <Link href="/" className="block mb-4">
            <Image
              width={231}
              height={48}
              src={logoImage}
              alt="Logo"
            />
          </Link>
          <p className="text-center text-gray-400 dark:text-white/60">
            Vega Transportation System Manager
          </p>
        </div>
      </div>
    </div>
  );
}

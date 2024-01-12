import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { Inter } from 'next/font/google'

const inter = Inter({ weight: ["400","700"],subsets:['latin'] })

export default function AcmeLogo() {
  return (
    <div
      className="flex flex-row items-center leading-none text-white"
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className={`${inter.className}`}>Acme</p>
    </div>
  );
}

import Link from 'next/link';
import React from 'react';


export default function Navbar() {
  return (
    <nav className="bg-[#003580] px-4 py-2 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <a href="#" className="text-white text-2xl font-bold">
          OLX
        </a>
      </div>
      <div className="flex items-center space-x-6">
        <MicroscopeIcon className="text-white h-6 w-6" />
        <Link href="#" className="text-white text-base" prefetch={false}>
          Сообщения
        </Link>
        <Link href="#" className="text-white text-base" prefetch={false}>
          Каз
        </Link>
        <Link href="#" className="text-white text-base" prefetch={false}>
          Рус
        </Link>
        <HeartIcon className="text-white h-6 w-6" />
        <Link href="#" className="text-white text-base" prefetch={false}>
          Ваш профиль
        </Link>
        <Link href='addProduct' className="bg-white text-[#003580] text-sm py-2 px-4 rounded">Подать объявление</Link>
      </div>
    </nav>
  )
}

function HeartIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function MicroscopeIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>
  )
}

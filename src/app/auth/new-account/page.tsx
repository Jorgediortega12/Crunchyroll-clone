import Link from 'next/link';
import { NewAccount } from './ui/NewAccount';
import Image from 'next/image';

export default function page() {
  return (
    <div className='bg-[#000000] min-h-screen'>
        <header className="flex items-center justify-center h-16 mb-32 bg-bg-navbar">
        <Link href="/" className='cursor-pointer'>
          <Image src="/img/Crunchyroll.png" alt="Logo-principal" width={160} height={50} />
        </Link>
      </header>
      <NewAccount />
    </div>
  );
}

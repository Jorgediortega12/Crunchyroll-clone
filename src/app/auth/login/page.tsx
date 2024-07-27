
import Image from 'next/image';
import Link from 'next/link';
import { LoginForm } from './ui/LoginForm';


export default function LoginPage() {
  return (
    <div className='bg-[#000000] min-h-screen'>
      <header className="flex items-center justify-center h-16 bg-bg-navbar">
        <Link href="/" className='cursor-pointer'>
          <Image src="/img/Crunchyroll.png" alt="Logo-principal" width={160} height={50} />
        </Link>
      </header>
        <LoginForm />
    </div>
  );
}

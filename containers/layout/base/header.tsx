import Image from 'next/image';
import { Button } from '@heroui/button';
import Link from 'next/link';

export function Header() {
  return (
    <header>
      <div className="bg-grey-10 container flex items-center justify-between py-5">
        <Link href="/" className="relative z-0">
          <Image
            src="/images/layout/logo.png"
            alt="logo"
            width={100}
            height={30}
          />
        </Link>
        <Link href="/explore">
          <Button variant="solid" color="primary">
            explore
          </Button>
        </Link>
      </div>
    </header>
  );
}

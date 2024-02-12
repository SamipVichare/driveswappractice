'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/components/images/t_logo.png'


const Navigation = () => {
  const pathname = usePathname();
  return (

    

    <nav>
      
      <ul>
      
        <li className='logo'>
        <Link href="/">
        
        {/* Image component for the logo */}
        <Image
          src={logo}
          alt="Logo"
          width={150} // Set the width as needed
          height={150} // Set the height as needed
        />
      
    </Link>
    </li>
    <li>
          <Link href='/' className={pathname == '/' ? 'active' : 'after:'}>
            Home
          </Link>
        </li>
        <li>
          <Link
            href='/news'
            className={pathname == '/news' ? 'active' : 'after:'}
          >
            News
          </Link>
        </li>
        <li>
          <Link
            href='/bookings'
            className={pathname == '/bookings' ? 'active' : 'after:'}
          >
            Bookings
          </Link>
        </li>
        <li>
          <Link
            href='/about'
            className={pathname == '/about' ? 'active' : 'after:'}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            href='/Sale'
            className={pathname == '/Sale' ? 'active' : 'after:'}
          >
            Sale
          </Link>
        </li>

        <li>
          <Link
            href='/register'
            className={pathname == '/register' ? 'active' : 'after:'}
          >
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;

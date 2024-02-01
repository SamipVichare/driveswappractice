'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav>
      <ul>
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
            href='/grocery'
            className={pathname == '/grocery' ? 'active' : 'after:'}
          >
            Grocery
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
            href='/posts'
            className={pathname == '/posts' ? 'active' : 'after:'}
          >
            Posts
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

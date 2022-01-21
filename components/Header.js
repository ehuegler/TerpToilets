import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Header() {

  const navLinks = [
    ['Home', '/'],
    ['Bathrooms', '/bathrooms/']
  ]

  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <header className='bg-red-medium'>
      <nav className=' container mx-auto flex items-center flex-wrap p-2 font-crimson text-white'>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            <span className='text-xl font-bold uppercase tracking-wide'>
              Toilet UMD
            </span>
          </a>
        </Link>
        <button
          className=' inline-flex p-3 hover:bg-red-darker rounded md:hidden ml-auto '
          onClick={handleClick}
        >
          {active ? <FaTimes /> : <FaBars />}
        </button>
        <div
          className={`${active ? '' : 'hidden'
            }   w-full md:inline-flex md:flex-grow md:w-auto`}
        >
          <div className='md:inline-flex md:flex-row md:ml-auto md:w-auto w-full md:items-center items-start  flex flex-col md:h-auto'>
            {
              navLinks.map((link, i) => (
                <Link key={i} href={link[1]}>
                  <a className='md:inline-flex md:w-auto w-full px-3 py-2 font-bold items-center justify-center hover:bg-red-darker '>
                    {link[0]}
                  </a>
                </Link>
              ))
            }
          </div>
        </div>
      </nav>
    </header>
  );
};
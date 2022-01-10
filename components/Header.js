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
    <header>
      <nav className='flex items-center flex-wrap bg-red-medium p-3 font-crimson text-white'>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            <span className='text-xl font-bold uppercase tracking-wide'>
              Toilet UMD
            </span>
          </a>
        </Link>
        <button
          className=' inline-flex p-3 hover:bg-red-darker rounded lg:hidden ml-auto '
          onClick={handleClick}
        >
          {active ? <FaTimes /> : <FaBars />}
        </button>
        <div
          className={`${active ? '' : 'hidden'
            }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            {
              navLinks.map(link => (
                <Link href={link[1]}>
                  <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 font-bold items-center justify-center hover:bg-red-darker '>
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
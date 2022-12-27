import { Link } from 'react-router-dom';
import {IconBrandTwitter,IconBrandFacebook,IconBrandGithub} from '@tabler/icons'

export default function Navbar() {
  return (
    <footer className='text-center lg:text-left text-red-600'>
      <div className='flex justify-center items-center lg:justify-between p-6 border-b border-red-300'>
        <div className='mr-12 hidden lg:block'></div>
        <div className='flex justify-center'>
          <a
            href='http://facebook.com/kekayuproject'
            className='mr-4 text-red-600'
          >
            <IconBrandFacebook />
          </a>
          <a
            href='http://facebook.com/kekayuproject'
            className='mr-4 text-red-600'
          >
            <IconBrandTwitter />
          </a>
          <a
            href='http://facebook.com/kekayuproject'
            className='mr-4 text-red-600'
          >
            <IconBrandGithub />
          </a>
        </div>
      </div>

      <div className='text-center p-6 bg-red-200'>
        <span>© 2023 </span>
        <a className='text-red-600 font-semibold' href='#'>
          Kewr Foundation
        </a>
      </div>
    </footer>
  );
}

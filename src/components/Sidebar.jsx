import { AiFillHome, AiOutlinePlaySquare, AiOutlineClockCircle } from 'react-icons/ai';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { GiLoincloth } from 'react-icons/gi';
import { ImNewspaper } from 'react-icons/im';
import { GoTrophy } from 'react-icons/go';
import { HiOutlineSignal } from 'react-icons/hi2';
import { SiYoutubegaming } from 'react-icons/si';
import { RiFireLine } from 'react-icons/ri';
import { BsCollectionPlay, BsMusicNote, BsLightbulb } from 'react-icons/bs';
import { PiPlayBold, PiClockCounterClockwiseBold } from 'react-icons/pi';
import { BiLike } from 'react-icons/bi';
import { MdOutlineVideoLibrary, MdOutlineMovie } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  if (!isMenuOpen) return (
    <div className='w-16 px-1 '>
      <div>
        <ul className='text-[10px]'>
          <li className='flex flex-col gap-2 items-center py-4'>
            <AiFillHome size='20px' />
            <span><Link to='/'>Home</Link></span>
          </li>
          <li className='flex flex-col gap-2 items-center py-4'>
            <PiPlayBold size='20px' />
            <span>Shorts</span>
          </li>
          <li className='flex flex-col gap-2 items-center py-4'>
            <BsCollectionPlay size='20px' />
            <span >Subscriptions</span>
          </li>
          <li className='flex flex-col gap-2 items-center py-4'>
            <MdOutlineVideoLibrary size='20px' />
            <span>Library</span>
          </li>
        </ul>
      </div>
    </div >
  );
  return (
    <div className="w-68 font-semibold text-base px-6 bg-black h-full  text-white ">
      <div>
        <ul className='  pb-4 border-b-[.2px] border-gray-600  mb-4'>
          <li className='flex items-center gap-6 py-2 rounded'>
            <AiFillHome />
            <span><Link to='/'>Home</Link></span>
          </li>
          <li className='flex items-center gap-8 py-2 rounded'>
            <PiPlayBold />
            <span>Shorts</span>
          </li>
          <li className='flex items-center gap-8 py-2 rounded'>
            <BsCollectionPlay />
            <span >Subscriptions</span>
          </li>
        </ul>

        <ul className='   pb-4 border-b-[.2px] border-gray-600'>
          <li className='flex items-center gap-8 py-2 rounded'>
            <MdOutlineVideoLibrary />
            <span>Library</span>
          </li>
          <li className='flex items-center gap-8 py-2 rounded'>
            <PiClockCounterClockwiseBold />
            <span>History</span>
          </li>
          <li className='flex items-center gap-8 py-2 rounded'>
            <AiOutlinePlaySquare />
            <span >Your videos</span>
          </li>
          <li className='flex items-center gap-8 py-2 rounded'>
            <AiOutlineClockCircle />
            <span >Watch later</span>
          </li>
          <li className='flex items-center gap-8 py-2 rounded'>
            <BiLike />
            <span >Liked videos</span>
          </li>
        </ul>
      </div>

      <h1 className='my-1 mt-1.5 '>Explore</h1>
      <div className='pb-4'>
        <ul className='  pb-4 border-b-[.2px] border-gray-600'>
          <li className='flex items-center gap-8 py-2   rounded'>
            <RiFireLine />
            <span>Trending</span>
          </li>
          <li className='flex items-center gap-8 py-2 rounded'>
            <HiOutlineShoppingBag />
            <span>Shopping</span>
          </li>
          <li className='flex items-center gap-8 py-2 rounded'>
            <BsMusicNote />
            <span >Music</span>
          </li>
          <li className='flex items-center gap-8 py-2  rounded'>
            <MdOutlineMovie />
            <span >Movies</span>
          </li>
          <li className='flex items-center gap-8 py-2  rounded'>
            <HiOutlineSignal />
            <span >Live</span>
          </li>
          <li className='flex items-center gap-8 py-2  rounded'>
            <SiYoutubegaming />
            <span >Gaming</span>
          </li>
          <li className='flex items-center gap-8 py-2  rounded'>
            <ImNewspaper />
            <span >News</span>
          </li>
          <li className='flex items-center gap-8 py-2  rounded'>
            <GoTrophy />
            <span >Sports</span>
          </li>
          <li className='flex items-center gap-8 py-2  rounded'>
            <BsLightbulb />
            <span >Learning</span>
          </li>
          <li className='flex items-center gap-8 py-2  rounded'>
            <GiLoincloth />
            <span >Fashion & Beauty</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
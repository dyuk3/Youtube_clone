import { AiOutlineMenu } from 'react-icons/ai';
import { CiSearch } from 'react-icons/ci';
import { TfiVideoCamera } from 'react-icons/tfi';
import { BsBell, BsMic } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import Youtube_logo from '../assets/youtube.png';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../feature/appSlice';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheSearchResults } from '../feature/searchSlice';

const Navbar = () => {

  const [searchQuery, setSearchQuery] = useState('');

  const [searchData, setSearchData] = useState([]);

  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();

  const searchCache = useSelector(store => store.search);

  useEffect(() => {

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setShowSuggestions(searchCache[searchQuery]);
      } else {
        fetchSearchSuggestions();
      }

    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const fetchSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();

    setSearchData(json[1]);

    dispatch(cacheSearchResults({
      [searchQuery]: json[1]
    }));
  };

  const handleMenu = () => {
    dispatch(toggleMenu());
  };

  // console.log(searchQuery);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  console.log(searchQuery);

  return (
    <div className="flex h-16 w-full bg-black justify-between items-center pr-8 text-white  z-100 fixed top-0 left-0 ">
      <div className='flex items-center p-6 gap-4'>
        <AiOutlineMenu size='1.4rem' className='cursor-pointer' onClick={() => handleMenu()} />
        <Link to='/'>
          <div>
            <img className='h-6 ' src={Youtube_logo} alt="" />
          </div>
        </Link>
      </div>
      <div className='flex items-center w-[700px] relative '>
        <form action="" className='px-4 border-r-0  rounded-l-full border-[0.3px] border-gray-700 w-full'>
          <input type="text" placeholder='Search' name='search' onFocus={() => setShowSuggestions(true)} onBlur={() => setShowSuggestions(false)} onChange={handleSearch} className='w-full px-2 py-2 outline-none bg-transparent ' />
        </form>
        <button className='bg-gray-800 border-l-0 border rounded-r-full px-8 py-2.5 border-gray-700  ' ><CiSearch size='20px' /></button>
        {(searchData.length > 0 && showSuggestions) &&

          <div className='absolute bg-gray-600 top-[3rem] left-0  px-4 py-2 w-[34rem] rounded-lg'>

            <ul>
              {searchData.map((result, index) => (
                <li key={index} className='flex hover:bg-gray-rgba items-center gap-4 my-1'> <CiSearch></CiSearch> {result}</li>
              ))}
            </ul>
          </div>
        }
        <div className='ml-4 h-10 w-12 rounded-[50%] bg-gray-800 flex items-center justify-center cursor-pointer'>
          <BsMic size='20px' />
        </div>
      </div>
      <div className='flex items-center gap-8'>
        <TfiVideoCamera size="22px" />
        <BsBell size="22px" />
        <BiUserCircle size="22px" />
      </div>
    </div>
  );
};

export default Navbar;
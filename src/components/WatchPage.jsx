import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../feature/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
  const dispatch = useDispatch();

  const [searchParms] = useSearchParams();
  console.log(searchParms.get('v'));

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div>
      <iframe
        width='1060'
        height='615'
        src={'https://www.youtube.com/embed/' + searchParms.get('v')}
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      >

      </iframe>
    </div>
  );
};

export default WatchPage;

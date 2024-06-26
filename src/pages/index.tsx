import React from 'react';
import axios from 'axios';

import VideoCard from '../components/VideoCard';
import { Video } from '../../types';
import NoResults from '../components/NoResults';

interface IProps {
  videos: Video[];
}

const Home = ({ videos }: IProps) => {
  return (
    <div className='flex flex-col gap-10 videos h-full'>
      {videos?.length 
        ? videos?.map((video: Video) => (
          <VideoCard post={video} key={video._id} />
        )) 
        : <NoResults text={`No Videos`} />}
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {

  let response = await axios.get(`http://localhost:3000/api/post`);

   
  return {
    props: { videos: response.data },
  };
};
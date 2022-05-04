
import React, { useEffect, useState } from 'react';

import PostCard from '../posts/card/Postcards';
import usePost from '../../apiHooks/usePost';

import { useParams } from 'react-router-dom';

import Image from '../image/Image';

import "./PostPage.scss";



//const id = 1;



const PostPage: React.FC = () => {

  const { id } = useParams();
  const { data, loading, error } = usePost(id);



  if (loading) {
    return (
      <div>
        Loading...
      </div>
    )
  } else if (error) {
    return (
      <div>
        Error...
      </div>
    )
  }

  if (!data) {
    return null;
  }

  return (
    <div className='post-card-conteiner'>
      <Image src={data.image} />
      <div className='title'>
        {data.title}
      </div>
      <div className='text'>
        {data.text}
      </div>
      <div className='date'>
        {data.date}
      </div>
    </div>
  )

}

export default PostPage;
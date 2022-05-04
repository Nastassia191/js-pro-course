import React, { useState } from 'react';
//import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PostsType from '../../../types/PostsType';
import Image from '../../image/Image';

import './PostCards.scss'





type PropsType = {
  data: PostsType
}



const PostCard: React.FC<PropsType> = ({ data }) => {

  const navigate = useNavigate();
  // способ перехода через js
  const handelClick = () => {
    navigate(`/posts/${data.id}`);
  }

  return (
    <div className='post-card-conteiner'>
      <Image src={data.image} />
      <Link to={`/posts/${data.id}`}>
        <div className='title'>
          {data.title}
        </div>

      </Link>

      {/* <div className='text'>
        {data.text}
      </div> */}
      <div className='date' onClick={handelClick}>
        {data.date}
      </div>
    </div>

  )
}

export default PostCard;
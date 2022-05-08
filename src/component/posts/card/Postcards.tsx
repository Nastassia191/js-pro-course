import React, { useState } from 'react';
import { IconButton } from '@mui/material';
//import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PostsType from '../../../types/PostsType';
import Image from '../../image/Image';
//import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';


import './PostCards.scss'
import { useActions } from '../../hooks/useActions';
import { useSelector } from '../../hooks/useSelector';
import { PostGrade } from '../../../enums/PostGrade';






type PropsType = {
  data: PostsType
}



const PostCard: React.FC<PropsType> = ({ data }) => {

  const navigate = useNavigate();
  const { likePost, dislikePost } = useActions();
  // const likes = useSelector(state => state.posts.likes);
  // const dislikes = useSelector(state => state.posts.dislikes);
  // const isLike = likes.includes(data.id);
  // const isDislike = dislikes.includes(data.id);

  const grades = useSelector(state => state.posts.grades);
  //const dislikes = useSelector(state => state.posts.dislikes);
  const isLike = grades[data.id] === PostGrade.like;
  const isDislike = grades[data.id] === PostGrade.dislike;

  // способ перехода через js
  const handelClick = () => {
    navigate(`/posts/${data.id}`);
  }
  const handleClickLike = () => {
    likePost(data.id);
  }
  const handleClickDislike = () => {
    dislikePost(data.id);
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
      <div className="actions-line">
        <div className='date' onClick={handelClick}>
          {data.date}
        </div>
        <IconButton onClick={handleClickLike}>
          < ThumbUpAltIcon className={`icon ${isLike ? "_liked" : ""}`} />
        </IconButton>
        <IconButton onClick={handleClickDislike}>
          <ThumbDownAltIcon className={`icon ${isDislike ? "_disliked" : ""}`} />
        </IconButton>
      </div>
    </div>

  )
}

export default PostCard;
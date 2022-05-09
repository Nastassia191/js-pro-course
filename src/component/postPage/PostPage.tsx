
import React, { useEffect, useState } from 'react';

import PostCard from '../postsPage/card/Postcards';
import usePost from '../../apiHooks/usePost';

import { useParams } from 'react-router-dom';

import Image from '../image/Image';
import PostsType from '../../types/PostsType';

import "./PostPage.scss";

import { useSelector } from '../hooks/useSelector';
import { useActions } from '../hooks/useActions';






const PostPage: React.FC = () => {

  const { id } = useParams();

  const data = useSelector(state => state.post.data);
  const loading = useSelector(state => state.post.loading);
  const error = useSelector(state => state.post.error);

  const { fetchPost } = useActions();


  useEffect(() => {
    fetchPost(id);
  }, [id]);




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
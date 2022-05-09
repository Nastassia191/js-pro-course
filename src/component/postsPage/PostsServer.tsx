import React, { useEffect, useReducer } from 'react';
// //import React from 'react';
import PostCard from './card/Postcards';
import usePosts from '../../apiHooks/usePosts';
import PostsFilter from './PostsFilter';
import { initialState, PostsFilterRuducer } from './PostsFilterRuducer';


import { useSelector } from '../hooks/useSelector';
import { useActions } from '../hooks/useActions';

type PropsType = {};



const PostsServer: React.FC<PropsType> = () => {

  const [state, dispatch] = useReducer(PostsFilterRuducer, initialState);

  const { fetchPosts } = useActions();


  //const { data, loading, error } = usePosts(state);
  const data = useSelector(state => state.posts.data);
  const loading = useSelector(state => state.posts.loading);
  const error = useSelector(state => state.posts.error);

  const count = useSelector(state => state.posts.count);
  const marks = useSelector(state => state.posts.marks);
  const filtredData = data.filter(item => marks.includes(item.id));


  useEffect(() => {
    fetchPosts(state);
  }, [state]);

  return (
    <div className='posts-container'>

      <PostsFilter
        count={count}
        state={state}
        dispatch={dispatch}
      />

      <div className='cards'>
        {data.map((item) => <PostCard key={item.id} data={item} />)}
      </div>
      {loading && "Loading..."}
      {error}
    </div>
  )
}


export default PostsServer;
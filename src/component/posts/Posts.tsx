import React, { useReducer } from 'react';
// //import React from 'react';
import PostCard from './card/Postcards';
import usePosts from '../../apiHooks/usePosts';
import PostsFilter from './PostsFilter';
import { initialState, PostsFilterRuducer } from './PostsFilterRuducer';

import './Posts.scss';

type PropsType = {};



const Posts: React.FC<PropsType> = () => {

  const [state, dispatch] = useReducer(PostsFilterRuducer, initialState);

  const { data, loading, error } = usePosts(state);



  return (
    <div className='posts-container'>

      <PostsFilter
        count={data.count}
        state={state}
        dispatch={dispatch}
      />

      <div className='cards'>
        {data.results.map((item) => <PostCard key={item.id} data={item} />)}
      </div>
      {loading && "Loading..."}
      {error && "Error ("}
    </div>
  )
}


export default Posts;
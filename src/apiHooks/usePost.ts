import React, { useEffect, useState } from 'react';
import PostsType from '../types/PostsType';
import useRequest from './useRequest';

const URL = "https://studapi.teachmeskills.by/blog/posts/";


const usePost = (id: string | undefined) => useRequest<PostsType | undefined>(undefined, `${URL}/${id}`);

export default usePost;
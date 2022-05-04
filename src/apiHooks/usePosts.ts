import React, { useEffect, useState } from 'react';
import PostsFilterTypes from '../component/posts/PostsFilterTypes';
import PostsType from '../types/PostsType';
import useRequest from './useRequest';

const URL = "https://studapi.teachmeskills.by/blog/posts/";

type RresponseType = {
  count: number,
  next?: string,
  previous?: string,
  results: PostsType[]

}

const defValue: RresponseType = {
  count: 0,
  results: []
}

const usePosts = ({ page, limit, ordering, author, lesson_num }: PostsFilterTypes) => {

  const offset = limit * (page - 1);

  let url = `${URL}?limit=${limit}&offset=${offset}&ordering=${ordering}`;

  if (author) {
    url += `&author=${author}`;
  }

  if (lesson_num) {
    url += `&lesson_num=${lesson_num}`;
  }

  return useRequest<RresponseType>(defValue, url);

}

export default usePosts;
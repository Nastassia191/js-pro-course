import React from 'react';
import Pagination from '@mui/material/Pagination';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import PostsFilterTypes, { PostsOrder } from './PostsFilterTypes';
import TextField from '../ui/textField/TextField';
import { setLimit, setOrdering, setPage, setAuthor, setLesson } from './PostsFilterActionCreators';


//import './PostsPage .scss';

type PropsType = {
  count: number,

  dispatch: any,
  state: PostsFilterTypes
};


const PostsFilter: React.FC<PropsType> = ({ count, state, dispatch }) => {


  const updateAuthor = (value: string) => {
    dispatch(setAuthor(value));
  }

  const updateLesson = (value: string) => {
    dispatch(setLesson(value));
  }

  const handleChangeOrdering = (event: SelectChangeEvent) => {
    dispatch(setOrdering(event.target.value as PostsOrder));

    // setFilter((prevValue) => ({
    //   ...prevValue,
    //   ordering: event.target.value as PostsOrder
    // }));
  }

  const handleChangeLimit = (event: SelectChangeEvent) => {
    // setFilter((prevValue) => ({
    //   ...prevValue,
    //   page: 1,
    //   limit: +event.target.value
    // }));
    dispatch(setLimit(+event.target.value));
  }



  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setPage(value));
    // setFilter((prevValue) => ({
    //   ...prevValue,
    //   page: value,
    // }));
  }



  return (
    <div className='posts-filter'>

      <TextField
        label="Author"
        value={state.author?.toString()}
        setValue={updateAuthor}
      />
      <TextField
        label="Lesson"
        value={state.lesson_num?.toString()}
        setValue={updateLesson}
      />

      <Select
        label="Items per page"
        value={state.limit.toString()}
        onChange={handleChangeLimit}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>

      <Select
        value={state.ordering}
        onChange={handleChangeOrdering}
      >
        <MenuItem value={PostsOrder.idAsc}>ASC id</MenuItem>
        <MenuItem value={PostsOrder.idDesc}>DESC id</MenuItem>
        <MenuItem value={PostsOrder.dateAsc}>ASC date</MenuItem>
        <MenuItem value={PostsOrder.dateDesc}>DESC date</MenuItem>
      </Select>



      <Pagination
        className='pagination'
        page={state.page}
        onChange={handleChangePage}
        count={Math.ceil(count / state.limit)} // округляет всегда в большую сторону т.е. 6.1=7
      />

    </div>
  )
}


export default PostsFilter;
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { ToDoList } from 'components/toDoList/ToDoList';
import { Inputs } from 'components/inputs/Inputs';
import { addToDo } from 'store/ToDoSlice';
import { CardWrapper, AppStyled, LeftSide, Title, ImgStyled } from 'components/styles/App.styled';
import Picture from './assets/images/21077233.png'

const App = () => {

  const [text, setText] = useState('');
  const [priority, setPriority] = useState('');
  const dispatch = useDispatch();

  const addTask = () => {
    if (text.trim() !== '') {
      dispatch(addToDo({ text, priority }));
      setText('');
    }
  };



  return (
    <AppStyled>
      <LeftSide>
        <CardWrapper className='cardWrapper'>
          <Title>Shoping List</Title>
          <Inputs text={text}
            priority={priority}
            handleInput={setText}
            handleSubmit={addTask}
            handlePriority={setPriority} />
          <ToDoList />
        </CardWrapper>
      </LeftSide>
      <ImgStyled src={Picture} alt='vector' />
    </AppStyled>

  );
};


export default App;

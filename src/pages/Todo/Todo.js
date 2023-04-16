import styled from "styled-components";
import BgImage from "assets/main_bg1.jpg";
import ListBG from "assets/bg2.jpg";
import PinImg from "assets/pushpin.svg";
import { useState } from "react";

const Todo = () => {
  return (
    <Container>
      <Board>
        <Pin />
        <TodoList>
          <Li>
            <CheckBox type="checkbox" id="cbInstead" />
            <Schedule>Todo1</Schedule>
          </Li>
        </TodoList>
      </Board>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-image: url(${BgImage});
  background-position: top;
  background-size: cover;
  position: relative;
  
  ::before {
    content: "";
    background-color: #fff;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    opacity: 0.45;
`;

const Board = styled.div`
  position: relative;
  background-image: url(${ListBG});
  width: 500px;
  height: 700px;
  border-radius: 50px;
  box-shadow: -7px 7px 10px 5px gray;
`;

const Pin = styled.div`
  position: relative;
  top: 2%;
  left: 32%;
  background-image: url(${PinImg});
  background-size: cover;
  background-position: top;
  width: 130px;
  height: 100px;
`;

const TodoList = styled.div``;

const Li = styled.li`
  list-style: none;
`;

const CheckBox = styled.input`
  margin: 20px 0 0 40px;
  width: 20px;
  height: 20px;
`;

const Label = styled.label`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid black;
  border-radius: 50%;
  cursor: pointer;

  :visited {
    background-color: black;
  }
`;

const Schedule = styled.span`
  padding-left: 5px;
`;
export default Todo;

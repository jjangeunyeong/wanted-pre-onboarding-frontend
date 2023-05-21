import styled from "styled-components";
import BgImage from "assets/main_bg1.jpg";
import ListBG from "assets/bg2.jpg";
import PinImg from "assets/pushpin.svg";
import { useState, useEffect } from "react";
import { authGet, authPost, put, del as deleteAPI } from "API";
import { useNavigate } from "react-router-dom";
import React from "react";

const Todo = () => {
  const [scheduleInput, setScheduleInput] = useState("");
  const [modifySchedule, setModifySchedule] = useState("");
  const [getTodos, setTodos] = useState([]);
  const navigate = useNavigate();
  const handleEdited = (params, e) => {
    e.preventDefault();

    const type = params.split(" ")[0];
    const id = params.split(" ")[1];

    if (type === "modify") {
      //수정 버튼 클릭시
      const modifyTodos = getTodos.map((e) => {
        let tmp = { ...e };
        if (String(e.id) === String(id)) {
          tmp = { ...e, isEdited: false };
        }
        return tmp;
      });
      setTodos(modifyTodos);
    } else if (type === "cancel") {
      //취소 버튼 클릭시
      setModifySchedule("");
      const modifyTodos = getTodos.map((e) => {
        let tmp = { ...e };
        if (String(e.id) === String(id)) {
          tmp = { ...e, isEdited: true };
        }
        return tmp;
      });
      setTodos(modifyTodos);
    }
  };

  const handleCheckbox = (str) => {
    const id = str.split("&&")[0];
    const todo = str.split("&&")[1];
    const preChecked = str.split("&&")[2];

    if (preChecked === "true") {
      updateTodosAPI(id, todo, false);
      const checkedTodos = getTodos.map((m) => {
        let tmp = { ...m };
        if (String(m.id) === String(id)) {
          tmp = { ...m, isCompleted: false };
        }
        return tmp;
      });
      setTodos(checkedTodos);
    } else {
      updateTodosAPI(id, todo, true);
      const checkedTodos = getTodos.map((m) => {
        let tmp = { ...m };
        if (String(m.id) === String(id)) {
          tmp = { ...m, isCompleted: true };
        }
        return tmp;
      });
      setTodos(checkedTodos);
    }
  };
  const successModified = async (str) => {
    const id = str.split("&&&")[0];
    const curTodo = str.split("&&&")[1];
    let isChecked = true;
    console.log(curTodo);
    if (modifySchedule == "") {
      //setModifySchedule 변경안됨
      //setModifySchedule(curTodo);
      getTodosAPI();
      return;
    }
    console.log(curTodo);

    const modifyTodos = getTodos.map((e) => {
      let tmp = { ...e };
      if (String(e.id) === String(id)) {
        tmp = { ...e, isEdited: true, todo: modifySchedule };
        isChecked = tmp.isCompleted;
      }
      return tmp;
    });

    updateTodosAPI(id, modifySchedule, isChecked);
    setTodos(modifyTodos);
    setModifySchedule("");
  };

  const getTodosAPI = async () => {
    const res = await authGet("/todos");
    const addEditTodos = res.data.map((d) => {
      const newTodo = { ...d, isEdited: true };
      return newTodo;
    });
    setTodos(addEditTodos);
  };

  const updateTodosAPI = async (id, todo, isCompleted) => {
    const body = { todo: todo, isCompleted: isCompleted };
    const res = await put(`/todos/${id}`, body);
    console.log(res.data.isCompleted);
  };

  useEffect(() => {
    getTodosAPI();
    !localStorage.getItem("loginToken") && navigate("/signin");
  }, []);

  const addTodo = async () => {
    const bodyData = { todo: scheduleInput };
    const res = await authPost("/todos", bodyData);
    setTodos((todo) => {
      const newTodos = [...todo, { ...res.data, isEdited: true }];
      return newTodos;
    });
    setScheduleInput("");
  };

  const handleDeleteBtn = async (id) => {
    await deleteAPI(`/todos/${id}`);
    const deleteTodos = [...getTodos];
    getTodos.forEach((todo, i) => {
      if (todo.id === id) {
        deleteTodos.splice(i, 1);
      }
    });
    setTodos(deleteTodos);
  };

  return (
    <Container>
      <Board>
        <Pin />
        <NewTodo
          type="text"
          data-testid="new-todo-input"
          value={scheduleInput}
          onChange={(e) => setScheduleInput(e.target.value)}
        />
        <AddButton data-testid="new-todo-add-button" onClick={addTodo}>
          추가
        </AddButton>
        {getTodos.map((todo, i) => {
          return (
            <Li key={`${todo}-${i}`}>
              <CheckBox
                type="checkbox"
                id="cbInstead"
                onChange={(e) =>
                  handleCheckbox(
                    `${todo.id}&&${todo.todo}&&${todo.isCompleted}`,
                    e
                  )
                }
                checked={todo.isCompleted}
              />
              {todo.isEdited ? (
                <>
                  <GetSchedule>{todo.todo}</GetSchedule>
                  <Btn
                    data-testid="modify-button"
                    onClick={(e) => handleEdited(`modify ${todo.id}`, e)}
                  >
                    수정
                  </Btn>
                  <Btn
                    delete
                    data-testid="delete-button"
                    onClick={(e) => handleDeleteBtn(todo.id, e)}
                  >
                    삭제
                  </Btn>
                </>
              ) : (
                <ModifiedGroup>
                  <Schedule
                    type="text"
                    data-testid="modify-input"
                    defaultValue={todo.todo}
                    onChange={(e) => setModifySchedule(e.target.value)}
                  />
                  <Btn
                    success
                    data-testid="submit-button"
                    onClick={(e) =>
                      successModified(`${todo.id}&&&${todo.todo}`, e)
                    }
                  >
                    제출
                  </Btn>
                  <Btn
                    data-testid="cancel-button"
                    onClick={(e) => handleEdited(`cancel ${todo.id}`, e)}
                  >
                    취소
                  </Btn>
                </ModifiedGroup>
              )}
            </Li>
          );
        })}
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

const NewTodo = styled.input`
  font-size: 16px;
  border: 2px solid green;
  border-radius: 10px;
  width: 340px;
  height: 32px;
  padding-left: 7px;
  margin: 30px 10px 20px 40px;
`;

const AddButton = styled.button`
  position: absolute;
  top: 130px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  background-color: #2c5ba8;
  border-radius: 10px;
  width: 70px;
  height: 34px;
`;

const Li = styled.li`
  display: flex;
  flex-direction: row;
  list-style: none;
`;

const CheckBox = styled.input`
  margin: 20px 0 0 40px;
  width: 20px;
  height: 20px;
`;

const GetSchedule = styled.span`
  font-size: 16px;
  margin-top: 21px;
  padding-left: 10px;
  width: 295px;
  height: 32px;
`;

const Schedule = styled.input`
  font-size: 16px;
  margin-top: 15px;
  padding-left: 10px;
  width: 295px;
  height: 32px;
`;

const Btn = styled.button`
  font-size: 14px;
  font-weight: bold;
  color: white;
  background-color: ${(props) =>
    props.delete ? "#a83622" : props.success ? "green" : "gray"};
  border-radius: 10px;
  width: 50px;
  height: 34px;

  margin-top: 15px;
  + button {
    margin-left: 5px;
  }
`;

const ModifiedGroup = styled.div`
  display: flex;
`;

export default Todo;

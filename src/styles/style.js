import Background from "assets/main_bg1.jpg";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${Background});
  width: 100vw;
  height: 100vh;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ login }) => (login ? "440px" : "450px")};
  height: ${({ login }) => (login ? "565px" : "600px")};
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 25px;
`;

export const Title = styled.h1`
  color: #61777f;
  font-size: 50px;
  font-weight: bold;

  margin: 70px 0;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  + div {
    margin-top: 20px;
  }
`;

export const Input = styled.input`
  border: 1px solid lightgray;
  border-radius: 10px;
  color: gray;
  font-size: 15px;
  padding: 10px;
  width: 320px;
  height: 40px;
  cursor: text;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 10px 5px;
`;

export const ValidText = styled.p`
  margin-left: 7px;
  margin-top: 7px;
  font-size: 12px;
  color: ${({ available }) => (available ? "#575654" : "red")};
`;

export const Button = styled.button`
  color: white;
  font-size: 15px;
  font-weight: bold;
  background-color: ${({ disabled }) => (disabled ? "#cfcfcf" : "#61777f")};
  opacity: 0.9;
  border-radius: 10px;
  width: 320px;
  height: 40px;
  margin-top: 30px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

export const CheckGroup = styled.div`
  margin-top: 50px;
  width: 320px;
`;

export const CheckMessage = styled.div`
  float: left;
  margin-top: 3px;
`;

export const CheckLink = styled.button`
  color: orange;
  margin-left: 5px;
  font-size: 15px;
  font-weight: bold;
  text-decoration: underline;
`;

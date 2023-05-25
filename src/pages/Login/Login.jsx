import {
  Container,
  Box,
  Title,
  InputGroup,
  Label,
  Input,
  Button,
  CheckMessage,
  CheckGroup,
  CheckLink,
} from "styles/style.js";
import NavBar from "components/NavBar";
import { validateEmail, validatePW } from "util/validate";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { post } from "API";
import React from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pw, setPW] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.getItem("loginToken") && navigate("/todo");
  }, []);

  const clickedLogin = async (e) => {
    e.preventDefault();
    const bodyData = { email, password: pw };
    const res = await post("/auth/signin", bodyData);

    if (res.status === 200) {
      localStorage.setItem("loginToken", res.data.access_token);
      navigate("/todo");
    } else {
      window.alert(
        "아이디 또는 비밀번호를 잘못 입력했습니다.\n입력하신 내용을 다시 확인해주세요."
      );
    }
  };

  return (
    <Container>
      <NavBar />
      <Box login>
        <Title>Login</Title>
        <InputGroup>
          <Label for="input-email">Email</Label>
          <Input
            type="email"
            placeholder="hongguildong@todo.com"
            id="input-email"
            data-testid="email-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <Label for="input-pw">Password</Label>
          <Input
            type="password"
            placeholder="********"
            id="input-pw"
            data-testid="password-input"
            value={pw}
            onChange={(e) => setPW(e.target.value)}
          />
        </InputGroup>
        <Button
          disabled={validateEmail(email) && validatePW(pw) ? false : true}
          data-testid="signin-button"
          onClick={(e) => clickedLogin(e)}
        >
          로그인
        </Button>
        <CheckGroup>
          <CheckMessage>아직 회원이 아니신가요?</CheckMessage>
          <Link to="/signup">
            <CheckLink>회원가입</CheckLink>
          </Link>
        </CheckGroup>
      </Box>
    </Container>
  );
};

export default Login;

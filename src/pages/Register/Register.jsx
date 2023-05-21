import {
  Container,
  Box,
  Title,
  InputGroup,
  Label,
  Input,
  ValidText,
  Button,
  CheckMessage,
  CheckGroup,
  CheckLink,
} from "styles/style.js";
import { validateEmail, validatePW } from "util/validate";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { post } from "API";
import React from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [pw, setPW] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.getItem("loginToken") && navigate("/todo");
  }, []);

  const handleSignup = async () => {
    const bodyData = { email: String(email), password: String(pw) };
    const res = await post("/auth/signup", bodyData);

    if (res.status === 201) {
      navigate("/signin");
    } else {
      window.alert("중복되는 이메일입니다.");
    }
  };

  return (
    <Container>
      <Box>
        <Title>Register</Title>
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
          <ValidText available={validateEmail(email)}>
            {validateEmail(email)
              ? "사용 가능한 이메일입니다."
              : "이메일 형식을 확인해 주세요."}
          </ValidText>
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
          <ValidText available={validatePW(pw)}>
            {validatePW(pw)
              ? "사용 가능한 비밀번호입니다."
              : "8자 이상 입력해 주세요."}
          </ValidText>
        </InputGroup>
        <Button
          data-testid="signup-button"
          disabled={validateEmail(email) && validatePW(pw) ? false : true}
          onClick={(e) => handleSignup(e)}
        >
          회원가입
        </Button>
        <CheckGroup>
          <CheckMessage>이미 회원이신가요?</CheckMessage>
          <Link to="/signin">
            <CheckLink>로그인</CheckLink>
          </Link>
        </CheckGroup>
      </Box>
    </Container>
  );
};

export default Register;

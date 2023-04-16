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
import { validateEmail, validatePW } from "util/validate";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pw, setPW] = useState("");
  const navigate = useNavigate();

  const clickedLogin = (e) => {
    e.preventDefault();

    navigate("/todo");
  };

  return (
    <Container>
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

import { Link } from "react-router-dom";
import styled from "styled-components";
import BgImage from "assets/main_bg1.jpg";
import Logo from "assets/logo_white.png";

const Main = () => {
  return (
    <Container>
      <Card>
        <Title />
        <BtnGroup>
          <Link to="/signup">
            <Btn>아직 회원이 아니신가요?</Btn>
          </Link>
          <Link to="/signin">
            <Btn>로그인하러 가기</Btn>
          </Link>
        </BtnGroup>
      </Card>
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
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  background-color: rgba(0, 0, 0, 0.25);
  width: 950px;
  height: 350px;
`;

const Title = styled.div`
  margin: 100px auto;
  background-image: url(${Logo});
  background-size: cover;
  width: 780px;
  height: 55px;
`;

const BtnGroup = styled.div`
  display: flex;
  justify-content: center;
`;

const Btn = styled.button`
  font-size: 16px;
  font-weight: 600;
  text-decoration: underline;
  margin: 0 15px;
`;

export default Main;

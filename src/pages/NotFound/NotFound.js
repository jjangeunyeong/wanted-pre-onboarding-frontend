import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      존재하지 않는 페이지입니다.
      <Link to="/signin">
        <button>로그인하러 가기</button>
      </Link>
    </div>
  );
};

export default NotFound;

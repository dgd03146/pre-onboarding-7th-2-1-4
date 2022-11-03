import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Back } from "../../../public/assets/back.svg";

interface HeaderProps {
  page?: boolean;
}

export const Header = ({ page }: HeaderProps) => {
  const title = page ? "차량상세" : "전체차량";
  const navigate = useNavigate();

  return (
    <Container page={page}>
      {page && (
        <button
          className="back"
          onClick={() => {
            navigate(-1);
          }}
        >
          <Back />
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 12H5"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 19L5 12L12 5"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
      <span>{title}</span>
      {page && <button className="unvisible" />}
    </Container>
  );
};

const Container = styled.header<{ page: boolean | undefined }>`
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 21px;
  padding: 20px 0;

  display: flex;

  span {
    width: ${(props) => (props.page ? "50%" : "100%")};
    display: flex;
    justify-content: center;
  }

  button.back {
    width: 25%;
    display: flex;
    justify-content: flex-start;
    padding-left: 20px;
  }
  button.unvisible {
    visibility: hidden;
    width: 25%;
    display: flex;
    justify-content: flex-end;
  }
`;

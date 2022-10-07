import styled from "styled-components";

export const SCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 20px;
  .card-name {
    font-weight: bold;
    text-align: center;
  }
  .img-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 350px;
    width: 250px;

    img {
      max-height: 100%;
      max-width: 100%;
    }
  }
`;

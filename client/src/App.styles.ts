import styled from "styled-components";

export const SSearchHeader = styled.div`
  background: pink;
  border-radius: 4px;
  padding: 10px;
  margin: 20px;
`;

export const SCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;

  background: lime;
  border-radius: 4px;
  padding: 10px;
  margin: 20px;

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

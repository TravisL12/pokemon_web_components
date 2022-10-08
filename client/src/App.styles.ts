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
`;

export const SCard = styled.div`
  background: #83ff83;
  border-radius: 4px;
  padding: 10px;
  width: 250px;

  .img-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;

    img {
      max-height: 100%;
      max-width: 100%;
    }
  }
`;

export const SCardInfo = styled.div`
  .flavor-text {
    font-size: 13px;
  }
`;

export const SCardTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;

  .series-logo {
    width: 60px;
    height: 30px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    img {
      max-height: 100%;
      max-width: 100%;
    }
  }
  .card-name {
    font-weight: bold;
  }
`;

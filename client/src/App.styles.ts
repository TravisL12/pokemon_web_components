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

export const SCard = styled.div<{ bgUrl: string }>`
  position: relative;
  border-radius: 4px;
  padding: 10px;
  width: 350px;

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

export const SCardBg = styled.div<{ bgUrl: string }>`
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.15;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  z-index: -1;
  background-image: url(${(props) => props.bgUrl});
`;
export const SSearch = styled.div`
  display: flex;
  gap: 10px;
`;
export const SCardInfo = styled.div`
  background: white;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin: 10px 30px;
  padding: 4px;
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

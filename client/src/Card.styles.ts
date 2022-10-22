import styled from "styled-components";

export const SCard = styled.div<{ bgUrl: string }>`
  position: relative;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 350px;
  border: 1px solid gray;
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

const borderBg = `rgba(0, 0, 0, 0.1)`;
export const SCardTitle = styled.div`
  background: ${borderBg};
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  gap: 10px;
  height: 40px;

  .series-logo {
    width: 80px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    img {
      max-height: 100%;
      max-width: 100%;
    }
  }
  .card-name {
    font-weight: bold;
  }
`;

export const SCardInfo = styled.div`
  background: ${borderBg};
  padding: 10px;
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
  .flavor-text {
    font-size: 13px;
  }
`;

export const SCardImgBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  height: 300px;

  img {
    max-height: 100%;
    max-width: 100%;
  }
`;

export const SDetailContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 50px;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
`;

export const SDetailInner = styled.div`
  background: lightblue;
  border-radius: 10px;
  height: 100%;
  width: 100%;
`;

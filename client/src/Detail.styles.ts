import styled from "styled-components";

export const SDetailContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
`;

export const SDetailInner = styled.div`
  margin: 50px auto;
  background: lightblue;
  border-radius: 10px;
  width: 1400px;
  max-width: 100%;
  height: 600px;
  max-height: 100%;
`;

export const SDetailBody = styled.div`
  display: flex;
  padding: 10px;
  flex: 1;
  height: 100%;
`;

export const SDetailImgBody = styled.div`
  flex: 1;
  img {
    max-height: 90%;
    max-width: 100%;
  }
`;

export const SDetailDataBody = styled.div`
  flex: 1;
`;

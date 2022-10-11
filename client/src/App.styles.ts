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
  gap: 40px;
`;

export const SSearch = styled.div`
  display: flex;
  gap: 10px;
`;

export const SCheckboxContainer = styled.div`
  overflow: auto;
  background: lightblue;
  height: 100%;
  width: 300px;

  .checkbox-option {
    display: flex;
    justify-content: space-between;
    padding: 2px 15px 2px 5px;

    &:nth-child(odd) {
      background: rgba(255, 255, 255, 0.4);
    }
  }
`;

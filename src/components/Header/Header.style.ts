import styled, { css } from "styled-components";

export const TopLine = styled.div`
  width: 100%;
  height: 20px;
  background: linear-gradient(90deg, #ff0000 0%, #f3ff00 54.17%, #ff8d0e 100%);
`;

export const FilterBox = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border-bottom: 2px solid #e5e5e5;
  @media screen and (max-width: 480px) {
    gap: 16px;
  }
`;

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #000000;
  gap: 16px;

  @media screen and (max-width: 480px) {
    gap: 8px;
    font-size: 12px;
  }
`;

interface ICheckBox {
  isSelected: boolean;
}

export const Checkbox = styled.div<ICheckBox>`
  width: 18px;
  height: 18px;
  border: 1px solid black;
  ${({ isSelected }) => {
    return isSelected
      ? css`
          background-color: red;
        `
      : null;
  }}
`;

export const SearchBox = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const SearchInput = styled.input`
  all: unset;
  width: 40%;
  height: 48px;
  background: #f2f2f2;
  font-size: 32px;
  color: #0a0400;
  text-align: center;
  padding: 0 24px;
`;

export const SearchButton = styled.button`
  all: unset;
  width: 80px;
  height: 48px;
  background: #ffcd93;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
`;

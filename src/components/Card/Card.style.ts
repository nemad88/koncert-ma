import styled, { css } from "styled-components";

interface ICardWrapper {
  variation: "normal" | "small";
}

export const CardWrapper = styled.div<ICardWrapper>`
  position: relative;
  ${({ variation }) =>
    variation === "normal"
      ? css`
          width: 380px;
          height: 260px;
        `
      : css`
          width: 280px;
          height: 180px;
        `};

  background-color: greenyellow;
  filter: drop-shadow(8px 8px 4px rgba(0, 0, 0, 0.25));

  img {
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: cover;
  }
`;

export const CardDetails = styled.div<ICardWrapper>`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  left: 0;
  bottom: 0;
  max-width: 70%;
  div {
    ${({ variation }) =>
      variation === "small"
        ? css`
            background-color: #ff5151;
            color: #ffffff;
          `
        : css`
            background-color: #faf477;
            color: #000000;
          `};

    padding: 8px;

    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
  }
`;

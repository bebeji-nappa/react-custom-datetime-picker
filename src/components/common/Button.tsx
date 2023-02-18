import styled from "styled-components";

export const Button = styled.button<Button>`
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
  color: ${props => props.secondary ? "#cccccc" : "#000000"};
`;

interface Button {
  readonly secondary?: boolean,
}

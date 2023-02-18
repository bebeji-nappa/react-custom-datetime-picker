import styled from "styled-components";

export const Wrapper = styled.div<Wrapper>`
  display: flex;
  align-items: center;
  border: solid 1px #f3f3f3;
  border-radius: 8px;
  width: fit-content;
  box-shadow: 3px 2px 8px rgba(0, 0, 0, .3);
  position: ${props => props.position ? props.position : "static"}
  top: ${props => props.top ? props.top : "auto"}
  left: ${props => props.left ? props.left : "auto"}
`;

interface Wrapper {
  readonly position?: string,
  readonly top?: number | string,
  readonly left?: number | string,
}

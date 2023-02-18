import styled from "styled-components";

export const Container = styled.div<Container>`
  display: flex;
  flex-direction: ${props => props.direction ? props.direction : "row"};
  align-items: ${props => props.alignItems ? props.alignItems : "flex-start"};
  justify-content: ${props => props.justidyContent ? props.justidyContent : "flex-start"};
  width: ${props => props.width ? props.width : "auto"};
`;

interface Container {
  readonly direction?: string,
  readonly alignItems?: string,
  readonly justidyContent?: string,
  readonly width?: string,
}

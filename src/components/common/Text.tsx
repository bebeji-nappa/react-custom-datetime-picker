import styled from "styled-components";

export const Text = styled.span`
  color: "#000000";
  text-align: center;
  padding: 5px;
  font-size: 12px;
`;

export const TimeText = styled(Text)`
  font-size: 40px;
  margin: 10px 0;
`;

export const TimeInput = styled.input<TimeInput>`
  border: none;
  outline-color: ${props => props.outlineColor ? props.outlineColor : "currentColor"};
  background: none;
  color: ${props => props.color ? props.color : "#000"};
  text-align: center;
  padding: 5px;
  font-size: 40px;
  margin: 10px 0;
  width: 60px;
`;

interface TimeInput {
  readonly outlineColor?: string,
  readonly color?: string,
}

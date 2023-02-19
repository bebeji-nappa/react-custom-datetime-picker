import styled from "styled-components";

export const DayText = styled.td<DayText>`
  color: ${props => props.secondary ? "#cccccc" : "#000000"};
  text-align: center;
  padding: 5px;
  width: 30px;
  height: 30px;
  font-size: 12px;
`;

export const CurrentDayText = styled(DayText)`
  color: ${props => props.textColor ? props.textColor : "#fff"};
  background: ${props => props.backgroundColor ? props.backgroundColor : "#ff4545"};
  border-radius: 20px;
`;

interface DayText {
  readonly secondary?: boolean,
  readonly backgroundColor?: string, 
  readonly textColor?: string,
}

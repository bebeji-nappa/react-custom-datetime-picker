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
  color: #fff;
  background: #ff4545;
  border-radius: 20px;
`;

interface DayText {
  readonly secondary?: boolean,
}

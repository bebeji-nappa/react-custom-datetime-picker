import * as React from "react";
import { useMemo, Dispatch, SetStateAction } from "react";
import { currentDate, DayOfWeeks, Days, yearData, monthData, dayData, prevDate, nextDate } from "../../modules/data";
import { DayText, CurrentDayText } from "./DayText";
import { WeekText } from "./WeekText";
import { Text } from "./Text";
import { Container } from "./Container";
import { Button } from "./Button";
import { Calendar } from "./Calendar";

export const DateField = (props: Props) => {
  const { date, year, month, day, setDate } = props;
  const days = useMemo(() => Days(date), [date]);
  const currentDay = useMemo(() => day, [day]);
  const currentYear = useMemo(() => year, [year]);
  const currentMonth = useMemo(() => month, [month]);
  return (
    <Container direction="column" alignItems="center" width="340">
      <Container justidyContent="space-around" alignItems="center" width="100%">
        <Button onClick={() => setDate(prevDate)}>{"<"}</Button>
        <Text>{`${currentYear}/${currentMonth}`}</Text>
        <Button onClick={() => setDate(nextDate)}>{">"}</Button>
      </Container>
      <Calendar 
        weeks={DayOfWeeks}
        weekText={(day: string, i: number) => <WeekText key={`week-${i}`}>{day}</WeekText>}
        days={days}
        dayText={(v, idx) => 
          <DayText key={`day-${idx}`} secondary={v.month !== "now"}>
            <Button secondary={v.month !== "now"}>{v.value}</Button>
          </DayText>
        }
        CurrentDayText={(v, idx) => 
          <CurrentDayText key={`day-${idx}`} secondary={v.month !== "now"}>
            {v.value}
          </CurrentDayText>
        }
        currentDay={
          currentYear === yearData(currentDate) && 
          currentMonth === monthData(currentDate) ? 
          Number(currentDay)
        : 
          0
        }
      />
    </Container>
  )
}

interface Props {
  date: string,
  year: string,
  month: string,
  day: string,
  setDate: Dispatch<SetStateAction<string>>,
}

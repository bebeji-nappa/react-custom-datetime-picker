import * as React from "react";
import { useMemo } from "react";
import { currentDate, DayOfWeeks, Days, year, month, day } from "../../modules/data";
import { DayText, CurrentDayText } from "./DayText";
import { WeekText } from "./WeekText";
import { Text } from "./Text";
import { Container } from "./Container";
import { Button } from "./Button";
import { Calendar } from "./Calendar";

export const DateField = () => {
  const days = useMemo(() => Days(currentDate), []);
  const currentDay = useMemo(() => Number(day(currentDate)), []);
  const currentYear = useMemo(() => Number(year(currentDate)), [])
  const currentMonth = useMemo(() => Number(month(currentDate)), [])
  return (
    <Container direction="column" alignItems="center" width="340">
      <Container justidyContent="space-around" alignItems="center" width="100%">
        <Button>{"<"}</Button>
        <Text>{`${currentYear}/${currentMonth}`}</Text>
        <Button>{">"}</Button>
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
        currentDay={currentDay}
      />
    </Container>
  )
}

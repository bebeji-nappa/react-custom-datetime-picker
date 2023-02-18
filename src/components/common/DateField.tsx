import * as React from "react";
import { useMemo, useState, useEffect, Dispatch, SetStateAction } from "react";
import { currentDate, DayOfWeeks, Days, yearData, monthData, prevDate, nextDate, clickDateHandle, dayData } from "../../modules/data";
import { DayText, CurrentDayText } from "./DayText";
import { WeekText } from "./WeekText";
import { Text } from "./Text";
import { Container } from "./Container";
import { Button } from "./Button";
import { Calendar } from "./Calendar";

export const DateField = (props: Props) => {
  const { date, year, month, day, setDate, isTime } = props;
  const [dateData, setDateData] = useState(date);
  const days = useMemo(() => Days(dateData), [dateData]);
  const currentDay = useMemo(() => dayData(dateData), [dateData]);
  const currentYear = useMemo(() => yearData(dateData), [dateData]);
  const currentMonth = useMemo(() => monthData(dateData), [dateData]);
  
  useEffect(() => {
    setDateData(date);
  }, [date])

  return (
    <Container direction="column" alignItems="center" width="320px">
      <Container justidyContent="space-around" alignItems="center" width="100%">
        <Button onClick={() => setDateData(prevDate(date, isTime))}>{"<"}</Button>
        <Text>{`${currentYear}/${currentMonth}`}</Text>
        <Button onClick={() => setDateData(nextDate(date, isTime))}>{">"}</Button>
      </Container>
      <Calendar 
        weeks={DayOfWeeks}
        weekText={(day: string, i: number) => <WeekText key={`week-${i}`}>{day}</WeekText>}
        days={days}
        dayText={(v, idx) => 
          <DayText key={`day-${idx}`} secondary={v.month !== "now"}>
            <Button
              secondary={v.month !== "now"}
              onClick={() => setDate(clickDateHandle(currentYear, currentMonth, v.value, v.month, isTime))}
            >
              {v.value}
            </Button>
          </DayText>
        }
        CurrentDayText={(v, idx) => 
          <CurrentDayText key={`day-${idx}`} secondary={v.month !== "now"}>
            {v.value}
          </CurrentDayText>
        }
        currentDay={Number(currentDay)}
        isCurrentDay={currentYear === yearData(date) && currentMonth === monthData(date) && currentDay === dayData(date)}
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
  isTime: boolean,
}

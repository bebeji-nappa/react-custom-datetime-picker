import * as React from "react";
import { useMemo, useState, useEffect, Dispatch, SetStateAction } from "react";
import {
  DayOfWeeks,
  Days,
  yearData,
  monthData,
  prevDate,
  nextDate,
  clickDateHandle,
  dayData,
  hourData,
  minuteData,
} from "../../modules/data";
import { DayText, CurrentDayText } from "./DayText";
import { WeekText } from "./WeekText";
import { Text } from "./Text";
import { Container } from "./Container";
import { Button } from "./Button";
import { Calendar } from "./Calendar";
import { LeftIcon, RightIcon } from "./Icon";

export const DateField = (props: Props) => {
  const { date, setDate, isTime, mainColor, currentTextColor, textColor } =
    props;
  const [dateData, setDateData] = useState(date);
  const days = useMemo(() => Days(dateData), [dateData]);
  const currentDay = useMemo(() => dayData(dateData), [dateData]);
  const currentYear = useMemo(() => yearData(dateData), [dateData]);
  const currentMonth = useMemo(() => monthData(dateData), [dateData]);
  const currentHour = useMemo(() => hourData(dateData), [dateData]);
  const currentMinute = useMemo(() => minuteData(dateData), [dateData]);

  useEffect(() => {
    setDateData(date);
  }, [date]);

  return (
    <Container direction="column" alignItems="center" width="320px">
      <Container justidyContent="space-around" alignItems="center" width="100%">
        <Button onClick={() => setDateData(prevDate(dateData, isTime))}>
          <LeftIcon color={mainColor ? mainColor : "#000"} />
        </Button>
        <Text
          color={textColor ? textColor : "#000"}
        >{`${currentYear}/${currentMonth}`}</Text>
        <Button onClick={() => setDateData(nextDate(dateData, isTime))}>
          <RightIcon color={mainColor ? mainColor : "#000"} />
        </Button>
      </Container>
      <Calendar
        weeks={DayOfWeeks}
        weekText={(day: string, i: number) => (
          <WeekText key={`week-${i}`}>{day}</WeekText>
        )}
        days={days}
        dayText={(v, idx) => (
          <DayText
            key={`day-${idx}`}
            secondary={v.month !== "now"}
            color={textColor ? textColor : "#000"}
          >
            <Button
              secondary={v.month !== "now"}
              color={textColor ? textColor : "#000"}
              onClick={() =>
                setDate(
                  clickDateHandle(
                    currentYear,
                    currentMonth,
                    v.value,
                    currentHour,
                    currentMinute,
                    v.month,
                    isTime
                  )
                )
              }
            >
              {v.value}
            </Button>
          </DayText>
        )}
        CurrentDayText={(v, idx) => (
          <CurrentDayText
            key={`day-${idx}`}
            secondary={v.month !== "now"}
            backgroundColor={mainColor ? mainColor : "#ff4545"}
            textColor={currentTextColor ? currentTextColor : "#fff"}
          >
            {v.value}
          </CurrentDayText>
        )}
        currentDay={Number(currentDay)}
        isCurrentDay={
          currentYear === yearData(date) &&
          currentMonth === monthData(date) &&
          currentDay === dayData(date)
        }
      />
    </Container>
  );
};

interface Props {
  date: string;
  setDate: Dispatch<SetStateAction<string>>;
  isTime: boolean;
  mainColor?: string;
  currentTextColor?: string;
  textColor?: string;
}

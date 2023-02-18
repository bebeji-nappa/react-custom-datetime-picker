import * as React from "react";
import { useMemo } from "react";
import { currentDate, DayOfWeeks, Days, year, month } from "../../modules/data";
import { DayText } from "./DayText";
import { WeekText } from "./WeekText";
import { Text } from "./Text";
import { Container } from "./Container";
import { Button } from "./Button";

export const DateField = () => {
  const days = useMemo(() => Days(currentDate), []);
  return (
    <Container direction="column" alignItems="center" width="340">
      <Container justidyContent="space-around" alignItems="center" width="100%">
        <Button>{"<"}</Button>
        <Text>{`${year(currentDate)}/${month(currentDate)}`}</Text>
        <Button>{">"}</Button>
      </Container>
      <table>
        <thead>
          <tr>
            {DayOfWeeks.map((day: string, i: number) => 
              <WeekText key={`week-${i}`}>{day}</WeekText>
            )}
          </tr>
        </thead>
        <tbody>
          {days.map((day, idx) => 
            <tr key={`days-${idx}`}>
              {day.map((v, idx) => 
                <DayText key={`day-${idx}`} secondary={v.month !== "now"}>
                  {v.value}
                </DayText>
              )}
            </tr>
          )}
        </tbody>
      </table>
    </Container>
  )
}

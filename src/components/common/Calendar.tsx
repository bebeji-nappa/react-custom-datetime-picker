import * as React from "react";
import { ReactNode } from "react";

export const Calendar = (props: Props) => {
  const { weeks, weekText, days, dayText, CurrentDayText, currentDay, isCurrentDay } = props;

  return (
    <table>
      <thead>
        <tr>
          {weeks.map((day: string, i: number) => 
            weekText(day, i)
          )}
        </tr>
      </thead>
      <tbody>
        {days.map((day: Day[], idx: number) => 
          <tr key={`days-${idx}`}>
            {day.map((v: Day, idx: number) => 
              isCurrentDay && currentDay === v.value && v.month === "now" ? CurrentDayText(v, idx) : dayText(v, idx)
            )}
          </tr>
        )}
      </tbody>
    </table>
  )  
}

interface Props {
  weeks: string[],
  weekText: (day: string, i: number) => ReactNode,
  days: Day[][],
  dayText: (v: Day, idx: number) => ReactNode,
  CurrentDayText: (v: Day, idx: number) => ReactNode,
  currentDay: number,
  isCurrentDay: boolean,
}

interface Day {
  value: number,
  month: string,
}

import * as React from "react";
import { ReactNode } from "react";

export const Calendar = (props: Props) => {
  const { weeks, weekText, days, dayText, CurrentDayText, currentDay } = props;

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
              currentDay !== v.value ? dayText(v, idx) : CurrentDayText(v, idx)
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
}

interface Day {
  value: number,
  month: string,
}

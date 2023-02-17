import * as React from "react";
import { useMemo } from "react";
import { currentDate, currentDateTime, DayOfWeeks, Days } from "../modules/data";
export const DateField = () => {
  const days = useMemo(() => Days(currentDate), []);
  console.log(days)
  return (
    <table>
      <thead>
        <tr>
          {DayOfWeeks.map((day: string, i: number) => 
            <th key={`week-${i}`}>{day}</th>
          )}
        </tr>
      </thead>
      <tbody>
        {days.map((day, idx) => 
          <tr key={`days-${idx}`}>
            {day.map((v, idx) => 
              <td key={`day-${idx}`}>{v.value}</td>
            )}
          </tr>
        )}
      </tbody>
    </table>
  )
}

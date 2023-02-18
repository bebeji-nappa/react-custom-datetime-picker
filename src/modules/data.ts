import dayjs from "dayjs";
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(timezone);

const now = dayjs();
const date: string = now.format("YYYY-MM-DD");
const datetime: string = now.format("YYYY-MM-DD hh:mm");
const dayofweek: string = now.format("d");

export const currentDate: string = date;
export const currentDateTime: string = datetime;
export const currentDayOfWeek: string = dayofweek;
export const DayOfWeeks: string[] = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
]
export const Days = (date: string) => {
  const dateData = dayjs(date);
  const data = [];
  const endOfDay: number = Number(dateData.endOf("month").format("D"));
  const month = dateData.format("M");
  const year = dateData.format("YYYY");
  let arr = Array(7).fill(null);
  for (let i: number = 1; i <= endOfDay; i++) {
    const week: number = Number(dayjs(`${year}-${month}-${i}`).format("d"));
    if (arr.length && week === 0) {
      data.push(arr);
      arr = Array(7).fill(null);
    }
    if (i === 1 && week > 0) {
      const prevEndOfDay: number = Number(dayjs(`${year}-${Number(month) - 1}-${i}`).endOf("month").format("D"));
      arr = arr.map((v, i) => (i < week) && { value: prevEndOfDay - (week - i - 1), month: "prev" });
    }
    arr[week] = { value: i, month: "now" };
    if (i === endOfDay) {
      arr.forEach((v, i) => {
        if (i > week) {
          arr[i] = { value: i - week, month: "next" }
        } 
      });
      data.push(arr);
    }
  }
  return data;
}
export const yearData = (date: string) => dayjs(date).format("YYYY"); 
export const monthData = (date: string) => dayjs(date).format("MM");
export const dayData = (date: string) => dayjs(date).format("D");
export const prevDate = (date: string) => dayjs(date).subtract(1, "M").format("YYYY-MM-DD");
export const nextDate = (date: string) => dayjs(date).add(1, "M").format("YYYY-MM-DD");

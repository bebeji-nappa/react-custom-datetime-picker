import * as React from "react";
import { useMemo, useState, useEffect } from "react";
import { DateField } from "../common/DateField";
import { TimeField } from "../common/TimeField";
import { Wrapper } from "../common/Wrapper";
import dayjs from "dayjs";

export const DateTimePicker = (props: Props) => {
  const { isTime } = props;
  const now = useMemo(() => dayjs(), []);
  const [date, setDate] = useState(now.format(isTime ? "YYYY-MM-DD HH:mm" : "YYYY-MM-DD"));
  const [year, setYear] = useState(now.format("YYYY"));
  const [month, setMonth] = useState(now.format("MM"));
  const [day, setDay] = useState(now.format("DD"));
  const [hour, setHour] = useState(now.format("HH"));
  const [minute, setMinute] = useState(now.format("mm"));

  console.log(hour)
  console.log(minute)
  useEffect(() => {
    setYear(dayjs(date).format("YYYY"))
    setMonth(dayjs(date).format("MM"))
    setDay(dayjs(date).format("DD"))
    setHour(dayjs(date).format("HH"))
    setMinute(dayjs(date).format("mm"))
  }, [date])

  return (
    <Wrapper>
      <DateField date={date} year={year} month={month} day={day} setDate={setDate} isTime={isTime ? true : false} />
      {isTime && <TimeField hour={hour} minute={minute} date={date} setDate={setDate} />}
    </Wrapper>
  )
}

interface Props {
  isTime?: boolean,
}

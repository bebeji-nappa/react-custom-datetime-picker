import * as React from "react";
import { useMemo, useState, useEffect } from "react";
import { DateField } from "../common/DateField";
import { TimeField } from "../common/TimeField";
import { Wrapper } from "../common/Wrapper";
import dayjs from "dayjs";

export const DateTimePicker = (props: Props) => {
  const { isTime } = props;
  const now = useMemo(() => dayjs(), []);
  const [date, setDate] = useState(now.format("YYYY-MM-DD"));
  const [year, setYear] = useState(now.format("YYYY"));
  const [month, setMonth] = useState(now.format("MM"));
  const [day, setDay] = useState(now.format("DD"));

  useEffect(() => {
    console.log(date)
    setYear(dayjs(date).format("YYYY"))
    setMonth(dayjs(date).format("MM"))
    setDay(dayjs(date).format("DD"))
  }, [date])

  return (
    <Wrapper>
      <DateField date={date} year={year} month={month} day={day} setDate={setDate} />
      {isTime && <TimeField />}
    </Wrapper>
  )
}

interface Props {
  isTime?: boolean,
}

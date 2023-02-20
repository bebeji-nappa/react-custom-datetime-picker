import * as React from "react";
import { useMemo, useState, useEffect } from "react";
import { DateField } from "../common/DateField";
import { TimeField } from "../common/TimeField";
import { Wrapper } from "../common/Wrapper";
import dayjs from "dayjs";

export const DateTimePicker = (props: Props) => {
  const {
    isTime,
    parentRef,
    mainColor,
    currentTextColor,
    textColor,
    outlineColor,
    backgroundColor,
    borderColor,
  } = props;
  const now = useMemo(() => dayjs(), []);
  const [date, setDate] = useState(
    now.format(isTime ? "YYYY-MM-DD HH:mm" : "YYYY-MM-DD")
  );
  const [year, setYear] = useState(now.format("YYYY"));
  const [month, setMonth] = useState(now.format("MM"));
  const [day, setDay] = useState(now.format("DD"));
  const [hour, setHour] = useState(now.format("HH"));
  const [minute, setMinute] = useState(now.format("mm"));

  useEffect(() => {
    setYear(dayjs(date).format("YYYY"));
    setMonth(dayjs(date).format("MM"));
    setDay(dayjs(date).format("DD"));
    setHour(dayjs(date).format("HH"));
    setMinute(dayjs(date).format("mm"));
    if (parentRef?.current) {
      parentRef.current.value = date;
    }
  }, [date]);

  return (
    <Wrapper
      position={parentRef?.current ? "absolute" : "static"}
      top={parentRef?.current ? parentRef.current.offsetTop : "auto"}
      left={parentRef?.current ? parentRef.current.offsetLeft : "auto"}
      backgroundColor={backgroundColor ? backgroundColor : "#fff"}
      borderColor={borderColor ? borderColor : "#f3f3f3"}
    >
      <DateField
        date={date}
        setDate={setDate}
        isTime={isTime ? true : false}
        mainColor={mainColor ? mainColor : "#000"}
        textColor={textColor ? textColor : "#000"}
        currentTextColor={currentTextColor ? currentTextColor : "#fff"}
      />
      {isTime && (
        <TimeField
          hour={hour}
          minute={minute}
          date={date}
          setDate={setDate}
          mainColor={mainColor ? mainColor : "#000"}
          textColor={textColor ? textColor : "#000"}
          outlineColor={outlineColor ? outlineColor : "currentColor"}
        />
      )}
    </Wrapper>
  );
};

interface Props {
  isTime?: boolean;
  parentRef?: React.MutableRefObject<HTMLInputElement | null>;
  mainColor?: string;
  currentTextColor?: string;
  textColor?: string;
  outlineColor?: string;
  backgroundColor?: string;
  borderColor?: string;
}

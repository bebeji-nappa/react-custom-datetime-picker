import * as React from "react";
import { useMemo, useState, Dispatch, SetStateAction } from "react";
import { Container } from "./Container";
import { TimeText } from "./Text";
import { Button } from "./Button";
import { hourData, minuteData, prevDateTime, nextDateTime } from "../../modules/data";
import { UpIcon, DownIcon } from "./Icon"

export const TimeField = (props: Props) => {
  const { date, hour, minute, setDate } = props;
  const [dateData, setDateData] = useState(date);

  return (
    <Container alignItems="center" justidyContent="center" width="250px">
      <Container alignItems="center">
        <Container direction="column" justidyContent="center" alignItems="center">
          <Button onClick={() => setDate(prevDateTime(date, "h"))}>
            <UpIcon />
          </Button>
          <TimeText>{hour}</TimeText>
          <Button onClick={() => setDate(nextDateTime(date, "h"))}>
            <DownIcon />
          </Button>
        </Container>
        <TimeText>:</TimeText>
        <Container direction="column" justidyContent="center" alignItems="center">
          <Button onClick={() => setDate(prevDateTime(date, "m"))}>
            <UpIcon />
          </Button>
          <TimeText>{minute}</TimeText>
          <Button onClick={() => setDate(nextDateTime(date, "m"))}>
            <DownIcon />
          </Button>
        </Container>
      </Container>
    </Container>
  )
}

interface Props {
  date: string,
  hour: string,
  minute: string,
  setDate: Dispatch<SetStateAction<string>>,
}

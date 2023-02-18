import * as React from "react";
import { DateField } from "../common/DateField";
import { TimeField } from "../common/TimeField";
import { Wrapper } from "../common/Wrapper";

interface Props {
  isTime?: boolean,
}

export const DateTimePicker = (props: Props) => {
  const { isTime } = props;
  return (
    <Wrapper>
      <DateField />
      {isTime && <TimeField />}
    </Wrapper>
  )
}

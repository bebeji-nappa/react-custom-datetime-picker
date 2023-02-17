import * as React from "react";
import { DateField } from "./DateField";
import { TimeField } from "./TimeField";
import { Wrapper } from "./Wrapper";

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

# react-editable-datetime-picker

## Install

```bash
npm install react-editable-datetime-picker

# Use Yarn
yarn add react-editable-datetime-picker
```

## Usage

```jsx
import { useRef, useState } from "react"
import { DateTimePicker } from "react-editable-datetime-picker"

export default function Home() {
  const ref = useRef(null);
  return (
    <>
      <input ref={ref} type="text" defaultValue="" onFocus={() => setFocus(true)} />
      <DateTimePicker
        isTime={true}
        parentRef={ref}
        mainColor="#ff4545"
        currentTextColor="#fff"
        textColor="#000"
        outlineColor="#ff4545"
        backgroundColor="#ffdede"
        borderColor="#de6a6a"
      />
    </>
  )
}
```

### Props
|name|description|
|---|---|
|`isTime`|Set whether to display the time|
|`parentRef`|Set Ref to work with Picker|
|`mainColor`|Set main accent color|
|`currentTextColor`|Sets the text color to display the selected date|
|`textColor`|Sets the text color to display|
|`outlineColor`|Sets the outline color for entering the time|
|`backgroundColor`|Sets the background color of the datetimepicker|
|`borderColor`|Sets the border color of the datetimepicker|

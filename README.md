# react-custom-datetime-picker

## Install

```bash
npm install react-custom-datetime-picker

# Use Yarn
yarn add react-custom-datetime-picker
```

## Usage

```jsx
import { useRef, useState } from "react"
import { DateTimePicker } from "react-custom-datetime-picker"

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

---
title: Password Peek-a-boo Component for login
---

## My Skill Builder Session:

Today I made a Password Peek-a-boo component for the login page on our POW!-website.

## What did I do?

POW! Password Peek-a-boo
![POW! Password Peek-a-boo](OlaCast-20-POW-Day-51-POW-Password-Peek-a-boo-41.png)

## Why did I do it?

We want our POW! customer to be able to choose to see her pasSword. So she knows it is the right pasSword when she copy-pastes it from 1Password or types from memory.

## How did I do it?

Here is the finished component

```js
import React, { useState } from "react"

const PasSwordField = () => {
  const [values, setValues] = useState({
    showPasSword: false,
  })
  const handlePeekABoo = () => {
    setValues({
      showPasSword: !values.showPasSword,
    })
  }
  return (
    <div>
      <input
        id="pasSwordPeekABooInput"
        type={values.showPasSword ? "text" : "password"}
      />
      <br />
      <br />
      <button onClick={handlePeekABoo}>
        {values.showPasSword ? "🎩⚔️" : "👁️‍🗨️⚔️"}
      </button>
    </div>
  )
}

export default PasSwordField
```

My steps are P. E. E. K. - A. - B. O. O,

### P. PasSwordField component

```js
import React, { useState } from "react"

const PasSwordField = () => {

  return (
    <div>
      <input
        id="pasSwordPeekABooInput"
        type="password"
      />
      <br />
      <br />

    </div>
  )
}

export default PasSwordField
```

### E. Eye button 👁️‍🗨️⚔️


```js
      <button>👁️‍🗨️⚔️</button>
```

### E. EekABoo handler

```js
import React, { useState } from "react"

const PasSwordField = () => {

  const handlePeekABoo = () => {

  }
  return (
    ....
      <button onClick={handlePeekABoo}>
        👁️‍🗨️⚔️
      </button>
  )
}

export default PasSwordField
```

### K. Keep hiding your face you false showPasSword you!

```js
import React, { useState } from "react"

const PasSwordField = () => {
  const [values, setValues] = useState({
    showPasSword: false,
  })
  const handlePeekABoo = () => {

  }
  return (
    ....
      <button onClick={handlePeekABoo}>
        👁️‍🗨️⚔️
      </button>
  )
}

export default PasSwordField
```
### A. Am NOT false! I am a true showPasSword
```js
import React, { useState } from "react"

const PasSwordField = () => {
  const [values, setValues] = useState({
    showPasSword: false,
  })
  const handlePeekABoo = () => {
    setValues({
      showPasSword: !values.showPasSword,
    })
  }
  return (
    ....
      <button onClick={handlePeekABoo}>
        👁️‍🗨️⚔️
      </button>
  )
}

export default PasSwordField
```

### B. Button with both "🎩⚔️" and "👁️‍🗨️⚔️"

```js
import React, { useState } from "react"

const PasSwordField = () => {
  ....
  return (
    ....
      <button onClick={handlePeekABoo}>
        {values.showPasSword ? "🎩⚔️" : "👁️‍🗨️⚔️"}
      </button>
  )
}

export default PasSwordField
```
### O. Open the 👁️‍🗨️ to see the pasSword as "text"
```js
....
      <input
        id="pasSwordPeekABooInput"
        type={values.showPasSword ? "text" : "password"}
      />
....
```

### O. Or click the 🎩 to hide the pasSword as "password"

```js

....
      <input
        id="pasSwordPeekABooInput"
        type={values.showPasSword ? "text" : "password"}
      />
....

```


For the live version of my skill-builder session: watch [Sunday's OlaCast on YouTube](https://youtu.be/_MqchVYIaH0)

&nbsp;
💪😺👍
Keep your skill-building-ship afloat this week!
⛵🔧🏴‍☠️

&nbsp;
Ola Vea
Cap'n of his own skill-builder-ship

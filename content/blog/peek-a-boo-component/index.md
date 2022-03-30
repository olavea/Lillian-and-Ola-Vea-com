---
title: How to create a Password Peek-a-boo Component
author: "@OlaHolstVea"
date: 2022-03-20
---

## My Skill Builder Session:

Today I made a Password Peek-a-boo component for the login page on our POW!-website, keep reading or watch my live [skill-builder session on YouTube](https://youtu.be/_MqchVYIaH0).

## What did I do?

POW! Password Peek-a-boo
![POW! Password Peek-a-boo](OlaCast-20-POW-Day-51-POW-Password-Peek-a-boo-41.png)

## Why did I do it?

We want you to be able to choose to see your pasSword. So you know if it is the correct pasSword when you copy-paste it from 1Password or type it from memory. Or maybe even more important when you create your account. Since there is no password recovery in an end-to-end encrypted application, making sure you create the pasSword you intended to is crucial.

## How did I do it?

Here is the finished component:

```js
import React, { useState } from "react";

const PasSwordField = () => {
  const [values, setValues] = useState({
    showPasSword: false,
  });
  const handlePeekABoo = () => {
    setValues({
      showPasSword: !values.showPasSword,
    });
  };
  return (
    <>
      <input
        id="pasSwordPeekABooInput"
        type={values.showPasSword ? "text" : "password"}
      />
      <button onClick={handlePeekABoo}>
        {values.showPasSword ? "🎩⚔️" : "👁️‍🗨️⚔️"}
      </button>
    </>
  );
};

export default PasSwordField;
```

My steps are P. E. E. K. - A. - B. O. O:

### P. PasSword Input

```js
import React, { useState } from "react";

const PasSwordField = () => {
  return (
    <>
      <input id="pasSwordPeekABooInput" type="password" />
    </>
  );
};

export default PasSwordField;
```

### E. Eye button 👁️‍🗨️⚔️

```js
import React, { useState } from "react";

const PasSwordField = () => {
  return (
    <>
      <input id="pasSwordPeekABooInput" type="password" />
      <button>👁️‍🗨️⚔️</button>
    </>
  );
};

export default PasSwordField;
```

### E. EekABoo handler

```js
import React, { useState } from "react";

const PasSwordField = () => {
  const handlePeekABoo = () => {};
  return (
    <>
      <input id="pasSwordPeekABooInput" type="password" />
      <button onClick={handlePeekABoo}>👁️‍🗨️⚔️</button>
    </>
  );
};

export default PasSwordField;
```

### K. Keep hiding your face, you false showPasSword you!

```js
import React, { useState } from "react";

const PasSwordField = () => {
  const [values, setValues] = useState({
    showPasSword: false,
  });
  const handlePeekABoo = () => {};
  return (
    <>
      <input id="pasSwordPeekABooInput" type="password" />
      <button onClick={handlePeekABoo}>👁️‍🗨️⚔️</button>
    </>
  );
};

export default PasSwordField;
```

### A. Am NOT false! I am a true showPasSword

```js
import React, { useState } from "react";

const PasSwordField = () => {
  const [values, setValues] = useState({
    showPasSword: false,
  });
  const handlePeekABoo = () => {
    setValues({
      showPasSword: !values.showPasSword,
    });
  };
  return (
    <>
      <input id="pasSwordPeekABooInput" type="password" />
      <button onClick={handlePeekABoo}>👁️‍🗨️⚔️</button>
    </>
  );
};

export default PasSwordField;
```

### B. Button with both "🎩⚔️" and "👁️‍🗨️⚔️"

```js
import React, { useState } from "react";

const PasSwordField = () => {
  return (
    <>
      <input id="pasSwordPeekABooInput" type="password" />
      <button onClick={handlePeekABoo}>
        {values.showPasSword ? "🎩⚔️" : "👁️‍🗨️⚔️"}
      </button>
    </>
  );
};

export default PasSwordField;
```

### O. Open the 👁️‍🗨️ to see the pasSword as "text"

```js
import React, { useState } from "react";

const PasSwordField = () => {
  return (
    <>
      <input
        id="pasSwordPeekABooInput"
        type={values.showPasSword ? "text" : "password"}
      />
      <button onClick={handlePeekABoo}>
        {values.showPasSword ? "🎩⚔️" : "👁️‍🗨️⚔️"}
      </button>
    </>
  );
};

export default PasSwordField;
```

### O. Or click the 🎩 to hide the pasSword as "password"

```js
import React, { useState } from "react";

const PasSwordField = () => {
  return (
    <>
      <input
        id="pasSwordPeekABooInput"
        type={values.showPasSword ? "text" : "password"}
      />
      <button onClick={handlePeekABoo}>
        {values.showPasSword ? "🎩⚔️" : "👁️‍🗨️⚔️"}
      </button>
    </>
  );
};

export default PasSwordField;
```

And there you have it: a Password Peek-a-boo Component.

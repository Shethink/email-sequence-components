```jsx
import React, { useState } from "react";

const [isActive, setIsActive] = useState(false);

<Switch isActive={isActive} onToggle={(e) => setIsActive(e)} />;
```

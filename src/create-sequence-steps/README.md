```jsx
import { useState } from "react";

const [open, setOpen] = useState(true);
const [automaticEmailWaitTime, setAutomaticEmailWaitTime] = useState(0);

<CreateSequenceSteps
  open={open}
  onClose={() => setOpen(false)}
  automaticEmailWaitTime={automaticEmailWaitTime.toString()}
  onChangeAutomaticEmailWaitTime={(e) => setAutomaticEmailWaitTime(+e)}
/>;
```

```jsx
import { useState } from "react";
const [checked, setChecked] = useState(false);

<SwitchButton
  ischecked={checked}
  onClick={(e) => setChecked(e)}
></SwitchButton>;
```

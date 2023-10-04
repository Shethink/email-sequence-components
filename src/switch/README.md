```jsx
import { useState } from "react";
const [checked, setChecked] = useState(false);

<Switch ischecked={checked} onClick={(e) => setChecked(e)}></Switch>;
```

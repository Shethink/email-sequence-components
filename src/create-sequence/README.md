```jsx
import React from "react";

const createOptions = [
  {
    url: "https://mail-sequence.s3.ap-south-1.amazonaws.com/download.svg",
    title: "AI-assisted",
    subtitle: "Create a simple outbound sequence with one click.",
  },
  {
    url: "https://mail-sequence.s3.ap-south-1.amazonaws.com/download+(1).svg",
    title: "Pre-formatted",
    subtitle: "Start with one of our sequence templates.",
  },
  {
    url: "https://mail-sequence.s3.ap-south-1.amazonaws.com/download.svg",
    title: "From scratch",
    subtitle: "Create a new sequence from scratch.",
  },
];

const [sequenceName, setSequenceName] = React.useState("");
const [open, setOpen] = React.useState(true);

<CreateSequence
  createOptions={createOptions}
  permissionsOptions={[
    { label: "Teams can view and use", value: "view and use" },
  ]}
  schedules={[
    { label: "Normal business hours", value: "Normal hours" },
    { label: "Weekends only", value: "Weekends" },
  ]}
  sequenceName={sequenceName}
  handleSequenceNameChange={(name) => setSequenceName(name)}
  open={open}
  onClose={() => setOpen(false)}
></CreateSequence>;
```

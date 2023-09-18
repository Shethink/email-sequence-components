The purpose of this component is to wrap any clickable thing (e.g. buttons, anchors, etc) and delegate the logic to it.

## Variants

### types

The `Clickable` component allows different models. For each of those there are specific properties.

#### `default`

`Props`: Any allowed on `<button>`

Renders a `<button type="button">` element with the given props.

```jsx
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

<CreateSequence createOptions={createOptions}></CreateSequence>;
```

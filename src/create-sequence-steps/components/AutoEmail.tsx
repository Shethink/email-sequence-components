import React from "react";
import Typography from "../../typography";
import {
  CreateSequenceStepsProps,
  SequenceStepProp,
} from "../CreateSequenceSteps";
import { SequenceStep } from "./SequenceStep";
import { autoEmail } from "../constants";
import Row from "../../row";
import TextField from "../../text-field";
import Select, { SelectOption } from "../../select";
import { colours } from "../../theme-provider";
import { CreateStepsFooter } from "./CreateStepsFooter";

type AutoEmailProps = Pick<
  CreateSequenceStepsProps,
  "automaticEmailWaitTime" | "onChangeAutomaticEmailWaitTime"
> & {
  step: SequenceStepProp;
};

export const AutoEmail: React.FC<AutoEmailProps> = ({
  step,
  automaticEmailWaitTime,
  onChangeAutomaticEmailWaitTime,
}) => {
  const waitTimeOptions: SelectOption[] = [
    { label: "hours", value: "hours" },
    { label: "days", value: "days" },
  ];

  return (
    <>
      <SequenceStep {...step} showCategory={false} />
      <div style={{ paddingBottom: "1.5rem" }}>
        <Typography variant="basic-bold" hasStandardTopMargin>
          {autoEmail.whenToStart}
        </Typography>
        <Typography lightWeight standardSize hasStandardTopMargin>
          {autoEmail.waitTime}
        </Typography>
        <Row style={{ marginTop: "1rem" }}>
          <div>
            <TextField
              variant="outlined"
              value={automaticEmailWaitTime}
              onChange={(e) => onChangeAutomaticEmailWaitTime?.(e)}
            />
          </div>
          <div style={{ marginLeft: "14px" }}>
            <Select
              options={waitTimeOptions}
              onChange={(e) => console.log(e)}
              isInsideModal
            />
          </div>
          <Typography normalWeight standardSize marginLeft={3}>
            {autoEmail.label}
          </Typography>
        </Row>
      </div>
      <hr
        style={{
          height: "1px",
          background: colours.white500,
          margin: 0,
          border: 0,
        }}
      />
    </>
  );
};

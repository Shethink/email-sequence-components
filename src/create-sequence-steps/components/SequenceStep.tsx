import React, { memo } from "react";
import { SequenceStepProp } from "../CreateSequenceSteps";
import Typography from "../../typography";
import { AITag, AITagContainer, StepCard } from "../styles";
import Row from "../../row";
import { AITagText, changeStep } from "../constants";
import Button from "../../button";
import { AutoAwesome } from "../../icon";

export const SequenceStep: React.FC<SequenceStepProp> = memo(
  ({ category, steps, showCategory = true }) => {
    return (
      <div>
        {showCategory && (
          <Typography variant="basic-bold" marginBottom={1}>
            {category}
          </Typography>
        )}
        {steps.map((step, stepIndex) => {
          const {
            icon,
            title,
            description,
            hasAiTag,
            onClick,
            onClickChangeStep,
          } = step;
          return (
            <StepCard
              key={stepIndex.toString()}
              onClick={onClick}
              showcategory={showCategory}
            >
              <Row style={{ justifyContent: "space-between" }}>
                <Row>
                  <img src={icon} alt="" />
                  <div style={{ marginLeft: "1.4rem" }}>
                    <Row>
                      <Typography variant="default">{title}</Typography>
                      {hasAiTag && (
                        <AITagContainer>
                          <AutoAwesome style={{ fontSize: ".8rem" }} />
                          <AITag variant="basic-bold">{AITagText}</AITag>
                        </AITagContainer>
                      )}
                    </Row>
                    <Typography lightWeight variant="caption">
                      {description}
                    </Typography>
                  </div>
                </Row>
                {!showCategory && (
                  <Button onClick={onClickChangeStep} variant="text">
                    {changeStep}
                  </Button>
                )}
              </Row>
            </StepCard>
          );
        })}
      </div>
    );
  }
);

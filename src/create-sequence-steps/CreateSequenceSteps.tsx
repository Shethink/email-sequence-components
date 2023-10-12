import React, { memo, useState } from "react";
import Modal, { ModalProps } from "../modal";
import { OptionsContainer, StepsBody } from "./styles";
import Typography from "../typography";
import {
  description,
  iconUrls,
  stepCategories,
  stepDescriptions,
  stepTitles,
} from "./constants";
import { Header } from "./components/Header";
import { SequenceStep } from "./components/SequenceStep";
import { AutoEmail } from "./components/AutoEmail";
import { CreateStepsFooter } from "./components/CreateStepsFooter";

export interface CreateSequenceStepsProps extends ModalProps {
  automaticEmailWaitTime?: number;
  onChangeAutomaticEmailWaitTime?: (time: string) => void;
}

export interface SequenceStepProp {
  category: string;
  steps: Array<{
    icon: string;
    title: string;
    description: string;
    hasAiTag?: boolean;
    onClick?: () => void;
    onClickChangeStep?: () => void;
  }>;
  showCategory?: boolean;
}

export type CurrentStepsCreationPhase = "initial" | "auto-email";

const CreateSequenceSteps: React.FC<CreateSequenceStepsProps> = ({
  open,
  onClose,
  automaticEmailWaitTime,
  onChangeAutomaticEmailWaitTime,
}) => {
  const [currentStep, setCurrentStep] =
    useState<CurrentStepsCreationPhase>("initial");

  const stepOptions: SequenceStepProp[] = [
    {
      category: stepCategories.automatic,
      steps: [
        {
          icon: iconUrls.autoEmail,
          title: stepTitles.autoEmail,
          description: stepDescriptions.autoEmail,
          hasAiTag: true,
          onClick: () => setCurrentStep("auto-email"),
          onClickChangeStep: () => console.log("ji"),
        },
      ],
    },
    {
      category: stepCategories.tasks,
      steps: [
        {
          icon: iconUrls.manualEmail,
          title: stepTitles.manualEmail,
          description: stepDescriptions.manualEmail,
          hasAiTag: true,
        },
        {
          icon: iconUrls.phoneCall,
          title: stepTitles.phoneCall,
          description: stepDescriptions.phoneCall,
        },
        {
          icon: iconUrls.actionItem,
          title: stepTitles.actionItem,
          description: stepDescriptions.actionItem,
        },
      ],
    },
    {
      category: stepCategories.linkedinTasks,
      steps: [
        {
          icon: iconUrls.linkedinConnect,
          title: stepTitles.linkedinConnect,
          description: stepDescriptions.linkedinConnect,
        },
        {
          icon: iconUrls.linkedinMessage,
          title: stepTitles.linkedinMessage,
          description: stepDescriptions.linkedinMessage,
        },
        {
          icon: iconUrls.linkedinProfile,
          title: stepTitles.linkedinProfile,
          description: stepDescriptions.linkedinProfile,
        },
        {
          icon: iconUrls.linkedinInteractWithPost,
          title: stepTitles.linkedinInteractWithPost,
          description: stepDescriptions.linkedinInteractWithPost,
        },
      ],
    },
  ];

  return (
    <Modal
      open={open}
      onClose={onClose}
      centered
      hasDarkBackground
      hasPadding={false}
    >
      <>
        <Header onClose={onClose} />
        <StepsBody>
          {currentStep === "initial" ? (
            <>
              <Typography variant="body2">{description}</Typography>
              <OptionsContainer>
                {stepOptions.map((categoryOption, index) => {
                  return (
                    <SequenceStep {...categoryOption} key={index.toString()} />
                  );
                })}
              </OptionsContainer>
            </>
          ) : currentStep === "auto-email" ? (
            <AutoEmail
              step={stepOptions[0]}
              automaticEmailWaitTime={automaticEmailWaitTime ?? 0}
              onChangeAutomaticEmailWaitTime={onChangeAutomaticEmailWaitTime}
            />
          ) : null}
        </StepsBody>
        {currentStep !== "initial" && <CreateStepsFooter onClose={onClose} />}
      </>
    </Modal>
  );
};

export default CreateSequenceSteps;

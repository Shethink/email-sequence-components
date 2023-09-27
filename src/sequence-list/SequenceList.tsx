import React, { memo } from "react";
import Container from "../container";
import { ListWrapper } from "./styles";
import Row from "../row";

export type SequenceListItem = {
  id: string;
  name: string;
  createdBy: string;
  numberOfSteps?: number;
  activeContacts?: number;
  pausedContacts?: number;
  notSentContacts?: number;
  bouncedContacts?: number;
  spamBlockedContacts?: number;
  finishedContacts?: number;
  scheduledEmails?: number;
  deliveredEmails?: number;
  repliedEmails?: number;
};

export interface SequenceListProps {
  items: SequenceListItem[];
  onActivateSequence?: () => void;
  onStarSequence?: () => void;
  onArchive?: () => void;
  onEdit?: () => void;
}

const SequenceItem = memo(({ item }: { item: SequenceListItem }) => {
  const { name, createdBy } = item;
  return (
    <Row>
      <section>
        <input type="checkbox" name="" id="" />
      </section>
      <section></section>
    </Row>
  );
});

const SequenceList = ({ items }: SequenceListProps) => {
  return (
    <Container fullWidth>
      <ListWrapper>
        {items.map((item) => {
          return <SequenceItem item={item} key={item.id} />;
        })}
      </ListWrapper>
    </Container>
  );
};

export default SequenceList;

export { SequenceItem };

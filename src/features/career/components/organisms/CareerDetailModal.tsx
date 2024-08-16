import { type JSX } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { NestedList } from "@/components/molecules/NestedList";
import { ModalContentText as ContentText } from "@/features/career/components/atoms/ModalContentText";
import { ModalContentTitle as Title } from "@/features/career/components/atoms/ModalContentTitle";
import { CareerDetailData as data } from "@/features/career/data/Career";

export interface CareerDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  id: number;
  color: string;
}

export const CareerDetailModal = ({
  color,
  isOpen,
  onClose,
}: CareerDetailModalProps): JSX.Element => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="xl"
      isCentered
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader px={10} py={5}>
          {data.title}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Title color={color}>概要</Title>
          <ContentText>{data.summary}</ContentText>
          <Title color={color}>期間</Title>
          <ContentText>{`${data.from} 〜 ${data.to ?? "現在"}`}</ContentText>
          <Title color={color}>担当業務</Title>
          <NestedList
            spacing={4}
            color={color}
            listItems={data.responsibility}
          />
          <Title color={color}>利用技術とツール</Title>
          <NestedList spacing={4} color={color} listItems={data.technology} />
          <Title color={color}>役割</Title>
          <ContentText>{data.role}</ContentText>
          <Title color={color}>規模</Title>
          <ContentText>{data.scale}</ContentText>
          <Title color={color}>担当工程</Title>
          <ContentText>{data.responsibleProcess}</ContentText>
          <Title color={color}>コメント</Title>
          <NestedList spacing={4} color={color} listItems={data.comment} />
        </ModalBody>
        <ModalFooter>
          <Button color="white" bg={color} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

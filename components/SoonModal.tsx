import React, { FC, ReactNode } from "react";
import {
  Modal,
  ModalOverlay,
  Button,
  ModalContent,
  Flex,
  ModalBody,
  ModalCloseButton,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";

type Props = {
  children: ReactNode;
};

const SoonModal: FC<Props> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // @ts-expect-error
  const button = React.cloneElement(children, {
    onClick: onOpen,
  });

  return (
    <>
      {button}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Flex align="center" direction="column">
              <Heading size="xl" mb="4">
                Coming soon
              </Heading>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SoonModal;

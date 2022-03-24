import React, { FC, ReactNode } from "react";
import { useTranslation } from "next-i18next";
import {
  Modal,
  ModalOverlay,
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
  const { t } = useTranslation();
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
                {t("soonmodal-title")}
              </Heading>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SoonModal;

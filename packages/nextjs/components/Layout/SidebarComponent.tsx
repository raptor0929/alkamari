import React from "react";
import { Button, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from "@nextui-org/react";
import { TbLayoutSidebarRightCollapseFilled } from "react-icons/tb";

const SidebarComponent = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const handleOpen = () => {
    onOpen();
  };

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <Button onPress={handleOpen}>
          <TbLayoutSidebarRightCollapseFilled />
        </Button>
      </div>
      <Modal size={"sm"} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
            <ModalBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit
                venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.
              </p>
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SidebarComponent;

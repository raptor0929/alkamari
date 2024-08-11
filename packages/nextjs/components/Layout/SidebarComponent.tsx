import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AppLogo from "../Global/AppLogo";
import { Button, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from "@nextui-org/react";
import { AiOutlineQuestionCircle, AiOutlineTransaction } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { BsCardChecklist } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

const SidebarComponent = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const pathname = usePathname(); // Obtén la ruta actual

  const handleOpen = () => {
    onOpen();
  };

  const menuItems = [
    { label: "Marketplace", icon: BsCardChecklist, href: "/marketplace?type=buy" },
    { label: "Mis anuncios", icon: BsCardChecklist, href: "/my-ads" },
    { label: "Transacciones", icon: AiOutlineTransaction, href: "/transacciones" },
    { label: "Soporte por telegram", icon: BiSupport, href: "/soporte" },
    { label: "FAQs", icon: AiOutlineQuestionCircle, href: "/faqs" },
  ];

  return (
    <>
      <div className="flex items-center">
        <Button className="bg-border-color" endContent={<FaBars size={20} />} onPress={handleOpen}></Button>
      </div>

      <Modal size={"sm"} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1 text-black">
              <AppLogo />
            </ModalHeader>
            <ModalBody>
              <ul className="space-y-4">
                {menuItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;

                  return (
                    <li key={index} className="flex items-center">
                      <Link
                        href={item.href}
                        passHref
                        className={`flex items-center text-md font-semibold p-2 rounded-md ${
                          isActive ? "bg-gray-200 text-button-hover" : "text-gray-700"
                        } hover:bg-gray-300 hover:text-button-hover transition-colors`}
                      >
                        <Icon className="mr-2" />
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SidebarComponent;

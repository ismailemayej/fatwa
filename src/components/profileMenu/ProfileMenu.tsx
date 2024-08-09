import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import ModalCommon from "../Modal/Modal";

export default function ProfileMenuOn({ menuon }: any) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <button>{menuon}</button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions">
        <DropdownItem>
          <ModalCommon button="Button" />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

import React, { useState } from "react";
import { Modal as ModalComponent } from "antd";
import { useAppDispatch, useAppSelector } from "../../hooks/useAppRedux";
import { updateUserList } from "../../redux/slices/userSlice";
import "antd/dist/antd.css";

interface ModalProps {
  openModal: boolean;
  getRandomUser: () => number;
  setTimerOpen: (value: boolean) => void;
  setDialogOpen: (value: boolean) => void;
}

const Modal = ({
  getRandomUser,
  openModal,
  setTimerOpen,
  setDialogOpen,
}: ModalProps) => {
  const dispatch = useAppDispatch();
  const [visible, setVisible] = useState(openModal);
  const userList = useAppSelector((state) => state.users.result);
  const luckyIndex = getRandomUser();

  const hideModal = () => {
    setVisible(false);
    setTimerOpen(false);
    setDialogOpen(false);
    let newArray = JSON.parse(JSON.stringify(userList));
    newArray.splice(luckyIndex, 1);
    dispatch(updateUserList(newArray));
  };
  return (
    <>
      <ModalComponent
        title="中獎名單"
        visible={visible}
        onOk={hideModal}
        onCancel={hideModal}
        okText="確認"
        centered
      >
        <img
          src={userList[luckyIndex]?.picture.medium || ""}
          alt={userList[luckyIndex]?.picture.thumbnail}
        />
        <span>
          {userList[luckyIndex]?.name.last}
          {userList[luckyIndex]?.name.first}
        </span>
      </ModalComponent>
    </>
  );
};

export default Modal;

import React, { useEffect, useState } from "react";
// utilities
import { useAppDispatch, useAppSelector } from "../hooks/useAppRedux";

// slices
import { getUserList } from "../redux/slices/userSlice";

// components
import LotteryList from "./components/LotteryList";
import Timer from "./components/Timer";
import Input from "./components/Input";
import Modal from "./components/Modal";

function Home() {
  const dispatch = useAppDispatch();
  const userList = useAppSelector((state) => state.users.result);
  const time = new Date();

  const [isOpen, setOpen] = useState(false);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [defaultValue, setDefaultValue] = useState(0);
  const [timer, setTimer] = useState(time);
  const getRandomUser = () => {
    const luckyMember = Math.floor(Math.random() * userList.length);
    return luckyMember;
  };

  // useEffect(() => {
  //   console.log("isDialogOpen", isDialogOpen);
  // }, [isDialogOpen]);

  useEffect(() => {
    dispatch(getUserList(30));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="tw-m-4 tw-flex tw-flex-col tw-justify-around sm:tw-flex-row">
      <div style={{ minWidth: "50%" }}>
        <h1 className="tw-text-xl tw-mb-2">抽獎時間</h1>
        <Input
          setValue={(value: number) => setDefaultValue(value)}
          defaultValue={defaultValue}
        />
        <span className="tw-px-1">分鐘</span>
        <button
          className="tw-bg-sky-600 tw-p-2 tw-rounded-full hover:tw-bg-sky-700 tw-text-white tw-cursor-pointer"
          type="button"
          onClick={() => {
            setOpen(true);
            time.setSeconds(time.getSeconds() + defaultValue * 60);
            setTimer(time);
          }}
          disabled={isOpen}
        >
          設定
        </button>
        {isOpen && (
          <Timer
            expiryTimestampProps={timer}
            autoStartProps={isOpen}
            isOpenProps={setDialogOpen}
          />
        )}
      </div>
      <div style={{ minWidth: "50%" }}>
        {!!userList && <LotteryList lotteryData={userList} />}
      </div>
      {isDialogOpen && (
        <Modal
          openModal={isDialogOpen}
          getRandomUser={() => getRandomUser()}
          setTimerOpen={setOpen}
          setDialogOpen={setDialogOpen}
        />
      )}
    </div>
  );
}

export default Home;

import React from "react";
import { result as UserInterface } from "@/Interface/I_user";
interface lotteryProps {
  lotteryData: UserInterface[];
}

const LotteryList = ({ lotteryData }: lotteryProps) => {
  return (
    <div className="tw-overflow-y-auto tw-h-screen">
      <p className="tw-text-xl tw-mb-2">參與抽獎名單</p>
      {lotteryData.map((user, index) => (
        <div key={index} className="tw-border-2 tw-border-indigo-600 tw-mb-2">
          <img
            className="tw-object-contain tw-w-full tw-h-10"
            src={user.picture.medium}
            alt={user.picture.thumbnail}
          />
          <p className="tw-text-center tw-py-2">
            {user.name.last}
            {user.name.first}
          </p>
        </div>
      ))}
    </div>
  );
};

export default LotteryList;

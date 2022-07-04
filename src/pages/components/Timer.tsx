import React from "react";
import { useTimer } from "react-timer-hook";

interface TimeProps {
  expiryTimestampProps: Date;
  autoStartProps: boolean;
  isOpenProps: (value: boolean) => void;
}

const Timer = ({
  expiryTimestampProps,
  autoStartProps,
  isOpenProps,
}: TimeProps) => {
  const { seconds, minutes } = useTimer({
    expiryTimestamp: expiryTimestampProps,
    autoStart: autoStartProps,
    onExpire: () => isOpenProps(true),
  });
  return (
    <div className="tw-text-center tw-mt-5">
      <div className="tw-text-xl">
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
    </div>
  );
};

export default Timer;

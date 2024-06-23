import { useEffect, useState } from "react";

import { calculateTimeAgo } from "@/lib/utils";

const TimeAgo = ({ date }: { date: string }) => {
  const [timeAgo, setTimeAgo] = useState<string>("");

  useEffect(() => {
    const updateTimeAgo = () => {
      setTimeAgo(calculateTimeAgo(date));
    };

    updateTimeAgo();
    const intervalId = setInterval(updateTimeAgo, 60000);

    return () => clearInterval(intervalId);
  }, [date]);

  return <span>{timeAgo}</span>;
};

export default TimeAgo;

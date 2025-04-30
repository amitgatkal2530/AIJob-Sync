import {
  Button,
  Divider,
  Text
} from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import {
  IconBookmark,
  IconBookmarkFilled,
  IconCalendarMonth,
  IconCheck,
  IconClockHour3
} from "@tabler/icons-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { timeAgo } from "../Services/Utitlities";

const Card = (props: any) => {
  const [offerStatus, setOfferStatus] = useState<null | "accepted" | "rejected">(null);

  const currentApplicant = props.applicants?.find(
    (applicant: any) => applicant.applicantId === props.currentUserId
  );

  const interviewTime = currentApplicant?.interviewTime
    ? new Date(currentApplicant.interviewTime)
    : null;

  const interviewDateStr = interviewTime?.toLocaleDateString("en-US", {
    weekday: "short",
    day: "numeric",
    month: "long",
  });

  const interviewTimeStr = interviewTime?.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const handleAccept = () => {
    setOfferStatus("accepted");
    showNotification({
      title: "Applicant had been Accepted",
      message: "",
      color: "green",
      icon: <IconCheck size={18} />,
    });

  };

  const handleReject = () => {
    setOfferStatus("rejected");
    showNotification({
      title: "Applicant had been rejected",
      message: "",
      color: "green",
      icon: <IconCheck size={18} />,
    });

  };

  return (
    <div className="bg-mine-shaft-900 p-4 w-90 flex flex-col gap-3 rounded-xl hover:shadow-lg !shadow-bright-sun-400">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-md">
            <img
              className="h-7"
              src={`/Icons/${props.company}.png`}
              alt={props.company}
            />
          </div>
          <div>
            <div className="font-semibold">{props.jobTitle}</div>
            <div className="text-xs text-mine-shaft-300">
              {props.company} &#x2022;{" "}
              {props.applicants ? props.applicants.length : 0} Applicants
            </div>
          </div>
        </div>
        {props.saved ? (
          <IconBookmarkFilled className="text-bright-sun-400  cursor-pointer" />
        ) : (
          <IconBookmark className="text-mine-shaft-300 cursor-pointer" />
        )}
      </div>

      <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg text-xs">
        <div>{props.experience}</div>
        <div>{props.jobType}</div>
        <div>{props.location}</div>
      </div>

      <Text className="!text-xs text-justify !text-mine-shaft-300" lineClamp={3}>
        {props.about}
      </Text>

      <Divider size="xs" color="mine-shaft.7" />

      <div className="flex justify-between">
        <div className="font-semibold text-mine-shaft-200">
          ₹{props.packageOffered} LPA
        </div>
        <div className="flex gap-1 text-xs text-mine-shaft-400 items-center">
          <IconClockHour3 className="h-5 w-5" stroke={1.5} />
          {props.applied || props.interviewing
            ? "Applied "
            : props.offered
            ? "Interviewed "
            : "Posted "}
          {timeAgo(props.postTime)}
        </div>
      </div>

      {(props.offered || props.interviewing) && (
        <Divider size="xs" color="mine-shaft.7" />
      )}

      {props.offered && offerStatus === null && (
        <div className="flex gap-2">
          <Button color="bright-sun.4" variant="outline" fullWidth onClick={handleAccept}>
            Accept
          </Button>
          <Button color="bright-sun.4" variant="light" fullWidth onClick={handleReject}>
            Reject
          </Button>
        </div>
      )}

      {offerStatus && (
        <div className="text-sm text-bright-sun-400 font-semibold text-center">
          {offerStatus === "accepted"
            ? "You have accepted the offer."
            : "You have rejected the offer."}
        </div>
      )}

      {props.interviewing && interviewTime && (
        <div className="flex gap-1 text-sm items-center">
          <IconCalendarMonth
            className="text-bright-sun-400 w-5 h-5"
            stroke={1.5}
          />
          {interviewDateStr} •{" "}
          <span className="text-mine-shaft-400">{interviewTimeStr}</span>
        </div>
      )}

      <Link to={`/jobs/${props.id}`}>
        <Button fullWidth color="bright-sun.4" variant="outline">
          View Jobs
        </Button>
      </Link>
    </div>
  );
};

export default Card;
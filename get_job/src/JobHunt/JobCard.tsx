import { Button, Divider, Text } from "@mantine/core";
import { IconBookmark, IconBookmarkFilled, IconClockHour3 } from "@tabler/icons-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { timeAgo } from "../Services/Utitlities";
import { changeProfile } from "../Slices/ProfileSlice";

const JobCard = (props: any) => {
  const dispatch=useDispatch();
  const profile = useSelector((state: any) => state.profile);
  console.log("Redux Profile State:", profile);
  console.log("Saved Jobs:", profile.savedJobs);

  const handleSaveJob = () => {
    console.log("Bookmark clicked!", props.id);
    if (!profile.savedJobs) {
      console.log("Error: profile.savedJobs is undefined!");
      return; // Prevent error if savedJobs is undefined
    }
    let savedJobs: any = [...profile.savedJobs];
  
    if (savedJobs.includes(props.id)) {
      savedJobs = savedJobs.filter((id: any) => id !== props.id);
    } else {
      savedJobs = [...savedJobs, props.id];
    }
  
    let updatedProfile = { ...profile, savedJobs };
    console.log("Updated Profile:", updatedProfile);
    dispatch(changeProfile(updatedProfile));

  };
  
  return (
    <div className="bg-mine-shaft-900 p-4 w-90 flex flex-col gap-3 rounded-xl hover:shadow-lg !shadow-bright-sun-400">

      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-md">
            <img className="h-7" src={`/Icons/${props.company}.png`} alt={props.company} />
          </div>
          <div>
            <div className="font-semibold">{props.jobTitle}</div>
            <div className="text-xs text-mine-shaft-300"><Link
            className="hover:texxt-mine-shaft-200" to="/company">{props.company}</Link>
               &bull; {props.applicants? props.applicants.length:0} Applicants
            </div>
          </div>
        </div>
        {profile.savedJobs?.includes(props.id)?<IconBookmarkFilled onClick={handleSaveJob}  className=" text-bright-sun-400 cursor-pointer" />
        :<IconBookmark onClick={handleSaveJob} className="text-mine-shaft-300 hover:text-bright-sun-400 cursor-pointer" />}
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
        <div className="font-semibold text-mine-shaft-200">&#8377;{props.packageOffered}-LPA</div>
        <div className="flex gap-1 text-xs text-mine-shaft-400 items-center">
          <IconClockHour3 className="h-5 w-5" stroke={1.5} />
          Posted {timeAgo(props.postTime)}
        </div>
      </div>
      <Link to={`/jobs/${props.id}`}>
      <Button fullWidth
          color="bright-sun.4"
          variant="outline"
        >
          View Jobs
        </Button>
      </Link>
    </div>
  );
};

export default JobCard;

import { IconCalendarMonth, IconCalendarWeekFilled, IconHeart, IconMapPin } from "@tabler/icons-react";
import { Avatar, Button, Divider, Modal, Text } from "@mantine/core";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { DateInput, TimeInput } from "@mantine/dates";

const TalentCard = (props: any) => {
  const [value, setValue] = useState<Date | null>(null);
  const [opened, { open, close }] = useDisclosure(false);
  const ref = useRef<HTMLInputElement>(null);
  const { name, role, company, topSkills = [], about, expectedCTC, location, image } = props;

  return (
    <div className="bg-mine-shaft-900 p-4 w-90 flex flex-col gap-3 rounded-xl hover:shadow-lg !shadow-bright-sun-400">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-full">
            <Avatar size="lg" src={image} alt={name} />
          </div>
          <div>
            <div className="font-semibold text-lg">{name}</div>
            <div className="text-sm text-mine-shaft-300">
              {role} &#x2022; {company}
            </div>
          </div>
        </div>
        <IconHeart className="text-mine-shaft-300 cursor-pointer" />
      </div>

      <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg text-xs">
        {Array.isArray(topSkills) &&
          topSkills.map((skill: string, index: number) => (
            <div key={index}>{skill}</div>
          ))}
      </div>

      <Text className="!text-xs text-justify !text-mine-shaft-300" lineClamp={3}>
        {about}
      </Text>

      <Divider size="xs" color="mine-shaft.7" />
          
      {
            props.invite?<div className="flex gap-1 text-mine-shaft-200 text-sm items-center ">
              <IconCalendarMonth stroke={1.5}/>
              Interview : August 27, 2024 10:00 AM
            </div>:
             <div className="flex justify-between">
             <div className="font-semibold text-mine-shaft-200">&#8377; {expectedCTC}</div>
             <div className="flex gap-1 text-xs text-mine-shaft-400 items-center">
               <IconMapPin className="h-5 w-5" stroke={1.5} />
               {location}
             </div>
           </div>
          }

      <Divider size="xs" color="mine-shaft.7" />

      <div className="flex gap-2 [&>*]:w-1/2  ">
      {
        !props.invite &&<>
        <Link to="/talent-profile">
          <Button color="bright-sun.4" variant="outline" fullWidth>
            Profile
          </Button>
        </Link>
        <div>
        {props.posted?<Button onClick={open} rightSection={<IconCalendarMonth className="w-5 h-5"/>} color="bright-sun.4" variant="light" fullWidth>
         Schedule
        </Button>:<Button color="bright-sun.4" variant="light" fullWidth>
          Message
        </Button>}
        </div>
        </>
      }
      {
        props.invite && <>
        <div><Button color="bright-sun.4" variant="outline" fullWidth>
          Accept
          </Button></div>
        <div><Button  color="bright-sun.4" variant="light" fullWidth>
            Reject
          </Button></div>
        </>
      }
      </div>
      <Modal opened={opened} onClose={close} title="schedule Interview" centered>
      <div className="flex flex-col gap-4">
      <DateInput value={value} minDate={new Date()} onChange={setValue}  label="Date "  placeholder="Enter Date"/>
      <TimeInput label="Time" ref={ref} onClick={() => ref.current?.focus()} />
      <Button color="bright-sun.4" variant="light" fullWidth>  Schedule </Button>
      </div>
      </Modal>
    </div>
  );
};

export default TalentCard;

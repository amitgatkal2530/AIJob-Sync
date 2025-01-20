import React, { useState } from "react";
import { MultiSelectCreatable } from "../JobHunt/MultiSelectCreatable";
import { dropdownData } from "../Data/JobsData";
import { Divider, Input, RangeSlider } from "@mantine/core";
import { searchFields } from "../Data/TalentData";
import { IconUserCircle } from "@tabler/icons-react";

const SearchBar = () => {
    const [value, setValue] = useState<[number, number]>([1, 100]);
    return (
        <div className="flex px-5 py-8  !text-mine-shaft-100 flex">
            <div className="flex items-center">
                <div className="text-bright-sun-400 bg-mine-shaft-900 rounded-full p-1.5 mr-2"><IconUserCircle size={20} /></div>
                <Input className="[&_input]:!placeholder-mine-shaft-300" variant="unstyled" placeholder="Talent Name" />
            </div>
            {searchFields.map((data, index) => (<>
                <div key={index} className="w-1/5">
                    <MultiSelectCreatable{...data} />
                </div>
                <Divider mr="xs" size="xs" orientation="vertical" />
                </>
            ))}
            <div className="w-1/5">
            <div className="flex justify-between">
                <div>Salary</div>
                <div> &#8377;{value[0]} LPA-&#8377;{value[1]} LPA </div>
            </div>
            <RangeSlider color="bright-sun.4"size= "xs" value={value} onChange={setValue} />
            </div>
        </div>
    );
};

export default SearchBar;

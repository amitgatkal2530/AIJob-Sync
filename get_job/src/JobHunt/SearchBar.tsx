import React, { useState } from "react";
import { MultiSelectCreatable } from "./MultiSelectCreatable";
import { dropdownData } from "../Data/JobsData";
import { Divider, RangeSlider } from "@mantine/core";

const SearchBar = () => {
    const [value, setValue] = useState<[number, number]>([1, 100]);
    return (
        <div className="flex px-5 py-8  ">
            {dropdownData.map((data, index) => (<>
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

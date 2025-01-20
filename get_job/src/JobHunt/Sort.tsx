import { useState } from 'react';
import { Button, Combobox, useCombobox, Text, Box, ActionIcon } from '@mantine/core';
import React from 'react';
import { IconAdjustmentsAlt } from '@tabler/icons-react';

const opt = ['Relevence', 'Most Recent', 'Salary(Low to High)', 'Salary(High to Low)'];

export function Sort() {
  const [selectedItem, setSelectedItem] = useState<string | null>('Relevence');
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options =opt.map((item) => (
    <Combobox.Option className="!text-xs" value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <>
      <Combobox
        store={combobox}
        width={150}
        position="bottom-start"
       
        onOptionSubmit={(val) => {
          setSelectedItem(val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
        
          <div onClick={()=>combobox.toggleDropdown()} className=" cursor-pointer border border-bright-sun-400 flex px-2 gap-2 py-1 text-sm rounded-xl items-center">
            {selectedItem}<ActionIcon color="bright-sun.4" variant="transperent" aria-label="Settings"><IconAdjustmentsAlt className="h-5 w-5 text-bright-sun-400"/>
            </ActionIcon>
          </div>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
}
// components/Tabs.js
/** @jsxImportSource theme-ui */
//@ts-nocheck
import { useState } from 'react';
import { Box, Button, Flex, Text } from 'krado-react';

const Tabs = ({ tabs, onChange }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
    onChange(index);
  };

  return (
    <Flex sx={{ mb: 3 }}>
      {tabs.map((tab, index) => (
        <Button
          key={index}
          onClick={() => handleTabClick(index)}
          sx={{
            borderRadius: 0,
            color: activeTab === index ? 'action.active' : 'text.secondary',
            backgroundColor:
              activeTab === index ? 'accent.regular' : 'transparent',
            fontSize: 2,
            fontWeight: activeTab === index ? 'bold' : 'normal',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: 'accent.regular'
            }
          }}
          size='small'
        >
          {tab}
        </Button>
      ))}
    </Flex>
  );
};

export default Tabs;

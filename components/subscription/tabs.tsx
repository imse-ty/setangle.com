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
    <Flex sx={{ borderBottom: '1px solid #ddd', mb: 3 }}>
      {tabs.map((tab, index) => (
        <Button
          key={index}
          onClick={() => handleTabClick(index)}
          sx={{
            borderBottom:
              activeTab === index ? '2px solid #33e' : '2px solid transparent',
            bg: 'transparent',
            borderRadius: 0,
            color: activeTab === index ? 'action.active' : 'text.secondary',
            mx: 2,
            fontSize: 2,
            fontWeight: activeTab === index ? 'bold' : 'normal',
            cursor: 'pointer'
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

// components/PricingCalculator.js
/** @jsxImportSource theme-ui */
//@ts-nocheck
import { useState } from 'react';
import { Box, Button, Text, Flex, Grid, Container } from 'krado-react';
import { Badge, Checkbox } from 'theme-ui';
import { motion } from 'framer-motion';
import Tabs from './tabs';
import ScaleInEffect from '../scale-in-effect';

function Card({ children, ...rest }) {
  return (
    <Flex
      sx={{
        padding: [4, 5],
        flex: '1 1 25%',
        textAlign: 'left',
        borderRadius: [2, 3],
        backgroundColor: 'background',
        flexDirection: 'column',
        gap: 2,
        alignItems: 'left',
        justifyContent: 'center',
        boxShadow: 'soft.low',
        transition: 'transform 325ms ease, box-shadow 325ms ease',
        '&:hover': {
          transform: 'scale(1.02)',
          boxShadow: 'soft.highMiddle'
        }
      }}
      {...rest}
    >
      {children}
    </Flex>
  );
}

function SectionTag({ icon, href, ...rest }) {
  return (
    <Button
      size='small'
      href={href}
      leftIcon={icon}
      sx={{
        display: 'flex',
        paddingX: 2,
        paddingY: 2,
        alignItems: 'center',
        fontSize: '13px',
        fontWeight: 500,
        color: 'text.secondary',
        backgroundColor: 'secondary.bold',
        '&:hover': {
          color: 'secondary.bold'
        },
        '&:active': {
          backgroundColor: 'secondary.light'
        }
      }}
      {...rest}
    />
  );
}

const tasks = {
  small: [
    {
      name: '10-second Infographic',
      credits: 50,
      description: 'Short, engaging visual summaries.'
    },
    {
      name: 'Simple Logo Animation',
      credits: 50,
      description: 'Basic animation to bring your logo to life.'
    },
    {
      name: 'Social Media Templates',
      credits: 50,
      description: 'Ready-to-use animated templates.'
    },
    {
      name: 'Infographic Template',
      credits: 50,
      description: 'Visually appealing infographic layouts.'
    },
    {
      name: 'Basic Text Animations',
      credits: 50,
      description: 'Simple, dynamic text effects.'
    },
    {
      name: 'Major Edits to Existing Videos',
      credits: 50,
      description: 'Significant updates and improvements.'
    },
    {
      name: 'Captions/Subtitles',
      credits: 50,
      description: 'Add text to your videos for better accessibility.'
    },
    {
      name: 'Lower Thirds',
      credits: 50,
      description: 'Professional name tags and titles for videos.'
    },
    {
      name: 'Social Media Motion Graphics',
      credits: 50,
      description: 'Engaging animations for posts.'
    },
    {
      name: 'Custom Animated GIFs',
      credits: 50,
      description: 'Unique, branded GIFs for social media.'
    }
  ],
  medium: [
    {
      name: 'Stream Package',
      credits: 100,
      description: 'Overlays, alerts, and transitions for live streaming.'
    },
    {
      name: 'YouTube Package',
      credits: 100,
      description: 'Includes intro, outro, and lower-thirds.'
    },
    {
      name: 'Video Podcast Package',
      credits: 100,
      description: 'Overlays, lower-thirds, and transitions.'
    },
    {
      name: 'Extensive Video Edits',
      credits: 100,
      description: 'Major updates and enhancements.'
    },
    {
      name: 'Complex Logo Bumper',
      credits: 100,
      description: 'Detailed logo animation for branding.'
    },
    {
      name: 'Animated Presentations',
      credits: 100,
      description: 'Engaging animated pitch decks.'
    },
    {
      name: 'Data Visualizations',
      credits: 100,
      description: 'Animated charts and graphs for presentations.'
    }
  ],
  large: [
    {
      name: '20-second Kinetic-Type Explainer Video',
      credits: 300,
      description: 'Dynamic, text-driven animation.'
    },
    {
      name: '20-second Kinetic-Type Title Sequence',
      credits: 300,
      description: 'Engaging opening titles.'
    },
    {
      name: 'Product Animation',
      credits: 300,
      description: 'Detailed showcase of your product.'
    },
    {
      name: 'Event Graphics Package',
      credits: 300,
      description: 'Lower-thirds, session title slides, countdown timer.'
    },
    {
      name: 'Abstract Trailers & Teasers',
      credits: 300,
      description: 'Engaging promotional videos.'
    },
    {
      name: 'Marketing Campaign Package',
      credits: 300,
      description:
        'Campaign overview video, social media ad, and one animated post.'
    }
  ]
};

const PricingCalculator = () => {
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [currentTab, setCurrentTab] = useState('small');

  const toggleTask = (task) => {
    setSelectedTasks((prev) =>
      prev.includes(task) ? prev.filter((t) => t !== task) : [...prev, task]
    );
  };

  const totalCreditsUsed = selectedTasks.reduce(
    (sum, task) => sum + task.credits,
    0
  );

  const baseCredits = 500;
  const additionalCreditCost = 2500; // cost for additional 250 credits
  const totalAdditionalCredits = Math.ceil(
    Math.max(0, totalCreditsUsed - baseCredits) / 250
  );
  const totalCost = 5000 + totalAdditionalCredits * additionalCreditCost;

  return (
    <ScaleInEffect>
      <Container
        id='pricing'
        sx={{
          display: 'flex',
          gap: 5,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: 6,
          paddingY: 5,
          minHeight: '20vh',
          borderRadius: 4,
          backgroundColor: 'surface.thin'
        }}
      >
        <Text as='h2' sx={{ mb: 3 }}>
          Pricing Calculator
        </Text>

        <Tabs
          tabs={['Small Tasks', 'Medium Tasks', 'Large Tasks']}
          onChange={(index) =>
            setCurrentTab(
              index === 0 ? 'small' : index === 1 ? 'medium' : 'large'
            )
          }
        />

        <Box as={motion.div} layout>
          <Grid columns={[1, 2, 3]} gap={3} sx={{ mt: 3 }}>
            {tasks[currentTab].map((task) => (
              <Card
                key={task.name}
                sx={{
                  p: 3,
                  cursor: 'pointer',
                  border: selectedTasks.includes(task)
                    ? '2px solid #33e'
                    : '1px solid #ddd',
                  bg: selectedTasks.includes(task)
                    ? 'rgba(51, 119, 238, 0.1)'
                    : 'white'
                }}
                onClick={() => toggleTask(task)}
              >
                <Flex
                  sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <Text as='p'>{task.name}</Text>
                  <Checkbox
                    checked={selectedTasks.includes(task)}
                    onChange={() => toggleTask(task)}
                  />
                </Flex>
                <Text as='p' sx={{ fontSize: 1, color: 'gray' }}>
                  {task.description}
                </Text>
                <Text as='p'>({task.credits} credits)</Text>
                <SectionTag
                  sx={{
                    maxWidth: '80px',
                    bg:
                      currentTab === 'small'
                        ? 'surface.thin'
                        : currentTab === 'medium'
                        ? 'surface.extralight'
                        : 'surface.light'
                  }}
                >
                  {currentTab.charAt(0).toUpperCase() + currentTab.slice(1)}
                </SectionTag>
              </Card>
            ))}
          </Grid>
        </Box>

        <Flex sx={{ mt: 4, justifyContent: 'space-between' }}>
          <Text>Total Credits Used: {totalCreditsUsed}</Text>
          <Text>Total Cost: ${totalCost}</Text>
        </Flex>
        {totalCreditsUsed > baseCredits && (
          <Text sx={{ mt: 2 }}>
            Additional Credits Needed: {totalAdditionalCredits * 250}
          </Text>
        )}
        <Button sx={{ mt: 3 }} onClick={() => setSelectedTasks([])}>
          Reset Selection
        </Button>
      </Container>
    </ScaleInEffect>
  );
};

export default PricingCalculator;

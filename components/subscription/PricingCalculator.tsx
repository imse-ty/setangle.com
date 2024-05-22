// components/PricingCalculator.js
/** @jsxImportSource theme-ui */
//@ts-nocheck
import { useState } from 'react';
import { Box, Button, Flex, Grid, Container, colors } from 'krado-react';
import { Badge, Checkbox, Slider } from 'theme-ui';
import { motion } from 'framer-motion';
import Tabs from './tabs';
import ScaleInEffect from '../scale-in-effect';
import Text from '../fixed-krado-components/Text';
import Heading from '../fixed-krado-components/Heading';

function Card({ children, ...rest }) {
  return (
    <Flex
      sx={{
        padding: 4,
        textAlign: 'left',
        borderRadius: [2, 3],
        backgroundColor: 'background',
        flexDirection: 'column',
        alignItems: 'left',
        justifyContent: 'center',
        boxShadow: 'soft.low',
        transition:
          'background-color 325ms ease, transform 325ms ease, box-shadow 325ms ease',

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
  const [additionalCredits, setAdditionalCredits] = useState(0);
  const [largeTaskCount, setLargeTaskCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const toggleTask = (task) => {
    const totalCreditsUsed = selectedTasks.reduce(
      (sum, task) => sum + task.credits,
      0
    );

    if (selectedTasks.includes(task)) {
      setSelectedTasks((prev) => prev.filter((t) => t !== task));
      if (task.credits === 300) {
        setLargeTaskCount(largeTaskCount - 1);
      }
      setErrorMessage('');
    } else {
      if (task.credits === 300 && largeTaskCount >= 2) {
        setErrorMessage(
          'To ensure top-quality work, you can select up to 2 large tasks per month.'
        );
        return;
      }
      if (totalCreditsUsed + task.credits <= 500 + additionalCredits) {
        setSelectedTasks((prev) => [...prev, task]);
        if (task.credits === 300) {
          setLargeTaskCount(largeTaskCount + 1);
        }
        setErrorMessage('');
      } else {
        setErrorMessage(
          "You're out of credits! Add more to keep creating awesome content."
        );
      }
    }
  };

  const totalCreditsUsed = selectedTasks.reduce(
    (sum, task) => sum + task.credits,
    0
  );

  const baseCredits = 500;

  const additionalCreditCost = 2500; // cost for additional 250 credits
  const totalAdditionalCredits = Math.ceil(additionalCredits / 250);
  const totalCost = 5000 + totalAdditionalCredits * additionalCreditCost;
  const monthlyCost = 5000;

  const resetSelection = () => {
    setSelectedTasks([]);
    setLargeTaskCount(0);
    setErrorMessage('');
  };
  return (
    <ScaleInEffect>
      <Container
        id='pricing'
        paddingX={[0]}
        sx={{
          display: 'flex',
          gap: 5,
          flexDirection: ['column', null, null, 'row'],
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: 6,
          height: ['none', null, null, '70vh'],
          borderRadius: 4,
          backgroundColor: 'surface.thin'
        }}
      >
        <Flex
          sx={{
            flex: 6,
            flexDirection: 'column',
            paddingTop: 5,
            paddingX: [3, 4, 5],
            height: '100%',
            width: '100%'
          }}
        >
          <Flex
            sx={{
              maxWidth: '1000px',
              gap: 3,
              flexDirection: 'column',
              marginBottom: 5
            }}
          >
            <Text variant='body.pretext'>Use cases and scenarios</Text>

            <Heading>Mix and match</Heading>
            <Text>
              Customize your design experience with our versatile credit-based
              system. Whether you need a focus on the small details, a balanced
              selection of tasks, or an extra boost for larger projects, its up
              to you how you spend your credits.
            </Text>
          </Flex>
          <Tabs
            tabs={[
              'Small tasks (unlimited revisions)',
              'Medium tasks (2 rounds of revisions)',
              'Large tasks (2 rounds of revisions)'
            ]}
            onChange={(index) =>
              setCurrentTab(
                index === 0 ? 'small' : index === 1 ? 'medium' : 'large'
              )
            }
          />

          <Box
            as={motion.div}
            layout
            sx={{ height: '100%', overflowY: 'auto', paddingX: 2 }}
          >
            <Grid columns={[1, 2, null, 3]} gap={3} sx={{ mt: 3 }}>
              {tasks[currentTab].map((task) => (
                <Card
                  key={task.name}
                  sx={{
                    cursor: 'pointer',
                    border: selectedTasks.includes(task) && '1px solid black',
                    bg: selectedTasks.includes(task)
                      ? 'accent.light'
                      : 'background'
                  }}
                  onClick={() => toggleTask(task)}
                >
                  <Flex sx={{ flexDirection: 'column', gap: 2 }}>
                    <Flex
                      sx={{
                        flexDirection: 'column',
                        gap: 1,
                        marginBottom: 2
                      }}
                    >
                      <Text as='p' sx={{ fontWeight: 'bold' }}>
                        {task.name}
                      </Text>
                      <Text variant='body.footnote'>
                        {task.credits} credits
                      </Text>
                    </Flex>

                    <Text
                      as='p'
                      variant='body.smallParagraph'
                      sx={{ color: 'text.secondary' }}
                    >
                      {task.description}
                    </Text>
                    <Flex sx={{ gap: 2 }}>
                      <SectionTag
                        sx={{
                          maxWidth: '80px',
                          bg:
                            currentTab === 'small'
                              ? 'surface.extralight'
                              : currentTab === 'medium'
                              ? 'surface.extralight'
                              : 'surface.extralight'
                        }}
                      >
                        {currentTab.charAt(0).toUpperCase() +
                          currentTab.slice(1)}
                      </SectionTag>
                    </Flex>
                  </Flex>
                </Card>
              ))}
            </Grid>
          </Box>
        </Flex>

        <Flex
          sx={{
            padding: 5,
            flex: 3,
            gap: 5,
            width: '100%',
            height: '100%',
            flexDirection: 'column',
            backgroundColor: 'secondary.regular',
            textAlign: 'left',
            justifyContent: 'space-between',
            borderRadius: 4
          }}
        >
          <Flex sx={{ flexDirection: 'column', gap: [3, 4] }}>
            <Flex sx={{ flexDirection: 'column', gap: 2 }}>
              <Text variant='body.pretext' sx={{ color: 'text.secondary' }}>
                Total cost{' '}
              </Text>
              <Heading>${totalCost}</Heading>
            </Flex>

            <Flex sx={{ flexDirection: 'column', gap: 2 }}>
              <Text variant='body.pretext' sx={{ color: 'text.secondary' }}>
                Monthly cost
              </Text>
              <Heading variant='display.h5'>{monthlyCost}</Heading>
            </Flex>

            <Flex sx={{ flexDirection: 'column', gap: 2 }}>
              <Text variant='body.pretext' sx={{ color: 'text.secondary' }}>
                Add-on credits cost
              </Text>
              <Heading variant='display.h5'>
                ${totalAdditionalCredits * additionalCreditCost}
              </Heading>
            </Flex>

            <Flex sx={{ flexDirection: 'column', gap: 2 }}>
              <Text variant='body.pretext' sx={{ color: 'text.secondary' }}>
                Total credits used{' '}
              </Text>
              <Heading variant='display.h5'>{totalCreditsUsed}</Heading>
            </Flex>

            <Flex sx={{ flexDirection: 'column', gap: 2 }}>
              <Text variant='body.pretext' sx={{ color: 'text.secondary' }}>
                Base credits left
              </Text>
              <Heading variant='display.h5'>
                {baseCredits - totalCreditsUsed > 0
                  ? baseCredits - totalCreditsUsed
                  : 0}
              </Heading>
            </Flex>

            <Flex sx={{ flexDirection: 'column', gap: 2 }}>
              <Text variant='body.pretext' sx={{ color: 'text.secondary' }}>
                Add-on credits
              </Text>
              <Slider
                color='primary.regular'
                backgroundColor='accent.bold'
                min={0}
                max={1000}
                step={additionalCreditCost / 10}
                value={additionalCredits}
                onChange={(e) => setAdditionalCredits(parseInt(e.target.value))}
              />
              <Heading variant='display.h5'>
                +{(totalAdditionalCredits * additionalCreditCost) / 10}
              </Heading>
            </Flex>
            {errorMessage && (
              <Box
                sx={{
                  backgroundColor: colors.oshun100,
                  padding: 3,
                  borderRadius: 2
                }}
              >
                <Text>{errorMessage}</Text>
              </Box>
            )}
          </Flex>

          <Flex sx={{ gap: 3, flexDirection: ['column', 'row'] }}>
            <Button sx={{ width: '100%' }} onClick={() => setSelectedTasks([])}>
              Book call
            </Button>
            <Button
              variant='ghost'
              sx={{ width: '100%' }}
              onClick={resetSelection}
            >
              Reset selection
            </Button>
          </Flex>
        </Flex>
      </Container>
    </ScaleInEffect>
  );
};

export default PricingCalculator;

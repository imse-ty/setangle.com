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
        padding: [3, null, 4],
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
      size="small"
      href={href}
      leftIcon={icon}
      sx={{
        display: 'flex',
        paddingX: [1, 2],
        paddingY: [1, 2],
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
      name: 'Simple logo animation',
      credits: 50,
      description: 'Basic animation to bring your logo to life.',
      revisions: 'Unlimited revsions'
    },
    {
      name: 'Social media templates',
      credits: 50,
      description: 'Ready-to-use animated templates.',
      revisions: 'Unlimited revsions'
    },
    {
      name: '10-second template infographic',
      credits: 50,
      description: 'Visually appealing infographic layouts.',
      revisions: 'Unlimited revsions'
    },
    {
      name: '10-second custom infographic',
      credits: 50,
      description: 'For when a template isn’t enough',
      revisions: 'Unlimited revsions'
    },
    {
      name: 'Basic text animations',
      credits: 50,
      description: 'Simple, dynamic text effects.',
      revisions: 'Unlimited revsions'
    },
    {
      name: 'Minor edits to existing videos',
      credits: 50,
      description:
        'For simple updates and improvements on medium and large tasks, small edits are free',
      revisions: 'Unlimited revsions'
    },
    {
      name: 'Captions',
      credits: 50,
      description: 'Add text to your videos for better accessibility.',
      revisions: 'Unlimited revsions'
    },
    {
      name: 'Lower-thirds',
      credits: 50,
      description: 'Professional name tags and titles for videos.',
      revisions: 'Unlimited revsions'
    },
    {
      name: 'Social media motion graphics',
      credits: 50,
      description: 'Engaging animations for posts.',
      revisions: 'Unlimited revsions'
    },
    {
      name: 'Custom animated GIFs',
      credits: 50,
      description: 'Unique, branded GIFs for social media.',
      revisions: 'Unlimited revsions'
    }
  ],
  medium: [
    {
      name: 'Stream package',
      credits: 100,
      description: 'Overlays, alerts, and transitions for live streaming.',
      revisions: 'Up to 2 rounds'
    },

    {
      name: 'YouTube intro',
      credits: 100,
      description: 'Branded opening sequence for YouTube videos.',
      revisions: 'Up to 2 rounds'
    },
    {
      name: 'YouTube outro',
      credits: 100,
      description: 'Branded closing sequence for YouTube videos.',
      revisions: 'Up to 2 rounds'
    },
    {
      name: 'Podcast overlays',
      credits: 100,
      description: 'Custom-designed graphical overlays for video podcasts.',
      revisions: 'Up to 2 rounds'
    },
    {
      name: 'Stream/podcast full-screen graphics',
      credits: 100,
      description:
        'Slides or full-screen animations to emphasize particular talking points or transitions.',
      revisions: 'Up to 2 rounds'
    },

    {
      name: 'Major edits to existing videos',
      credits: 100,
      description: 'Major updates and enhancements.',
      revisions: 'Up to 2 rounds'
    },
    {
      name: 'Brand identity bento box',
      credits: 100,
      description: 'Includes font, color, and brand guidelines',
      revisions: 'Up to 2 rounds'
    },
    {
      name: 'Complex logo bumper',
      credits: 100,
      description: 'Detailed logo animation for branding.',
      revisions: 'Up to 2 rounds'
    },
    {
      name: 'Animated presentations',
      credits: 100,
      description: 'Engaging animated pitch decks.',
      revisions: 'Up to 2 rounds'
    },
    {
      name: 'Data visualizations',
      credits: 100,
      description: 'Animated charts and graphs for presentations.',
      revisions: 'Up to 2 rounds'
    }
  ],
  large: [
    {
      name: '20-second kinetic-type explainer video',
      credits: 300,
      description: 'Dynamic, text-driven animation.',
      revisions: 'Up to 2 rounds'
    },
    {
      name: '20-second kinetic-type title sequence',
      credits: 300,
      description: 'Engaging opening titles.',
      revisions: 'Up to 2 rounds'
    },

    {
      name: 'Product animation',
      credits: 300,
      description: 'Detailed showcase of your product.',
      revisions: 'Up to 2 rounds'
    },
    {
      name: 'Event graphics package',
      credits: 300,
      description: 'Lower-thirds, session title slides, countdown timer.',
      revisions: 'Up to 2 rounds'
    },
    {
      name: 'Abstract Trailers & Teaser',
      credits: 300,
      description: 'Engaging promotional videos.',
      revisions: 'Up to 2 rounds'
    },
    {
      name: 'Marketing campaign package',
      credits: 300,
      description:
        'Campaign overview video, social media ad, and one animated post.',
      revisions: 'Up to 2 rounds'
    }
  ]
};

const PricingCalculator = () => {
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [currentTab, setCurrentTab] = useState('small');
  const [additionalCredits, setAdditionalCredits] = useState(0);
  const [largeTaskCount, setLargeTaskCount] = useState(0);
  const [smallTaskCount, setSmallTaskCount] = useState(0);
  const [mediumTaskCount, setMediumTaskCount] = useState(0);
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
      } else if (task.credits === 100) {
        setMediumTaskCount(mediumTaskCount - 1);
      } else if (task.credits === 50) {
        setSmallTaskCount(smallTaskCount - 1);
      }
      setErrorMessage('');
    } else {
      if (task.credits === 300 && largeTaskCount >= 2) {
        setErrorMessage(
          'To ensure top-quality work, you can select up to 2 large tasks per month.'
        );
        return;
      }
      if (task.credits === 100 && mediumTaskCount >= 5) {
        setErrorMessage(
          'To ensure top-quality work, you can select up to 5 medium tasks per month.'
        );
        return;
      }
      if (task.credits === 50 && smallTaskCount >= 10) {
        setErrorMessage(
          'To ensure top-quality work, you can select up to 10 small tasks per month.'
        );
        return;
      }
      if (totalCreditsUsed + task.credits <= 500 + additionalCredits) {
        setSelectedTasks((prev) => [...prev, task]);
        if (task.credits === 300) {
          setLargeTaskCount(largeTaskCount + 1);
        } else if (task.credits === 100) {
          setMediumTaskCount(mediumTaskCount + 1);
        } else if (task.credits === 50) {
          setSmallTaskCount(smallTaskCount + 1);
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
  const monthlyCost = 5000;
  const totalCost = monthlyCost + totalAdditionalCredits * additionalCreditCost;

  const resetSelection = () => {
    setSelectedTasks([]);
    setLargeTaskCount(0);
    setMediumTaskCount(0);
    setSmallTaskCount(0);
    setErrorMessage('');
  };
  return (
    <ScaleInEffect>
      <Container
        id="calculator"
        paddingX={[0]}
        sx={{
          display: 'flex',
          gap: [4, 5],
          flexDirection: ['column', null, 'row'],
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: 6,
          height: ['none', '90vh', null, null, '70vh'],
          borderRadius: 4,
          backgroundColor: 'surface.thin'
        }}
      >
        <Flex
          sx={{
            flex: 6,
            flexDirection: 'column',
            paddingTop: 5,
            paddingRight: [3, 4, 0],
            paddingLeft: [3, 4, 5],
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
            <Text variant="body.pretext">Pricing calculator</Text>

            <Heading>Design your perfect month</Heading>
            <Text>
              Use our interactive pricing calculator to build the perfect motion
              design subscription tailored to your needs. Select tasks, manage
              your credits, and see your total cost in real-time.{' '}
              <strong>
                Request unlimited revisions for small tasks anytime!
              </strong>{' '}
              Get started by choosing your desired tasks and adding any
              additional credits if needed.
            </Text>
          </Flex>
          <Tabs
            tabs={['Small tasks', 'Medium tasks ', 'Large tasks']}
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
            <Grid columns={[1, 2, null, null, 3]} gap={3} sx={{ mt: 3 }}>
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
                  <Flex
                    sx={{
                      flexDirection: 'column',

                      gap: 3
                    }}
                  >
                    <Flex
                      sx={{
                        flexDirection: 'column',
                        gap: 1
                      }}
                    >
                      <Text
                        as="p"
                        variant="display.h6"
                        sx={{ fontWeight: 'bold' }}
                      >
                        {task.name}
                      </Text>
                      <Text variant="body.footnote">
                        {task.credits} credits
                      </Text>
                    </Flex>

                    <Text
                      as="p"
                      variant="body.smallParagraph"
                      sx={{
                        color: 'text.secondary',
                        display: ['none', 'block']
                      }}
                    >
                      {task.description}
                    </Text>
                    <Flex sx={{ gap: 2, flexWrap: 'wrap' }}>
                      <SectionTag
                        sx={{
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
                      <SectionTag
                        sx={{
                          bg:
                            currentTab === 'small'
                              ? 'surface.extralight'
                              : currentTab === 'medium'
                              ? 'surface.extralight'
                              : 'surface.extralight'
                        }}
                      >
                        {task.revisions}
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
              <Text variant="body.pretext" sx={{ color: 'text.secondary' }}>
                Total cost{' '}
              </Text>
              <Heading>${totalCost}</Heading>
            </Flex>

            <Flex sx={{ flexDirection: 'column', gap: 2 }}>
              <Text variant="body.pretext" sx={{ color: 'text.secondary' }}>
                Monthly cost
              </Text>
              <Heading variant="display.h5">${monthlyCost}</Heading>
            </Flex>

            <Flex sx={{ flexDirection: 'column', gap: 2 }}>
              <Text variant="body.pretext" sx={{ color: 'text.secondary' }}>
                Add-on credits cost
              </Text>
              <Heading variant="display.h5">
                ${totalAdditionalCredits * additionalCreditCost}
              </Heading>
            </Flex>

            <Flex sx={{ flexDirection: 'column', gap: 2 }}>
              <Text variant="body.pretext" sx={{ color: 'text.secondary' }}>
                Total credits used{' '}
              </Text>
              <Heading variant="display.h5">{totalCreditsUsed}</Heading>
            </Flex>

            <Flex sx={{ flexDirection: 'column', gap: 2 }}>
              <Text variant="body.pretext" sx={{ color: 'text.secondary' }}>
                Base credits left
              </Text>
              <Heading variant="display.h5">
                {baseCredits - totalCreditsUsed > 0
                  ? baseCredits - totalCreditsUsed
                  : 0}
              </Heading>
            </Flex>

            <Flex sx={{ flexDirection: 'column', gap: 2 }}>
              <Text variant="body.pretext" sx={{ color: 'text.secondary' }}>
                Add-on credits
              </Text>
              <Slider
                color="primary.regular"
                backgroundColor="accent.bold"
                min={0}
                max={1000}
                step={additionalCreditCost / 10}
                value={additionalCredits}
                onChange={(e) => setAdditionalCredits(parseInt(e.target.value))}
              />
              <Heading variant="display.h5">
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
              variant="ghost"
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

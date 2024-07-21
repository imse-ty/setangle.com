/** @jsxImportSource theme-ui */
//@ts-nocheck

import { Box, Button } from 'krado-react';
import Heading from './fixed-krado-components/Heading';
import { Flex } from 'theme-ui';
import Text from './fixed-krado-components/Text';
import {
  MdArrowRight,
  MdArrowRightAlt,
  MdEast,
  MdExpandMore,
  MdPlayArrow,
  MdSouth
} from 'react-icons/md';
import { motion } from 'framer-motion';

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
export function OverviewCard({
  showArrow,
  buttonLabel,
  buttonOnClick,
  icon,
  heading,
  text,
  isHeadingSmall
}) {
  return (
    <Card>
      <Box
        sx={{
          color: 'surface.light',
          fontSize: [5, 7],
          marginBottom: 3
        }}
      >
        {icon}
      </Box>

      <Flex
        sx={{
          position: 'relative',
          flexDirection: 'column',
          gap: 2
        }}
      >
        {showArrow && (
          <Flex
            sx={{
              justifyContent: 'left',

              gap: 2,
              alignItems: 'left',
              marginBottom: 2,
              color: 'text.primary'
            }}
          >
            <Text variant='body.pretext' sx={{ color: 'inherit' }}>
              You&apos;re here!
            </Text>
            <motion.span
              animate={{ y: 4 }}
              transition={{
                type: 'tween',
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'mirror',
                duration: 1.2
              }}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <MdSouth sx={{ fontSize: 6 }} />
            </motion.span>
          </Flex>
        )}
        <Heading
          as='h3'
          variant={isHeadingSmall ? 'display.h5' : 'display.h4'}
          sx={{ color: 'text.primary' }}
        >
          {heading}
        </Heading>

        {text && (
          <Text as='p' sx={{ color: 'text.secondary' }}>
            {text}
          </Text>
        )}
      </Flex>
      {buttonLabel && (
        <Button size='small' marginTop='auto' onClick={buttonOnClick}>
          {buttonLabel}
        </Button>
      )}
    </Card>
  );
}

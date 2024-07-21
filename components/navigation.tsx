/** @jsxImportSource theme-ui */
// @ts-nocheck

import { Flex, Button } from 'krado-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Text from './fixed-krado-components/Text';
import AvailabilityIndicator from './status-indicator';

function MenuItem({ children, active, href }) {
  return (
    <Text
      as='li'
      variant='body.footnote'
      sx={{
        display: ['none', null, 'flex'],
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 0,
        color: active ? 'action.active' : 'text.primary',
        padding: 2,
        fontWeight: 600,
        borderRadius: 1,
        cursor: 'pointer',
        transition: 'color 400ms ease, box-shadow 400ms ease',
        boxShadow: active ? 'hard.high' : 'none',
        '&:hover': {
          color: 'secondary.regular'
        }
      }}
    >
      <Link href={href} sx={{ textDecoration: 'none', color: 'inherit' }}>
        {children}
      </Link>
    </Text>
  );
}

export default function Navigation({
  isHidden,
  buttonOnClick,
  showFaqMenu,
  showPricing,
  showPeopleContactButton,
  formLink
}) {
  const variants = {
    hidden: {
      opacity: 0,
      bottom: '0px',
      transitionEnd: {
        display: 'none'
      }
    },
    show: {
      opacity: 1,
      bottom: '16px',
      display: 'flex'
    }
  };

  return (
    <Flex
      as={motion.nav}
      variants={variants}
      initial='hidden'
      animate={isHidden ? 'hidden' : 'show'}
      exit='hidden'
      key='navigation'
      sx={{
        zIndex: 3,
        color: 'text.primary',
        padding: 2,
        borderRadius: 2
      }}
    >
      <Flex
        as='ul'
        sx={{
          justifyContent: 'space-between',

          width: '100%',
          gap: 1,
          listStyle: 'none',
          paddingLeft: 0
        }}
      >
        {/* <MenuItem href='#'>Home</MenuItem> */}

        {showFaqMenu ? (
          <>
            <MenuItem href='#reel'>Reel</MenuItem>
            <MenuItem href='#approach'>Approach</MenuItem>
            <MenuItem href='#work'>Work</MenuItem>
            <MenuItem href='#services'>Services</MenuItem>
            <MenuItem href='#clientele'>Clientele</MenuItem>
            <MenuItem href='#process'>Process</MenuItem>
            {showPricing && <MenuItem href='#pricing'>Pricing</MenuItem>}
          </>
        ) : (
          <>
            <MenuItem href='/'>Home</MenuItem>
            <MenuItem href='/#reel'>Reel</MenuItem>
            <MenuItem href='/#work'>Work</MenuItem>
            <MenuItem href='/#services'>Services</MenuItem>

            <MenuItem href='/#process'>Process</MenuItem>
            <Flex
              sx={{
                display: ['none', null, 'flex'],
                marginLeft: 2,
                gap: '2px',
                alignItems: 'center'
              }}
            >
              <AvailabilityIndicator sx={{ marginBottom: '3px' }} />
              <MenuItem href='/work-with-us'>Work with us</MenuItem>
            </Flex>
          </>
        )}

        {showPeopleContactButton &&
          (formLink ? (
            <a href={formLink} target='_blank' rel='noindex nofollow'>
              <Button size='small' sx={{ marginLeft: 3 }}>
                Apply now
              </Button>
            </a>
          ) : (
            <a
              href='https://tally.so/r/w8KKKO'
              target='_blank'
              rel='noindex nofollow'
            >
              <Button size='small' sx={{ marginLeft: 3 }}>
                Apply now
              </Button>
            </a>
          ))}

        {!showPeopleContactButton && (
          <Button size='small' onClick={buttonOnClick} sx={{ marginLeft: 3 }}>
            Book a call
          </Button>
        )}
      </Flex>
    </Flex>
  );
}

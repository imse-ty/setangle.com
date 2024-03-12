/** @jsxImportSource theme-ui */
// @ts-nocheck

import { Flex, Button } from 'krado-react';
import Text from './fixed-krado-components/Text';
import Link from 'next/link';
import { motion } from 'framer-motion';

function MenuItem({ children, active, href }) {
  return (
    <Text
      as='li'
      variant='body.footnote'
      sx={{
        display: ['none', 'flex'],
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

export default function Navigation({ isHidden }) {
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
        <MenuItem href='#summary'>Summary</MenuItem>
        <MenuItem href='#approach'>Approach</MenuItem>
        <MenuItem href='#work'>Work</MenuItem>
        <MenuItem href='#services'>Services</MenuItem>
        <MenuItem href='#clientele'>Clientele</MenuItem>
        <MenuItem href='#process'>Process</MenuItem>
        <MenuItem href='#pricing'>Pricing</MenuItem>
        <MenuItem href='#newsletter'>Newsletter</MenuItem>
        <a href='#contact' sx={{ marginLeft: 3 }}>
          <Button size='small'>Book a call</Button>
        </a>
      </Flex>
    </Flex>
  );
}

/** @jsxImportSource theme-ui */
//@ts-nocheck

import { Flex, Box, Button } from 'krado-react';
import Heading from './fixed-krado-components/Heading';
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

export function Card({ children, ...rest }) {
  return (
    <Flex
      sx={{
        padding: [4, 5],
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
    >
      {children}
    </Flex>
  );
}

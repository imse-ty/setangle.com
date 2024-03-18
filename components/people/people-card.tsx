/** @jsxImportSource theme-ui */
// @ts-nocheck

import React, { useState } from 'react';
import { Flex, Divider, Button } from 'krado-react';
import Text from '../fixed-krado-components/Text';
import { MdArrowRight, MdArrowRightAlt, MdEast, MdStar } from 'react-icons/md';
import Link from 'next/link';
import Modal from '../modal';
import RoleSummarySection from './role-summary-section';
import AvailabilityIndicator from '../status-indicator';

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

function Card({ children, ...rest }) {
  return (
    <Flex
      sx={{
        textAlign: 'left',
        gap: 3,
        height: '100%',
        padding: [4, null, 5],
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'left',
        backgroundColor: 'background',
        boxShadow: 'soft.low',
        flexDirection: 'column',
        transition:
          'transform 325ms ease, background-color 325ms ease, box-shadow 325ms ease',
        '&:hover': {
          transform: 'scale(1.02)',
          boxShadow: 'soft.highMiddle',

          backgroundColor: 'secondary.bold'
        }
      }}
      {...rest}
    >
      {children}
    </Flex>
  );
}

export default function PeopleCard({
  title,
  subtitle,
  isActive,
  tags,
  href,
  onClick,
  description,
  as
}) {
  return (
    <Link href={href} as={as} sx={{ textDecoration: 'none' }}>
      <Card onClick={onClick}>
        <Flex sx={{ flexDirection: 'column', alignItems: 'left', gap: 1 }}>
          {/* <MdStar sx={{ color: 'primary.regular', fontSize: 6 }} /> */}
          <Text variant='display.h5' sx={{ marginTop: 1 }}>
            {title}
          </Text>

          {subtitle && (
            <Text variant='body.footnote' sx={{ color: 'secondary.regular' }}>
              {subtitle}
            </Text>
          )}
        </Flex>

        {description && (
          <Text
            as='p'
            variant='body.smallParagraph'
            sx={{ color: 'text.secondary' }}
          >
            {description}
          </Text>
        )}

        <Flex
          sx={{
            flexWrap: 'wrap',
            gap: 2
          }}
        >
          {isActive ? (
            <SectionTag
              leftIcon={<AvailabilityIndicator sx={{ marginX: 1 }} />}
            >
              Actively seeking
            </SectionTag>
          ) : (
            <SectionTag>Passively seeking</SectionTag>
          )}
          {tags &&
            tags.map((tag, index) => {
              return <SectionTag key={index}>{tag}</SectionTag>;
            })}
        </Flex>

        <MdEast
          sx={{ alignSelf: 'flex-end', color: 'primary.regular', fontSize: 6 }}
        />
      </Card>
    </Link>
  );
}

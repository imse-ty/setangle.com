/** @jsxImportSource theme-ui */
// @ts-nocheck

import React from 'react';
import { Flex, Divider, Button } from 'krado-react';
import Text from '../fixed-krado-components/Text';
import { MdStar } from 'react-icons/md';
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
        color: 'secondary.light',
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
        maxWidth: ['none', null, null, '300px'],
        textAlign: 'left',
        gap: 4,
        padding: [5, null, null, 4],
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'left',
        backgroundColor: 'background',
        boxShadow: 'soft.low',
        flexDirection: 'column',
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

export default function RoleCard({
  title,
  rate,
  rateSubtitle,
  tags,
  formLink,
  isActive
}) {
  return (
    <Card>
      {title && (
        <Flex sx={{ flexDirection: 'column', alignItems: 'left', gap: 1 }}>
          {/* <MdStar sx={{ color: 'primary.regular', fontSize: 6 }} /> */}
          <Text variant='display.h5' sx={{ marginTop: 1 }}>
            {title}
          </Text>
        </Flex>
      )}
      {rateSubtitle && (
        <Flex sx={{ flexDirection: 'column', alignItems: 'left', gap: 1 }}>
          <Text variant='display.h4'>{rate}</Text>

          <Text variant='body.footnote' sx={{ color: 'text.secondary' }}>
            {rateSubtitle}
          </Text>
        </Flex>
      )}

      <Flex
        sx={{
          flexWrap: 'wrap',
          gap: 2
        }}
      >
        {isActive ? (
          <SectionTag leftIcon={<AvailabilityIndicator sx={{ marginX: 1 }} />}>
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
      {formLink ? (
        <a href={formLink} target='_blank' rel='noindex nofollow'>
          <Button sx={{ width: '100%' }}>Apply now</Button>
        </a>
      ) : (
        <a
          href='https://tally.so/r/w8KKKO'
          target='_blank'
          rel='noindex nofollow'
        >
          <Button sx={{ width: '100%' }}>Apply now</Button>
        </a>
      )}
    </Card>
  );
}

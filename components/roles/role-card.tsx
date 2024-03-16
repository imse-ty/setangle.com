/** @jsxImportSource theme-ui */
// @ts-nocheck

import React from 'react';
import { Flex, Divider, Button } from 'krado-react';
import Text from '../fixed-krado-components/Text';
import { MdStar } from 'react-icons/md';

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
        color: 'secondary.bold',
        backgroundColor: 'secondary.light',
        '&:hover': {
          color: 'action.light'
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
        textAlign: 'center',
        gap: 4,
        padding: [3, null, null, 4],
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
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

export default function RoleCard({ title, rate, frequency, tags }) {
  return (
    <Card>
      {title && (
        <Flex sx={{ alignItems: 'center', gap: 1 }}>
          <MdStar sx={{ color: 'primary.regular', fontSize: 6 }} />
          <Text variant='display.h5' sx={{ marginTop: 1 }}>
            {title}
          </Text>
        </Flex>
      )}
      {rate && (
        <Flex sx={{ flexDirection: 'column', alignItems: 'center', gap: 1 }}>
          <Text variant='display.h4'>{rate}</Text>

          <Text variant='body.footnote' sx={{ color: 'text.secondary' }}>
            per {frequency}
          </Text>
        </Flex>
      )}
      <Divider
        sx={{
          width: '25%',
          height: '1px',
          backgroundColor: 'divider'
        }}
      />
      {tags && (
        <Flex
          sx={{
            alignItems: 'center',
            gap: 2,
            flexDirection: 'column'
          }}
        >
          {tags.map((tag, index) => {
            return (
              <SectionTag key='index' icon={<MdStar sx={{ fontSize: 5 }} />}>
                {tag}
              </SectionTag>
            );
          })}
        </Flex>
      )}
      <Button>Apply now</Button>
    </Card>
  );
}

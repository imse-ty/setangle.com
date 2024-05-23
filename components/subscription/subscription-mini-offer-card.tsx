/** @jsxImportSource theme-ui */
//@ts-nocheck

import { Box } from 'krado-react';
import Heading from '../fixed-krado-components/Heading';
import { Button, Flex, colors, Divider, Grid } from 'krado-react';
import Text from '../fixed-krado-components/Text';
import {
  MdArrowForward,
  MdCheck,
  MdCheckBox,
  MdChecklist,
  MdStar
} from 'react-icons/md';

function Card({ children, ...rest }) {
  return (
    <Box
      sx={{
        alignItems: 'center',
        flex: 1,
        textAlign: 'left',
        padding: [4, 5],

        borderRadius: [2, 3],
        backgroundColor: 'background',
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
    </Box>
  );
}

function BulletPoint({ children }) {
  return (
    <Flex sx={{ gap: 2 }}>
      <MdCheck
        sx={{
          fontSize: 3,
          color: 'primary.regular',
          width: '100%',
          maxWidth: '20px'
        }}
      />
      <Text as="li" variant="body.smallParagraph" sx={{ textAlign: 'left' }}>
        {children}
      </Text>
    </Flex>
  );
}

function SectionTag({ href, ...rest }) {
  return (
    <Button
      size="small"
      href={href}
      leftIcon={<MdStar sx={{ fontSize: 5 }} />}
      sx={{
        display: 'flex',
        paddingX: '12px',
        paddingY: 2,
        alignItems: 'center',
        fontSize: '13px',
        fontWeight: 500,
        color: 'primary.regular',
        backgroundColor: 'accent.regular',
        '&:hover': {
          color: 'action.contrast'
        }
      }}
      {...rest}
    />
  );
}

export function MiniOfferCard({
  title,
  text,
  price,
  bulletPoints,
  value,
  recurring,
  subtitle,
  priceSubtitle,
  valueIcon
}) {
  return (
    <Card>
      <Flex sx={{ flexDirection: 'column', gap: 3, marginBottom: 4 }}>
        <Heading as="h3" variant="body.pretext" sx={{ color: 'text.primary' }}>
          {title}
        </Heading>

        <Text
          as="p"
          variant="body.smallParagraph"
          sx={{
            color: 'text.secondary'
          }}
        >
          {subtitle}
        </Text>
      </Flex>

      <Flex
        sx={{
          flexDirection: 'column',
          gap: 2
        }}
      >
        {price && (
          <Text as="p" variant="display.h4">
            {price}{' '}
            {recurring && (
              <Text as="span" sx={{ color: colors.nso400 }}>
                {recurring}
              </Text>
            )}
          </Text>
        )}
        {priceSubtitle && (
          <Text as="p" variant="body.footnote" sx={{ color: 'secondary.dark' }}>
            {priceSubtitle}
          </Text>
        )}
      </Flex>
    </Card>
  );
}

/** @jsxImportSource theme-ui */
//@ts-nocheck

import { Box } from 'krado-react';
import Heading from '../fixed-krado-components/Heading';
import { Button, Flex, colors, Divider } from 'krado-react';
import Text from '../fixed-krado-components/Text';
import { MdArrowForward, MdStar } from 'react-icons/md';

function Card({ children, ...rest }) {
  return (
    <Box
      sx={{
        padding: [5, null, null, 5],
        flex: '1 1 25%',
        borderRadius: 3,
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
    <Text as="li" variant="body.paragraph" sx={{ textAlign: 'left' }}>
      {children}
    </Text>
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
        backgroundColor: 'accent.light',
        '&:hover': {
          color: 'action.contrast'
        }
      }}
      {...rest}
    />
  );
}

export function OfferCard({
  title,
  text,
  price,
  bulletPoints,
  value,
  recurring,
  subtitle,
  priceSubtitle
}) {
  return (
    <Card>
      <Flex
        sx={{
          flexDirection: 'column',
          gap: 4,
          alignItems: 'center'
        }}
      >
        {value ? (
          <SectionTag>{value}</SectionTag>
        ) : (
          <Box sx={{ fontSize: 6 }}>
            <MdStar sx={{ color: 'surface.light' }} />
          </Box>
        )}
        <Flex
          sx={{
            flexDirection: 'column',
            gap: 3,
            marginBottom: [3, null, 0],
            height: ['initial', null, null, '230px']
          }}
        >
          <Flex sx={{ flexDirection: 'column' }}>
            <Heading
              as="h3"
              variant="display.h5"
              sx={{ color: 'text.primary' }}
            >
              {title}
            </Heading>
            {subtitle && (
              <Text
                as="p"
                variant="body.smallParagraph"
                sx={{
                  color: 'secondary.dark'
                }}
              >
                {subtitle}
              </Text>
            )}
          </Flex>
          <Text
            as="p"
            variant="body.paragraph"
            sx={{ color: 'text.secondary', maxWidth: '800px' }}
          >
            {text}
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
            <Text
              as="p"
              variant="body.footnote"
              sx={{ color: 'secondary.dark' }}
            >
              {priceSubtitle}
            </Text>
          )}
        </Flex>

        {bulletPoints && (
          <>
            <Divider
              sx={{
                width: '25%',
                height: '1px',
                backgroundColor: 'divider'
              }}
            />
            <ul
              sx={{
                display: 'flex',
                flexDirection: 'column',
                listStyleType: 'disc',
                margin: 0,
                gap: 3,
                paddingLeft: 4
              }}
            >
              {bulletPoints.map((bulletPoint, index) => {
                return <BulletPoint key={index}>{bulletPoint}</BulletPoint>;
              })}
            </ul>
          </>
        )}
      </Flex>
    </Card>
  );
}

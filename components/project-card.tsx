/** @jsxImportSource theme-ui */
//@ts-nocheck

import { Flex, Box, Button } from 'krado-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Text from './fixed-krado-components/Text';
import { getColor } from '@theme-ui/color';
import { ThemeUIProvider } from 'theme-ui';
import { buildMonochromaticTheme } from '@/lib/monochromatic-theme';
import Image from 'next/image';
import { MdStar } from 'react-icons/md';

function SectionTag({ icon, href, ...rest }) {
  return (
    <Button
      size='small'
      href={href}
      leftIcon={icon}
      sx={{
        height: '38px',
        marginBottom: 'auto',
        display: 'flex',
        paddingX: '12px',
        paddingY: 2,
        alignItems: 'center',
        fontSize: '13px',
        fontWeight: 700,
        color: 'primary.contrast',
        backgroundColor: 'secondary.light',
        '&:hover': {
          backgroundColor: 'action.active',
          color: 'action.contrast'
        }
      }}
      {...rest}
    />
  );
}

export default function ProjectCard({
  tags,
  title,
  subtitle,
  src,
  href,
  color,
  motionType,
  motionTypeIcon
}) {
  const pageColor = buildMonochromaticTheme(color);

  return (
    <Link href={href} sx={{ textDecoration: 'none' }}>
      <ThemeUIProvider theme={{ colors: { ...pageColor } }}>
        <Flex
          as={motion.div}
          whileHover='active'
          sx={{
            position: 'relative',
            aspectRatio: '4/2.5',
            overflow: 'hidden',
            flexDirection: 'column',
            borderRadius: 3,
            textAlign: 'left',
            transition: 'transform 325ms ease, box-shadow 325ms ease',
            '&:hover': {
              transform: 'scale(1.03)',
              boxShadow: 'soft.highMiddle'
            }
          }}
        >
          <Flex
            sx={{
              position: 'absolute',
              right: 4,
              top: 4,
              gap: 2
            }}
          >
            {motionType && (
              <SectionTag icon={motionTypeIcon}>{motionType}</SectionTag>
            )}
            {tags &&
              tags.map((tag, index) => (
                <SectionTag key={index}>{tag}</SectionTag>
              ))}
          </Flex>
          <Flex
            sx={{
              flexDirection: 'column',
              gap: [2, null, null, 3],
              position: 'absolute',
              padding: [4, null, null, null, 5],
              left: 0,
              bottom: 0,
              zIndex: 1,
              width: '100%',
              alignItems: 'left'
            }}
          >
            <Text
              as={motion.h3}
              variants={{ active: { scale: 0.95 } }}
              transition={{ type: 'spring', bounce: 0.5 }}
              variant='display.h4'
              sx={{
                fontWeight: 600,
                color: 'accent.light'
              }}
            >
              {title}
            </Text>
            {subtitle && (
              <Text
                as={motion.p}
                variants={{ active: { scale: 0.95 } }}
                transition={{ type: 'spring', bounce: 0.4 }}
                variant='body.smallParagraph'
                sx={{
                  color: 'text.secondary',
                  display: ['none', null, null, 'block']
                }}
              >
                {subtitle}
              </Text>
            )}
          </Flex>
          <Box
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            variants={{ active: { opacity: 1 } }}
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              background: `linear-gradient(180deg, rgba(217, 217, 217, 0.00) 30%, ${getColor(
                { colors: { ...pageColor } },
                'secondary.bold'
              )} 90%)`,
              pointerEvents: 'none'
            }}
          />
          <Image
            src={src}
            alt=''
            width={1920}
            height={1920}
            sx={{
              objectFit: 'cover',
              width: '100%',
              height: '100%'
            }}
            priority
          />
        </Flex>
      </ThemeUIProvider>
    </Link>
  );
}

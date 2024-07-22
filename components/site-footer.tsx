// @ts-nocheck
/** @jsxImportSource theme-ui */

import { useColorMode } from 'theme-ui';
import {
  Box,
  Footer,
  FooterFootnote,
  FooterContent,
  Flex,
  Text
} from 'krado-react';
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaXTwitter,
  FaYoutube
} from 'react-icons/fa6';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { motion } from 'framer-motion';

export function FooterLink({ icon, children, href }) {
  return (
    <a
      as='a'
      href={href}
      target='_blank'
      rel='noindex nofollow'
      data-umami-event={`social-link-${children}`}
      sx={{ textDecoration: 'none', color: 'inherit' }}
    >
      <Flex
        as='li'
        sx={{
          alignItems: 'center',
          gap: 2
        }}
      >
        {icon}
        <Text variant='body.footnote' sx={{ color: 'inherit' }}>
          {children}
        </Text>
      </Flex>
    </a>
  );
}

export function SocialMediaLinks() {
  return (
    <>
      <FooterLink
        href='https://www.instagram.com/set_angle'
        icon={<FaInstagram />}
      >
        Instagram
      </FooterLink>
      <FooterLink
        href='https://www.linkedin.com/company/setangle'
        icon={<FaLinkedin />}
      >
        LinkedIn
      </FooterLink>
      <FooterLink href='https://twitter.com/set_angle' icon={<FaXTwitter />}>
        X
      </FooterLink>
    </>
  );
}

export default function SiteFooter({ textColor, linkColor }) {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <Footer
      style={{
        backgroundColor: 'transparent',
        boxShadow: 'none'
      }}
    >
      <FooterFootnote
        as='p'
        sx={{
          color: textColor,
          textAlign: ['center', null, 'left']
        }}
      >
        Copyright © 2024 Set Angle. All rights reserved.
      </FooterFootnote>
      <FooterContent
        sx={{
          paddingY: [0, 2],
          display: 'flex',
          gap: [3, null, null, 5],
          marginTop: [3, null, 0],
          flexWrap: 'wrap',
          justifyContent: 'center',
          color: linkColor
        }}
      >
        <Flex
          as='ul'
          sx={{
            gap: [3, null, null, 4],
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            listStyleType: 'none'
          }}
        >
          <SocialMediaLinks />
        </Flex>
      </FooterContent>
    </Footer>
  );
}

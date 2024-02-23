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
        href='https://www.instagram.com/imse_ty'
        icon={<FaInstagram />}
      >
        Instagram
      </FooterLink>
      <FooterLink
        href='https://www.linkedin.com/in/imsety'
        icon={<FaLinkedin />}
      >
        LinkedIn
      </FooterLink>
      <FooterLink href='https://www.youtube.com/imsety' icon={<FaYoutube />}>
        Youtube
      </FooterLink>
      <FooterLink href='https://twitter.com/imse_ty' icon={<FaTwitter />}>
        Twitter
      </FooterLink>
      <FooterLink href='https://github.com/imse-ty' icon={<FaGithub />}>
        GitHub
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
        boxShadow: 'none',
        justifyContent: 'center'
      }}
    >
      <FooterFootnote
        as='p'
        sx={{
          color: textColor,
          textAlign: 'center'
        }}
      >
        Copyright © 2024 Imsety LLC. All rights reserved.
      </FooterFootnote>
    </Footer>
  );
}

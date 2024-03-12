/** @jsxImportSource theme-ui */

import Heading from '../fixed-krado-components/Heading';
import Text from '../fixed-krado-components/Text';
import { Container, Box, Flex, Button } from 'krado-react';
import SiteFooter from '../site-footer';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import CalEmbed from '../cal-embed';
import Modal from '../modal';

export default function ContactSection({ useTransparentBackground }) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const scrollScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const scale = useSpring(scrollScale, { mass: 0.1 });

  const [isCalModalOpen, setIsCalModalOpen] = useState(false);

  return (
    <>
      <Modal isOpen={isCalModalOpen} onClose={() => setIsCalModalOpen(false)}>
        <CalEmbed />
      </Modal>
      <section ref={container}>
        <Box
          sx={{
            backgroundColor: useTransparentBackground
              ? 'transparent'
              : 'surface.black'
          }}
        >
          <motion.div
            id='contact'
            style={{ scale }}
            sx={{
              paddingTop: 6,
              backgroundColor: 'surface.extraheavy',
              borderTopLeftRadius: 4,
              borderTopRightRadius: 4,
              boxShadow: 'soft.highNorth'
            }}
          >
            <Flex sx={{ flexDirection: 'column', minHeight: '100vh' }}>
              <Container sx={{ marginTop: 'auto', textAlign: 'center' }}>
                <Flex sx={{ flexDirection: 'column', gap: [3, 4] }}>
                  <a
                    href='mailto:greetings@setangle.com'
                    sx={{ textDecoration: 'none' }}
                    data-umami-event='contact-email-link'
                  >
                    <Text
                      variant='body.pretext'
                      sx={{ color: 'surface.extralight' }}
                    >
                      Get in touch
                    </Text>
                    <Heading
                      as='h2'
                      variant='display.h2'
                      sx={{
                        color: 'surface.thin',
                        marginTop: 3,
                        fontSize: [7, 9, 10]
                      }}
                    >
                      greetings@setangle.com
                    </Heading>
                  </a>
                  <Text
                    as='p'
                    variant='body.summary'
                    sx={{ color: 'surface.extralight' }}
                  >
                    Thinking of collaborating? We&apos;re here to listen!
                    Let&apos;s connect.
                  </Text>
                </Flex>
                <Button
                  onClick={() => setIsCalModalOpen(true)}
                  sx={{ marginTop: 5 }}
                >
                  Book a call
                </Button>
              </Container>
              <SiteFooter
                textColor='surface.extralight'
                linkColor='surface.light'
              />
            </Flex>
          </motion.div>
        </Box>
      </section>
    </>
  );
}

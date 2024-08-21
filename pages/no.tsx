import React from 'react';
import {
  ThemeProvider,
  Theme,
  Box,
  Flex,
  Heading,
  Text,
  Button
} from 'theme-ui';
import { motion } from 'framer-motion';

// Define the theme
const theme: Theme = {
  colors: {
    text: '#333',
    background: '#fff',
    primary: '#0070f3',
    secondary: '#30c',
    accent: '#f0f',
    muted: '#f6f6f6'
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace'
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    container: 1200
  },
  buttons: {
    primary: {
      color: 'background',
      bg: 'primary',
      '&:hover': {
        bg: 'secondary'
      }
    }
  }
};

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

// Header Component
const Header: React.FC = () => (
  <Box as='header' sx={{ textAlign: 'center', py: 5 }}>
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Heading as='h1' sx={{ fontSize: 5, mb: 3 }}>
        Launch with Confidence.
      </Heading>
      <Text sx={{ fontSize: 3, mb: 4 }}>
        Everything your startup needs to stand out—delivered simply.
      </Text>
      <Button>Get Started</Button>
    </motion.div>
  </Box>
);

// StarterKit Component
const StarterKit: React.FC = () => (
  <Box sx={{ py: 5 }}>
    <Heading as='h2' sx={{ textAlign: 'center', mb: 4 }}>
      Get Off the Ground Fast.
    </Heading>
    <Text sx={{ textAlign: 'center', mb: 4 }}>
      All the essentials for your startup's first impression.
    </Text>
    <Flex sx={{ flexWrap: 'wrap', justifyContent: 'center', gap: 4 }}>
      {[
        'Custom Logo & Identity',
        'Marketing Assets',
        '1-Page Landing Page',
        '15-Second Hype Video'
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Box sx={{ bg: 'muted', p: 3, borderRadius: 4, width: 250 }}>
            <Text sx={{ fontWeight: 'bold' }}>{item}</Text>
          </Box>
        </motion.div>
      ))}
    </Flex>
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Text sx={{ fontSize: 4, fontWeight: 'bold', mb: 2 }}>$15k</Text>
      <Text sx={{ mb: 3 }}>Two payments of $7.5k.</Text>
      <Button>Get Your Starter Kit</Button>
    </Box>
  </Box>
);

// WhyItWorks Component
const WhyItWorks: React.FC = () => (
  <Box sx={{ py: 5 }}>
    <Heading as='h2' sx={{ textAlign: 'center', mb: 4 }}>
      Why This Kit?
    </Heading>
    <Flex sx={{ justifyContent: 'center', gap: 4, flexWrap: 'wrap' }}>
      {['Essential Tools Only', 'Proven Process', 'No Risk'].map(
        (item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Box sx={{ bg: 'muted', p: 3, borderRadius: 4, width: 200 }}>
              <Text sx={{ fontWeight: 'bold' }}>{item}</Text>
            </Box>
          </motion.div>
        )
      )}
    </Flex>
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Button>Get Started</Button>
    </Box>
  </Box>
);

// MarketingMomentum Component
const MarketingMomentum: React.FC = () => (
  <Box sx={{ py: 5 }}>
    <Heading as='h2' sx={{ textAlign: 'center', mb: 4 }}>
      Keep the Momentum Going.
    </Heading>
    <Text sx={{ textAlign: 'center', mb: 4 }}>
      Ongoing support to keep you growing.
    </Text>
    <Flex sx={{ flexWrap: 'wrap', justifyContent: 'center', gap: 4 }}>
      {[
        'Social Media Content',
        'Unlimited Design Revisions',
        'Website Updates',
        'SEO Optimization'
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Box sx={{ bg: 'muted', p: 3, borderRadius: 4, width: 250 }}>
            <Text sx={{ fontWeight: 'bold' }}>{item}</Text>
          </Box>
        </motion.div>
      ))}
    </Flex>
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Text sx={{ fontSize: 4, fontWeight: 'bold', mb: 2 }}>$3,900/month</Text>
      <Text sx={{ mb: 3 }}>Cancel anytime.</Text>
      <Button>Keep Growing</Button>
    </Box>
  </Box>
);

// SocialProof Component
const SocialProof: React.FC = () => (
  <Box sx={{ py: 5 }}>
    <Heading as='h2' sx={{ textAlign: 'center', mb: 4 }}>
      Real Results from Real Startups.
    </Heading>
    <Flex sx={{ justifyContent: 'center', gap: 4, flexWrap: 'wrap' }}>
      {[
        '"Our brand is now unforgettable—30% more leads in 2 months."',
        '"The landing page is a conversion machine. The video? Instant impact."'
      ].map((quote, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Box sx={{ bg: 'muted', p: 3, borderRadius: 4, width: 300 }}>
            <Text sx={{ fontStyle: 'italic' }}>{quote}</Text>
          </Box>
        </motion.div>
      ))}
    </Flex>
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Button>Join the Success</Button>
    </Box>
  </Box>
);

// Urgency Component
const Urgency: React.FC = () => (
  <Box sx={{ py: 5, bg: 'muted' }}>
    <Heading as='h2' sx={{ textAlign: 'center', mb: 4 }}>
      Limited Availability.
    </Heading>
    <Text sx={{ textAlign: 'center', mb: 4 }}>
      We take on only a few startups each month. Don't miss out.
    </Text>
    <Box sx={{ textAlign: 'center' }}>
      <Button>Claim Your Spot</Button>
    </Box>
  </Box>
);

// Guarantee Component
const Guarantee: React.FC = () => (
  <Box sx={{ py: 5 }}>
    <Heading as='h2' sx={{ textAlign: 'center', mb: 4 }}>
      We Guarantee It.
    </Heading>
    <Text sx={{ textAlign: 'center', mb: 4 }}>
      Love your new brand—or we'll make it right.
    </Text>
    <Box sx={{ textAlign: 'center' }}>
      <Button>Get Started Today</Button>
    </Box>
  </Box>
);

// Footer Component
const Footer: React.FC = () => (
  <Box as='footer' sx={{ textAlign: 'center', py: 5, bg: 'muted' }}>
    <Heading as='h2' sx={{ mb: 3 }}>
      Take the First Step.
    </Heading>
    <Text sx={{ mb: 3 }}>Launch your startup with Set Angle.</Text>
    <Text sx={{ mb: 2 }}>📧 greetings@setangle.com</Text>
    <Text sx={{ mb: 3 }}>📍 ATL</Text>
    <Button>Let's Go</Button>
    <Text sx={{ mt: 4, fontStyle: 'italic' }}>
      P.S. Every moment counts. Get started today.
    </Text>
  </Box>
);

// Main App Component
const Home: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <motion.div
        initial='initial'
        animate='animate'
        variants={{
          animate: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        <Header />
        <motion.main variants={fadeIn}>
          <StarterKit />
          <WhyItWorks />
          <MarketingMomentum />
          <SocialProof />
          <Urgency />
          <Guarantee />
        </motion.main>
        <Footer />
      </motion.div>
    </ThemeProvider>
  );
};

export default Home;

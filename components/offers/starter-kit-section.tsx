import React from 'react';
import { Box, Heading, Text, Flex, Button } from 'krado-react';
import { MdCheck } from 'react-icons/md';
import { motion } from 'framer-motion';

const StarterKitSection = ({ data }) => {
  const { heading, subheading, items, price, paymentTerms, ctaText, ctaLink } =
    data;

  return (
    <Box
      as={motion.section}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{
        bg: 'background',
        color: 'text',
        py: 5,
        px: [3, 4, 5],
        maxWidth: '1200px',
        mx: 'auto'
      }}
    >
      <Flex
        sx={{
          flexDirection: ['column', 'row'],
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Box sx={{ flex: 1, mr: [0, 4], mb: [4, 0] }}>
          <Heading as='h2' variant='h2' sx={{ mb: 3 }}>
            {heading}
          </Heading>
          <Text variant='lead' sx={{ mb: 4 }}>
            {subheading}
          </Text>
          {items.map((item, index) => (
            <Flex key={index} sx={{ alignItems: 'center', mb: 3 }}>
              <Box
                as={MdCheck}
                sx={{ color: 'primary', mr: 2, flexShrink: 0 }}
              />
              <Text>{item}</Text>
            </Flex>
          ))}
        </Box>
        <Box
          as={motion.div}
          whileHover={{ scale: 1.05 }}
          sx={{
            bg: 'muted',
            p: 4,
            borderRadius: 'default',
            textAlign: 'center',
            boxShadow: 'card'
          }}
        >
          <Heading as='h3' variant='h3' sx={{ mb: 2 }}>
            {price}
          </Heading>
          <Text sx={{ mb: 3, fontStyle: 'italic' }}>{paymentTerms}</Text>
          <Button as='a' href={ctaLink}>
            {ctaText}
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default StarterKitSection;

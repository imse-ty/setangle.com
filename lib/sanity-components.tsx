/** @jsxImportSource theme-ui */
// @ts-nocheck

import Heading from '@/components/fixed-krado-components/Heading';
import Text from '@/components/fixed-krado-components/Text';
import { OrderedList, UnorderedList } from '@/components/list';
import { Link } from 'krado-react';

const sanityComponents = {
  block: {
    normal: ({ children }) => (
      <Text as='p' sx={{ marginTop: 3, marginBottom: 3 }}>
        {children}
      </Text>
    ),
    summary: ({ children }) => (
      <Text
        as='p'
        variant='body.summary'
        sx={{ marginTop: 4, marginBottom: 3 }}
      >
        {children}
      </Text>
    ),
    smallParagraph: ({ children }) => (
      <Text
        as='p'
        variant='body.smallParagraph'
        sx={{ marginTop: 4, marginBottom: 3 }}
      >
        {children}
      </Text>
    ),
    pretext: ({ children }) => (
      <Text variant='body.pretext' sx={{ marginTop: 2, marginBottom: 3 }}>
        {children}
      </Text>
    ),
    h1: ({ children }) => (
      <Heading
        as='h1'
        variant='display.h1'
        sx={{ marginTop: 5, marginBottom: 4 }}
      >
        {children}
      </Heading>
    ),
    h2: ({ children }) => (
      <Heading
        as='h2'
        variant='display.h2'
        sx={{ marginTop: 5, marginBottom: 4 }}
      >
        {children}
      </Heading>
    ),
    h3: ({ children }) => (
      <Heading
        as='h3'
        variant='display.h3'
        sx={{ marginTop: 5, marginBottom: 4 }}
      >
        {children}
      </Heading>
    ),
    h4: ({ children }) => (
      <Heading
        as='h4'
        variant='display.h4'
        sx={{ marginTop: 5, marginBottom: 4 }}
      >
        {children}
      </Heading>
    ),
    h5: (props) => (
      <Heading
        as='h5'
        variant='display.h5'
        sx={{ marginTop: 5, marginBottom: 3 }}
      >
        {props.children}
      </Heading>
    ),
    blockquote: ({ children }) => (
      <Text as='blockquote' variant='display.quote'>
        {children}
      </Text>
    )
  },
  marks: {
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http')
        ? '_blank'
        : undefined;
      return (
        <Link
          href={value?.href}
          target={target}
          rel={target === '_blank' && 'noindex nofollow'}
        >
          {children}
        </Link>
      );
    }
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => <UnorderedList>{children}</UnorderedList>,
    number: ({ children }) => <OrderedList>{children}</OrderedList>
  },
  listItem: {
    bullet: ({ children }) => (
      <Text as='li' variant='body.smallParagraph'>
        {children}
      </Text>
    ),
    number: ({ children }) => (
      <Text as='li' variant='body.smallParagraph'>
        {children}
      </Text>
    )
  }
};

export default sanityComponents;

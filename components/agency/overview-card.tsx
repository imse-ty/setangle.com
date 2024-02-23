import { Box } from 'krado-react';
import Heading from '../fixed-krado-components/Heading';
import { Flex } from 'theme-ui';
import Text from '../fixed-krado-components/Text';

function Card({ children, ...rest }) {
  return (
    <Box
      sx={{
        padding: 4,
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
export function OverviewCard({ icon, heading, text, isHeadingSmall }) {
  return (
    <Card>
      <Box sx={{ color: 'surface.light', fontSize: 7, marginBottom: 3 }}>
        {icon}
      </Box>
      <Flex sx={{ flexDirection: 'column', gap: 2 }}>
        <Heading
          as='h3'
          variant={isHeadingSmall ? 'display.h5' : 'display.h4'}
          sx={{ color: 'text.primary' }}
        >
          {heading}
        </Heading>
        {text && (
          <Text as='p' sx={{ color: 'text.secondary' }}>
            {text}
          </Text>
        )}
      </Flex>
    </Card>
  );
}

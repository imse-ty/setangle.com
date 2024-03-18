/** @jsxImportSource theme-ui */
// @ts-nocheck

import React from 'react';
import Wrapper from '../wrapper';
import ScaleInEffect from '../scale-in-effect';
import { Box, Flex } from 'theme-ui';
import RoleCard from '../roles/role-card';
import { PortableText } from 'next-sanity';
import sanityComponents from '@/lib/sanity-components';

export default function RoleSummarySection({ role }) {
  return (
    <ScaleInEffect>
      <Wrapper
        sx={{
          backgroundColor: 'surface.black'
        }}
      >
        <Flex
          sx={{
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            gap: 6
          }}
        >
          <Box sx={{ textAlign: 'left', maxWidth: '650px' }}>
            <PortableText value={role.body} components={sanityComponents} />
          </Box>
          <Box
            sx={{
              position: 'sticky',

              top: 7,
              height: '25%'
            }}
          >
            <ScaleInEffect>
              <RoleCard
                title={role.title}
                rate={role.rate}
                rateSubtitle={role.rateSubtitle}
                tags={role.tags}
                onClick={() => setIsFormOpen(true)}
              />
            </ScaleInEffect>
          </Box>
        </Flex>
      </Wrapper>
    </ScaleInEffect>
  );
}

/** @jsxImportSource theme-ui */
//@ts-nocheck

import { Container, Flex, Button, Grid } from 'krado-react';
import Text from '../fixed-krado-components/Text';
import Heading from '../fixed-krado-components/Heading';
import ScaleInEffect from '../scale-in-effect';
import { OverviewCard } from '../agency/overview-card';
import {
  MdLightbulb,
  MdMovie,
  MdPhone,
  MdSchool,
  MdShoppingBag,
  MdSmartphone,
  MdStadium
} from 'react-icons/md';
import Wrapper from '../wrapper';

import PeopleCard from './people-card';
import Modal from '../modal';
import RoleSummarySection from './role-summary-section';
import { useState } from 'react';

export default function OpenRolesSection({ roles }) {
  return (
    <ScaleInEffect>
      <Wrapper id='roles' sx={{ backgroundColor: 'surface.black' }}>
        <Heading variant='body.pretext'>Browse open roles</Heading>
        <Grid
          sx={{
            gap: 3,
            gridTemplateColumns: ['1fr', null, '1fr 1fr', '1fr 1fr 1fr']
          }}
        >
          {roles.map((role) => {
            return (
              <PeopleCard
                key={role._id}
                title={role.title}
                subtitle={role.rate && `${role.rate} • ${role.rateSubtitle}`}
                description={role.description}
                tags={role.tags}
                isActive={role.isActivelyLooking}
                // href={`/people?role=${index}`}
                // as={`/people/${role.slug.current}`}

                href={`/work-with-us/${role.slug.current}`}
              />
            );
          })}
        </Grid>
      </Wrapper>
    </ScaleInEffect>
  );
}

/** @jsxImportSource theme-ui */
//@ts-nocheck

import { Container, Flex, Button, Grid } from 'krado-react';
import Text from '../fixed-krado-components/Text';
import Heading from '../fixed-krado-components/Heading';
import ScaleInEffect from '../scale-in-effect';
import { OverviewCard } from '../overview-card';
import {
  MdLightbulb,
  MdMovie,
  MdPhone,
  MdSchool,
  MdShoppingBag,
  MdSmartphone,
  MdStadium,
  MdStar
} from 'react-icons/md';
import { OfferCard } from './subscription-offer-card';
import { PromoOfferCard } from './promo-offer-card';
import TestimonialCard from '../testimonial-card';
import HeroText from '../hero-text';

export default function TechTestimonials() {
  return (
    <ScaleInEffect>
      <Container
        id='offer'
        sx={{
          display: 'flex',
          gap: 5,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: 6,
          paddingY: 5,
          minHeight: '100vh',
          borderRadius: 4,
          backgroundColor: 'surface.black'
        }}
      >
        <HeroText pretext='Testimonials' title='Loved by industry leaders' />
        <Flex sx={{ gap: 3, flexDirection: ['column', 'row'] }}>
          <TestimonialCard
            quote='We appreciate the hard work and effort the team have dedicated to this launch, we genuinely appreciate it.'
            name='Osawese Omoregie'
            title='Co-founder'
            company='SANSHU!'
            avatarSrc='/osa-profile-picture.webp'
          />
          <TestimonialCard
            quote='You killed it. Seriously, that was an all around success, in my opinion.'
            name='Spencer Reeves'
            title='Creative Director'
            company='Space and Time'
            avatarSrc='/spencer-profile-picture.jpg'
          />
          <TestimonialCard
            quote='This stuff looks class by the way. Nice job. It really good. The client was really chuffed about which is wicked!'
            name='Nick Patterson'
            title='Co-founder'
            company='STORM+SHELTER'
            avatarSrc='/gruff-profile-picture.jpg'
          />
        </Flex>
      </Container>
    </ScaleInEffect>
  );
}

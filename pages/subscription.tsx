/** @jsxImportSource theme-ui */
//@ts-nocheck

import Layout from '@/components/layout';
import { useState } from 'react';
import { Container } from 'krado-react';
import LogoCarousel from '@/components/agency/logo-carousel';
import ContactSection from '@/components/contact/contact-section';
import ReelSection from '@/components/agency/reel-section';
import { useColorMode } from 'theme-ui';
import FaqProcess from '@/components/faq/faq-process';
import FaqWhatWeDo from '@/components/faq/faq-what-we-do';
import FaqOurClients from '@/components/faq/faq-our-clients';
import HomeWorkSection from '@/components/home/home-work-section';
import SubscriptionHero from '@/components/subscription/subscription-hero';
import SubscriptionServices from '@/components/subscription/subscription-services';
import Faq250Pricing from '@/components/faq/faq-250-pricing';
import SubscriptionPricing from '@/components/subscription/subscription-pricing';
import SubscriptionHowItWorks from '@/components/subscription/subscription-how-it-works';
import SubscriptionBenefits from '@/components/subscription/subscription-benefits';
import SubscriptionExample from '@/components/subscription/subscription-example';
import SubscriptionTaskSize from '@/components/subscription/subscription-task-size';
import PricingCalculator from '@/components/subscription/PricingCalculator';

export default function Faq() {
  const [isVideoActive, setIsVideoActive] = useState(false);
  const [colorMode, setColorMode] = useColorMode();
  setColorMode('light');

  return (
    <Layout isHiddenByDefault hideTopNav>
      <SubscriptionHero />
      <Container sx={{ marginBottom: 6 }}>
        <ReelSection
          isVideoActive={isVideoActive}
          setIsVideoActive={() => {
            if (typeof umami !== 'undefined' && !isVideoActive) {
              umami.track('reel-section-play');
            }

            setIsVideoActive(!isVideoActive);
          }}
        />
      </Container>
      <SubscriptionServices />
      <SubscriptionTaskSize />
      <SubscriptionHowItWorks />
      <SubscriptionExample />
      <SubscriptionBenefits />
      <SubscriptionPricing />
      <PricingCalculator />
      <ContactSection useTransparentBackground />
    </Layout>
  );
}

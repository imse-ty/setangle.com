import { AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion';
import { Box } from 'krado-react';
import { useState } from 'react';
import Navigation from './navigation';
import Toolbar from './toolbar';

export default function Layout({
  children,
  hideTopNav,
  showFaqMenu,
  showPricing,
  showToolbarBack,
  isHiddenByDefault,
  formLink,
  backLink,
  showPeopleContactButton = false,
  forceHideNav = false
}) {
  const { scrollYProgress } = useScroll();

  const [isNavigationHidden, setIsNavigationHidden] =
    useState(isHiddenByDefault);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const previous = scrollYProgress.getPrevious();

    if (latest > previous && latest > 0.5) {
      setIsNavigationHidden(true);
    } else if (latest === 0 && hideTopNav) {
      setIsNavigationHidden(true);
    } else if (latest >= 0.9) {
      setIsNavigationHidden(true);
    } else {
      setIsNavigationHidden(false);
    }
  });

  return (
    <Box as="main" sx={{ position: 'relative' }}>
      <Toolbar
        showFaqMenu={showFaqMenu}
        showPricing={showPricing}
        showBack={showToolbarBack}
        formLink={formLink}
        showPeopleContactButton={showPeopleContactButton}
        backLink={backLink}
      />

      {children}
    </Box>
  );
}

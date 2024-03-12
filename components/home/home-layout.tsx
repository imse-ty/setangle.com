import { AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion';
import { Box } from 'krado-react';
import { useState } from 'react';

import HomeNavigation from './home-navigation';
import HomeToolbar from './home-toolbar';

export default function HomeLayout({
  children,
  hideTopNav,
  isHiddenByDefault,
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
    <Box as='main' sx={{ position: 'relative', overflowX: 'hidden' }}>
      <HomeToolbar />
      <AnimatePresence>
        {!forceHideNav && <HomeNavigation isHidden={isNavigationHidden} />}
      </AnimatePresence>
      {children}
    </Box>
  );
}

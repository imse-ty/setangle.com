/** @jsxImportSource theme-ui */
//@ts-nocheck

import { Box, ToggleIcon } from 'krado-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdClose } from 'react-icons/md';
import { useEffect } from 'react';

function Card({ children, ...rest }) {
  return (
    <Box
      sx={{
        padding: [0, null, null, 4],
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

function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    if (isOpen) {
      // Prevent scrolling on mount
      document.body.style.overflow = 'hidden';
    }
    return () => {
      // Re-enable scrolling when component unmounts
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]); // Only re-run the effect if isOpen changes

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            zIndex: 100,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(8px)',
            cursor: 'pointer'
          }}
          onClick={onClose}
        >
          <ToggleIcon
            sx={{
              top: 5,
              right: 5,
              position: 'fixed',
              borderRadius: 2,
              width: '48px',
              height: '48px',
              boxShadow: 'hard.high',
              backgroundColor: 'primary.regular',
              color: 'primary.contrast'
            }}
            onClick={onClose}
          >
            <MdClose />
          </ToggleIcon>
          <Card
            as={motion.div}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            sx={{
              width: ['90%', '75%']
            }}
          >
            {children}
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
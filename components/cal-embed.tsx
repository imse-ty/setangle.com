/** @jsxImportSource theme-ui */
//@ts-nocheck

import Cal, { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';
import { Box } from 'krado-react';

export default function CalEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal('ui', {
        theme: 'dark',
        styles: { branding: { brandColor: '#9195F8' } },
        hideEventTypeDetails: false,
        layout: 'month_view'
      });
    })();
  }, []);
  return (
    <Box sx={{ paddingY: [6, null, 0] }}>
      <Cal
        calLink='team/setangle/consultation'
        style={{ width: '100%', height: '100%', overflow: 'scroll' }}
        config={{ layout: 'month_view' }}
      />
    </Box>
  );
}

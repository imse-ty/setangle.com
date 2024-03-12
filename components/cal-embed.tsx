import Cal, { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';
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
    <Cal
      calLink='imsety/chat'
      style={{ width: '100%', height: '100%', overflow: 'scroll' }}
      config={{ layout: 'month_view' }}
    />
  );
}

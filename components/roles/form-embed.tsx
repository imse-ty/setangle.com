/** @jsxImportSource theme-ui */
// @ts-nocheck

import Script from 'next/script';

export default function FormEmbed() {
  return (
    <div>
      <iframe
        data-tally-src='https://tally.so/embed/nW5b0J?hideTitle=1&dynamicHeight=1'
        loading='lazy'
        width='100%'
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        title='Newsletter subscribers'
      ></iframe>

      <Script
        src='https://tally.so/widgets/embed.js'
        onLoad={() => Tally.loadEmbeds()}
      />
    </div>
  );
}

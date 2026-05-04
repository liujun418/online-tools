import Script from "next/script";

export default function KofiWidget() {
  return (
    <>
      <Script
        id="kofi-widget"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var script = document.createElement('script');
              script.src = 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js';
              script.onload = function() {
                if (window.kofiWidgetOverlay) {
                  window.kofiWidgetOverlay.draw('jzerov', {
                    type: 'floating-chat',
                    'floating-chat.donateButton.text': 'Support Us',
                    'floating-chat.donateButton.background-color': '#00b9fe',
                    'floating-chat.donateButton.text-color': '#ffffff',
                  });
                }
              };
              document.head.appendChild(script);
            })();
          `,
        }}
      />
    </>
  );
}

import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import '@/styles/globals.css'



function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      {/* Facebook Pixel Code */}
<script
            dangerouslySetInnerHTML={{
              __html: `!function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '929750604483619');
                fbq('track', 'PageView');`,
            }}
          />
          {/* End Facebook Pixel Code */}
      <SEO 
        title={process.env.siteTitle}
      />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

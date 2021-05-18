import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import '@/styles/globals.css'

/* function FacebookPixel() {
  React.useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('785931672069383');
        ReactPixel.pageView();

        Router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });cla
  });
  return null;
} */

function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <SEO 
        title={process.env.siteTitle}
      />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

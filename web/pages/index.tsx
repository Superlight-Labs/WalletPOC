import Qualities from "~/components/home/qualities";
import Splash from "~/components/home/splash";
import Header from "~/components/layout/header";
import Layout from "~/components/layout/layout";
import FAQ from "../components/home/faq";

const Home = () => {
  return (
    <Layout>
      <Header />

      <main className="space-y-24 bg-white pb-8">
        <Splash />
        <Qualities />
        <div>
          <FAQ />
        </div>
      </main>
    </Layout>
  );
};

export default Home;

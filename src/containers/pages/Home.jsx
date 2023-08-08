import Layout from "../../hocs/layouts/layout";
import Navbar from "../../components/navegation/Navbar";
import Footer from "../../components/navegation/Footer";
import Header from "../../components/home/Header";
import Incentive from "../../components/home/Incentive";
import Somecases from "../../components/home/Somecases";
import Feactures from "../../components/home/Feactures";
import OurClients from "../../components/home/OurClients";

function Home() {
  return (
    <Layout>
      <Navbar />
      <div className="pt-28">
        <Header />
        <Incentive />
        <Somecases />
        <Feactures />
        <OurClients />
        <Footer />
      </div>
    </Layout>
  );
}

export default Home;

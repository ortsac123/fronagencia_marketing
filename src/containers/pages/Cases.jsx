import Layout from "../../hocs/layouts/layout";
import Navbar from "../../components/navegation/Navbar";
import Footer from "../../components/navegation/Footer";
import Prentation from "../../components/cases/Presentation";
import Casos from "../../components/cases/Casos";

function Cases() {
  return (
    <Layout>
      <Navbar />
      <Prentation />
      <Casos />
      <Footer />
    </Layout>
  );
}

export default Cases;

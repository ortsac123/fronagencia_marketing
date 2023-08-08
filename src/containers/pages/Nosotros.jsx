import Layout from "../../hocs/layouts/layout"
import Navbar from "../../components/navegation/Navbar"
import Footer from "../../components/navegation/Footer"

function Nosotros(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28"> 
            Nosotros
            <Footer/>
            </div>
        </Layout>
    )
}

export default Nosotros 
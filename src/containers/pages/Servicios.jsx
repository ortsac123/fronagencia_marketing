import Layout from "../../hocs/layouts/layout"
import Navbar from "../../components/navegation/Navbar"
import Footer from "../../components/navegation/Footer"

function Servicios(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28"> 
            Servicios
            <Footer/>
            </div>
        </Layout>
    )
}

export default Servicios 
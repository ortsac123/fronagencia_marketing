import Layout from "../../hocs/layouts/layout"
import Navbar from "../../components/navegation/Navbar"
import Footer from "../../components/navegation/Footer"

function Contacto(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28"> 
            Contacto
            <Footer/>
            </div>
        </Layout>
    )
}

export default Contacto
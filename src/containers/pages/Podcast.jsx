import Layout from "../../hocs/layouts/layout"
import Navbar from "../../components/navegation/Navbar"
import Footer from "../../components/navegation/Footer"

function Podcast (){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28"> 
            Podcast
            <Footer/>
            </div>
        </Layout>
    )
}

export default  Podcast
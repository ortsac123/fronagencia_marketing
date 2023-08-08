import Layout from "../../hocs/layouts/layout"
import Navbar from "../../components/navegation/Navbar"
import Footer from "../../components/navegation/Footer"

function Blog(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28"> 
            Blog
            <Footer/>
            </div>
        </Layout>
    )
}

export default Blog 
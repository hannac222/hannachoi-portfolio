import Layout from "../components/layout";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import "../styles.scss";

const Index = () => (
  <div>
    <Layout>
      <h2>I’m Hanna</h2>
      <h3>A front end developer based in Vancouver, BC, Canada</h3>
      <div>
        <img src="/static/assets/smurff.png" alt="Profile" />
      </div>
      <Footer />
    </Layout>
    <Sidebar />
  </div>
);

export default Index;

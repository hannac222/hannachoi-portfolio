import Layout from "../components/layout";
import Sidebar from "../components/sidebar";

const Index = () => (
  <div>
    <Layout>
      <div>
        <h4>I’m Hanna</h4> A front end developer based in Vancouver, BC, Canada
      </div>
      <div>
        <img src="/static/assets/smurff.png" alt="Profile" />
      </div>
    </Layout>
    <Sidebar />
  </div>
);
export default Index;

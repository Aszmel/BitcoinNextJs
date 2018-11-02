import Layout from "../components/Layout";

const About = () => (
  <Layout>
    <div>
      <h1>About Crypto Currency</h1>
      <p>Application to view current Crypto price</p>
      <p>Now only Bitcoin available...</p>
      <style jsx>
        {`
          p {
            font-size: 35px;
          }
        `}
      </style>
    </div>
  </Layout>
);

export default About;
Layout;

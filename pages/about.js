import React from "react";
import Layout from "../components/layout";

const About = () => (
  <Layout className="page-about">
    <div className="wrapper-about">
      <div className="profile-bg" />
      <q>
        I know I can<br /> Be what I wanna be<br /> If I work hard at it<br />{" "}
        I’ll be where I wanna be.
      </q>
      <section className="about-content">
        <hr className="sep-full" />
        <h1>Hi, I’m Hanna.</h1>
        <p>
          I’m a web developer based in Vancouver, BC. I love to write clean,
          efficient and reusable code to develop user friendly interface
          applications. I can deliver projects from concept to completion.
        </p>
        <div>
          <p>
            <b>I’m good at</b>
          </p>
          <span>Communication</span>

          <p>
            I believe the most important part is good communication to make sure
            we’re always on the same page.
          </p>

          <span>Organization</span>
          <p>
            It’s essential, especially working with tons of files and
            directories in a software development environment.
          </p>

          <span>Collaboration</span>
          <p>
            I have a good understanding of business and work well with
            stakeholders. I’m happy to integrate into teams to projects
            implemented.
          </p>

          <span>Development</span>
          <p>
            I don’t stop researching and learning about best practices to apply
            to web development.
          </p>

          <span>Documentation</span>
          <p>
            It’s incredibly necessary to share a clear picture of what’s been
            done for maintenance and the next round of development.
          </p>
        </div>
        <p>
          I work primarily with <span>React.js, Next.js</span> and{" "}
          <span>Sass</span> mostly on the front-end side. However, I’m ready to
          pick up new languages or frameworks and it is always exciting!
        </p>
        <div className="contacts">
          <p>
            Have a project you’d like to discuss?<br />Let’s chat
            <a href="mailto:hello@hannachoi.ca"> hello@hannachoi.ca</a>
          </p>
        </div>
      </section>
    </div>
  </Layout>
);

// Disable the full page plug-in
class Wrapper extends React.Component {
  componentDidMount() {
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";
  }

  render() {
    return <About />;
  }
}

export default Wrapper;

import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './style/App.css';
import Blog from './blog/blog.js';
import Project from './project/project.js';

class App extends Component {
  render() {
    return (
      <div>
        <Head />
        <Body />
      </div>
    );
  }
}

const Head = () => (
  <div>
    <title>TrakBit - Harsh Vardhan - React Consultant</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="trakbit" content="React Developer" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
  </div>
);

const Header = () => (
  <header id="header">
    <div className="inner">
      <a className="image avatar">
        <img src={require("./images/Avatar.jpg")}/>
      </a>
      <h1>
        <strong>Harsh Vardhan</strong>
      </h1>
      <h4>React Consultant</h4>
      <Social />
      <Contact />
    </div>
  </header>
);

const Social = () => (
  <ul className="icons">
    <li>
      <a href="https://twitter.com/trakbit">
        <FontAwesome
          name='twitter'
          size='2x'
        />
      </a>
    </li>
    <li>
      <a href="https://github.com/trakbit">
        <FontAwesome
          name='github'
          size='2x'
        />
      </a>
    </li>
    <li>
      <a href="https://medium.com/@trakbit">
        <FontAwesome
          name='medium'
          size='2x'
        />
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/trakbit/">
        <FontAwesome
          name='linkedin'
          size='2x'
        />
      </a>
    </li>
  </ul>
);

const Contact = () => (
  <ul className="labeled-icons">
    <li>
      <h3 className="icon">
        <FontAwesome
          name='home'
          size='1x'
        />
        <span className="label">Address</span></h3>
      <h4 styles="text-align:left">Waterford<br /> Ireland</h4>
    </li>
    <li>
      <h3 className="icon">
        <FontAwesome
          name='mobile'
          size='1x'
        />
        <span className="label">Phone</span></h3>
        <h4 styles="text-align:left">083-045-1910</h4>
    </li>
    <li>
      <h3 className="icon">
        <FontAwesome
          name='envelope'
          size='1x'
        />
        <span className="label">Email</span></h3>
        <h4 styles="text-align:left"><a>harsh.vardhan.611@gmail.com</a></h4>
    </li>
  </ul>
);

const Body = () => (
  <div id="top">
    <Header />
    <div id="main">
      <section id="one">
        <header className="major">
          <h1>TrakBit</h1>
        </header>
        <p>Thriving to build the high quality and performant mobile and web applications by
				<br />making the most from the tools in JavaScript ecosystem.</p>
      </section>
      <Blog />
      <Project />
    </div>
  </div>
);



export default App;

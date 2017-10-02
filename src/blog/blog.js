import React from 'react';

const Blog = () => (
    <section id="two">
        <h2>Blogs</h2>
        <div className="row">
            <header className="major">
                <h1>
                    <a href="https://medium.com/@trakbit/flow-its-not-just-about-static-typing-3546508f9509">
                        Flow: It’s Not Just About Static Typing
    </a>
                </h1>
            </header>
            <p>Flow has become a well known type checker in the Javascript ecosystem
  but it’s advantages aren’t limited to type safety.</p>
        </div>
        <div className="row">
            <header className="major">
                <h1>
                    <a href="https://medium.com/@trakbit/writing-concise-react-component-9b0b3407d508">
                        Writing Concise React Component
      </a>
                </h1>
            </header>
            <p>Write concise and succinct React component to improve readability
    by provding an difference between a verbose and concise version of React components.</p>
        </div>
    </section>
)

export default Blog;
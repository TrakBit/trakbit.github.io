import React from 'react';

const Project = () => (
    <section id="two">
        <h2>Projects</h2>
        <div className="row">
            <header className="major">
                <h1>
                    <a href="https://github.com/trakbit/coffee-app">
                        Coffee Record keeping Application Sample
						</a>
                </h1>
            </header>
            <p>The project aims to provide the best practices for creating a React project.
					It uses Redux for state management and Flow for static type checking.</p>
        </div>
        <div className="row">
            <header className="major">
                <h1>
                    <a href="https://bitbucket.org/trakbit/srm">
                        CRM application for education sector
						</a>
                </h1>
            </header>
            <p>CRM application built on React aims to cater colleges who are targeting school students with tailored deals for encouraging
					to enroll them.</p>
        </div>
    </section>
);

export default Project;
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../../components/navBar/navBar";
import Footer from "../../components/footer/footer";
import Logo from "../../components/logo/logo";
import photo3 from "../../assets/images/jefferson-santos-9SoCnyQmkzI-unsplash.jpg"
import Slide from 'react-reveal/Slide';

import INFO from "../../const/user";
import SEO from "../../const/seo";

import "../about/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
							<Slide left>
								<div className=" about-title">
									{INFO.about.title}
								</div>
                            </Slide>
							<Slide right>
								<div className=" about-subtitle">
									{INFO.about.description}
								</div>
								</Slide>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
									<Slide bottom>
										<img
											src={photo3}
											alt="about"
											className="about-image"
										/>
										</Slide>
									</div>
								</div>

								{/* <div className="about-socials">
									<Socials />
								</div> */}
							</div>
						</div>
					{/* 	<div className="about-socials-mobile">
							<Socials />
						</div> */}
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;

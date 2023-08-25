import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';



import Logo from "../../components/logo/logo";
import Footer from "../../components/footer/footer";
import NavBar from "../../components/navBar/navBar";
import Article from "../../components/homeArticle/article";
import Works from "../../components/works/works";
import AllProjects from "../../components/allProjects/allProjects";

import INFO from "../../const/user";
import currentSEO from "../../const/seo";
import myArticles from "../../const/articles";
import TextLeft from "../../components/textLeft/textLeft"
import "../homepage/homepage.css";


const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);



	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords/* .join(", ") */}
				/>
			</Helmet>
			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div>
					</div>
					<Slide left>
					<div className="homepage-container">
						<TextLeft />

					
						
					{/* 	<div className="homepage-projects">
						<Slide left>
							<AllProjects />
							</Slide>
						</div> */}
						<div className="homepage-after-title">
							<div className="homepage-articles">
								{myArticles.map((article, index) => (
									<div
										className="homepage-article"
										key={(index + 1).toString()}
									>
										<Fade left big>
										<Article
											key={(index + 1).toString()}
											date={article().date}
											title={article().title}
											description={article().description}
											link={"/article/" + (index + 1)}
										/>
										</Fade>
									</div>
								))}
							</div>
							</div>

							<div className="homepage-works">
							<Fade right big>
								<Works />
								</Fade>
							</div>
						

						<div className="page-footer">
							<Footer />
						</div>
					</div>
					</Slide>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;

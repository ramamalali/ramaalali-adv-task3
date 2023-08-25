import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../../components/navBar/navBar";
import Footer from "../../components/footer/footer";
import Logo from "../../components/logo/logo";
import Article from "../../components/articles/article";
import Slide from 'react-reveal/Slide';

import INFO from "../../const/user";
import SEO from "../../const/seo";
import myArticles from "../../const/articles";

import "../articles/articles.css";

const Articles = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "articles");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Articles | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="articles" />
				<div className="content-wrapper">
					<div className="articles-logo-container">
						<div className="articles-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="articles-main-container">
						<Slide left>
						<div className="title articles-title">
							{INFO.articles.title}
						</div>
						</Slide>
						<Slide left>
						<div className="subtitle articles-subtitle">
							{INFO.articles.description}
						</div>
						</Slide>
						<div className="articles-container">
							<div className="articles-wrapper">
								{myArticles.map((article, index) => (
									<div
										className="articles-article"
										key={(index + 1).toString()}
									>
										<Article
											key={(index + 1).toString()}
											date={article().date}
											title={article().title}
											description={article().description}
											link={"/article/" + (index + 1)}
										/>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Articles;

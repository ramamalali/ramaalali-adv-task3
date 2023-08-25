import React from "react";
import { Link } from "react-router-dom";

import INFO from "../../const/user";
import logo from "../../assets/images/Neze_art_ I will design initial esport logo for gaming team, youtube, twitch free banner for $10 on fiverr_com.jpg"
import "../logo/logo.css";

const Logo = (props) => {
	let { width, link } = props;

	if (link === undefined) {
		link = true;
	}

	const imageElement = (
		<img src={logo} alt="logo" className="logo" width={width} />
	);

	return (
		<React.Fragment>
			{link ? <Link to="/">{imageElement}</Link> : imageElement}
		</React.Fragment>
	);
};

export default Logo;

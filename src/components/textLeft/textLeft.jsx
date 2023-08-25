import React from 'react'

import INFO from '../../const/user';
import photo2 from "../../assets/images/kelly-sikkema-YK0HPwWDJ1I-unsplash.jpg"
import "../textLeft/textLeft.css"
import Fade from 'react-reveal/Fade';
 const TextLeft = () => {


  return (
    <React.Fragment>
              <div className="homepage-first-area">
			  <Fade left big>
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									{INFO.homepage.title}
								</div>

								<div className="subtitle homepage-subtitle">
									{INFO.homepage.description}
								</div>
							</div>
				</Fade>
				<Fade right big>
							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src={photo2}
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
				</Fade>
				</div>
       </React.Fragment>
  );
}
export default TextLeft
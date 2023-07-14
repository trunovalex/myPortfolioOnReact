import "./style.css";

import vk from './../../img/icons/vk.svg';
import instagram from './../../img/icons/instagram.svg';
import telegram from './../../img/icons/telegram.svg';
import linkedIn from './../../img/icons/linkedIn.svg';
import gitHub from './../../img/icons/gitHub.svg';

const Footer = () => {
    return (
		<footer className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<ul className="social">
						<li className="social__item">
							<a href="https://t.me/trunov_alexey" target="_blank">
								<img src={telegram} alt="Link" />
							</a>
						</li>
						<li className="social__item">
							<a href="https://www.instagram.com/trunov_alexey/" target="_blank">
								<img src={instagram} alt="Link" />
							</a>
						</li>
						<li className="social__item">
							<a href="https://vk.com/trunov_alexey" target="_blank">
								<img src={vk} alt="Link" />
							</a>
						</li>
						<li className="social__item">
							<a href="https://github.com/trunovalex" target="_blank">
								<img src={gitHub} alt="Link" />
							</a>
						</li>
						<li className="social__item">
							<a href="https://www.linkedin.com/in/truenow" target="_blank">
								<img src={linkedIn} alt="Link" />
							</a>
						</li>
					</ul>
					<div className="copyright">
						<p>© Copyright Truenow. All rights reserved</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
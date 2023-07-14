import "./style.css";

const Header = () => {
    return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
						 Hello, I'm <em>Alex Trunov</em>
					</strong>
					<br />Front-end Developer
				</h1>
				<div className="header__text">
					<p>With knowledge in web development and design, I offer the best projects resulting in quality work.</p>
				</div>
				<a href="#!" className="btn">
					Download CV
				</a>
			</div>
		</header>
	);
}

export default Header;
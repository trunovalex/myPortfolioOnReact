import Header from './../components/header/Header'

const Home = () => {
    return (
		<>
			<Header />
			<main className="section">
				<div className="container">
					<ul className="content-list">
						<li className="content-list__item">
							<h2 className="title-2">Favorite Skills</h2>
							<div class="skills__content">
								<ol className="skills__group">
									<li className="skills__item">HTML & CSS</li>
									<li className="skills__item">JavaScript</li>
									<li className="skills__item">Bootstrap</li>
									<li className="skills__item">React</li>
								</ol>

								<ol className="skills__group" start="5">
									<li className="skills__item">Git & GitHub</li>
									<li className="skills__item">Figma</li>
									<li className="skills__item">Adobe</li>
								</ol>
							</div>
						</li>
					</ul>
				</div>
			</main>
		</>
	);
}

export default Home;
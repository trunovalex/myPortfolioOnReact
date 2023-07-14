import gitHubIcon from './link.svg';
import "./style.css"

const BtnGitHub = ({ link }) => {
	return (
		<a href={link} target="_blank" rel="noreferrer" className="btn-outline">
			<img src={gitHubIcon} alt="" />
			View demo
		</a>
	);
};

export default BtnGitHub;
import profilePic from "../images/profilePic.jpg";
import linkedinIcon from "../images/linkedin-icon.png";
import facebookIcon from "../images/facebook-icon.png";

function Card() {
	return (
		<div className="card">
			<img src={profilePic} alt="Batman image" className="profilePic"></img>
			<div className="text-container">
				{" "}
				<h2>Are you afraid of the dark?</h2>
				<h1>Batman!</h1>
				<p>
					Batman is the superhero protector of Gotham City, a tortured, brooding
					vigilante dressed as a bat who fights against evil and strikes fear
					into the hearts of criminals everywhere.
				</p>
				<p>
					{" "}
					In his public identity, he is Bruce Wayne, a billionaire industrialist
					and notorious playboy.
				</p>
				<p>
					{" "}
					Although he has no superhuman abilities, he is one of the world's
					smartest men and greatest fighters.
				</p>
				<p>
					His physical prowess, technical ingenuity, and tactical thinking make
					him an incredibly dangerous opponent.
				</p>
				<p>He was also a founding member of the Justice League.</p>
				<div className="icon-container">
					{" "}
					<a
						href="https://www.linkedin.com/pulse/batman-da-escurid%C3%A3o-noite-para-luz-do-sucesso-corporativo-ex-colega/"
						target="_blank"
					>
						<img className="icon" src={linkedinIcon}></img>
					</a>
					<a
						href="https://www.facebook.com/TheBatman/?locale=pt_BR"
						target="_blank"
					>
						<img className="icon-face" src={facebookIcon}></img>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Card;

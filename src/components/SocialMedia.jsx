import insta from "../assets/insta.png";
import twitter from "../assets/twitter.png";
export default function SocialMedia(){
    return (
    <div style={{textAlign:"center"}} >
    <h3>Follow Us on</h3>
    <h5>INSTAGRAM :</h5><br></br>
    <a target="_blank" href="https://instagram.com/the_nh_209?igshid=YmMyMTA2M2Y="><img id="img" src={insta} alt=""></img></a><br/><br/>
    <h5>TWITTER :</h5><br></br>
    <a target="_blank" href="https://twitter.com/the_nh_209?t=Mklj-yhfq8TvUFawkywQxA&s=09"><img id="img" src={twitter} alt=""></img></a>
    </div>
    );
    }
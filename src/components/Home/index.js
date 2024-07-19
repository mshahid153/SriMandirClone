import achievement from "../../Assets/achievement.webp"
import playstore from "../../Assets/playstore.svg"
import appstore from "../../Assets/appstore.svg"
import interfaceImg from "../../Assets/interfaceImg.webp"

import "./index.css"

const Home= () => {
    return(
            <div className="home-page">
                <div className="intro">
                    <div className="intro-left">
                        <div className="achievement">
                            <img src={achievement} alt="achievement-img"/>
                            <p>WORLD'S LARGEST APP FOR HINDU DEVOTEES</p>
                        </div>
                        <div>
                            <h1>Pray daily with<span style={{color : '#f18c33'}}> Sri Mandir.</span><br/> One App for all your devotional needs.</h1>
                            <div className="app-link">
                                <img src={playstore} alt="app-img"/>
                                <img src={appstore} alt="app-img"/>
                            </div>
                        </div>
                    </div>
                    <div className="intro-right">
                        <img src={interfaceImg} alt="interface-img"/>
                    </div>

                </div>
            </div>
    )

}

export default Home
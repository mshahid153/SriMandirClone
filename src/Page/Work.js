import construction from "../Assets/construction.png"

const Work = () => {
    return(
        <div style={{textAlign : 'center',marginTop: '30px'}}>
            <img src={construction} style={{width : '700px'}} alt="site-img"/>
            <h1 style={{fontSize: "30px"}}>Our website is currently under construction to bring you a better experience <br/>so please check back soon for updates!</h1>
        </div>
    )
}

export default Work
import "./header.scss"
function Header() {
    return ( 
        <div className="headerPage">
            <div className="container">
                <h1 className="logo">
                compar <br />
                    academy
                </h1>
                <div className="content">
                    <ul>
                        <li><a href="#">ANA SEHIFE </a></li>
                        <li><a href="#">TEDRIS PAKETLERIMIZ</a></li>
                        <li><a href="#">BLOG</a></li>
                        <li><a href="#">HAQQIMIZDA</a></li>
                        <li><a href="#">TEDBIR</a></li>  
                    </ul>
                    <div className="headerBtn">
                        <a href="#">ELAQE</a>
                    </div>
                </div>           
            </div>
            <div></div>
        </div>
     );
}

export default Header;
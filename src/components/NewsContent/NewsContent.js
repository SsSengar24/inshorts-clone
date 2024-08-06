import { Container } from "@mui/material";
import "./NewsContent.css";

const NewsContent = () => {
    return (
        <Container maxWidth="md">
            <div className="content">
                <div className="downloadMessage">
                    <span className="downloadText">
                        For the best experience use inshorts app on your smartphone
                    </span>
                    <div className="images">
                        <img className="apple" alt="Apple Store" height="80%" src="https://assets.inshorts.com/website_assets/images/appstore.png" />
                        <img className="google" alt="Google Playstore" height="80%" src="https://assets.inshorts.com/website_assets/images/playstore.png" />
                    </div>
                </div>
            </div>

        </Container>


    )
}

export default NewsContent;
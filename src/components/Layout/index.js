import React, { useContext } from 'react';
import { NewsContext } from "../../utils/NewsContext";
import { Container, Row, Col } from "react-bootstrap";
import News from "../News";
import Search from "../Search";
import "./style.css";

function Layout() {
    const [state] = useContext(NewsContext);
    return (
        <div>
            <div className="banner">
                {/* Logo */}
                <h1 id="site-name">Wellness Whisper</h1>
            </div>
            <Container>
                <Row >
                    <Col className="header">
                        <h2 id="subtitle">Your source for healthcare news</h2>
                    </Col>
                </Row>
                <Row>
                    <Col className="header">
                        <Search />
                    </Col>
                </Row>
                <Row>
                    <Col className="header">
                        <h5>{!state ? "Current headlines" : state.keyword
                            ? `Search results for "${state.keyword}"`
                            : "Current headlines"}</h5>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <News />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Layout;

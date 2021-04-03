import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ArticleItem from "../ArticleItem";
import "./style.css";

function Layout() {
    return (
        <div>
            <Container>
                <Row>
                    <Col className="header">
                        <h1>Wellness Whisper</h1>
                    </Col>
                </Row>
                <Row >
                    <Col className="header">
                        <h2>Your personal source for global healthcare news</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {/* Map the API fetch data to this component */}
                        <ArticleItem />
                        <ArticleItem />
                        <ArticleItem />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Layout;

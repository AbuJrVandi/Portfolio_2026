import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/img/JrAbu.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">

          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/abu-junior-vandi-67b12425a/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/share/1ADLjFL2aK/?mibextid=wwXIfr"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/abuzo_marvani?igsh=Znh2cDl6M24xcnk3&utm_source=qr"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p> Abu Junior Vandi. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

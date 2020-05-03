import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import tomiwaImage from "./assets/tomiwa.jpg";
import jacobImage from "./assets/jacob.jpg";
import aaronImg from "./assets/aaronImg.jpg";
import elaineImg from "./assets/elaineImg.jpeg";
import hadiImg from "./assets/hadiImg.jpg";
import isaacImg from "./assets/isaacImg.jpeg";
import melissaImg from "./assets/melissaImg.jpeg";
import mitchellImg from "./assets/mitchellImg.jpg";
import abhiImg from "./assets/abhiImg.jpeg";
import devImg from "./assets/devImg.jpeg";
import { Col, Row } from "antd";
import HelmetSeo from "../HelmetSeo";
const emilyImg = 'https://i.imgur.com/VGAaH5L.jpg';

const teamMembers = [
  {
    first_name: "Tomiwa",
    last_name: "Ademidun",
    username: "tomiwa",
    position: "Founder",
    img_url: tomiwaImage,
    description_1:
      "Tomiwa is a dual degree software engineering and business student at Ivey Business School," +
        " Western University",
    description_2: "He enjoys playing soccer and is a big Arsenal F.C. fan.",
    link_type: "Website",
    link_url: "http://tomiwa.ca",
  },
  {
    first_name: "Mitchell",
    last_name: "Li",
    position: "Software Developer",
    username: null,
    img_url: mitchellImg,
    description_1:
      "Mitchell is an Honours Mathematics and Business student at the University of Waterloo",
    link_type: "LinkedIn",
    link_url: "https://www.linkedin.com/in/mitchell-tz-li/",
  },
  {
    first_name: "Melissa",
    last_name: "Wen",
    position: "Marketing",
    username: null,
    img_url: melissaImg,
    description_1: "Melissa is a BMOS student at Western university",
    link_type: "LinkedIn",
    link_url: "https://www.linkedin.com/in/melissa-wen-63aa8b198/",
  },
  {
    first_name: "Emily",
    last_name: "Chen",
    position: "Designer",
    username: null,
    img_url: emilyImg,
    description_1: "Melissa is a BMOS student at Western university",
    link_type: "LinkedIn",
    link_url: "https://www.linkedin.com/in/melissa-wen-63aa8b198/",
  },
  {
    first_name: "Dev",
    last_name: "Pancea",
    position: "Software Developer",
    username: null,
    img_url: devImg,
    description_1:
      "Dev is an Honours Mathematics student at the University of Waterloo",
    link_type: "LinkedIn",
    link_url: "https://www.linkedin.com/in/dev-pancea-018b7116a/",
  },
  {
    first_name: "Aaron",
    last_name: "Doerfler",
    position: "Marketing",
    username: "aarondoerfler",
    img_url: aaronImg,
    description_1:
      "Aaron is a Media Information and Techno-culture (MIT) student at Western university ",
    link_type: "LinkedIn",
    link_url: "https://www.linkedin.com/in/aaron-doerfler-3a2144197/",
  },
  {
    first_name: "Abhinit",
    last_name: "Patil",
    position: "Software Developer",
    username: null,
    img_url: abhiImg,
    description_1:
      "Abhinit is a grade 12 IB student at Turner Fenton Secondary School",
    link_type: "LinkedIn",
    link_url: "https://www.linkedin.com/in/abhinit-patil/",
  },
  {
    first_name: "Elaine",
    last_name: "Yin",
    position: "Marketing",
    username: null,
    img_url: elaineImg,
    description_1: "Elaine is currently studying BMOS at Western university ",
    link_type: "LinkedIn",
    link_url: "https://www.linkedin.com/in/elaine-yin-018a90198/",
  },
  {
    first_name: "Isaac",
    last_name: "Tang",
    position: "Marketing",
    username: null,
    img_url: isaacImg,
    description_1: "Isaac is currently studying BMOS at Western university",
    link_type: "LinkedIn",
    link_url: "https://www.linkedin.com/in/isaac-tang-b42a8b198/",
  },
  {
    first_name: "Hadi",
    last_name: "Al Hakeem",
    position: "Software Developer",
    username: null,
    img_url: hadiImg,
    description_1:
      "Hadi is a grade 12 student at Georges Vanier Secondary School",
    link_type: "LinkedIn",
    link_url: "https://www.linkedin.com/in/hadi-al-hakeem-24182819a/",
  },

  {
    first_name: "Jacob",
    last_name: "Munene",
    position: "Marketing",
    username: null,
    img_url: jacobImage,
    description_1:
      "Jacob is currently studying Financial Modeling and Applied Mathematics at Western University.",
    description_2:
      "For fun, he enjoys working out and recording himself while doing it.",
    link_type: "LinkedIn",
    link_url: "https://www.linkedin.com/in/jacob-munene-4561a4153/",
  },
];

function TeamMemberCard({ teamMember, showLinkedin = true }) {
  return (
    <div
      className='bg-white rounded shadow mb-3 p-3'
      style={{ height: "350px" }}
    >
      <img
        className='mb-3'
        src={teamMember.img_url}
        alt={teamMember.first_name}
        style={{ width: "100px", height: "100px", borderRadius: "50%" }}
      />
      <h5 className='mb-0'>
        <strong>
          {teamMember.first_name} {teamMember.last_name}
        </strong>
      </h5>
      <span className='small text-uppercase text-muted'>
        {teamMember.position}
      </span>
      <ul className='social mb-0 list-inline mt-3'>
        {teamMember.username && (
          <React.Fragment>
            <li className='list-inline-item'>
              <Link to={`/profile/${teamMember.username}`}>Profile</Link>
            </li>
            |{" "}
          </React.Fragment>
        )}
        {showLinkedin && (
          <li className='list-inline-item'>
            <a
              href={teamMember.link_url}
              className='social-link'
              target='_blank'
              rel='noopener noreferrer'
            >
              LinkedIn
            </a>
          </li>
        )}
      </ul>
      <p>{teamMember.description_1}</p>
    </div>
  );
}

TeamMemberCard.propTypes = {
  teamMember: PropTypes.shape({}),
};

const Team = ({ showArray = null, showLinkedin = true, showSeo = true }) => {
  const seoContent = {
    title: "Atila Team - The people that make Atila awesome",
    description: "Atila's team, the people that make Atila awesome.",
    image: "https://i.imgur.com/ekfz2sj.png",
    slug: "/team",
  };

  let teamCards = teamMembers.map((member) => (
    <Col xs={24} sm={12} md={8} lg={6} xl={4.8} key={member.first_name}>
      <TeamMemberCard teamMember={member} showLinkedin={showLinkedin} />
    </Col>
  ));

  //if showArray has names, it will cycle through and will only create cards for members whos
  // first names match the showNames array inputs
  if (!(showArray === null)) {
    teamCards = showArray.map((person) => {
      let index;
      for (index in teamMembers) {
        if (teamMembers[index].first_name === person) {
          return (
            <Col
              xs={24}
              sm={12}
              md={8}
              lg={6}
              xl={4.8}
              key={teamMembers[index].first_name}
            >
              <TeamMemberCard
                teamMember={teamMembers[index]}
                showLinkedin={showLinkedin}
              />
            </Col>
          );
        }
      }
      return null;
    });
  }

  return (
    <React.Fragment>
      {showSeo && <HelmetSeo content={seoContent} />}
      <div className='container mt-3'>
        <h1>The Atila Team</h1>
        <br />
        <Row gutter={16}>
          {teamCards}
          <br />
          <Col span={24} className='my-3' style={{ fontSize: "larger" }}>
            <br />
            If you would like to join the team or help out in some way,
            <a
              href='mailto:info@atila.ca'
              target='_blank'
              rel='noopener noreferrer'
            >
              {" "}
              send an email{" "}
            </a>{" "}
            to{" "}
            <a
              href='mailto:info@atila.ca'
              target='_blank'
              rel='noopener noreferrer'
            >
              info@atila.ca
            </a>{" "}
            with your resume and/or links to cool stuff you've done.
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default Team;

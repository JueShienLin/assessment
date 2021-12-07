import React, { useState } from "react";
import { Data } from "./data";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import Hotel from "../assets/hotelexterior.jpg";

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 40px;

  @media screen and (max-width: 768px) {
    padding-left: 200px;
    padding-right: 200px;
  }
`;
const Container = styled.div`
  padding-left: 100px;
  padding-right: 100px;
  width: 100%;
  position: absolute;
  @media screen and (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const Wrap = styled.div`
  width: 100%;
  background: #c9d5ff;
  border-radius: 5px;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  h1 {
    padding: 1rem;
    font-size: 1rem;
    font-weight: bolder;
  }
  span {
    margin-right: 1.5rem;
  }
`;
const DetailsContainer = styled.div`
  justify-content: start;
  align-items: start;
  color: #fff;
  padding-left: 100px;
  line-height: 10px;
  margin-top: 40px;
  margin-bottom: 40px;
  @media screen and (max-width: 768px) {
    margin-top: 20px;
    margin-bottom: 20px;
    padding-left: 20px;
  }
`;

const Image = styled.img`
  height: 500px;
  @media screen and (max-width: 768px) {
    height: 150px;
    width: 330px;
    margin-right: 25px;
  }
`;
const Dropdown = styled.div`
  background: #fff;
  color: #000;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 15px;
  padding-left: 20px;
  padding-right: 20px;
  p {
    font-size: 1rem;
  }
`;

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <>
      <div className="main-container">
        <ImageContainer>
          <Image
            src={Hotel}
            alt=""
            style={{
              borderStyle: "solid",
              borderColor: "#fff",
              borderSize: "15px",
            }}
          />
        </ImageContainer>
        <DetailsContainer>
          <h1>Hilton Chicago</h1>
          <p style={{ opacity: "0.7" }}>720 Souch Michigan Avenue</p>
          <p style={{ opacity: "0.7" }}>Chicago, Illinoi, 60605</p>
          <u>1-312-922-4400</u>
        </DetailsContainer>
        <IconContext.Provider value={{ color: "#000", size: "25px" }}>
          <AccordionSection>
            <Container>
              {Data.map((item, index) => {
                return (
                  <>
                    <Wrap onClick={() => toggle(index)} key={index}>
                      <h1>{item.question}</h1>
                      <span>
                        {clicked === index ? (
                          <FaChevronUp />
                        ) : (
                          <FaChevronDown />
                        )}
                      </span>
                    </Wrap>
                    {clicked === index ? (
                      <Dropdown>
                        <p>{item.answer}</p>
                      </Dropdown>
                    ) : null}
                  </>
                );
              })}
            </Container>
          </AccordionSection>
        </IconContext.Provider>
      </div>
    </>
  );
};

export default Accordion;

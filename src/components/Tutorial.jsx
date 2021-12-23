import React from "react";
import { Link } from "@reach/router";
import TutorialContainer from "../styledComponents/TutorialContainer";
import StyledParagraph from "../styledComponents/StyledParagraph";
import StyledButton from "../styledComponents/StyledButton";
import StyledHeader from "../styledComponents/StyledHeader";
import HomeTitle from "../styledComponents/HomeTitle";

const Tutorial = (props) => {
  return (
    <TutorialContainer>
      <HomeTitle>Tutorial</HomeTitle>
      <StyledParagraph>
        <StyledHeader>Welcome {props.username}!</StyledHeader>
        <p></p>
        <p>It is Christmas time and you are due to start a new job as COHORT LEAD next year but your plans have been derailed by C.O.V.I.D - a Comically Oversized Void of Insecurity and Doubt!</p>
        <p>Can you defeat the colleagues that stand in your way in time to take up your promotion?</p>
        <p>Use W,A,S,D to move and space bar to chat to a colleague. Refill your heart with confidence to complete the game.</p>
        <p></p>
        <Link to="/game">
          <StyledButton>PLAY!</StyledButton>
        </Link>
      </StyledParagraph>
    </TutorialContainer>
  );
};

export default Tutorial;

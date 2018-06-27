import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";

import { colors, fonts } from "../styles";

const StyledLayout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  text-align: center;
`;

const StyledColumn = styled.div`
  padding: 0px 96px;
`;

const StyledHeader = styled.div`
  margin-top: -1px;
  margin-bottom: 40px;
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  background-color: rgb(${colors.header});
  justify-content: center;
  padding: 0 16px;
`;

const StyledTitle = styled.div`
  color: rgb(${colors.white});
  font-size: ${fonts.size.big};
`;

const StyledContent = styled.div`
  width: 100%;
`;

const BaseLayout = ({ children }) => (
  <StyledLayout>
    <StyledHeader>
      <StyledTitle>Maker Voting</StyledTitle>
    </StyledHeader>
    <StyledColumn>
      <StyledContent>{children}</StyledContent>
    </StyledColumn>
  </StyledLayout>
);

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired
};

const reduxProps = ({}) => ({});

export default connect(
  reduxProps,
  {}
)(BaseLayout);

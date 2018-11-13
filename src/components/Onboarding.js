import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import {
  onboardingClose,
  onboardingNextStep,
  onboardingPrevStep,
  onboardingStartLinkedFlow,
  onboardingChooseWalletType
} from '../reducers/onboarding';
import Terms from './onboarding/Terms';
import ChooseHotWallet from './onboarding/ChooseHotWallet';
import ChooseColdWallet from './onboarding/ChooseColdWallet';
import Introduction from './onboarding/Introduction';

import { OnboardingFullScreen, Box } from '@makerdao/ui-components';

const Background = styled(Box)`
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease-in-out;
  transition-delay: 0.2s;

  ${props =>
    props.show &&
    `
    pointer-events: unset;
    opacity: 1;
    transition-delay: 0s;
  `};
`;

const Onboarding = ({
  open,
  step,
  flow,
  onboardingClose,
  onboardingNextStep,
  onboardingPrevStep,
  onboardingStartLinkedFlow,
  onboardingChooseWalletType
}) => {
  return (
    <Background
      show={open}
      zIndex="20000"
      bg="#F6F8F9"
      position="fixed"
      top="0"
      left="0"
    >
      <Introduction
        show={open && !flow}
        onClose={onboardingClose}
        onLinkedWallet={onboardingStartLinkedFlow}
      />
      <OnboardingFullScreen
        step={step}
        show={open && flow === 'linked'}
        onClose={onboardingClose}
        steps={[
          'Terms of use',
          'Select Voting Wallet',
          'Select MKR Balance',
          'Initiate Link',
          'Lock MKR',
          'Start Voting'
        ]}
      >
        <Terms
          onCancel={onboardingChooseWalletType}
          onComplete={onboardingNextStep}
        />

        <ChooseHotWallet onComplete={onboardingNextStep} />
        <ChooseColdWallet onComplete={onboardingNextStep} />
      </OnboardingFullScreen>
    </Background>
  );
};

export default connect(
  state => state.onboarding,
  {
    onboardingChooseWalletType,
    onboardingStartLinkedFlow,
    onboardingClose,
    onboardingNextStep,
    onboardingPrevStep
  }
)(Onboarding);

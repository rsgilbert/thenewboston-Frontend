import styled from 'styled-components';

import UButton from 'components/Button';
import UModal from 'components/Modal';
import {breakpoints} from 'styles';

import RadioCard from './RadioCard';

export const Button = styled(UButton)`
  border-radius: 100px;
  height: 44px;
  margin-top: 32px;
  width: 112px;
`;

export const Modal = styled(UModal)`
  display: flex;
  flex-direction: column;
  max-width: 752px;
  min-width: 480px;

  @media (max-width: ${breakpoints.mini}) {
    max-width: 100%;
    min-width: 90%;
  }
`;

export const RadioCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: ${breakpoints.mini}) {
    grid-template-columns: 1fr;
  }

  @media (min-width: ${breakpoints.mini}) and (max-width: ${breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const RadioCardWrapper = styled(RadioCard)`
  border-radius: 14px;
  width: 224px;

  @media (max-width: ${breakpoints.mini}) {
    width: 100%;
  }
`;

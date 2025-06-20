import styled from 'styled-components';

import UButton from 'components/Button';
import {breakpoints, colors} from 'styles';

export const Box = styled.div`
  background: ${colors.white};
  border: 1px solid ${colors.border};
  border-radius: 14px;
  border-right: 1px solid ${colors.border};
  box-shadow: 0 3px 6px rgb(140 149 159 / 15%);
`;

export const Button = styled(UButton)`
  width: 100%;
`;

export const ButtonContainer = styled.div`
  margin-bottom: 16px;

  @media (min-width: 1025px) {
    flex-grow: 1;
  }
`;

export const Container = styled.div`
  align-items: flex-start;
  display: flex;
  gap: 10px;
  padding: 24px;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    padding: 10px;
  }
`;

export const FlexContainer = styled.div`
  align-items: center;
  display: flex;

  @media (max-width: ${breakpoints.tablet}) {
    justify-content: end;
  }
`;

export const LeftMenu = styled.div`
  min-width: 271px;

  @media (max-width: ${breakpoints.mobile}) {
    min-width: auto;
    width: 100%;
  }
`;

export const Right = styled.div`
  background: ${colors.white};
  border: 1px solid ${colors.border};
  border-radius: 14px;
  box-shadow: 0 3px 6px rgb(140 149 159 / 15%);
  flex: 1;
  padding: 24px 16px;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 18px 10px;
  }
`;

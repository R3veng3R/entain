import React, { CSSProperties, ReactNode } from 'react';
import Modal, { BaseModalBackground, ModalProvider } from 'styled-react-modal';
import styled from 'styled-components';
import { CssBreakpoint } from '../../enum/CssBreakpoint';

const StyledModal = styled.div` 
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #FFF;

  @media screen and (max-width: ${CssBreakpoint.Sm}) {
     width: 100%;
     height: 100%;
     padding-top: 50%;
     padding-bottom: 50px;
  }
`;

const Background = styled(BaseModalBackground)`
  background-color: rgba(0, 41, 84, .5);
`;

interface Props {
  isOpen: boolean;
  children?: ReactNode;
  style?: CSSProperties;
}

export const ResponsiveModal = ({ isOpen, children, style }: Props) => {
  return (
    <ModalProvider backgroundComponent={Background}>
      <Modal
        isOpen={isOpen}
      >
        <StyledModal style={style} className="modal-content">
          {children}
        </StyledModal>
      </Modal>
    </ModalProvider>
  );
};

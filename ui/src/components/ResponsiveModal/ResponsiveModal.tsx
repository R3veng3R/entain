import React, { ReactNode } from 'react';
import Modal, { BaseModalBackground, ModalProvider } from 'styled-react-modal';
import styled from 'styled-components';
import { CssBreakpoint } from '../../enum/CssBreakpoint';

const StyledModal = styled.div`
  width: 50%;
  height: 75%;
  display: flex;
  flex-direction: column;
  background-color: #FFF;
  color: black;

  @media screen and (max-width: ${CssBreakpoint.Sm}) {
     width: 100%;
     height: 100%;
  }
`;

const Background = styled(BaseModalBackground)`
  background-color: rgba(0, 41, 84, .5);
`;

interface Props {
  isOpen: boolean;
  onBackgroundClick?: () => void;
  children?: ReactNode;
}

export const ResponsiveModal = ({ isOpen, children, onBackgroundClick }: Props) => {
  return (
    <ModalProvider backgroundComponent={Background}>
      <Modal
        isOpen={isOpen}
        onBackgroundClick={onBackgroundClick}
      >
        <StyledModal className="modal-content">
          {children}
        </StyledModal>
      </Modal>
    </ModalProvider>
  );
};

import styled from 'styled-components';

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
`;

export const Container = styled.div`
  width: 100%;
  max-width: 450px;
  padding: 24px;

  background: #fff;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;

  > h1 {
    font-size: 22px;
    color: ${({ theme, danger }) => (
    danger
      ? theme.colors.danger.main
      : theme.colors.gray[900]
  )};
}

  .modal-body {
    margin-top: 32px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 32px;

  .btn-cancel {
      margin-right: 24px;
      font-size: 16px;
      color: ${({ theme }) => theme.colors.gray[200]};
      background: transparent;
      border: 0;

      &[disabled] {
        cursor: default;
      }
  }
`;

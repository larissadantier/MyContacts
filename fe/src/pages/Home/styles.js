import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
`;

export const InputSearchContainer = styled.div`
  width: 100%;

  input {
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 25px;
    background: #fff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    outline: 0;
    padding: 0 16px;

    &::placeholder {
      color: #BCBCBC;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;

  strong {
    font-size: 24px;
  }

  a {
    font-weight: bold;
    padding: 8px 16px;
    color: ${({ theme }) => theme.colors.primary.main};
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    border-radius: 4px;
    text-decoration: none;
    transition: all 0.2s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }
  }
`;

export const ListContainer = styled.div`
  margin-top: 24px;

  header {
    margin-bottom: 8px;
      button {
      display: flex;
      align-items: center;
      border: none;
      background: transparent;

      span {
        font-weight: bold;
        margin-right: 8px;
        color:${({ theme }) => theme.colors.primary.main};
      }
    }
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;

  & + & {
    margin-top: 16px;
  }

  .info {
    .contact-name{
      display: flex;
      align-items: center;

      small {
        font-size: 12px;
        font-weight: bold;
        background: ${({ theme }) => theme.colors.primary.lighter};
        color:${({ theme }) => theme.colors.primary.main};
        text-transform: uppercase;

        margin-left: 8px;
        padding: 4px;
        border-radius: 4px;
      }
    }

    span {
      display: block;
      margin-top: 4px;
      font-size: 14px;
      color:${({ theme }) => theme.colors.gray[200]};
    }
  }

  .actions {
    display: flex;
    align-items: center;

    button {
      border: none;
      background: transparent;
      margin-left: 8px;
    }
  }
`;
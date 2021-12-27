import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  z-index: 10;
  width: 100vw;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #f8f7f7;

  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.25);

  nav {
    max-width: 900px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1.25rem;

    @media (max-width: 520px) {
      flex-direction: column;
    }

    h2 {
      font-size: 2rem;
      font-weight: 400;
    }

    .actions {
      display: flex;
      align-items: center;
      justify-content: space-between;

      min-width: 50%;

      @media (max-width: 520px) {
        margin-top: 1rem;
        min-width: 100%;
      }
    }

    .total {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }

    button {
      max-width: 10rem;
    }
  }
`
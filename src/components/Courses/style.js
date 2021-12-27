import styled from "styled-components";

export const Main = styled.main`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  section {
    max-width: 900px;
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    margin: 1rem;

    @media (max-width: 800px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 520px) {
      grid-template-columns: 1fr;
    }
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  width: 100%;
  margin-top: 12rem;
  padding: 2rem;

  border-radius: 0.5rem;
  background: #fff;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.25);

  @media (max-width: 800px) {
    &:first-child, &:nth-child(2) {
      margin-top: 12rem;
    }

    margin-top: 2rem;
  }

  @media (max-width: 520px) {
    &:first-child {
      margin-top: 10rem;
    }

    &:nth-child(2) {
      margin-top: 1rem;
    }

    margin-top: 1rem;
  }
  
  img {
    width: 50%;
    height: 50%;
  }

  h1 {
    font-size: 1rem;
    margin: 1rem 0;
  }

  span {
    margin-bottom: 1rem;
  }
`
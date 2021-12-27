import styled from "styled-components";

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 2rem 0;

  background: #ebebeb;

  ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    width: 100%;
    max-width: 900px;

    list-style: none;
  }
`

export const Li = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  align-items: center;
  padding: 2rem;

  border-radius: 0.5rem;
`
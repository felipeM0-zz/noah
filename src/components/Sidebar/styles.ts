import styled from "styled-components";

const Container = styled.div`
  width: 53px;
  height: 100vh;
  background: var(--color-primary-darker);
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  > div:nth-child(1) {
    display: flex;
    flex-direction: column;

    a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-decoration: none;
      padding: 0.7rem;
      color: rgba(255, 255, 255, 0.4);
      margin: 0.5rem 0;
      font-size: 1.1rem;
      transition: all 0.3s;

      svg {
        font-size: 1.5rem;
      }

      :hover {
        color: rgba(255, 255, 255, 0.7);
      }

      &.active {
        border-right: 2px solid var(--color-secundary);
        color: var(--color-secundary);
      }
    }
  }

  > div:nth-child(2) {
    padding: 1rem;

    svg {
      font-size: 1.3rem;
      cursor: pointer;
    }
  }
`;

export default Container;

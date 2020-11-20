import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  min-width: 320px;

  > div:nth-child(1) {
    background-color: var(--color-primary-darker);
    display: flex;
    flex-direction: column;
    padding: 2.5rem 3rem;
    overflow-x: hidden;
    max-width: 425px;
    transition: all 0.3s;

    > div:nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      img {
        width: 35px;
        border-radius: 25px;
      }

      span {
        margin-left: 0.4rem;
        font-size: 1.5rem;
        font-weight: bold;
      }
    }
  }

  @keyframes toMain {
    from {
      min-width: 425px;
    }
    to {
      min-width: 100%;
    }
  }

  @keyframes toMainSmall {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes FadeIn {
    0% {
      transform: translate(-500px, 0px);
    }
    40% {
      transform: translate(30px, 0px);
    }
    50% {
      transform: translate(-20px, 0px);
    }
    60% {
      transform: translate(15px, 0px);
    }
    70% {
      transform: translate(-10px, 0px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }

  @keyframes FadeOut {
    from {
      transform: scale(1, 1);
      opacity: 1;
    }
    to {
      transform: scale(0, 0);
      opacity: 0;
    }
  }

  @media (min-width: 426px) {
    > div:nth-child(1) {
      &.main {
        animation: toMain 1s forwards;
      }
    }
  }

  @media (max-width: 425px) {
    > div:nth-child(1) {
      padding: 1.2rem 1.5rem;

      &.main {
        animation: toMainSmall 1s forwards;
      }
    }
  }

  @media (max-width: 319px) {
    > div:nth-child(1) {
      height: max-content;
    }
  }
`;

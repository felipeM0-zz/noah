import styled from "styled-components";
import Switch from "react-switch";

const Container = styled.div`
  width: 53px;
  height: 100%;
  background: var(--color-primary-darker);
  transition: all 0.3s;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-right: 1px solid rgba(255, 255, 255, 0.2);

  > div:nth-child(1) {
    display: flex;
    flex-direction: column;

    a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-decoration: none;
      padding: 0.7rem;
      color: rgba(255, 255, 255, 0.25);
      margin: 0.3rem 0;
      font-size: 1.1rem;
      transition: all 0.3s;

      svg {
        font-size: 1.5rem;
      }

      :hover {
        color: rgba(255, 255, 255, 0.7);
      }

      &.active {
        color: var(--color-secundary);
      }
    }
  }

  > div:nth-child(2) {
    padding: 2rem 0;
    transform: rotate(-90deg);
  }

  @keyframes slideOutSide {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(-54px, 0);
    }
  }

  @media (max-width: 768px) {
    animation: slideOutSide 0.3s forwards;
  }
`;

const Switcher = styled(Switch)`
  > div:nth-child(1) {
    background: ${(props) => props.theme.colors.primary} !important;

    > div:nth-child(1),
    > div:nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        font-size: 1.3rem;
        animation: rotating 10s linear infinite;

        color: ${(props) => (props.checked ? "#f5c151" : "#333")};
      }
    }
  }

  .react-switch-handle {
    background: ${(props) => props.theme.colors.primary_darker} !important;
  }

  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export { Container, Switcher };

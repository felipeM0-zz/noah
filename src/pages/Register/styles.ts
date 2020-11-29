import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: max-context;
  min-width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  background: var(--color-primary-darker);

  > p {
    font-size: 3rem;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.3);
    padding: 2rem 2rem 0 2rem;
    transition: all 0.3s;
  }

  > div:nth-child(2),
  > div:nth-child(4) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 1rem 2rem;
    transition: all 0.3s;

    > div {
      min-width: 250px;
      border-radius: 4px;
      background: #404040;
      margin: 1rem;
      transition: all 0.3s;

      &.undefined {
        opacity: 0.3;

        > p {
          opacity: 0.3;
        }

        :hover {
          opacity: 1;

          > p {
            opacity: 1;
          }
        }
      }

      > div {
        display: flex;
        flex-direction: row;
        padding: 0.4rem;
        font-size: 1.2rem;
        color: rgba(255, 255, 255, 0.3);

        > p {
          flex: 1;
          text-transform: capitalize;
        }

        > svg {
          cursor: pointer;

          :hover {
            color: var(--color-secundary);
          }
        }
      }

      > p {
        text-align: center;
        font-size: 2rem;
        font-weight: bold;
        padding: 1rem;
        margin-bottom: 1rem;
        word-wrap: break-word;
      }
    }
  }

  > div:nth-child(4) {
    padding-bottom: 0rem !important;
  }

  > div:nth-child(5) {
    padding: 0rem 2rem 1rem;
    display: flex;
    justify-content: flex-end;
    transition: all 0.3s;

    button {
      height: 60px;
      width: 200px;
      border-radius: 4px;
      background: none;
      border: none;
      outline: none;
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgba(255, 255, 255, 0.5);
      cursor: pointer;
      transition: all 0.5s;

      span {
        margin-right: 0.2rem;
        font-size: 1.3rem;
      }

      svg {
        margin-top: 0.2rem;
        font-size: 2rem;
      }

      :hover {
        color: var(--color-secundary);
      }

      :disabled {
        color: rgba(255, 255, 255, 0.1);
        pointer-events: none;
      }
    }
  }

  #modalEdit {
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;

    > form {
      width: 100%;
      background: var(--color-primary);
      border-top-right-radius: 1.5rem;
      border-top-left-radius: 1.5rem;
      padding: 1rem 2rem 2rem;
      transition: all 0.3s;
      animation: slideDown 0.8s forwards;
      position: fixed;
      bottom: -500px;

      &.active {
        animation: slideUp 0.8s forwards;
      }

      > div:nth-child(1) {
        margin-bottom: 0.7rem;
        height: 74px;
        display: flex;
        justify-content: space-between;

        > .cep-info {
          display: flex;
          flex: 1;
          height: 100%;
          margin: 0.1rem 0.5rem 0 0;
          flex-direction: column;
          justify-content: center;

          span {
            font-size: 0.8rem;
            color: rgba(255, 255, 255, 0.3);
            display: -webkit-box;
            -webkit-line-clamp: 1;
            overflow: hidden;
            -webkit-box-orient: vertical;
            transform: translate(-100px, 0);
            animation: slideCEP 0.5s forwards;
          }
        }

        > div:nth-child(2) {
          text-align: right;
          height: 100%;
          display: flex;
          justify-content: center;
          flex-direction: column;

          p:first-child {
            transition: all 0.3s;
            font-size: 3rem;
            font-weight: bold;
          }
          p:last-child {
            color: rgba(255, 255, 255, 0.3);
          }
        }
      }

      > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        height: 111px;
        margin-bottom: 1rem;
        transition: all 0.3s;

        > input {
          width: 100%;
          border: none;
          outline: none;
          background: transparent;
          color: var(--color-secundary);
          font-size: 5rem !important;
          transition: all 0.3s;
        }

        > span:not(.cep-info) {
          font-size: 0.9rem;
          color: #f27474;
        }
      }

      > button {
        display: flex;
        margin: auto;
        height: 4.5rem;
        width: 4.5rem;
        border-radius: 2.25rem;
        border: none;
        outline: none;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s;
        margin-bottom: 20px;

        &:disabled {
          background: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.1);
          pointer-events: none;
        }
      }
    }
  }

  @keyframes slideCEP {
    to {
      transform: translate(0, 0);
    }
  }

  @keyframes slideUp {
    0% {
      bottom: -500px;
    }
    50% {
      bottom: 0px;
    }
    100% {
      bottom: -20px;
    }
  }

  @keyframes slideDown {
    0% {
      bottom: -20px;
    }
    35% {
      bottom: 0px;
    }
    100% {
      bottom: -500px;
    }
  }

  @media (max-width: 768px) {
    > div:nth-child(5) {
      justify-content: center;
    }

    #modalEdit {
      > form {
        padding: 0.7rem 1rem 1rem;

        > div:nth-child(1) {
          height: 56px;

          > div:nth-child(2) {
            p:first-child {
              font-size: 2rem;
            }
          }
        }

        > div:nth-child(2) {
          height: 83px;

          input {
            font-size: 3.5rem !important;
          }
        }
      }
    }
  }

  @media (max-width: 425px) {
    > p {
      font-size: 2.5rem;
    }

    > div:nth-child(2),
    > div:nth-child(4) {
      transition: all 0.3s;
      padding: 1rem;

      > div {
        width: 100%;
      }
    }
  }

  @media (max-width: 375px) {
    > p {
      padding: 1.5rem 1.5rem 0 1.5rem;
    }

    > div:nth-child(2),
    > div:nth-child(4) {
      padding: 0.5rem;
    }

    #modalEdit {
      > form {
        > div:nth-child(2) {
          height: 64px;

          input {
            font-size: 2.5rem !important;
          }
        }

        > button {
          height: 3.5rem;
          width: 3.5rem;
        }
      }
    }
  }
`;

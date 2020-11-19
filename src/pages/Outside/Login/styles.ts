import styled from "styled-components";

export const Container = styled.div`
  #login {
    animation: FadeIn 0.7s forwards;

    &.out {
      animation: FadeOut 0.3s forwards;
    }

    > p {
      margin-top: 2rem;
      font-size: 3rem;
      font-weight: bold;
      text-shadow: 2px 2px 2px #73737d;
    }

    > form {
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin-top: 3rem;

      span {
        margin-bottom: 0.2rem;
      }

      > input {
        height: 2.5rem;
        border-radius: 4px;
        border: none;
        outline: none;
        padding: 0.5rem;
        margin-bottom: 1rem;
        transition: all 0.3s;

        :focus {
          box-shadow: 2px 2px 2px #73737d;
        }
      }

      > label {
        display: flex;
        align-items: center;
        margin-top: 1rem;

        span {
          margin-left: 0.5rem;
        }
      }

      button {
        margin-top: 2rem;
        border: none;
        outline: none;
        border-radius: 4px;
        background: var(--color-primary);
        border: 1px solid var(--color-secundary);
        height: 3.3rem;
        cursor: pointer;
        transition: all 0.1s;

        span {
          font-weight: bold;
          color: var(--color-secundary);
        }

        :active {
          transform: scale(0.95, 0.95);
        }
      }

      > div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 1rem;

        span:not(:first-child) {
          color: #73737d;
          font-weight: bold;
          cursor: pointer;

          :hover {
            text-decoration: underline;
          }
        }

        > div {
          margin-bottom: 0.5rem;

          span:last-child {
            margin-left: 0.3rem;
          }
        }
      }
    }
  }
`;

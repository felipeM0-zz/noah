import styled from "styled-components";

export const Container = styled.div`
  #create {
    animation: FadeIn 0.7s forwards;

    &.out {
      animation: FadeOut 0.3s forwards;
    }

    > p {
      margin-top: 3rem;
      font-size: 3rem;
      font-weight: bold;
      text-shadow: 2px 2px 2px #73737d;
    }

    > form {
      margin-top: 3rem;
      display: flex;
      flex-direction: column;

      > div {
        display: flex;
        flex-direction: row;
        margin-bottom: 1.5rem;

        > div {
          > input {
            width: 100%;
            border: none;
            height: 2.5rem;
            outline: none;
            padding: 0.5rem;
            margin-top: 0.2rem;
            transition: all 0.2s;

            :focus {
              box-shadow: 2px 2px 2px #73737d;
            }
          }
        }

        > div:nth-child(1) {
          input {
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
            margin-right: 0.1rem;
          }
        }

        > div:nth-child(2) {
          input {
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
            margin-left: 0.1rem;
          }
        }
      }

      > span {
        margin: 0.2rem 0;
      }

      > input {
        border: none;
        outline: none;
        height: 2.5rem;
        margin-bottom: 2rem;
        border-radius: 4px;
        padding: 0.5rem;
        transition: all 0.2s;

        :focus {
          box-shadow: 2px 2px 3px #73737d;
        }
      }

      > button {
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
    }

    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 1.5rem;

      span:last-child {
        font-weight: bold;
        margin-left: 0.3rem;
        cursor: pointer;

        color: #73737d;

        :hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

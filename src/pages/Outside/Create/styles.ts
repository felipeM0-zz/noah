import styled from "styled-components";

export const Container = styled.div`
  #create {
    max-width: 425px;
    margin: auto;
    animation: FadeIn 0.7s forwards;

    &.out {
      animation: FadeOut 0.3s forwards;
    }

    > p {
      margin-top: 1.5rem;
      font-size: 3rem;
      font-weight: bold;
      text-shadow: 2px 2px 2px #73737d;
    }

    > form {
      margin-top: 3rem;
      display: flex;
      flex-direction: column;

      > div:nth-child(1) {
        display: flex;
        flex-direction: row;
        margin-bottom: 0.2rem;

        div {
          span:first-child {
            font-size: 0.8rem;
          }

          input {
            width: 100%;
            border: none;
            height: 2.5rem;
            outline: none;
            padding: 0.5rem;
            margin-top: 0.2rem;
            transition: all 0.2s;
          }

          p:last-child {
            margin-top: 0.1rem;
            font-size: 0.8rem;
            text-align: right;
            color: #f27474;
            height: 20px;
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

      > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        margin-bottom: 2rem;

        span:first-child {
          margin: 0.2rem 0;
          font-size: 0.8rem;
        }

        input {
          border: none;
          outline: none;
          height: 2.5rem;

          border-radius: 4px;
          padding: 0.5rem;
          transition: all 0.2s;
        }

        span:last-child {
          margin-top: 0.1rem;
          font-size: 0.8rem;
          text-align: right;
          color: #f27474;
          height: 20px;
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
        transition: all 0.5s !important;

        span {
          font-weight: bold;
          color: var(--color-secundary);
        }

        :active {
          transform: scale(0.95, 0.95);
        }

        :disabled {
          background: rgba(255, 255, 255, 0.1);
          border: none;
          pointer-events: none;

          span {
            color: rgba(255, 255, 255, 0.1);
            font-weight: normal;
          }
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

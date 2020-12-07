import styled from "styled-components";

export const Container = styled.div`
  #login {
    max-width: 425px;
    margin: auto;
    animation: FadeIn 0.7s forwards;

    &.out {
      animation: FadeOut 0.3s forwards;
    }

    > p {
      margin-top: 1rem;
      font-size: 3rem;
      font-weight: bold;
      text-shadow: 2px 2px 2px #73737d;
    }

    > form {
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin-top: 2rem;

      > div:nth-child(1),
      > div:nth-child(2) {
        display: flex;
        flex-direction: column;

        span:first-child {
          margin-bottom: 0.2rem;
          font-size: 0.8rem;
        }

        > input {
          height: 2.5rem;
          border-radius: 4px;
          border: none;
          outline: none;
          padding: 0.5rem;
          transition: all 0.3s;
        }

        span:last-child {
          margin-bottom: 1rem;
          margin-top: 0.1rem;
          font-size: 0.8rem;
          text-align: right;
          color: #f27474;
          height: 20px;
        }
      }

      > label {
        display: flex;
        align-items: center;

        span {
          margin-left: 0.5rem;
        }
      }

      button {
        margin-top: 2rem;
        border: none;
        outline: none;
        border-radius: 4px;
        background: ${(props) => props.theme.colors.primary};
        border: 1px solid ${(props) => props.theme.colors.primary_text};
        height: 3.3rem;
        cursor: pointer;
        transition: all 0.3s !important;

        span {
          font-weight: bold;
          color: ${(props) => props.theme.colors.primary_text};
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

      > div:nth-child(5) {
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

import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  #content-sideprof {
    background: ${(props) => props.theme.colors.primary_darker};
    position: relative;
    float: right;
    padding: 2rem 3rem 2rem 2rem;
    height: 100%;
    border-left: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    flex-direction: column;
    transition: all 0.3s;

    animation: slideOutSideProf 0.6s forwards;

    &.active {
      animation: slideInSideProf 0.6s forwards;
    }

    > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      cursor: pointer;
      margin: 0.7rem 1rem 0.7rem 0;

      > span {
        padding: 0.5rem 1rem 0.5rem 0;
      }

      > svg {
        font-size: 1.2rem;
        margin-right: 0.6rem;
      }
    }

    > svg {
      position: absolute;
      margin: 1rem;
      right: 1rem;
      top: 0;
      font-size: 1.3rem;
      cursor: pointer;
      transition: all 0.3s;

      :hover {
        background: rgba(255, 255, 255, 0.3);
        border-radius: 1rem;
        padding: 0.2rem;
      }
    }

    @keyframes slideInSideProf {
      0% {
        right: -230px;
      }
      60% {
        right: 0px;
      }
      100% {
        right: -20px;
      }
    }

    @keyframes slideOutSideProf {
      0% {
        right: -20px;
      }
      60% {
        right: 0px;
      }
      100% {
        right: -230px;
      }
    }
  }
`;

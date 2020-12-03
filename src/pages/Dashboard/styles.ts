import styled from "styled-components";

export const Container = styled.div`
  #content {
    padding: calc(90px + 1rem) 1rem 1rem calc(54px + 1rem);
    
    p,
    span {
      color: ${(props) => props.theme.colors.background_text};
    }
  }
`;

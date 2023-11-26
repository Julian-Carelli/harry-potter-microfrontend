import { styled } from 'styled-components'

export const StyledCharacterDetail = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .back-to-home {
    margin-top: 16px;
    a {
      text-decoration: none;

      button {
        background: #653780;
        color: white;
        cursor: pointer;
      }
    }
  }

  .character-info {
    display: flex;
    justify-content: center;
    flex-direction: column;

    h1 {
      text-align: center;
    }

    img {
      width: 300px;
      height: 300px;
      objectfit: 'fill';
    }

    div {
      text-align: center;
    }
  }
`

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

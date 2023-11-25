import styled from 'styled-components'

export const StyledCharacterList = styled.div`
  text-align: center;

  h1 {
    margin-bottom: 16px;
  }

  .character-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .character-card {
    margin: 8px;

    img {
      width: 300px;
      height: 300px;
      objectfit: 'fill';
    }

    p {
      margin: 8px 0;
    }
  }

  .pagination {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;

    li {
      margin: 0 5px;
      cursor: pointer;

      &.active {
        font-weight: bold;
      }
    }
  }
`

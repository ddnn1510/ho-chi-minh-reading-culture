import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  gap: 50px;

  article {
    flex: 1;
    background-color: var(--grey-100);
    min-height: 50vh;
  }

  aside {
    width: 300px;
  }
`;

export default Wrapper;

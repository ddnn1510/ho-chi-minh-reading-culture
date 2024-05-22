import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: var(--primary-600);
  width: 100vw;

  .navbar {
  }

  .banner-container {
    padding: 60px 1.5rem;
  }

  .banner {
    margin: 0 auto;
    max-width: 1280px;
  }

  .banner-img {
    max-width: 100%;
  }

  @media screen and (max-width: 1200px) {
    .banner-container {
      padding: 40px 1rem;
    }
  }

  @media screen and (max-width: 1024px) {
    .banner-container {
      padding: 1rem;
    }
  }
`;

export default Wrapper;

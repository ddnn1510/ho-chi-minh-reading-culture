import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: var(--primary-600);
  width: 100vw;

  .navbar {
  }

  .banner {
    padding: 60px 1.5rem;
  }

  .banner-container {
    margin: 0 auto;
    max-width: 1280px;
  }

  .banner-img {
    max-width: 100%;
  }

  .title {
    padding: 24px;
    font-size: 32px;
    background-color: var(--primary-900);
    color: var(--white);
  }

  @media screen and (max-width: 1024px) {
    .banner {
      padding: 1rem;
    }

    .title {
      padding: 8px 16px;
      font-size: 18px;
      line-height: 28px;
    }
  }
`;

export default Wrapper;

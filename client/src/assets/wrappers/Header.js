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

  .title {
    padding: 16px 24px;
    font-size: 28px;
    background-color: var(--primary-900);
    color: var(--white);
    font-weight: bold;
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

    .title {
      padding: 16px 16px;
      font-size: 22px;
      line-height: 28px;
    }
  }

  @media screen and (max-width: 992px) {
    .title {
      padding: 12px 16px;
    }
  }

  @media screen and (max-width: 768px) {
    .title {
      padding: 8px 16px;
      font-size: 18px;
    }
  }

  @media screen and (max-width: 481px) {
    .title {
      padding: 8px 16px;
      font-size: 18px;
    }
  }
`;

export default Wrapper;

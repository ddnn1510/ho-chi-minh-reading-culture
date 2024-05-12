import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: calc(100vh);
  display: flex;
  flex-direction: column;
  color: var(--text-color);

  main {
    width: 100%;
    max-width: 1280px;
    min-height: 50vh;
    margin: 60px auto 70px;
    padding: 0 40px;
    font-size: 20px;
  }

  .category-name {
    height: 71px;
    padding: 16px 24px;
    font-size: 26px;
    background-color: var(--primary-900);
    color: var(--white);
    font-weight: bold;
    text-align: center;
  }

  @media screen and (max-width: 1440px) {
    main {
      font-size: 18px;
    }
  }

  @media screen and (max-width: 1024px) {
    .category-name {
      height: 60px;
      padding: 16px 16px;
      font-size: 22px;
      line-height: 28px;
    }

    main {
      margin: 40px auto 50px;
    }
  }

  @media screen and (max-width: 992px) {
    .category-name {
      height: 52px;
      padding: 12px 16px;
    }
  }

  @media screen and (max-width: 768px) {
    .category-name {
      height: 44px;
      padding: 8px 16px;
      font-size: 18px;
    }

    main {
      font-size: 16px;
      margin: 30px auto 50px;
      padding: 0 24px;
    }
  }

  @media screen and (max-width: 481px) {
    .category-name {
      padding: 8px 16px;
      font-size: 16px;
    }
  }
`;

export default Wrapper;

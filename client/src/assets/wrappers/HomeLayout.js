import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: calc(100vh);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--text-color);

  main {
    width: 100%;
    max-width: 1280px;
    min-height: 50vh;
    margin: 60px auto 70px;
    padding: 0 40px;
    font-size: 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .category-name {
    width: 100%;
    padding: 24px;
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

  @media screen and (max-width: 1200px) {
    .category-name {
      font-size: 22px;
    }
  }

  @media screen and (max-width: 1024px) {
    .category-name {
      padding: 16px 20px;
    }

    main {
      margin: 40px auto 50px;
    }
  }

  @media screen and (max-width: 768px) {
    .category-name {
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
      font-size: 16px;
    }
  }
`;

export default Wrapper;

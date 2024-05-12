import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: calc(100vh);
  display: flex;
  flex-direction: column;
  color: var(--text-color);

  main {
    width: 100%;
    max-width: 1280px;
    margin: 60px auto 80px;
    padding: 0 40px;
    font-size: 20px;
  }

  @media screen and (max-width: 1440px) {
    main {
      font-size: 18px;
    }
  }

  @media screen and (max-width: 768px) {
    main {
      font-size: 16px;
      margin: 30px auto 50px;
    }
  }

  @media screen and (max-width: 768px) {
    main {
      padding: 0 24px;
    }
  }
`;

export default Wrapper;

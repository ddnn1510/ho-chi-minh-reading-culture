import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 60px auto 80px;
  padding: 0 40px;
  font-size: 20px;

  .introduce-section img {
    max-width: 100%;
    margin: 50px auto;
  }

  .category-list-section h4 {
    width: max-content;
    margin: 80px auto 60px;
    color: var(--primary-900);
    border-bottom: 2px solid var(--primary-900);
    font-size: 32px;
  }

  .category-list {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  .category-item {
    width: 100%;
    display: flex;
    gap: 50px;
    align-items: flex-start;
  }

  .category-img {
    width: 40%;
    object-fit: contain;
  }

  .category-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .category-title {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 22px;
    text-align: center;
  }

  .category-description {
    text-align: justify;
  }

  @media screen and (max-width: 1440px) {
    font-size: 18px;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
    margin: 30px auto 50px;

    .introduce-section img {
      margin: 30px auto;
    }

    .category-list-section h4 {
      margin: 60px auto 40px;
      font-size: 28px;
    }

    .category-list {
    }

    .category-item {
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }

    .category-img {
      width: 80%;
      order: 1;
    }

    .category-title {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 481px) {
    padding: 0 24px;

    .category-img {
      width: 100%;
    }
  }
`;

export default Wrapper;

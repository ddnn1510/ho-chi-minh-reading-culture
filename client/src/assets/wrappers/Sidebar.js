import styled from 'styled-components';

const Wrapper = styled.aside`
  .widget {
    margin-bottom: 50px;
  }

  .widget-title {
    padding-bottom: 1rem;
    font-size: 20px;
    font-weight: bold;
    color: var(--primary-900);
    text-align: center;
    border-bottom: 5px solid var(--primary-900);
  }

  .widget-list {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .post-item {
    display: flex;
    align-items: center;
  }

  .post-no {
    width: 35px;
    padding: 5px 1rem 5px 0px;
    margin-right: 1rem;
    font-size: 20px;
    font-weight: bold;
    border-right: 1px solid black;
  }

  .post-title {
    font-size: 16px;
    font-weight: bold;
    color: var(--text-color);
  }

  .post-title:hover {
    text-decoration: underline;
  }

  .view-more {
    margin-top: 16px;
    display: block;
    text-align: center;
    text-decoration: underline;
    color: var(--primary-900);
    font-size: 16px;
  }

  .view-more:hover {
    color: var(--primary-500);
  }

  .qr-code {
    display: block;
    margin: 0 auto;
    width: 200px;
  }
`;

export default Wrapper;

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .intro-section {
    text-align: center;

    .contest-time {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;

      .label {
        font-size: 32px;
        font-weight: bold;
        color: var(--primary-600);
        text-transform: uppercase;
      }

      .time-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 20px 45px;
        border-radius: var(--border-radius);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

        .time {
          font-size: 36px;
          color: var(--primary-600);
          font-weight: bold;
        }

        .unit {
          font-size: 20px;
          text-transform: capitalize;
        }
      }
    }

    .btn {
      height: auto;
      margin-top: 30px;
      padding: 10px 50px;
      font-size: 24px;
    }
  }
`;

export default Wrapper;

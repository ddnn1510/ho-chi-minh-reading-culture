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
      padding: 10px 60px;
      font-size: 24px;
    }
  }

  .ranking-table-container {
    width: 100%;
    margin-top: 70px;
    overflow-x: auto;
  }

  .ranking-table {
    border-collapse: collapse;
    width: 100%;
    border-radius: var(--border-radius);
    font-size: 16px;

    tr {
      th {
        background-color: var(--primary-500);
        color: white;
      }

      th,
      td {
        text-align: left;
        padding: 20px;
        overflow-wrap: break-word;
      }

      th:first-child,
      td:first-child {
        width: 15%;
        min-width: 70px;
        padding-left: 30px;
        text-align: center;
      }

      th:last-child,
      td:last-child {
        padding-right: 30px;
      }

      th:nth-child(2),
      td:nth-child(2) {
        width: 45%;
        min-width: 200px;
      }

      th:nth-child(3),
      td:nth-child(3) {
        width: 20%;
        min-width: 100px;
      }

      th:nth-child(4),
      td:nth-child(4) {
        width: 20%;
        min-width: 125px;
      }
    }

    tr:nth-child(even) {
      background-color: #f2f2f2;
    }
  }

  @media screen and (max-width: 768px) {
    .intro-section {
      .contest-time {
        .label {
          font-size: 24px;
        }

        .time-container {
          .time {
            font-size: 28px;
          }

          .unit {
            font-size: 16px;
          }
        }
      }

      .btn {
        padding: 10px 45px;
        font-size: 20px;
      }
    }
  }

  @media screen and (max-width: 481px) {
    .intro-section {
      .contest-time {
        .label {
          font-size: 20px;
        }

        .time-container {
          padding: 15px 35px;

          .time {
            font-size: 24px;
          }

          .unit {
            font-size: 14px;
          }
        }
      }

      .btn {
        padding: 10px 35px;
        font-size: 18px;
      }
    }
  }
`;

export default Wrapper;

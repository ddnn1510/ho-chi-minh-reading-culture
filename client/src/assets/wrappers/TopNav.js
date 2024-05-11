import styled from 'styled-components';

const Wrapper = styled.nav`
  width: 100%;
  padding: 0 1.5rem;

  .topnav {
    margin: 10px auto 0;
    max-width: 1280px;
    background-color: var(--primary-900);
    overflow: hidden;
    border-radius: var(--border-radius-rounded);
    display: flex;
    padding: 10px 1.5rem;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .logo-text {
    color: var(--white);
    font-size: 20px;
    font-weight: 700;
    line-height: 1.4;
  }

  .logo-text.active {
    background-color: transparent;
  }

  .topnav-content.desktop {
    display: flex;
  }

  .topnav-content.mobile {
    display: none;
  }

  .topnav-content {
    margin-left: auto;
    display: flex;
  }

  .topnav-content a {
    display: block;
    color: var(--white);
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }

  .topnav-content .active {
    background-color: rgba(0, 0, 0, 0.2);
  }

  .topnav-content .dropdown {
    float: left;
    overflow: hidden;
  }

  .topnav-content .dropdown .dropbtn {
    font-size: 17px;
    border: none;
    outline: none;
    color: white;
    padding: 14px 16px;
    background-color: inherit;
    font-family: inherit;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .topnav-content .dropdown:has(a.active) .dropbtn {
    background-color: rgba(0, 0, 0, 0.2);
  }

  .topnav-content .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .topnav-content .dropdown-content a {
    float: none;
    color: black;
    padding: 1rem;
    text-decoration: none;
    display: block;
    text-align: left;
  }

  .topnav-content .dropdown-content a:not(:last-child) {
    border-bottom: 1px solid var(--grey-300);
  }

  .topnav-content .topnav-content a:hover,
  .topnav-content .dropdown:hover .dropbtn {
    background-color: rgba(0, 0, 0, 0.2);
    color: white;
  }

  .topnav-content .dropdown-content a:hover,
  .topnav-content .dropdown-content .active {
    background-color: var(--primary-100);
    color: black;
  }

  .topnav-content .dropdown:hover .dropdown-content {
    display: block;
  }

  @media screen and (max-width: 1200px) {
    padding: 0 1rem;

    .logo {
      gap: 10px;
    }

    .logo-img {
      width: 40px;
      height: 40px;
    }

    .logo-text {
      font-size: 18px;
    }

    .topnav-content a,
    .topnav-content .dropdown .dropbtn {
      font-size: 15px;
      padding: 16px;
    }
  }

  @media screen and (max-width: 992px) {
    .logo-img {
      width: 30px;
      height: 30px;
    }
    .topnav-content.desktop {
      display: none;
    }
    .topnav-content.mobile {
      display: flex;
      align-items: center;
      height: 35px;
    }
    .topnav-content .toggle-btn {
      margin-left: 10px;
      font-size: 20px;
      height: max-content;
      background-color: transparent;
      color: var(--white);
      border: none;
      outline: none;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 768px) {
    .logo-text {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 480px) {
    .logo-text {
      font-size: 14px;
    }
  }
`;

export default Wrapper;

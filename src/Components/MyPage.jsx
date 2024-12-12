import React from "react";
import styled from "styled-components";


const MyPageContainer = styled.div`
  padding: 20px;

  .profile {
    margin-bottom: 30px;
  }

  .profile-content {
    display: flex;
    align-items: center;
  }

  .profile-image {
    width: 150px;
    height: 150px;
    border-radius: 10%;
    margin-right: 20px;
  }

  .profile-info p {
    margin: 5px 0;
  }

  .mypage-table {
    width: 80%;
    margin: 20px auto;
    border-collapse: collapse;
  }

  .mypage-table th,
  .mypage-table td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: left;
  }

  .mypage-table th {
    background-color: #f5f5f5;
    font-weight: bold;
  }

  .mypage-table tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  .mypage-table tr:hover {
    background-color: #eaeaea;
  }
`;

const MyPage = () => (
  <MyPageContainer>
    
    <div className="profile">
      <div className="profile-content">
        <img
          src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA4MDNfMjM1%2FMDAxNzIyNjY0MjkwMzcw.C7sQKI6yJFFaoxmNuWi-1C0nPNMm4BjeGMowNImZnZMg.3C-6e1LczGqC0D9zMWdoOLPTBigwrJkLsPxIvo_Q5sYg.JPEG%2F1.jpg&type=sc960_832"
          alt="Profile"
          className="profile-image"
        />
        <div className="profile-info">
          <p>Name: 나지민</p>
          <p>Email: Najimin101830@gmail.com</p>
        </div>
      </div>
    </div>
    <table className="mypage-table">
      <thead>
        <tr>
          <th>Activity</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Logged in</td>
          <td>2024-12-11</td>
        </tr>
      </tbody>
    </table>
  </MyPageContainer>
);

export default MyPage;

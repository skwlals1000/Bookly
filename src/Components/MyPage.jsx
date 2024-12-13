import React, { useState } from "react";
import styled from "styled-components";

const MyPageContainer = styled.div`
  padding: 20px;

  .profile {
    margin-bottom: 30px;
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
    width: 60%;
    border-collapse: collapse;
    margin-top: 20px;
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

  .mypage-table input {
    width: 75%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

.save-button {
  display: block;
  margin: 20px auto; /* 상하 여백과 좌우 자동 정렬 */
  padding: 10px 20px;
  background-color: #c62828;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
}


  .save-button:hover {
    background-color: #d32f2f;
  }
`;

const MyPage = () => {
  const [userData, setUserData] = useState({
    studentId: "1951019",
    name: "나지민",
    userStatus: "졸업예정자",
    department: "컴퓨터공학과",
    address: "주소",
    mobilePhone: "010 2911 1072",
    email: "igloo101830@gmail.com",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    alert("Changes saved successfully!");
  };

  return (
    <MyPageContainer>
      <div className="profile">
        <img
          src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA4MDNfMjM1%2FMDAxNzIyNjY0MjkwMzcw.C7sQKI6yJFFaoxmNuWi-1C0nPNMm4BjeGMowNImZnZMg.3C-6e1LczGqC0D9zMWdoOLPTBigwrJkLsPxIvo_Q5sYg.JPEG%2F1.jpg&type=sc960_832"
          alt="Profile"
          className="profile-image"
        />
        <div className="profile-info">
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
        </div>
      </div>
      <table className="mypage-table">
        <tbody>
          <tr>
            <th>학번/사번</th>
            <td>
              <input
                name="studentId"
                value={userData.studentId}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <th>성명</th>
            <td>
              <input
                name="name"
                value={userData.name}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <th>이용자수준</th>
            <td>
              <input
                name="userStatus"
                value={userData.userStatus}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <th>학과명/부서명</th>
            <td>
              <input
                name="department"
                value={userData.department}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <th>주소</th>
            <td>
              <input
                name="address"
                value={userData.address}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
          </tr>
          <tr>
            <th>핸드폰번호</th>
            <td>
              <input
                name="mobilePhone"
                value={userData.mobilePhone}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <th>이메일</th>
            <td>
              <input
                name="email"
                value={userData.email}
                onChange={handleChange}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button className="save-button" onClick={handleSave}>
        저장
      </button>
    </MyPageContainer>
  );
};

export default MyPage;

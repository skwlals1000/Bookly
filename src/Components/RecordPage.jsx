import React from "react";
import styled from "styled-components";

const RecordContainer = styled.div`
  padding: 20px;
  text-align: center;

  .record-table {
    width: 80%;
    margin: 20px auto;
    border-collapse: collapse;
  }

  .record-table th,
  .record-table td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: left;
  }

  .record-table th {
    background-color: #f5f5f5;
    font-weight: bold;
  }

  .record-table tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  .record-table tr:hover {
    background-color: #eaeaea;
  }
`;

const RecordPage = () => {
  // 책 데이터 정의
  const bookRecords = [
    {
      title: "트렌드 코리아 2025",
      author: "김난도 외",
      date: "2024-12-01",
    },
    {
      title: "빛이 이끄는 곳으로",
      author: "백희성",
      date: "2024-12-05",
    },
    {
      title: "언젠가 우리가 같은 별을 바라본다면",
      author: "차인표",
      date: "2024-12-07",
    },
    {
      title: "아주 작은 습관의 힘",
      author: "제임스 클리어",
      date: "2024-12-09",
    },
    {
      title: "죽고 싶지만 떡볶이는 먹고 싶어",
      author: "백세희",
      date: "2024-12-10",
    },
  ];

  return (
    <RecordContainer>
      <h2>책 읽은 기록</h2>
      <table className="record-table">
        <thead>
          <tr>
            <th>책 제목</th>
            <th>저자</th>
            <th>일자</th>
          </tr>
        </thead>
        <tbody>
          {bookRecords.map((book, index) => (
            <tr key={index}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </RecordContainer>
  );
};

export default RecordPage;

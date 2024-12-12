import React from "react";
import styled from "styled-components";


const DiscussContainer = styled.div`
  padding: 20px;
  text-align: center;

  .discuss-table {
    width: 80%;
    margin: 20px auto;
    border-collapse: collapse;
  }

  .discuss-table th,
  .discuss-table td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: left;
  }

  .discuss-table th {
    background-color: #f5f5f5;
    font-weight: bold;
  }

  .discuss-table tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  .discuss-table tr:hover {
    background-color: #eaeaea;
  }
`;

const DiscussPage = () => (
  <DiscussContainer>
    <h2>Discuss Page</h2>

    <table className="discuss-table">
      <thead>
        <tr>
          <th>Topic</th>
          <th>Author</th>
          <th>Replies</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Example Topic</td>
          <td>Example Author</td>
          <td>5</td>
        </tr>
      </tbody>
    </table>
  </DiscussContainer>
);

export default DiscussPage;

import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;

  .content {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    max-width: 1000px;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    gap: 20px;

    .book-image-container {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;

      .book-image {
        width: 200px;
        height: 300px;
        object-fit: cover;
        margin-bottom: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
      }

      .buttons {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        margin-top: 10px;

        button {
          padding: 10px 20px;
          font-size: 0.9rem;
          font-weight: bold;
          color: white;
          background-color: #c8102e;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s;

          &:hover {
            background-color: #a30e22;
          }
        }
      }
    }

    .book-details {
      flex: 2;
      display: flex;
      flex-direction: column;
      gap: 10px;

      .book-title {
        font-size: 1.8rem;
        font-weight: bold;
        color: #333;
        margin-bottom: 20px;
      }

      .detail-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1rem;
        color: #555;
        padding: 10px 0; /* 아이템 사이 간격 */
        border-bottom: 1px solid #ddd; /* 구분선 추가 */

        &:last-child {
          border-bottom: none; /* 마지막 항목은 구분선 제거 */
        }

        span {
          font-weight: bold;
          color: #c8102e;
        }
      }

      .book-description {
        margin-top: 20px;
        font-size: 1rem;
        line-height: 1.5;
        color: #444;
        text-align: justify;
        padding-top: 10px;
        border-top: 1px solid #ddd; /* 설명과 항목을 구분하는 선 */
      }
    }
  }
`;

const bookDetails = {
  "트렌드 코리아 2025": {
    author: "김난도",
    description:
      "2025년 한국과 글로벌 트렌드를 예측한 책으로, 다양한 사회적 흐름과 경제적 변화를 다룹니다.",
    image: "https://image.yes24.com/goods/133213071/XL",
    type: "단행본(국내)",
    kdc: "911.02-5",
    publisher: "서울 : 원조각, 2023",
    price: "40,000",
  },
  "빛이 이끄는 곳으로": {
    author: "백희성",
    description:
      "삶의 희망과 빛을 찾아가는 감동적인 이야기를 담은 책입니다.",
    image: "https://image.yes24.com/goods/130174102/XL",
    type: "단행본(국내)",
    kdc: "813.6",
    publisher: "서울 : 책과나무, 2022",
    price: "35,000",
  },
  "언젠가 우리가 같은 별을 바라본다면": {
    author: "차인표",
    description:
      "사랑과 희망을 테마로 한 아름다운 이야기를 전하는 소설입니다.",
    image: "https://image.yes24.com/goods/104663596/XL",
    type: "단행본(국내)",
    kdc: "823.7",
    publisher: "서울 : 아름다운책, 2021",
    price: "30,000",
  },
};

const BookDetail = () => {
  const { title } = useParams(); // URL에서 책 제목을 가져옴
  const book = bookDetails[title];

  if (!book) {
    return <p>책 정보를 찾을 수 없습니다.</p>;
  }

  return (
    <DetailContainer>
      <h1>상세정보</h1>
      <div className="content">
        {/* 왼쪽 이미지 및 버튼 */}
        <div className="book-image-container">
          <img src={book.image} alt={title} className="book-image" />
          <div className="buttons">
          
          </div>
        </div>

        {/* 오른쪽 상세 정보 */}
        <div className="book-details">
          <h2 className="book-title">{title}</h2>
          <div className="detail-item">
            <span>저자</span> {book.author}
          </div>
          <div className="detail-item">
            <span>자료유형</span> {book.type}
          </div>
          <div className="detail-item">
            <span>KDC</span> {book.kdc}
          </div>
          <div className="detail-item">
            <span>발행사항</span> {book.publisher}
          </div>
          <div className="detail-item">
            <span>가격</span> {book.price}
          </div>
          <p className="book-description">{book.description}</p>
        </div>
      </div>
    </DetailContainer>
  );
};

export default BookDetail;
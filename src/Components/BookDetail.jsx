import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const DetailContainer = styled.div`
  padding: 20px;
  text-align: center;

  .book-image {
    width: 200px;
    height: 300px;
    object-fit: cover;
    margin-bottom: 20px;
  }

  .book-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .book-author {
    font-size: 1.2rem;
    color: gray;
    margin-bottom: 10px;
  }

  .book-description {
    font-size: 1rem;
    line-height: 1.5;
    margin: 20px 0;
  }
`;

const bookDetails = {
  "트렌드 코리아 2025": {
    author: "김난도 외",
    description: "2025년 한국과 글로벌 트렌드를 예측한 책으로, 다양한 사회적 흐름과 경제적 변화를 다룹니다.",
    image: "https://image.yes24.com/goods/133213071/XL",
  },
  "빛이 이끄는 곳으로": {
    author: "백희성",
    description: "삶의 희망과 빛을 찾아가는 감동적인 이야기를 담은 책입니다.",
    image: "https://image.yes24.com/goods/130174102/XL",
  },
  "언젠가 우리가 같은 별을 바라본다면": {
    author: "차인표",
    description: "사랑과 희망을 테마로 한 아름다운 이야기를 전하는 소설입니다.",
    image: "https://image.yes24.com/goods/104663596/XL",
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
      <img src={book.image} alt={title} className="book-image" />
      <h1 className="book-title">{title}</h1>
      <p className="book-author">{book.author}</p>
      <p className="book-description">{book.description}</p>
    </DetailContainer>
  );
};

export default BookDetail;

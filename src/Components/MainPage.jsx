import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// 스타일 정의
const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;

  .search-bar {
    display: flex;
    gap: 10px;
  }

  .search-input {
    padding: 5px 10px;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
`;

const Categories = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  button {
    margin: 0 10px;
    padding: 10px 20px;
    font-size: 1rem;
    font-weight: bold;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }

    &.active {
      background-color: #0056b3;
    }
  }
`;

const SliderContainer = styled.div`
  position: relative;
  overflow-x: auto; /* Enable horizontal scrolling */
  white-space: nowrap; /* Prevent items from wrapping */
  margin: 20px 0;
  padding: 20px 0;

  .slider-card {
    display: inline-block; /* Allow horizontal alignment */
    width: 250px;
    margin: 0 10px;
    border-radius: 12px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    overflow: hidden;
    text-align: center;
    transition: transform 0.3s;

    &:hover {
      transform: translateY(-10px);
    }

    .book-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    .book-info {
      padding: 15px;
      text-align: left;
    }

    .book-rank {
      font-weight: bold;
      color: #007bff;
      margin-bottom: 10px;
    }

    .book-title {
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 5px;
    }

    .book-author {
      font-size: 1rem;
      color: gray;
    }
  }
`;

const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("신작자료");

  const bookData = [
    { category: "신작자료", rank: "신작 1위", title: "AI 시대의 인간다움", author: "김영하", image: "https://image.yes24.com/goods/133213071/XL" },
    { category: "신작자료", rank: "신작 2위", title: "인공지능과 윤리", author: "최윤식", image: "https://image.yes24.com/goods/130174102/XL" },
    { category: "신작자료", rank: "신작 3위", title: "디지털 시대의 소통법", author: "김진영", image: "https://image.yes24.com/goods/129471071/XL" },
    { category: "인기도서", rank: "인기 1위", title: "트렌드 코리아 2025", author: "김난도 외", image: "https://image.yes24.com/goods/133213071/XL" },
    { category: "인기도서", rank: "인기 2위", title: "죽고 싶지만 떡볶이는 먹고 싶어", author: "백세희", image: "https://image.yes24.com/goods/129471071/XL" },
    { category: "인기도서", rank: "인기 3위", title: "소크라테스 익스프레스", author: "에릭 와이너", image: "https://image.yes24.com/goods/130174102/XL" },
    { category: "추천도서", rank: "추천 1위", title: "빛이 이끄는 곳으로", author: "백희성", image: "https://image.yes24.com/goods/130174102/XL" },
    { category: "추천도서", rank: "추천 2위", title: "언젠가 우리가 같은 별을 바라본다면", author: "차인표", image: "https://image.yes24.com/goods/104663596/XL" },
    { category: "추천도서", rank: "추천 3위", title: "습관의 힘", author: "찰스 두히그", image: "https://image.yes24.com/goods/104663596/XL" },
  ];

  // 검색어에 따른 필터링
  const filteredBooks = bookData.filter(
    (book) =>
      book.category === selectedCategory &&
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = ["신작자료", "인기도서", "추천도서"];

  return (
    <>
      <Navbar>
        <h1>도서 목록</h1>
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="책 제목 검색"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </Navbar>
      <Categories>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? "active" : ""}
          >
            {category}
          </button>
        ))}
      </Categories>
      <SliderContainer>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => (
            <div key={index} className="slider-card">
              <Link to={`/book/${book.title}`}>
                <img src={book.image} alt={book.title} className="book-image" />
              </Link>
              <div className="book-info">
                <p className="book-rank">{book.rank}</p>
                <p className="book-title">{book.title}</p>
                <p className="book-author">{book.author}</p>
              </div>
            </div>
          ))
        ) : (
          <p>검색 결과가 없습니다.</p>
        )}
      </SliderContainer>
    </>
  );
};

export default MainPage;

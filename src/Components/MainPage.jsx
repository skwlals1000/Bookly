import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// 스타일 정의
const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;

  .search-bar {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 800px;
    background-color: #ffffff;
    border: 2px solid #c8102e;
    border-radius: 8px;
    padding: 15px 20px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

    .search-body {
      display: flex;
      gap: 10px;
      width: 100%;

      input {
        flex: 1;
        padding: 10px;
        font-size: 1rem;
        border: 1px solid #ddd;
        border-radius: 4px;
      }

      button {
        padding: 10px 20px;
        font-size: 1rem;
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
`;

const Categories = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  button {
    margin: 0 10px;
    padding: 10px 20px;
    font-size: 1.2rem;
    font-weight: bold;
    color: #a8a8a8;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    transition: color 0.3s, border-bottom 0.3s;

    &:hover {
      color: #000;
    }

    &.active {
      color: #000;
      border-bottom: 2px solid #c8102e;
    }
  }
`;

const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin: 20px auto;
  width: 90%;

  .slider-content {
    display: flex;
    transition: all 0.5s ease-in-out;
    scroll-behavior: smooth;
    gap: 20px;
  }

  .slider-card {
    flex: 0 0 250px;
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

  .slider-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    padding: 10px;
    z-index: 10;

    &:hover {
      background-color: rgba(0, 0, 0, 0.7);
    }
  }

  .prev {
    left: 10px;
  }

  .next {
    right: 10px;
  }
`;

const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("신작자료");
  const sliderRef = useRef(null);

  const bookData = [
    { category: "신작자료", rank: "신작 1위", title: "AI 시대의 인간다움", author: "김영하", image: "https://image.yes24.com/goods/133213071/XL" },
    { category: "신작자료", rank: "신작 2위", title: "인공지능과 윤리", author: "최윤식", image: "https://image.yes24.com/goods/130174102/XL" },
    { category: "인기도서", rank: "인기 1위", title: "트렌드 코리아 2025", author: "김난도 외", image: "https://image.yes24.com/goods/133213071/XL" },
    { category: "추천도서", rank: "추천 1위", title: "빛이 이끄는 곳으로", author: "백희성", image: "https://image.yes24.com/goods/130174102/XL" },
  ];

  const filteredBooks = bookData.filter(
    (book) =>
      book.category === selectedCategory &&
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const scroll = (direction) => {
    const slider = sliderRef.current;
    const scrollAmount = 300;
    slider.scrollLeft += direction === "left" ? -scrollAmount : scrollAmount;
  };

  const categories = ["신작자료", "인기도서", "추천도서"];

  return (
    <>
      <Navbar>
        <div className="search-bar">
          <div className="search-body">
            <input
              type="text"
              placeholder="검색어를 입력하세요."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button>검색</button>
          </div>
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
        <button className="slider-button prev" onClick={() => scroll("left")}>
          {"<"}
        </button>
        <div className="slider-content" ref={sliderRef}>
          {filteredBooks.map((book, index) => (
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
          ))}
        </div>
        <button className="slider-button next" onClick={() => scroll("right")}>
          {">"}
        </button>
      </SliderContainer>
    </>
  );
};

export default MainPage;

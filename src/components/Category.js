import React from "react";

const Category = ({ category, selectedCard, handleClick, handleCardHover, handleCardLeave }) => {
  return (
    <div>
      <h2>{category.name}</h2>
      <div className="card-grid">
        {category.cards.map((card) => (
          <div
            key={card.id}
            className={`card-item ${selectedCard === card ? "selected" : ""}`}
            onClick={() => handleClick(card)}
            onMouseEnter={handleCardHover}
            onMouseLeave={handleCardLeave}
            style={{
              width: "300px",
              height: "250px",
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div className="card-image">
              <img
                src={card.image}
                alt={card.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ padding: "0 10px" }}>
              <h3 style={{ fontSize: "18px", marginBottom: "5px" }}>{card.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;

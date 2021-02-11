import React from "react";
import "./game.css";

interface Game {
    order: number;
    title: string;
    text: string;
    img: string;
}

const Game: React.FC<Game> = (game) => {
    const { order, title, text, img } = game;
    return (
        <section className={`Game order-${order}`}>
            <div className="screenshot">
                <img src={img} alt={`${title} screenshot`} />
            </div>
            <div className="description">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </section>
    );
};

export default Game;

import Game from "./components/game/";
import Nav from "./components/nav/";
import { nanoid } from "nanoid";
import data from "./data.json";
import React from "react";
import "./app.css";

const App: React.FC = () => {
    const games = data.map((game, i) => {
        if (i % 2 === 0) return { ...game, order: 1 };
        return { ...game, order: 2 };
    });

    const ninthGenGames = games.filter((game) => game.generation === 9);
    const eighthGenGames = games.filter((game) => game.generation === 8);

    return (
        <div className="App">
            <Nav />
            <section id="ninth" className="generation">
                {ninthGenGames.map((game) => (
                    <Game {...game} key={nanoid()} />
                ))}
            </section>
            <div id="eighth" className="divider">
                <span></span>
                <span>EIGHT GEN</span>
                <span></span>
            </div>
            <section className="generation">
                {eighthGenGames.map((game) => (
                    <Game {...game} key={nanoid()} />
                ))}
            </section>
        </div>
    );
};

export default App;

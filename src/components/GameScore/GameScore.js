import React from 'react';

import './GameScore.css';

const GameScore = ({players, listScore}) => {
    // Получаем заголовок имён игроков
    const getTitle = (players) => {
        return players.map((item, index) => <th key={index}>{item}</th>); 
    };


    // Получаем общий счёт из списка игр: [ [0,0], [1,0], [0,0] [1,0], [0,1] ] вернёт [2,1]
    /**
     * 
     * @param {array} listScore
     * @return {array}
     */
    const getScore = (listScore) => {
        const total = listScore.reduce((prev, curr, index) => {
            for(let i = 0; i < curr.length; i++) {
                prev[i] = (prev[i] || 0) + curr[i];
            }
            return prev;
        },[]);

        return total.map((item, index) => <td key={index}>{item}</td>);
    };

    return (<div>
        <h1>GameScore</h1>
        <table>
            <thead>
                <tr>{getTitle(players)}</tr>
            </thead>
            <tbody>
                <tr>{getScore(listScore)}</tr>
            </tbody>
        </table>
    </div>);
}

export default GameScore;
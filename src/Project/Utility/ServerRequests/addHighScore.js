export const addHighScore = async (highScore) => {
    const response = await fetch('https://searchgame-6b980-default-rtdb.firebaseio.com/highscores.json', {
        method: 'POST',
        body: JSON.stringify(highScore),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    console.log('[Response Received] ' + data)

}


export const addUserTime = async (time) => {
    const response = await fetch('https://searchgame-6b980-default-rtdb.firebaseio.com/userTime.json', {
        method: 'POST',
        body: JSON.stringify(time),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    console.log('[Response Received] ' + data)
}


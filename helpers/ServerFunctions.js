function partitionCards(cardset, roomCapacity) {
  const totalCards = cardset.length;
  const cardsPerPlayer = Math.floor(totalCards / roomCapacity);
  console.log(cardsPerPlayer);
  const partitionedCards = [];
  for (let i = 0; i < roomCapacity; i++) {
    const start = i * cardsPerPlayer;
    const end = (i + 1) * cardsPerPlayer;
    partitionedCards.push(cardset.slice(start, end));
  }
  return partitionedCards;
}

function delayedCode(cardset, roomCapacity, connectedClients) {
  // Get the partitioned cards using the helper function
  const partitionedCards = partitionCards(cardset, roomCapacity);
  // Iterate over the client array and assign subpartitions to each client
  connectedClients.forEach((client, index) => {
    const subpartition = partitionedCards[index]; // Get the corresponding subpartition
    console.log(subpartition);
    // Emit the subpartition to the client
    client.emit('STO1C-DRAW-CARDS', subpartition);
  });
}

export default {
  partitionCards,
  delayedCode,
};
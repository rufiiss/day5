const game = {
  resources: {
    gold: 250,
    lumber: 100,
  },
  addResource(resource, amount) {
    if (this.resources.hasOwnProperty(resource)) {
      this.resources[resource] += amount;
    } else {
      console.log("Invalid resource");
    }
  }
};

// Примеры использования:
game.addResource("gold", 50); // Добавляет 50 золота, теперь gold: 300
game.addResource("lumber", 30); // Добавляет 30 древесины, теперь lumber: 130
game.addResource("stone", 20); // Выведет "Invalid resource"
console.log(game.resources); // { gold: 300, lumber: 130 }

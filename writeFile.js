const fs = require("fs").promises;

async function openFile() {
  try {
    const csvHeaders = "name, quantity, price";
    await fs.writeFile("groceries.txt", csvHeaders);
  } catch (error) {
    console.error(`Got an error trying to write to a file: ${error.message}`);
  }
}

async function addGroceryItem(name, quantity, price) {
  try {
    const csvLine = `\n${name},${quantity},${price}`;
    await fs.writeFile("groceries.txt", csvLine, { flag: "a" });
  } catch (error) {
    console.error(`Got an error trying to write to a file: ${error.message}`);
  }
}

(async function () {
  await openFile();
  await addGroceryItem("eggs", 12, 1.5);
  await addGroceryItem("nutella", 1, 4);
  await addGroceryItem("Ramen", 2, 10);
})();

async function getData() {
  try {
    const data = await fetch("data/json");
    const jsonData = await data.json();
    return jsonData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

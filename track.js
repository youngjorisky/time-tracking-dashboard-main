const trackDivisions = document.getElementById("time-track-divisions");
const button = document.querySelectorAll(".lower-identity h4");

let data = [];

fetch("data.json")
  .then((response) => response.json())
  .then((dataFile) => {
    data = dataFile;
    filterElement("daily");
  });

function filterElement(type) {
  setTimeout(() => {
    trackDivisions.innerHTML = "";

    button.forEach((btn) => {
      btn.style.fontWeight = "200";
      btn.style.opacity = "0.7";
    });

    button.forEach((btn) => {
      if (btn.textContent.toLowerCase() === type) {
        btn.style.fontWeight = "700";
        btn.style.opacity = "1";
      }
    });

    data.forEach((item, index) => {
      const itemDiv = document.createElement("div");

      const className = item.title.toLowerCase().replace(" ", "-");
      itemDiv.classList.add(className, "division");

      itemDiv.innerHTML = `
          <div class="icon-container">
            <img src="./images/icon-${className}.svg" />
          </div>
          <div class="text-container">
            <div class="left-side">
              <h4>${item.title}</h4>
              <h4>...</h4>
            </div>
            <div class="right-side">
              <h2>${item.timeframes[type].current}hrs</h2>
              <p>Last Week - ${item.timeframes[type].previous}hrs</p>
            </div>
          </div>
        `;

      trackDivisions.appendChild(itemDiv);

      setTimeout(() => {
        itemDiv.style.opacity = "1";
        itemDiv.style.transform = "translateY(0)";
      }, index * 50); // 50ms delay between each card
    });
  }, 200);
}

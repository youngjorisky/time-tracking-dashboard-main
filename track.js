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
  trackDivisions.innerHTML = "";

  data.forEach((item) => {
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
  });
}

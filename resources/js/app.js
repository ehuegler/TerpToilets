// deal with all the buildings? here:

let buildingList = document.getElementById('buildingResults');

toggleBuildingResults = function () {
    buildingList.classList.toggle('hidden');
}

search = function () {
  buildingList.classList.remove('hidden');

  let input = document.getElementById('buildingInput');
  let query = input.value.toUpperCase();
  let results = document.getElementById('buildingResults').children;

  for (let result of results) {
    if (result.textContent.toUpperCase().indexOf(query) > -1) {
      result.style.display = "";
    } else {
      result.style.display = "none";
    }
  }

} 

buildingClicked = function (building) {
  console.log(building.textContent)
}
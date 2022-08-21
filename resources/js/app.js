// deal with all the buildings? here:

let buildingList = document.getElementById('buildingResults');
let bathroomList = document.getElementById('bathrooms');

toggleBuildingResults = function () {
  buildingList.classList.toggle('hidden');
}

search = function () {
  buildingList.classList.remove('hidden');

  let input = document.getElementById('buildingInput');
  let query = input.value.toUpperCase();
  let results = buildingList.children;

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
};

genderFilter = function (select) {
  let gender = select.value.toUpperCase();

  let results = bathroomList.children;
  for (let result of results) {
    if (gender === 'ALL' || result.dataset.gender.toUpperCase() === gender) {
      result.classList.remove('hidden');
    } else {
      result.classList.add('hidden');
    }
  }
}

toggleSortOrder = function () {
  bathroomList.classList.toggle('flex-col');
  bathroomList.classList.toggle('flex-col-reverse');
}
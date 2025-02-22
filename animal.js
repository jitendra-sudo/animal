document.addEventListener("DOMContentLoaded", function () {
    let currentData = {
      dogs: [
        { species: "Labrador", name: "Buddy", location: "New York", size: "Large", file: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXd9YnhOhLOUBOrly21g067vrClVuRvxpxPNZi0S1wLbf-YKX80ZvyU6ZMkuMHpaCgp0BzKsNiZMzCmABbitdQxLI4du4DSfBk80dCfQJJ44B9luuGmh_k9tJeyB76lDHC-iSe2x?key=diMK_80ckKTiDYYhCkLD1Q" },
        { species: "Beagle", name: "Charlie", location: "California", size: "Medium", file: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXd9YnhOhLOUBOrly21g067vrClVuRvxpxPNZi0S1wLbf-YKX80ZvyU6ZMkuMHpaCgp0BzKsNiZMzCmABbitdQxLI4du4DSfBk80dCfQJJ44B9luuGmh_k9tJeyB76lDHC-iSe2x?key=diMK_80ckKTiDYYhCkLD1Q" },
        { species: "German Shepherd", name: "Max", location: "Texas", size: "Large", file: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXd9YnhOhLOUBOrly21g067vrClVuRvxpxPNZi0S1wLbf-YKX80ZvyU6ZMkuMHpaCgp0BzKsNiZMzCmABbitdQxLI4du4DSfBk80dCfQJJ44B9luuGmh_k9tJeyB76lDHC-iSe2x?key=diMK_80ckKTiDYYhCkLD1Q" }
      ],
      bigCats: [
        { species: "Tiger", name: "Sheru", location: "India", size: "Large", file: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXd9YnhOhLOUBOrly21g067vrClVuRvxpxPNZi0S1wLbf-YKX80ZvyU6ZMkuMHpaCgp0BzKsNiZMzCmABbitdQxLI4du4DSfBk80dCfQJJ44B9luuGmh_k9tJeyB76lDHC-iSe2x?key=diMK_80ckKTiDYYhCkLD1Q" },
        { species: "Lion", name: "Simba", location: "Africa", size: "Large", file: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXd9YnhOhLOUBOrly21g067vrClVuRvxpxPNZi0S1wLbf-YKX80ZvyU6ZMkuMHpaCgp0BzKsNiZMzCmABbitdQxLI4du4DSfBk80dCfQJJ44B9luuGmh_k9tJeyB76lDHC-iSe2x?key=diMK_80ckKTiDYYhCkLD1Q" }
      ],
      bigFish: [
        { species: "Shark", name: "Bruce", location: "Australia", size: "Huge", file: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXd9YnhOhLOUBOrly21g067vrClVuRvxpxPNZi0S1wLbf-YKX80ZvyU6ZMkuMHpaCgp0BzKsNiZMzCmABbitdQxLI4du4DSfBk80dCfQJJ44B9luuGmh_k9tJeyB76lDHC-iSe2x?key=diMK_80ckKTiDYYhCkLD1Q" },
        { species: "Whale", name: "Willie", location: "Atlantic Ocean", size: "Massive", file: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXd9YnhOhLOUBOrly21g067vrClVuRvxpxPNZi0S1wLbf-YKX80ZvyU6ZMkuMHpaCgp0BzKsNiZMzCmABbitdQxLI4du4DSfBk80dCfQJJ44B9luuGmh_k9tJeyB76lDHC-iSe2x?key=diMK_80ckKTiDYYhCkLD1Q" },
        { species: "Dolphin", name: "Flipper", location: "Hawaii", size: "Medium", file: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXd9YnhOhLOUBOrly21g067vrClVuRvxpxPNZi0S1wLbf-YKX80ZvyU6ZMkuMHpaCgp0BzKsNiZMzCmABbitdQxLI4du4DSfBk80dCfQJJ44B9luuGmh_k9tJeyB76lDHC-iSe2x?key=diMK_80ckKTiDYYhCkLD1Q" }
      ]
    };
  
    let filter = "";
    let isEditing = false;
    let editType = "";
    let editIndex = null;
  

    const addForm = document.getElementById("addForm");
    const typeSelect = document.getElementById("typeSelect");
    const speciesInput = document.getElementById("species");
    const nameInput = document.getElementById("name");
    const sizeInput = document.getElementById("size");
    const locationInput = document.getElementById("location");
    const fileInput = document.getElementById("file");
  
    const filterSelect = document.getElementById("filterSelect");
    const dataDisplay = document.getElementById("dataDisplay");
  
    const editFormContainer = document.getElementById("editFormContainer");
    const editForm = document.getElementById("editForm");
    const editSpeciesInput = document.getElementById("editSpecies");
    const editNameInput = document.getElementById("editName");
    const editSizeInput = document.getElementById("editSize");
    const editLocationInput = document.getElementById("editLocation");
    const editFileInput = document.getElementById("editFile");
    const cancelEditBtn = document.getElementById("cancelEdit");
  
 
    function render() {
      let html = "";
      const categories = ["bigCats", "dogs", "bigFish"];
      categories.forEach((category) => {
        if (currentData[category] && currentData[category].length) {
          html += `<div class="ourData">
            <h3>Category By ${category}</h3>
            <div class="box">`;








          let items = [...currentData[category]];


          if (filter) {
            if (filter === "name") {
              items.sort((a, b) => a.name.localeCompare(b.name));
            } else if (filter === "location") {
              items.sort((a, b) => a.location.localeCompare(b.location));
            } else if (filter === "size") {
              items.sort((a, b) => a.size.localeCompare(b.size));
            }
          }


          items.forEach((item, index) => {
            html += `
              <div class="datatype">
                <img src="${item.file}" alt="${item.name}" />
                <div class="boxes">
                  <p><strong>Species:</strong> ${item.species}</p>
                  <p><strong>Name:</strong> ${item.name}</p>
                  <p><strong>Size:</strong> ${item.size}</p>
                  <p><strong>Location:</strong> ${item.location}</p>
                </div>
                <div class="editForm">
                  <button class="first" onclick="initiateEdit('${category}', ${index})">Edit</button>
                  <button class="second" onclick="handleDelete('${category}', ${index})">Delete</button>
                </div>
              </div>
            `;
          });


          html += `</div></div>`;
        }
      });

      dataDisplay.innerHTML = html;
    }
  
    // Add new animal

    addForm.addEventListener("submit", function (e) {
           e.preventDefault();
      const species = speciesInput.value.trim();
      const name = nameInput.value.trim();
      const size = sizeInput.value.trim();
      const location = locationInput.value.trim();
      const file = fileInput.value.trim();
  
      if (!species || !name || !size || !location || !file) {
        alert("Please fill in all fields");
        return;
      }
      const type = typeSelect.value;
      const newAnimal = { species, name, location, size, file };
      if (!currentData[type]) {
        currentData[type] = [];
      }
      currentData[type].push(newAnimal);
      alert("Data added Successfully");
      speciesInput.value = "";
      nameInput.value = "";
      sizeInput.value = "";
      locationInput.value = "";
      fileInput.value = "";
  
      render();
    });
  
    
    filterSelect.addEventListener("change", function (e) {
      filter = e.target.value;
      render();
    });
  
    
    window.initiateEdit = function (category, index) {
      const item = currentData[category][index];
      isEditing = true;
      editType = category;
      editIndex = index;
      editSpeciesInput.value = item.species;
      editNameInput.value = item.name;
      editSizeInput.value = item.size;
      editLocationInput.value = item.location;
      editFileInput.value = item.file;
      editFormContainer.style.display = "flex"; 
    };
  
    window.handleDelete = function (category, index) {
      currentData[category].splice(index, 1);
      render();
    };
  
    
    editForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const species = editSpeciesInput.value.trim();
      const name = editNameInput.value.trim();
      const size = editSizeInput.value.trim();
      const location = editLocationInput.value.trim();
      const file = editFileInput.value.trim();
  
      if (!species || !name || !size || !location || !file) {
        alert("Please fill in all fields");
        return;
      }
      const updatedAnimal = { species, name, location, size, file };
      currentData[editType][editIndex] = updatedAnimal;
      isEditing = false;
      editFormContainer.style.display = "none";
      render();
    });
  
 
    cancelEditBtn.addEventListener("click", function () {
      isEditing = false;
      editFormContainer.style.display = "none";
    });
  
   
    render();
  });
  
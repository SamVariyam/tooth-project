// activate airtable object
var Airtable = require("airtable");
var base = new Airtable(
    {apiKey:"key8pkFJZm5uYRrfn"}
  ).base("appnIWpoPfqb3m9AA");

  //find the parent container element to which we will append each tooth
  let container = document.querySelector(".content-container")

  base("teeth-table").select({
      maxRecords: 50,
      // view: "Grid view",
  }).eachPage(
    function page(records, fetchNextPage){
      console.log("records:", records); 
      records.forEach(
        function (record) {
          // pull my airtable data 
          // each record will have its own div
          let airtableItem = document.createElement("div");
          // add some data specific meta to my new divs for filtering
          airtableItem.classList.add("airtable-item");
          airtableItem.setAttribute("data-type", record.fields.type);
          
          // create a img tag for my album art 
          let toothImage = document.createElement("img");
          toothImage.src = record.fields.picture[0].url;
          // create a span for my artist name 
          let toothName = document.createElement("span");
          toothName.innerHTML = record.fields.name;
          // create a div for human/nonhuman
          let humanNonhuman = document.createElement("div");
          humanNonhuman.innerHTML = record.fields.humanNonhuman;
          // create a div for human/nonhuman
          let metal = document.createElement("div");
          metal.innerHTML = record.fields.metal;
          
          // appending to div holding each airtable record 
          airtableItem.append(toothImage);
          airtableItem.append(toothName);
          airtableItem.append(humanNonhuman);
          airtableItem.append(metal);
         // append div to body 
         container.append(airtableItem);
        }
      
      )
    }
  ); 
  
  // set up a event listener for my empowering button 
  // listen for user clicker, once it is clicker, serach for divs with data-mood, empowering 
  
  //FOLKLORE
  // get our button using css ID 
  // assign a event listener to my button to listen for click
  let folkloreFilterButton = document.getElementById("folklore");
  folkloreFilterButton.addEventListener("click", function(event){
    console.log("this is filter being pressed:", event.target.id);
    // search my airtable-item divs, and see which data-mood contains "empowering"
    // put my airtable-divs in an array [airtable-div 1, airtable-div-2], find the div tht has data-mood
    let listofAirtableItems = document.querySelectorAll("div.airtable-item");
    
    // search for data-mood, containg empowering 
    listofAirtableItems.forEach(
      function searchFolkloreFilter(item){
        // if item.dataset.mood equal to "Empowering, then we trigger something 
        if (item.dataset.type == "folklore") {
          // if the div has data-mood empowering, add red background by adding css class
          item.classList.add("filter-show");
          console.log(item);
        }
        else {
          item.classList.add("filter-hide");
        }
        
        
      }
    )

 //GRILLZ
  // get our button using css ID 
  // assign a event listener to my button to listen for click
  let grillzFilterButton = document.getElementById("grillz");
  grillzFilterButton.addEventListener("click", function(event){
    console.log("this is filter being pressed:", event.target.id);
    // search my airtable-item divs, and see which data-mood contains "empowering"
    // put my airtable-divs in an array [airtable-div 1, airtable-div-2], find the div tht has data-mood
    let listofAirtableItems = document.querySelectorAll("div.airtable-item");
    
    // search for data-mood, containg empowering 
    listofAirtableItems.forEach(
      function searchGrillzFilter(item){
        // if item.dataset.mood equal to "Empowering, then we trigger something 
        if (item.dataset.type == "grillz") {
          // if the div has data-mood empowering, add red background by adding css class
          item.classList.add("filter-show");
          console.log(item);
        }
        else {
          item.classList.add("filter-hide");
        }
      
      
    }
  )
  
})})

//ANIMAL
  // get our button using css ID 
  // assign a event listener to my button to listen for click
  let animalFilterButton = document.getElementById("animal");
  animalFilterButton.addEventListener("click", function(event){
    console.log("this is filter being pressed:", event.target.id);
    // search my airtable-item divs, and see which data-mood contains "empowering"
    // put my airtable-divs in an array [airtable-div 1, airtable-div-2], find the div tht has data-mood
    let listofAirtableItems = document.querySelectorAll("div.airtable-item");
    
    // search for data-mood, containg empowering 
    listofAirtableItems.forEach(
      function searchAnimalFilter(item){
        // if item.dataset.mood equal to "Empowering, then we trigger something 
        if (item.dataset.type == "animal") {
          // if the div has data-mood empowering, add red background by adding css class
          item.classList.add("filter-show");
          console.log(item);
        }
        else {
          item.classList.add("filter-hide");
        }
      
      
    }
  )
  
})

//Braces
  // get our button using css ID 
  // assign a event listener to my button to listen for click
  let bracesFilterButton = document.getElementById("braces");
  bracesFilterButton.addEventListener("click", function(event){
    console.log("this is filter being pressed:", event.target.id);
    // search my airtable-item divs, and see which data-mood contains "empowering"
    // put my airtable-divs in an array [airtable-div 1, airtable-div-2], find the div tht has data-mood
    let listofAirtableItems = document.querySelectorAll("div.airtable-item");
    
    // search for data-mood, containg empowering 
    listofAirtableItems.forEach(
      function searchBracesFilter(item){
        // if item.dataset.mood equal to "Empowering, then we trigger something 
        if (item.dataset.type == "braces") {
          // if the div has data-mood empowering, add red background by adding css class
          item.classList.add("filter-show");
          console.log(item);
        }
        else {
          item.classList.add("filter-hide");
        }
    }
  )
  
})

//Jewelry
  // get our button using css ID 
  // assign a event listener to my button to listen for click
  let jewelryFilterButton = document.getElementById("jewelry");
  jewelryFilterButton.addEventListener("click", function(event){
    console.log("this is filter being pressed:", event.target.id);
    // search my airtable-item divs, and see which data-mood contains "empowering"
    // put my airtable-divs in an array [airtable-div 1, airtable-div-2], find the div tht has data-mood
    let listofAirtableItems = document.querySelectorAll("div.airtable-item");
    
    // search for data-mood, containg empowering 
    listofAirtableItems.forEach(
      function searchJewelryFilter(item){
        // if item.dataset.mood equal to "Empowering, then we trigger something 
        if (item.dataset.type == "jewelry") {
          // if the div has data-mood empowering, add red background by adding css class
          item.classList.add("filter-show");
          console.log(item);
        }
        else {
          item.classList.add("filter-hide");
        }
    }
  )
  
})

//Art
  // get our button using css ID 
  // assign a event listener to my button to listen for click
  let artFilterButton = document.getElementById("art");
  artFilterButton.addEventListener("click", function(event){
    console.log("this is filter being pressed:", event.target.id);
    // search my airtable-item divs, and see which data-mood contains "empowering"
    // put my airtable-divs in an array [airtable-div 1, airtable-div-2], find the div tht has data-mood
    let listofAirtableItems = document.querySelectorAll("div.airtable-item");
    
    // search for data-mood, containg empowering 
    listofAirtableItems.forEach(
      function searchArtFilter(item){
        // if item.dataset.mood equal to "Empowering, then we trigger something 
        if (item.dataset.type == "art/design") {
          // if the div has data-mood empowering, add red background by adding css class
          item.classList.add("filter-show");
          console.log(item);
        }
        else {
          item.classList.add("filter-hide");
        }
    }
  )
  
})

//ShowAll
let showAllFilterBtn = document.getElementById("show-all");
showAllFilterBtn.addEventListener("click", function (event) {
  console.log("this is filter being pressed:", event.target.id);
  // search my airtable-item divs, and see which data-mood contains "empowering"
  // put my airtable-divs in an array [airtable-div 1, airtable-div-2], find the div tht has data-mood
  let listofAirtableItems = document.querySelectorAll("div.airtable-item");

  // search for data-mood, containg empowering
  listofAirtableItems.forEach(function ShowAllFilter(item) {
    item.classList.remove("filter-hide");
    item.classList.add("filter-show");
  });
});
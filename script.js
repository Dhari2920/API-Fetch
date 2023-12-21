// Create a new 'section' element using the document.createElement method
let section = document.createElement("section");

// Create a new 'div' element to act as a container within the section
let containerdiv = document.createElement("div");

// Set the 'class' attribute of the containerdiv to "container"
containerdiv.setAttribute("class", "container");

// Append the containerdiv as a child to the section
section.appendChild(containerdiv);

// Define an asynchronous function named 'usersList' to fetch and display user data
async function usersList() {
  try {
    // Fetch data from the given API endpoint using the Fetch API
    let response = await fetch("https://jsonplaceholder.typicode.com/users");

    // Parse the response data as JSON
    let data = await response.json();

    // Iterate through each user data and create a card element for each
    for (let card of data) {
      // Create a new 'div' element for each user card
      let carddiv = document.createElement("div");

      // Set the inner HTML of the carddiv to display user information
      carddiv.innerHTML = `
                      <div class="card  bg-info-subtle shadow">
                      <div class="card-body ">
                        <p class="card-title fw-bold"> Name: ${card.name}</p>
                        <p class="card-text"> Email:  ${card.email}</p>
                        <p class="card-text"> Street: ${card.address.street}</p>
                        <p class="card-text"> City:   ${card.address.city}</p>
                      </div>
                    </div>
                      `;
      
      // Append the carddiv as a child to the containerdiv
      containerdiv.append(carddiv);
    }
  } catch (error) {
    // Log an error message if there's an issue fetching or parsing data
    console.log("error fetching data");
  }
}

// Call the usersList function to initiate the fetching and rendering of user data
usersList();

// Append the section to the body of the HTML document
document.body.append(section);

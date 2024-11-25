// Function to find the index of substring ignoring case
function indexOfIgnoreCase(str, subStr) {
    // Convert both the strings to lowercase
    const lowerStr = str.toLowerCase();
    const lowerSubStr = subStr.toLowerCase();
    
    // Use indexOf to find the first occurrence of the lowercased subStr in the lowercased str
    return lowerStr.indexOf(lowerSubStr);
}

// Function to handle the user input and display the result
function findIndex() {
    // Get the values from the input fields
    const mainString = document.getElementById("mainString").value;
    const subString = document.getElementById("subString").value;
    
    // Check if inputs are provided
    if (mainString && subString) {
        const index = indexOfIgnoreCase(mainString, subString);
        document.getElementById("result").textContent = 
            index === -1 ? "Substring not found!" : "Index: " + index;
    } else {
        document.getElementById("result").textContent = "Please enter both strings.";
    }
}

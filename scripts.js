const countries = [
    "China",
    "France",
    "Russia",
    "UK",
    "USA",
    "Ukraine",
    "India",
    "Pakistan",
    "North Korea",
    "Belarus",
    "Australia",
    "New Zealand",
    "Syria",
    "South Africa",
    "Iran",
    "Ireland",
    "Cuba"
  ];
  
  function matchLists() {
    // Accept input for student list
    var studentInput = prompt("Enter student names (separated by spaces):");
    var studentList = studentInput.split(" ");
  
    // Shuffle the student list
    shuffle(studentList);
  
    // Match students with countries randomly
    var matchedCountryList = [];
    var matchedStudentList = [];
    for (var i = 0; i < Math.min(countries.length, studentList.length); i++) {
      matchedCountryList.push(countries[i]);
      matchedStudentList.push(studentList[i]);
    }
  
    // Print the matched elements
    var output = "Country list matched with student list:\n";
    for (var i = 0; i < matchedCountryList.length; i++) {
      output += matchedCountryList[i] + " is the country that matches with " + matchedStudentList[i] + " the student\n";
    }
    alert(output);
  }
  
  function shuffle(array) {
    var currentIndex = array.length;
    var temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
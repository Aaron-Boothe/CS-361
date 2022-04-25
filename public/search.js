var clearAllButton = document.getElementById('search-clear-container')

clearAllButton.addEventListener('click', function () {
	alert("WARNING: Are you sure you want to clear all search fields?")
  // if(inputBox.value) {
  //   responses.push(inputBox.value) // Add input to array
  //   console.log(responses)
  //   inputBox.value = ""
  //   inputBox.focus()
  // }
  // else {
  //   alert("Please fill in the box!")
  //   inputBox.focus()
  //   return
  // }

  // var currentPlayerName = players[getCurrentPlayerNumber()]
  // var currentResponseWord = responseSpaces[getCurrentResponseWord()]
  // x++
  // y++

  // // Update the display for the next player
  // currentPlayerText.textContent = currentPlayerName + ", please enter a " + currentResponseWord

  // if(responses.length == responseSpaces.length) { // All responses gathered
  //   alert("Game finished!")
  //   var j = 0

  //   // Insert player responses into template
  //   for(var i = 0; i < parsedPhrasal.length; i++) {
  //     if(oddResponse) {
  //       if(i % 2 != 0) {
  //         parsedPhrasal[i] = responses[j] // Replace the response spaces with the player responses
  //         j++
  //       }
  //     }
  //     else {
  //       if(i % 2 == 0) {
  //         parsedPhrasal[i] = responses[j]
  //         j++
  //       }
  //     }
  //   }
  //   //var completePhrasal = JSON.stringify(parsedPhrasal)
  //   var completePhrasal = parsedPhrasal.join(' ')
  //   var completeTitle = ""
  //   for (const name of players) {
  //     completeTitle += name + " "
  //   }
  //   completeTitle += "- " + getLayoutTitle(layoutNum)
  //   console.log(completeTitle)
  //   console.log(completePhrasal) // Completed phrasal
    
  //   sendCompletePhrasal(completePhrasal, completeTitle, function(){window.location.href = "/"})
  // }
})
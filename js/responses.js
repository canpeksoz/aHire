function getBotResponse(input) {

    if (input == "Thank you") {
        return "See You !";
    } 
    if (input == "I Love aHire !") {
        return "See You !";
    } 

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}
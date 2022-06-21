function getBotResponse(input) {

    if (input == "Thank you") {
        return "See You !";
    } ""
    if (input == "I Love aHire !") {
        return "See You !";
    } 

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    }if (input == "goodbye") {
        return "Talk to you later!";
    } 

        // FAQ responses
    
    if (input == "How can I use this site") {
        return "You can register for hire for free by taking a few minutes. After membership, you need to open a suitable service profile for your profession. After reviewing the details of the submitted works, you can give a quotation for the work if it is convenient for you.";
    }if (input == "Can I get information") {
        return "aHire is a platform where service providers can easily reach their customers and bid on their business requests without any marketing or advertising expenses.";
    }if (input == "Can I create multiple job ads") {
        return "Yes, of course.";
    }if (input == "How will I pay for it") {
        return "If you receive an offer from aHire and make an agreement with a service provider, you can safely pay the business price to the service provider online through us.";
    }
    else if (input == "goodbye") {
        return "Talk to you later!";
    }else {
        return"Visit here to see FAQ : \n\ " + "http://127.0.0.1:5500/FAQ.html" ;

    }
    



}
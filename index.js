switch(new Date().getDay()){
    case 4:
    case 5:
        console.log("Soon is is weekend");
        break;
    case 0:
    case 6:
        console.log("It is weekend.");
        break;
    default:
        console.log("Looking forward to the weekend.");
}
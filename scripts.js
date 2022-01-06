function HAcounter(){
    if (typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("HAresult").innerHTML = "You have recorded " + localStorage.clickcount + " Heart Attack(s)"
    }
}
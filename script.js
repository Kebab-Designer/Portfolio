var darkmode = document.getElementById("theme-switch");

   if(localStorage.getItem("theme") == null){
            localStorage.setItem("theme", "dark");
   }

    let localData = localStorage.getItem("theme");

    if(localData == "light"){
        darkmode.src = "assets/moon.svg";
        document.body.classList.remove("theme-invert")
    }
    else if(localData == "dark"){
        darkmode.src = "assets/Sun.svg";
        document.body.classList.add("theme-invert")
    }

            darkmode.onclick = function(){
                document.body.classList.toggle("theme-invert");

                if(document.body.classList.contains("theme-invert")) {
                    darkmode.src = "assets/Sun.svg";
                    localStorage.setItem("theme", "dark");
                }else {
                    darkmode.src = "assets/moon.svg";
                    localStorage.setItem("theme", "light");
                }
            }



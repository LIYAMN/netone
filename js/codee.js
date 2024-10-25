var count = 0;
document.getElementById("myButton").onclick = function (){
	    count++;
    	if (count % 2 == 0) { 
            document.getElementById("demo").innerHTML = "";
	    } else {
            var img = document.createElement("img");
            img.src = "https://i.pinimg.com/originals/40/39/4e/40394eba4fc5e53c9ebb2217ccb7968b.jpg";
            document.getElementById("demo").appendChild(img); 
        }
}

window.onload = function() {
    var topleKafe = ["Cappuccino", "Espresso", "Caffe latte", "Premium cappuccino", "Premium espresso", "Premium caffe latte", "Cinnamon latte", "Latte macchiato", "Karamel latte macchiato", "Krem kafa", "Moka kafa", "Nescafe", "Turska kafa", "Filter kafa"];
    var hladneKafe = ["Ice coffee", "Ice espresso", "Ice cappuccino", "Ice latte", "Ice karamel latte", "Ice krem", "Ice moka", "Ice cinnamon latte", "Ice chai tea latte"];
    var kafeAlk = ["Irish Coffee", "Dream Coffee", "Ice Passion Coffee", "Rum Coffee"];

    loadCoffee();
    
    function loadCoffee(){
        var text = ""
        for(var i=0; i<topleKafe.length; i++){
            text += "<li class='menu-element'>"+topleKafe[i]+"</li>";
        }
        document.getElementById("toplaKafa").innerHTML = text;

        text = ""
        for(var i=0; i<hladneKafe.length; i++){
            text += "<li class='menu-element'>"+hladneKafe[i]+"</li>"
        }
        document.getElementById("hladnaKafa").innerHTML = text;

        text = ""
        for(var i=0; i<kafeAlk.length; i++){
            text += "<li class='menu-element'>"+kafeAlk[i]+"</li>"
        }
        document.getElementById("kafaAlk").innerHTML = text;
    }

}
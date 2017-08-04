window.onload = function(){
	 var divs = document.getElementsByTagName("DIV");
    for (var i = 0; i < divs.length; ++i) {
        assign(divs[i]);
    }

    function assign(el) {
        if ( el.className == "background") {
            document.addEventListener("scroll", function(){
                var yPos = -(window.pageYOffset / 6);
                el.style.backgroundPosition = "30% " + yPos + "px";
            });
        }
    }
	}
	


/*
//Item 1 Variables and Listeners	
var forms = document.forms;
var formMain = document.getElementsByName('hw4Form');
var pwd1 = document.getElementById('pwd1');
var pwd2 = document.getElementById('pwd2');
var pwd1Hint = document.getElementById('pwd1Hint');
var pwd2Hint = document.getElementById('pwd2Hint');
pwd1.addEventListener('change', processFormMain, false);
pwd2.addEventListener('change', processFormMain, false);



	
function processFormMain(){
	if (!pwd1.validity.valid && !pwd2.validity.valid){
		pwd1Hint.style.display = 'block';
	} else {
		pwd1Hint.style.display = 'none';
	}
	
	if (pwd1.value != pwd2.value) {
		pwd2Hint.style.display = 'block';
	} else {
		pwd2Hint.style.display = 'none';
	}
}



//Item #2 Variables and Listeners
var bioCharacters = document.getElementById('bio');
bioCharacters.addEventListener('keyup', function(){
	var bioCharactersCount = 140;
	document.getElementById('charsLeft').innerHTML = bioCharactersCount - this.value.length;
	if (this.value.length >= 140){
		bioCharacters.style.color = '#ff0000';
	} else {
			bioCharacters.style.color = '#000000';
	}	
}
);
	


//Item #3 and #4 array variables
var firstSelectMakeOptions = ['Jeep', 'Maserati'];
var jeepSelectModelOptions = ['Cherokee','Wrangler','Compass','Patriot'];
var maseratiSelectModelOptions = ['Ghibli','Levante','Quattroporte','Gran Turismo'];
var jeepPremiumFeatures = ['Body Lift','4 Wheel Drive', 'Hard Top' ,'Other'];
var maseratiFeatures = ['Designer Spoiler','Run-Flat Tires', 'Bulletproof Glass','Other'];


//Item #3 & #4: Simple Variable Types
var firstSelect = document.getElementById('firstSelect');
var secondSelect = document.getElementById('secondSelect');
var thirdSelect = document.getElementById('thirdSelect');
var forthSelect = document.getElementById('forthSelect');
var jeepPremium = document.getElementById('jeepPremium');
var maseratiPremium = document.getElementById('maseratiPremium');
var makeLength = firstSelectMakeOptions.length;

    
function clearSelectList(el) {
	var MAX = el.length;
    for (var i = MAX; i >= 0; i--) {
        el.remove(i);
        }
     }
for (var i = 0; i < makeLength; i++) {
        var opt = document.createElement('option');
        var txtNode = document.createTextNode(firstSelectMakeOptions[i]);
        opt.value = i;
        opt.appendChild(txtNode);
        firstSelect.appendChild(opt);
    }

firstSelect.addEventListener('change', function () {
        var indx = this.value;

//clear selections between changes in other selections
        clearSelectList(secondSelect);
        clearSelectList(thirdSelect);
        clearSelectList(forthSelect);


//Based on your choice of car Make the user will be presented with Model and Feature choices that are populated from the associated arrays of options        
        if (indx != '') {
	        if (firstSelect.value == firstSelectMakeOptions.indexOf("Jeep")) {
                jeepPremium.style.display = 'block';	
                maseratiPremium.style.display = 'none';
                var makeLength = jeepSelectModelOptions.length;
                for (var i = 0; i < makeLength; i++) {
                    var opt = document.createElement('option');
                    var txtNode = document.createTextNode(jeepSelectModelOptions[i]);
                    opt.appendChild(txtNode);
                    secondSelect.appendChild(opt);                  
            	}
            } else if (firstSelect.value == firstSelectMakeOptions.indexOf("Maserati")) {
	            maseratiPremium.style.display = 'block';
	            jeepPremium.style.display = 'none';
                var makeLength = maseratiSelectModelOptions.length;
                for (var i = 0; i < makeLength; i++) {
                    var opt = document.createElement('option');
                    var txtNode = document.createTextNode(maseratiSelectModelOptions[i]);
                    opt.appendChild(txtNode);
                    secondSelect.appendChild(opt);    
                } 
                
            }
            if (firstSelect.value == firstSelectMakeOptions.indexOf("Jeep")){
                for (var i = 0; i < makeLength; i++) {
                    var opt = document.createElement('option');
                    var txtNode = document.createTextNode(jeepPremiumFeatures[i]);
                    opt.appendChild(txtNode);
                    thirdSelect.appendChild(opt);    
                }
            } else if (firstSelect.value == firstSelectMakeOptions.indexOf("Maserati")){
	                for (var i = 0; i < makeLength; i++) {
                    var opt = document.createElement('option');
                    var txtNode = document.createTextNode(maseratiFeatures[i]);
                    opt.appendChild(txtNode);
                    forthSelect.appendChild(opt); 
                }
            } else {
                var opt = document.createElement('option');
                var txtNode = document.createTextNode('----');
                opt.appendChild(txtNode);
                modelSelect.appendChild(opt);     
        		}
        }
    })
};//this is the end of the file
*/
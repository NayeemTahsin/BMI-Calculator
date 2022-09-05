
function showAlert() {
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;
  var Weight;
  var Height;
  if(document.getElementById("u_1").value==="lbs"){
    Weight=weight*0.4535;
  }
  else if(document.getElementById("u_1").value==="Kg") {
    Weight=weight;
  }
  if(document.getElementById("u_2").value==="cm"){
    Height=height/100;
  }
  else if(document.getElementById("u_2").value==="in"){
    Height=height*0.0254;
  }
  var bmi=Weight/(Height**2);
  bmi=bmi.toFixed(1);
  document.getElementById("digit").innerHTML=bmi;
  document.getElementById("b_2").style.zIndex="1";
  document.getElementById("b_1").style.zIndex="-1"
  if (bmi<18.5) {
    document.getElementById("adv").innerHTML="Underweight"
  }
  if (bmi>=18.5 && bmi<=24.9) {
    document.getElementById("adv").innerHTML="Perfect!"
      document.getElementById("adv").style.color="green"
  }
  if (bmi>=25.0 && bmi<=29.9) {
    document.getElementById("adv").innerHTML="Overweight"
  }
  else if(bmi>=30.0) {
    	document.getElementById("adv").innerHTML="Probable Obesity!"
      document.getElementById("adv").style.color="red"
  }

}

function require() {
	 if(document.getElementById("weight").value==="") {

            document.getElementById('button').disabled=true;
        }
        else if(document.getElementById("height").value==="") {
                    document.getElementById('button').disabled=true;
             }
         else {
           document.getElementById('button').disabled=false;
           document.getElementById('button').style.background="#afeeee"
           document.getElementById('button').style.color="black"

        }
    }
    function ReTurn(){
        document.getElementById("b_1").style.zIndex="1";
        document.getElementById("b_2").style.zIndex="-1"

    }

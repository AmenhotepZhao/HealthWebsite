  function printa() {document.getElementById("test").innerHTML="a"}

    var calculator =
   {
        weight : -1,
        height : -1,
        age : -1,
        isMale :  -1,
  
        readNumber : function(node) {
            var input = parseFloat(node.value);
            if (isNaN(input) || input >
            parseInt(node.getAttribute("max")) || input < parseInt(node.getAttribute("min"))) {
                  document.getElementById(node.getAttribute("name")+"error").innerHTML = "Please check the input."
                  return -1;
            }
            else {
		  document.getElementById(node.getAttribute("name")+"error").innerHTML = ""
                  return input;
            }
       },

        readInput : function() {
            this.weight = this.readNumber(document.getElementById("weight")) / 2.2
            var feet = this.readNumber(document.getElementById("heightFt"))
            var inches = this.readNumber(document.getElementById("heightInch"))
            if (feet >=0 && inches >= 0) this.height = (feet * 12 +
            inches) * 0.0254
            else this.height = -1
            this.age = this.readNumber(document.getElementById("age"))
            this.isMale = document.getElementById("male").checked;
        },

        calculateBMI : function () {
            if (this.weight < 0 || this.height < 0) { return -1;}
            return this.weight / this.height / this.height
        },

        calculateBMR : function() {
            if (this.weight < 0 || this.height < 0 || this.age < 0) {return -1;}
            if (this.isMale) {
                 return  66 + ( 13.7 * this.weight ) + ( 500 * this.height) - ( 6.8 * this.age)
            }
            else {
                return  665 + ( 9.6 * this.weight ) + ( 180 * this.height) - ( 4.7 * this.age)
            }
        },

        showBMI : function() {
            var bmi = this.calculateBMI()
            if (bmi >= 0) document.getElementById("bmi").innerHTML =bmi.toFixed(2)
            else  document.getElementById("bmi").innerHTML = "(-_-\")"
        },

        showBMR : function() {
             var bmr = this.calculateBMR()
            if (bmr >= 0) document.getElementById("bmr").innerHTML =  bmr.toFixed(2)  + " kcal"
            else  document.getElementById("bmr").innerHTML = "(-_-\")"
        }
    }

		//in this case, do not define the variables outside the function. remeber to call the function on the button. Finally dont forget to parseInt(value,10).
		document.getElementById("submitC").onclick = calculate_c

			function calculate_c() {

			var goalsScored = parseInt(document.getElementById('goalsScored').value,10);
			var goalsAllowed = parseInt(document.getElementById('goalsAllowed').value,10);
			

			var exp = 2.15;

			var winRatio = Math.pow(goalsScored,exp)/(Math.pow(goalsScored,exp)+Math.pow(goalsAllowed,exp));

			document.getElementById('hockeyWins').innerHTML="Their win ratio is " + winRatio;
			//the little text update trick depends on a string to be added alongside the displayed info (or on converting the variable into a string).
		}

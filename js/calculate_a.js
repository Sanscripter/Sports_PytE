		//in this case, do not define the variables outside the function. remeber to call the function on the button. Finally dont forget to parseInt(value,10).
		document.getElementById("submitA").onclick = calculate_a;

		function calculate_a() {

			var gamesPlayed = parseInt(document.getElementById('gamesPlayed').value,10);
			var runs = parseInt(document.getElementById('runs').value,10);
			var runsAllowed = parseInt(document.getElementById('runsAllowed').value,10);
			

			var exp = Math.pow(((runs + runsAllowed)/gamesPlayed),0.287);

			var winRatio = Math.pow(runs,exp)/(Math.pow(runs,exp)+Math.pow(runsAllowed,exp));

			document.getElementById('baseballWins').innerHTML="Their win ratio is " + winRatio;
			//the little text update trick depends on a string to be added alongside the displayed info (or on converting the variable into a string).
		}
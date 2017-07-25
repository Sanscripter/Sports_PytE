		//in this case, do not define the variables outside the function. remeber to call the function on the button. Finally dont forget to parseInt(value,10).
		document.getElementById("submitD").onclick = calculate_d

		function calculate_d() {

			var RLgamesPlayed = parseInt(document.getElementById('RLgamesPlayed').value,10);
			var RLgoalsScored = parseInt(document.getElementById('RLgoalsScored').value,10);
			var RLgoalsAllowed = parseInt(document.getElementById('RLgoalsAllowed').value,10);
			

			var exp = Math.pow(((RLgoalsScored + RLgoalsAllowed)/RLgamesPlayed),0.287);

			var winRatio = Math.pow(RLgoalsScored,exp)/(Math.pow(RLgoalsScored,exp)+Math.pow(RLgoalsAllowed,exp));

			document.getElementById('RLwins').innerHTML="Their win ratio is " + winRatio + " (ROCKET LEAGUE FTW!!!)"
			//the little text update trick depends on a string to be added alongside the displayed info (or on converting the variable into a string).
		}

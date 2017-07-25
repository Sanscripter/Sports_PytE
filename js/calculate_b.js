		//in this case, do not define the variables outside the function. remeber to call the function on the button. Finally dont forget to parseInt(value,10).
		document.getElementById("submitB").onclick = calculate_b

		function calculate_b() {

			var pointsFor = parseInt(document.getElementById('pointsFor').value,10);
			var  pointsAgainst= parseInt(document.getElementById('pointsAgainst').value,10);
			

			var exp = 13.91;

			var winRatio = Math.pow(pointsFor,exp)/(Math.pow(pointsFor,exp)+Math.pow(pointsAgainst,exp));

			document.getElementById('basketballWins').innerHTML="Their win ratio is " + winRatio;
			//the little text update trick depends on a string to be added alongside the displayed info (or on converting the variable into a string).
			}
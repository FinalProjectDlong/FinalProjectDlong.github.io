function getQuantityMonth()
{
	quantityMonth = prompt("What is the month of the event?");
	if (isNaN(quantityMonth))
	{
		alert(quantityMonth + " is not a number!!!!!!");
		getQuantityMonth();
	}
		
}

var Date = new Date();
var Month = d.getMonth();
var price;
var quantityMonth;
var quantityDay;
var total;

price = 30.42;

getQuantityMonth();

getQuantityDay();

total = 365 - (price * QuantityMonth);

var el = document.getElementById('total');
el.textContent = 'You have approximately '+total+' days until your event ';



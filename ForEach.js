//defines a function used to loop through an array (arr), and for every item call the passed function(func)
function myForEach(arr, func)
{
	//loops through every element in the array from 0 to arr.length-1
	for(var i = 0; i<arr.length; i++)
	{
		//calls the function
		func(arr[i]);
	}
}

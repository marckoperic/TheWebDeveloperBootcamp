//isEven

// function isEven(num){
// 	//return true if even
// 	if(num % 2 === 0) {
// 		return true;
// 	} 
// 	//return false otherwise
// 	else {
// 		return false
// 	}
// }

function isEven(num){
	return num % 2 === 0;
}

function factorial(num){
  var result = 1;
  for(var i = 2; i <= num; i++){
  	result *= i;
  }
  return result;
}


function kebabToSnake(str) {
	//replace all '-' with "_"'s
	var newStr = str.replace(/-/g , "_");
	//return str
	return newStr;

}







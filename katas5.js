const testeReverseString1 = () =>{
	let result = reverseString("Kenzie Academy")
	let expected = "ymedacA eizneK"
	console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }

const testeReverseString2 = () =>{
	let result = reverseString("Socorram-me, subi no ônibus em Marrocos!")
	let expected = "!socorraM me subinô on ibus ,em-marrocoS"
	console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const reverseString = str =>{

	let splitString = str.split("")
	let reverseString = splitString.reverse()
	let result = reverseString.join("")
	return result
}
testeReverseString1()
testeReverseString2()




const testReverseSentence1 = () =>{
	let result = reverseSentence("bob likes dogs")
	let expected = "dogs likes bob"
	console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const testReverseSentence2 = () =>{
	let result = reverseSentence("A janta será macarrão")
	let expected = "macarrão será janta A"
	console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const reverseSentence = str =>{
	let splitStr = str.split(" ")
	let reverseStr = splitStr.reverse()
	let result = reverseStr.join(" ")
	return result
}
testReverseSentence1()
testReverseSentence2()




const testMinimumValue1 = () =>{
	let result = minimumValue(3, 6, 0, 4, 2, 7, 234, 6, 3434, 134, 634, 41)
	let expected = 0
	console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const testMinimumValue2 = () =>{
	let result = minimumValue(235, 3463, 7453, 236, 845, 15, 7832345, 15134)
	let expected = 15
	console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const minimumValue = (...num) =>{
	let sortNum = num.sort((a, b) => a - b)
	let result = sortNum[0]
	return result
}
testMinimumValue1()
testMinimumValue2()




const testMaximumValue1 = () =>{
	let result = maximumValue(1, 14, 124, 3542, 35, 235, 3463, 2523, 34634, 235423)
	let expected = 235423
	console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const testMaximumValue2 = () =>{
	let result = maximumValue(523, 25, 523, 23546, 324, 5687, 44574535, 65)
	let expected = 44574535
	console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const maximumValue = (...num) =>{
	let sortNum = num.sort((a, b) => a - b)
	let result = sortNum[sortNum.length - 1]
	return result
}
testMaximumValue1()
testMaximumValue2()




const testCalculateRemainder1 = () =>{
	let result = calculateRemainder(657, 4)
	let expected = 1
	console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const testCalculateRemainder2 = () =>{
	let result = calculateRemainder(156, 7)
	let expected = 2
	console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const calculateRemainder = (num, div) =>{
	let result = num % div
	return result
}
testCalculateRemainder1()
testCalculateRemainder2()




const testDistinctValues1 = () =>{
	let result = distinctValues("1 3 5 3 7 3 1 1 5")
	let expected = "1 3 5 7"
	console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const testDistinctValues2 = () =>{
	let result = distinctValues("5 6 8 2 5 5 6 8 4")
	let expected = "5 6 8 2 4"
	console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const distinctValues = (strNum) =>{

	let splitNum = strNum.split(" ")
	let arrNum = []
	for(let i = 0; i < splitNum.length; i++){
		let currentNum = splitNum[i]
		if(!arrNum.includes(currentNum)){
			arrNum.push(currentNum)
		}
	}
	let result = arrNum.join(" ")
	return result
}
testDistinctValues1()
testDistinctValues2()




const testCountValues1 = () =>{
	let result = countValues("1 3 5 3 7 3 1 1 5")
	let expected = "1(3) 3(3) 5(2) 7(1)"
	console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const testCountValues2 = () =>{
	let result = countValues("6 9 16 1 64 16 11 655 5 5 5 5 1")
	let expected = "1(2) 5(4) 6(1) 9(1) 11(1) 16(2) 64(1) 655(1)"
	console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const countValues = numStr =>{
	let splitNum = numStr.split(" ")
	let duplicateNum = {}
	let result = ``

	splitNum.map(item => duplicateNum[item] === undefined ? duplicateNum[item] = 1 : duplicateNum[item]++)

	let key = Object.keys(duplicateNum)
	let value = Object.values(duplicateNum)

	for(let i = 0; i < key.length; i++){
		key[i] !== key[key.length - 1] ? result += `${key[i]}(${value[i]}) ` : result += `${key[i]}(${value[i]})`	
	}
	
	return result
}
testCountValues1()
testCountValues2()




const testEvaluateExpression1 = () =>{
	let result = evaluateExpression( "a + b + c - d", {a: 1, b: 7, c: 3, d: 14})
	let expected = -3
	console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const testEvaluateExpression2 = () =>{
	let result = evaluateExpression("d + f - f - d + e + w", {d: 50, f: 10, e:30, w:100})
	let expected = 130
	console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const evaluateExpression = (operation, object) =>{
	let splitStr = operation.split(" ")
	let result = object[splitStr[0]]

	for(let i = 1; i < splitStr.length; i++){
		let currentCell = splitStr[i]
		let afterCell   = splitStr[i + 1]

		currentCell === "+" ? result += object[afterCell] : (currentCell === "-" ? result -= object[afterCell] : result)
	}
	return result
}
testEvaluateExpression1()
testEvaluateExpression2()
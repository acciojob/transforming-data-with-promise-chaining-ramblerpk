//your JS code here. If required.
document.getElementById('btn').addEventListener('click', function(){
	const inputValue = parseInt(document.getElementById('ip').value);
	processInput(inputValue);
});

function processInput(value) {
	new Promise((resolve)=>{
		setTimeout(()=>{
			document.getElementById('output').innerHTML =`Result: ${value}`;
			resolve(value);
		},2000);
	})
	.then((result)=>{
		return new Promise((resolve)=>{
			setTimeout(()=>{
				const newResult =result*2;
				document.getElementById('output').innerHTML =`Result: ${newResult}`;
				resolve(newResult);
			},2000);
		});
	})
	.then((result)=>{
		return new Promise((resolve)=>{
			setTimeout(()=>{
				const newResult = result-3;
				document.getElementById('output').innerHTML = `Result: ${newResult}`;
				resolve(newResult);
			},1000);
		});
	})
	.then((result)=>{
		return new Promise((resolve)=>{
			setTimeout(()=>{
				const newResult = result/2;
				document.getElementById('output').innerHTML = `Result: ${newResult}`;
				resolve(newResult);
			},1000);
		});
	})
	.then((result)=>{
		return new Promise((resolve)=>{
			setTimeout(()=>{
				const newResult = result+10;
				document.getElementById('output').innerHTML = `Result: ${newResult}`;
				resolve(newResult);
			},1000);
		});
	});
}
















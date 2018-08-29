const script = document.createElement('script');
script.src = 'https://utils-api.herokuapp.com/lib.js';
script.onload = ()=>{
	const utils = new Utils();
	utils.loadClientScript(document,"https://localhost:3000/lib.js",()=>{
		utils.loadClientScript(document,"https://utils-api.herokuapp.com/bootstrap.js",()=>{
			utils.loadClientScript(document,"https://localhost:4000/bootstrap.js",()=>{
			});
		});
	});
};
document.getElementsByTagName('head')[0].appendChild(script);
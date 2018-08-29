const script = document.createElement('script');
script.src = 'https://utils-api.herokuapp.com/lib.js';
script.onload = ()=>{
	const utils = new Utils();
	utils.loadClientScript(document,"http://localhost:3000/lib.js",()=>{
		utils.loadClientScript(document,"http://utils-api.herokuapp.com/bootstrap.js",()=>{
			utils.loadClientScript(document,"http://localhost:3000/bootstrap.js",()=>{
			});
		});
	});
};
document.getElementsByTagName('head')[0].appendChild(script);
import App from './engine/App';
import Constants from './Constants'
import Bombergame from './Bombergame'

declare global {
    interface Window { app: App; }
}

window.onload = () => {
	let app = new App(new Bombergame(), Constants.GAME_WIDTH, Constants.GAME_HEIGHT);	
	window.app = app;
	app.setup();
}

window.onresize = () => {
	window.app.resize();
}

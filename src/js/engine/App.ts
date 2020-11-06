declare var require: any;

require('../../css/main.css');
const gameLoop = require('gameloop');

import Game from './Game'
import Keyboard from './Keyboard'


class App {

	public static CANVAS:HTMLCanvasElement;
	public static CANVAS_SCALE:HTMLCanvasElement;

	private _gameLoop: any;
	private _game: Game;
	private _width: number;
	private _height: number;

	constructor(game: Game, width: number, height:number) {

		this._game = game;
		this._width = width;
		this._height = height;

		App.CANVAS = <HTMLCanvasElement>document.getElementById('canvas');
		App.CANVAS_SCALE = <HTMLCanvasElement>document.getElementById('canvas_scale');

		Keyboard.init();

		this._gameLoop = new gameLoop({
			renderer: App.CANVAS.getContext('2d')
		});


	}

	public resize(){
		const scaleWidth = window.innerWidth / this._width;
		const scaleHeight = window.innerHeight / this._height;

		let canvaWidth:string;
		let canvaHeight:string;

		if(scaleWidth<scaleHeight){
			canvaWidth = (this._width*scaleWidth).toFixed(1);
			canvaHeight = (this._height*scaleWidth).toFixed(1);
		}else{	
			canvaWidth = (this._width*scaleHeight).toFixed(1)
			canvaHeight = (this._height*scaleHeight).toFixed(1)
		}		
		App.CANVAS_SCALE.style["width"] = canvaWidth + "px";
		App.CANVAS_SCALE.style["height"] = canvaHeight + "px";

		
		App.CANVAS_SCALE.style["marginLeft"] = (window.innerWidth-parseInt(canvaWidth))/2 + "px";
		App.CANVAS_SCALE.style["marginTop"] = (window.innerHeight-parseInt(canvaHeight))/2 + "px";
	}

	public setup(): void {

		App.CANVAS.style["width"] = this._width + "px";
		App.CANVAS.style["height"] = this._height + "px";
		App.CANVAS.width = this._width;
		App.CANVAS.height = this._height ;
		App.CANVAS_SCALE.width = this._width;
		App.CANVAS_SCALE.height = this._height ;

		window.dispatchEvent(new Event('resize'));

		this._gameLoop.on('start', () => {
			this._game.init();
		});

		this._gameLoop.on('update', (dt:number) => {
			this._game.update(dt);
		});
		
		this._gameLoop.on('draw', (ctx:CanvasRenderingContext2D)=>{
			this._game.render(ctx);

			App.CANVAS_SCALE.getContext('2d').clearRect(0,0,App.CANVAS_SCALE.width,App.CANVAS_SCALE.height);
			App.CANVAS_SCALE.getContext('2d').drawImage(App.CANVAS,0,0);
		});

		
		this._gameLoop.start();
	}
}

export default App;
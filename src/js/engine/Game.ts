import Assets from './Assets';
import KeyboardState from './KeyboardState';

export default class Game {
	
	public currentKeyboard:KeyboardState;
	public previousKeyboard:KeyboardState;

	
	constructor() {
		this.currentKeyboard = new KeyboardState();
		this.previousKeyboard = new KeyboardState();
	}

	public init():void{
	}

	protected isLoaded():boolean{
		return Assets.LOADED_IMAGES;
	}

	public update(dt:number):void {
		if(this.isLoaded()){
			this.previousKeyboard.copy(this.currentKeyboard);
			this.currentKeyboard.update();
		}
	}

	public render(ctx:CanvasRenderingContext2D):void{
	}

}
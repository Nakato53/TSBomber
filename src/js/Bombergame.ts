import Assets from './engine/Assets';
import Game from './engine/Game';
import SceneManager from './managers/SceneManager';
import EntityManager from './managers/EntityManager';
import MenuScene from './scenes/MenuScene';

export default class Bombergame extends Game {
	


	public static ME:Bombergame;
	
	constructor() {
		super();
		Bombergame.ME = this;
	}

	public init():void{
		super.init();
		Assets.loadImages(['images/bomb_party_v4.png']);
		
		new SceneManager();
		new EntityManager();

		SceneManager.ME.setScene(new MenuScene(this));

	}

	public update(dt:number):void {
		super.update(dt);
		if(this.isLoaded()){
			SceneManager.ME.update(dt);
		}
	}

	public render(ctx:CanvasRenderingContext2D):void{
		super.render(ctx);

		if(this.isLoaded()){
			SceneManager.ME.render(ctx);
		}

	}

}
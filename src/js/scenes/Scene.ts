import Entity from "../engine/Entity";
import Game from '../engine/Game';

export default abstract class Scene extends Entity {
    
    protected _game:Game;
    
    constructor(game:Game){
        super();
        this._game = game;
    }

	public update(dt:number):void {
       
	}

	public render(ctx:CanvasRenderingContext2D):void{
	
	}

}
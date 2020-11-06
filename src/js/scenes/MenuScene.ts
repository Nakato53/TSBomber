import Assets from "../engine/Assets";
import Entity from "../engine/Entity";
import Game from '../engine/Game';
import Scene from "./Scene";

export default class MenuScene extends Scene {
    

	private x:number = 0;
	private y:number = 0;
    private speed:number = 500;
    
    constructor(game:Game){
        super(game);
    }

	public update(dt:number):void {
        if(this._game.currentKeyboard.left){
            this.x-=this.speed*dt;
        }
        if(this._game.currentKeyboard.right){
            this.x+=this.speed*dt;
        }
        if(this._game.currentKeyboard.up){
            this.y-=this.speed*dt;
        }
        if(this._game.currentKeyboard.down){
            this.y+=this.speed*dt;
        }
	}

	public render(ctx:CanvasRenderingContext2D):void{
        ctx.globalAlpha = 1;
			
        ctx.fillStyle  = "#32325a";
        ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height);

        
        ctx.globalAlpha = 0.25;
        ctx.strokeStyle = "red"; 
        ctx.strokeRect(Math.floor(this.x),Math.floor(this.y),16,16);

        
        ctx.globalAlpha = 1;

        ctx.drawImage(	
            Assets.IMAGES['images/bomb_party_v4.png'],
            4*16, 17*16, 16,16,
            Math.floor(this.x),Math.floor(this.y),16,16
        );
        
	}

}
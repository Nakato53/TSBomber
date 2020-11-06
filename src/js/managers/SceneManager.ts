import Entity from "../engine/Entity";
import Scene from "../scenes/Scene";
export default class SceneManager extends Entity {
	
	public static ME:SceneManager;
	public currentScene:Scene;

    constructor(){
		super();
		SceneManager.ME = this;
    }

	public setScene(scene:Scene){
		this.currentScene = scene;
	}

	public update(dt:number):void {
		this.currentScene.update(dt);
	}

	public render(ctx:CanvasRenderingContext2D):void{
		this.currentScene.render(ctx);
	}

}
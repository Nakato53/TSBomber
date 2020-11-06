import Entity from "../engine/Entity";
export default class EntityManager extends Entity {
    
    public static ME:EntityManager;

    private _entities:Array<Entity>;
    
    constructor(){
        super();
        this._entities = new Array<Entity>();
        EntityManager.ME = this;
    }

	public update(dt:number):void {
        this._entities.forEach(entity => {
            entity.update(dt);
        });
	}

	public render(ctx:CanvasRenderingContext2D):void{
        this._entities.forEach(entity => {
            entity.render(ctx);
        });
	}

}
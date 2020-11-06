import Keyboard from './Keyboard';
export default class KeyboardState {
	
    public left:boolean = false;
    public right:boolean = false;
    public up:boolean = false;
    public down:boolean = false;

    public space:boolean = false;
    public action1:boolean = false;
    public action2:boolean = false;
	
	constructor() {
      
    }

    public update(){
        this.left = Keyboard.keys["ArrowLeft"];
        this.right = Keyboard.keys["ArrowRight"];
        this.up = Keyboard.keys["ArrowUp"];
        this.down = Keyboard.keys["ArrowDown"];
        this.space = Keyboard.keys[" "];
        this.action1 = Keyboard.keys["x"];
        this.action2 = Keyboard.keys["c"];        
    }

    public copy(state:KeyboardState){
        this.left = state.left;
        this.right = state.right;
        this.up = state.up;
        this.down = state.down;
        this.space = state.space;
        this.action1 = state.action1;
        this.action2 = state.action2;
    }
    
}
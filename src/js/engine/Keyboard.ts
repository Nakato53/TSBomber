export default class Keyboard {
    
    
    public static keys = [];
	
	public static init() {
        Keyboard.keys = [];
        console.log("init keyboard");
        window.addEventListener("keydown",
                                (e) => {
                                    Keyboard.keys[e.key] = true;
                                    switch(e.key){
                                        case "ArrowUp": case "ArrowDown": case "ArrowRight":  case "ArrowLeft": // Arrow keys
                                        case " ": e.preventDefault(); break; // Space
                                        default: break; // do not block other keys
                                    }
                                },
                                false
        );
        window.addEventListener('keyup',
                                (e) => {
                                    Keyboard.keys[e.key] = false;
                                },
                                false
        );
    }
    
}
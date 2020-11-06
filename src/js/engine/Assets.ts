export default class Assets {

    private static _IN_LOAD_IMAGES = 0;
    private static _IN_LOAD_IMAGES_DONE = 0;
    public static LOADED_IMAGES = false;
    public static IMAGES = [];

    public static loadImages(images:Array<string>){
        Assets.LOADED_IMAGES = false
        
        Assets._IN_LOAD_IMAGES = images.length;
        Assets._IN_LOAD_IMAGES_DONE = 0;

        images.forEach(element => {
            var img = new Image();
            img.onload =  () => {               
                this.IMAGES[element] = img;
                Assets._IN_LOAD_IMAGES_DONE++;
                if(Assets._IN_LOAD_IMAGES_DONE == Assets._IN_LOAD_IMAGES)
                    Assets.LOADED_IMAGES = true;
            }
            img.src = "assets/"+element;
        });        
    }

}
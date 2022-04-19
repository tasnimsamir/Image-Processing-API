import sharp from "sharp";
import fs from "fs";
import path from 'path';

const out_dir = path.resolve('./')+ "/src/assets/resizedImages";


const resizeImg = async (filepath:string,width:number,height:number) => {
    const path = filepath.split('/')
    const imgname = path[path.length - 1].split('.')[0];
    const outputimg = out_dir + `/${imgname}_${width}_${height}.jpg`;
    try {
        // console.log(`filepath= ${filepath}`);
        let data = await sharp(filepath).resize(width,height).jpeg().toBuffer();
        fs.writeFileSync(outputimg,data);
    } catch (error) {
        console.log(error);
    }
}

export default resizeImg;


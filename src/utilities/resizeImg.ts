import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const out_dir = path.resolve('./') + '/src/assets/resizedImages';

const resizeImg = async (
  filepath: string,
  width: number,
  height: number
): Promise<void> => {
  const path = filepath.split('/');
  const imgname = path[path.length - 1].split('.')[0];
  const outputimg = out_dir + `/${imgname}_${width}_${height}.jpg`;

  const data = await sharp(filepath).resize(width, height).jpeg().toBuffer();
  fs.writeFileSync(outputimg, data);
};

export default resizeImg;

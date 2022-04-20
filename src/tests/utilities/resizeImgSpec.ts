import resizeImg from '../../utilities/resizeImg';
import path from 'path';

describe('Testing Resize Image API', (): void => {
  it('Testing Resize Image functionality', async (): Promise<void> => {
    const testFilePath = path.resolve('./') + `/src/assets/images/fjord.jpg`;
    const testWidth = 256;
    const testHeight = 512;

    expect(async () => {
      await resizeImg(testFilePath, testWidth, testHeight);
    }).not.toThrow();
  });
});

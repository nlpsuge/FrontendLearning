/**
 * umi 约定 src 下的 models 目录可以用来放置 model 定义，
 * 因此，我们在 src 下建立 models 目录，并在其中建立文件 foo.js，文件名不重要。
 */
const namespace = 'bar';

export default {
  namespace,
  state: {
    dogImgURL: 'https://images.dog.ceo/breeds/puggle/IMG_114654.jpg',
  },
}
export const createImage = url =>
	new Promise((resolve, reject) => {
		const image = new Image();
		image.addEventListener('load', () => resolve(image));
		image.addEventListener('error', error => reject(error));
		image.setAttribute('crossOrigin', 'anonymous'); // needed to avoid cross-origin issues on CodeSandbox
		image.src = url;
	});

function getRadianAngle(degreeValue) {
	return (degreeValue * Math.PI) / 180;
}
export async function getImagePortion(imgObj, pixelCrop, ratio) {
	const image = await createImage(imgObj);
	const canvas = document.createElement('canvas');
	const scaleX = image.naturalWidth / image.width;
	const scaleY = image.naturalHeight / image.height;
	canvas.width = pixelCrop.width;
	canvas.height = pixelCrop.height;
	const ctx = canvas.getContext('2d');
	ctx.rotate(getRadianAngle(ratio));
	ctx.drawImage(
		image,
		pixelCrop.x * scaleX,
		pixelCrop.y * scaleY,
		pixelCrop.width * scaleX,
		pixelCrop.height * scaleY,
		0,
		0,
		pixelCrop.width,
		pixelCrop.height
	);

	return new Promise((resolve, reject) => {
		resolve(canvas.toDataURL('image/png'));
	});
}

import React, { useCallback, useEffect, useState } from 'react';
import Cropper from 'react-easy-crop';
import { Modal, Slider, Typography } from 'antd';
import { getImagePortion } from './canvasUtils';
import styled from '@emotion/styled';
import { dataURLtoFile, getBase64 } from '@/helper';
import { request } from '@/utils';
import { CameraOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';

const ContentDiv = styled.div`
	.reactEasyCrop_CropArea.reactEasyCrop_CropAreaGrid {
		border-radius: 50%;
	}
`;

const center = css`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
`;
const Avatar = styled.label`
	position: relative;
	padding: 10px;
	height: 64px;
	width: 64px;
	display: inline-block;
	background-color: rgba(0, 0, 0, 0.36);
	${(props: { image: string }) =>
		props.image ? 'background-image: url(' + props.image + ')' : ''};
	border-radius: 50%;
	background-size: cover;
	background-repeat: no-repeat;
	input {
		${center};
		position: absolute;
		width: 100%;
		opacity: 0;
		cursor: pointer;
		z-index: 10;
	}
	& > div {
		${center};
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
const api: string = '/hcmEnclosure/uploadAttachment';
const UploadAvatar = ({ initImage, imageChange }) => {
	let resetInitImage = initImage ? initImage.replace(/\s/g, encodeURIComponent(' ')) : '';
	const [imageSrc, setImageSrc] = React.useState(null);
	const [crop, setCrop] = useState({ x: 0, y: 0 });
	const [rotation, setRotation] = useState(0);
	const [currentImage, setCurrentImage] = useState<string>(resetInitImage);

	const [zoom, setZoom] = useState(1);
	const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
		setCroppedAreaPixels(croppedAreaPixels);
	}, []);

	const resetParams = () => {
		setIsModalVisible(false);
		setCrop(() => ({ x: 0, y: 0 }));
		setZoom(1);
		setRotation(0);
	};
	const showCroppedImage = useCallback(async () => {
		try {
			const croppedImage = await getImagePortion(imageSrc, croppedAreaPixels, rotation);
			changeToImage(croppedImage);
			resetParams();
		} catch (e) {
			console.error(e);
		}
	}, [imageSrc, croppedAreaPixels, rotation]);

	const changeToImage = imgsrc => {
		let image = new Image();
		image.setAttribute('crossOrigin', 'anonymous');
		image.onload = function () {
			let canvas = document.createElement('canvas');
			canvas.width = image.width;
			canvas.height = image.height;
			let context = canvas.getContext('2d');
			// @ts-ignore
			context.drawImage(image, 0, 0, image.width, image.height);
			let url = canvas.toDataURL('image/png');
			setCurrentImage(url);
		};
		image.src = imgsrc;
	};
	const postImageAction = async base64Image => {
		const formData = new FormData();
		formData.append('file', dataURLtoFile(base64Image, new Date().getTime()));
		request
			.post(api, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then(response => {
				console.log('头像更新', response);
				imageChange && imageChange(base64Image);
			})
			.catch(err => {
				console.log(err);
				throw err;
			});
	};
	const onFileChange = async e => {
		if (e.target.files && e.target.files.length > 0) {
			const file = e.target.files[0];
			let imageDataUrl = await getBase64(file);
			setImageSrc(imageDataUrl);
			setIsModalVisible(true);
		}
	};
	useEffect(() => {
		if (currentImage) {
			postImageAction(currentImage);
		}
	}, [currentImage]);
	// useEffect(() => {
	//     if(imageRef.current && currentImage){
	//         imageRef.current.style.backgroundImage = `url(${currentImage.replace(/\s/g, encodeURIComponent(' '))})`;
	//     }
	// }, [imageRef.current, currentImage])
	return (
		<div>
			<Modal
				title="Crop Image"
				visible={isModalVisible}
				onOk={showCroppedImage}
				onCancel={() => {
					setIsModalVisible(false);
					resetParams();
				}}>
				<div>
					<ContentDiv style={{ height: 300, position: 'relative' }}>
						<Cropper
							image={imageSrc}
							crop={crop}
							rotation={rotation}
							zoom={zoom}
							aspect={4 / 4}
							onCropChange={setCrop}
							onRotationChange={setRotation}
							onCropComplete={onCropComplete}
							onZoomChange={setZoom}
						/>
					</ContentDiv>
					<div>
						<div>
							<Typography variant="overline">Zoom</Typography>
							<Slider
								value={zoom}
								min={1}
								max={3}
								step={0.1}
								aria-labelledby="Zoom"
								onChange={zoom => setZoom(zoom)}
							/>
						</div>
					</div>
				</div>
			</Modal>
			<Avatar image={currentImage}>
				<div>
					<CameraOutlined style={{ fontSize: 26, color: '#fff' }} />
					<input type="file" onChange={onFileChange} accept="image/*, .heic" />
				</div>
			</Avatar>
		</div>
	);
};

export default UploadAvatar;

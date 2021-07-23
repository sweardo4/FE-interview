import React, { useEffect, useState } from 'react';
import { message, Modal, Upload } from 'antd';
import { CameraOutlined } from '@ant-design/icons';
import { request } from '@/utils';
import { getBase64, progressChange } from '@/helper';
import { UploadValue, FileConstruct, UploadProps, UploadOptions } from '@/constants/upload';

const UploadFile = (props: UploadProps) => {
	const {
		maxCount,
		allowFileType,
		maxSize,
		canPreview,
		defaultFiles,
		fileType,
		uploadApi,
		addCallback,
		updateCallback,
		icon,
	} = props;
	const [fileList, setFileList] = useState<Array<FileConstruct>>(
		Array.isArray(defaultFiles)
			? defaultFiles.map(item => {
					const { fileName, fileResourceKey } = item;
					return {
						name: fileName,
						status: 'done',
						resourceKey: fileResourceKey,
						...item,
					};
			  })
			: []
	);
	const [previewVisible, setPreviewVisible] = useState<boolean>(false);
	const [previewImage, setPreviewImage] = useState<string>('');
	const [isAllow, setIsAllow] = useState<boolean>(true);
	const [currentFile, setCurrentFile] = useState<UploadValue>();
	const [currentRemove, setCurrentRemove] = useState<string>();
	const handleChange = data => {
		const files = data.fileList;
		if (!isAllow) {
			files.pop();
		}
		setFileList(() => files);
	};
	const uploadButton = () => (
		<div>
			{icon}
			<div style={{ marginTop: 8 }}>上传图片</div>
		</div>
	);
	const handlePreview = async (
		file: FileConstruct & { url: string; preview: string; originFileObj: object }
	) => {
		if (!canPreview) return false;
		if (!file.url && !file.preview) {
			file.preview = await getBase64(file.originFileObj);
		}
		setPreviewImage(() => file.url || file.preview);
		setPreviewVisible(true);
	};
	const beforeUpload = async (file: File) => {
		if (maxSize) {
			// 如果存在maxSize则校验附件大小
			const isLt10M = file.size / 1024 / 1024 < maxSize;
			if (!isLt10M) {
				message.error(`附件最大不超过${maxSize}MB!`);
				setIsAllow(() => false);
				return false;
			}
		}
		setIsAllow(() => true);
		return true;
	};
	const doUploadAction = async (options: UploadOptions) => {
		const { file, action, onSuccess, onError, onProgress } = options;
		const formData = new FormData();
		let image = await getBase64(file);
		const nameArr = file.name.split('.');
		const tailfix = nameArr[nameArr.length - 1].toUpperCase();
		if (tailfix === 'HEIC') {
			image = image.replace(/application\/octet-stream/g, 'image/png');
		}

		formData.append('file', image);
		formData.append('fileName', file.name);
		let progress = { percent: 1 };
		request
			.post(action, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then(response => {
				options.onSuccess(response, file);
				const params = {
					...response.data,
					resourceToken: response.data.resourceKey,
				};
				addCallback && addCallback(params);
				setCurrentFile(response.data);
				progress.percent = 99;
			})
			.catch(err => {
				console.log(err);
				progress.percent = 99;
				setIsAllow(() => false);
				onError('上传失败', file);
				throw err;
			});
		progressChange(progress, options);
	};
	const callbackData = (data: Array<FileConstruct>) => {
		return data.map(item => {
			const { fileType, fileName, id, resourceKey } = item;
			return { fileType, fileName, id: id ? id : 0, resourceToken: resourceKey, url: item.url };
		});
	};
	useEffect(() => {
		if (currentFile) {
			fileList[fileList.length - 1] = {
				...currentFile,
				...fileList[fileList.length - 1],
				fileType,
			};
			setFileList(() => fileList);
			updateCallback && updateCallback(callbackData(fileList));
		}
	}, [currentFile]);
	useEffect(() => {
		if (currentRemove) {
			const newFileList = fileList.filter(item => {
				if ((item.resourceToken || item.resourceKey) === currentRemove) {
					console.log(item, 9999);
					return false;
				}
				return true;
			});
			updateCallback && updateCallback(callbackData(newFileList));
		}
	}, [currentRemove]);
	return (
		<>
			<Upload
				action={uploadApi}
				customRequest={doUploadAction}
				fileList={fileList}
				listType="picture-card"
				onPreview={handlePreview}
				maxCount={maxCount}
				accept={allowFileType}
				beforeUpload={beforeUpload}
				onRemove={(file: FileConstruct) => {
					setCurrentRemove(file.resourceToken || file.resourceKey);
					return true;
				}}
				onChange={handleChange}>
				{uploadButton()}
			</Upload>
			<Modal
				visible={previewVisible}
				footer={null}
				title={'预览'}
				onCancel={() => setPreviewVisible(false)}>
				<img alt="example" style={{ width: '100%' }} src={previewImage} />
			</Modal>
		</>
	);
};

//
UploadFile.defaultProps = {
	maxCount: 5, // 附件个数
	maxSize: 10, // 每个附件大小（M）
	canPreview: true, // 是否可以预览
	// allowFileType: ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'], // 允许格式
	allowFileType: 'image/*, application/pdf', // 允许格式
	defaultFiles: [], // 初始化时如果已有值则传
	fileType: '',
	icon: <CameraOutlined style={{ fontSize: 26 }} />, // 如果图标都一样则可以在这里统一设置
	uploadApi: '/hcmEnclosure/uploadEnclosurGift',
	addCallback: v => {
		console.log('添加时回调', v);
	},
	updateCallback: v => {
		console.log('更新时回调', v);
	},
};
export default UploadFile;

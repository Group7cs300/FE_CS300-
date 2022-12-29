import { Button, Form, Input, message, Select, Space } from 'antd'
import {
	PlusOutlined,
	MinusCircleOutlined,
	DollarOutlined,
	UploadOutlined,
} from '@ant-design/icons'
import { useState } from 'react'
import TextArea from 'antd/es/input/TextArea'
import UploadFile from './UploadFile'
import { RcFile } from 'antd/es/upload'

export default function DynamicAddSection({
	props,
	addDocument,
	addVideo,
}: any) {
	const [isUploadDocument, setIsUploadDocument] = useState(true)
	const [isUploadVideo, setIsUploadVideo] = useState(true)
	return (
		<Form.List name="sections">
			{(fields, { add, remove }) => (
				<>
					{fields.map((field, index) => {
						return (
							<Space
								className="d-flex"
								key={field.key}
								direction="vertical"
								// size={12}
								style={{ padding: 10 }}
							>
								<Form.Item
									name={[field.name, 'name']}
									label={`Section ${index + 1}`}
									rules={[
										{
											required: true,
											message: 'Please input name of section',
										},
									]}
								>
									<Input placeholder="Name" />
								</Form.Item>
								<Form.Item
									label="Summary"
									name={[field.name, 'summary']}
								>
									<TextArea
										placeholder="Text here"
										rows={2}
									/>
								</Form.Item>
								<Form.Item
									label="Video"
									valuePropName="fileList"
									rules={[
										{
											required: isUploadVideo,
											message: 'Please input Video',
										},
									]}
								>
									<UploadFile
										type="picture-card"
										setFiles={addVideo}
										setIsUpload={setIsUploadVideo}
										button={
											<div>
												<PlusOutlined />
												<div style={{ marginTop: 8 }}>
													Upload
												</div>
											</div>
										}
									></UploadFile>
								</Form.Item>
								<Form.Item
									label="Document"
									valuePropName="fileList"
									rules={[
										{
											required: isUploadDocument,
											message: 'Please input document',
										},
									]}
								>
									<UploadFile
										type="picture-card"
										setFiles={addDocument}
										setIsUpload={setIsUploadDocument}
										button={
											<div>
												<PlusOutlined />
												<div style={{ marginTop: 8 }}>
													Upload
												</div>
											</div>
										}
									></UploadFile>
								</Form.Item>
								<MinusCircleOutlined
									style={{
										height: 40,
										color: 'red',
									}}
									onClick={() => {
										remove(field.name)
									}}
								/>
							</Space>
						)
					})}
					<Form.Item>
						<Button
							className="d-flex align-items-center justify-content-center"
							icon={<PlusOutlined />}
							type="dashed"
							block
							onClick={() => {
								add()
							}}
						>
							Add
						</Button>
					</Form.Item>
				</>
			)}
		</Form.List>
	)
}

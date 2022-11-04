import React, { useState } from 'react'
import { Upload, UploadProps, UploadFile } from 'antd'

import { RcFile } from 'antd/es/upload'
import ImgCrop from 'antd-img-crop'

import { FieldProps, UploadFieldType } from '@components/form/formTypes'
import { getToken } from '@framework/utils/get-token'

export const UploadField: React.FC<FieldProps<UploadFieldType>> = ({
  field,
}) => {
  const uploadUrl = field.uploadUrl ?? process.env.NEXT_PUBLIC_REST_UPLOAD_URl
  const token = getToken()
  const headers = { authorization: 'Bearer ' + token }
  const [fileList, setFileList] = useState<UploadFile[]>(field.list)
  const onChange: UploadProps['onChange'] = ({
    fileList: newFileList,
    file,
  }) => {
    setFileList(newFileList)

    if (file.status === 'done') {
      field.value = newFileList.map(newFile => {
        return newFile.response
          ? newFile.response.items
          : {
              id: newFile.uid,
              path: newFile.url,
            }
      })
    }
  }
  const onPreview = async(file: UploadFile) => {
    let src = file.url as string
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader()
        reader.readAsDataURL(file.originFileObj as RcFile)
        reader.onload = () => resolve(reader.result as string)
      })
    }
    const image = new Image()
    image.src = src
    const imgWindow = window.open(src)
    imgWindow?.document.write(image.outerHTML)
  }
  return (
    <>
      <ImgCrop rotate>
        <Upload
          headers={headers}
          action={uploadUrl}
          listType="picture-card"
          fileList={fileList}
          onChange={onChange}
          onPreview={onPreview}
        >
          {fileList.length < (field.maxFileCount ?? 5) && '+ Upload'}
        </Upload>
      </ImgCrop>
    </>
  )
}

import React from 'react';
import {UploadFilePageProps} from './UploadFilePage.types';
import {Button, Form} from "antd";
import {UploadFile} from "../../components/UploadFile";
import {UploadChangeParam} from "antd/es/upload";

type FieldType = {
    fileList: UploadChangeParam['file'][];
};


export const UploadFilePage: React.FC<UploadFilePageProps> = () => {
    const [form] = Form.useForm<FieldType>();
    const loadedFiles = Form.useWatch('fileList', form).length > 0;

    const onFinish = (values: FieldType) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Form
            name="upload-file"
            onFinish={onFinish}
            style={{width: 395}}
            form={form}
            initialValues={{
                fileList: []
            }}
        >
            <Form.Item<FieldType> name="fileList" noStyle>
                <UploadFile/>
            </Form.Item>
            <Form.Item<FieldType> style={{width: '100%', marginTop: 34}}>
                <Button
                    block
                    type="primary"
                    htmlType="submit"
                    disabled={!loadedFiles}
                >
                    Продолжить
                </Button>
            </Form.Item>
        </Form>
    );
};

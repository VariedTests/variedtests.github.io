import React from "react";
import { IResourceComponentsProps } from "@pankod/refine-core";

import { Edit, Form, Input, useForm } from "@pankod/refine-antd";

import { IUser } from "interfaces";

export const UserEdit: React.FC<IResourceComponentsProps> = () => {
    const { formProps, saveButtonProps } = useForm<IUser>();

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label="First Name"
                    name="firstName"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Last Name"
                    name="lastName"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Edit>
    );
};

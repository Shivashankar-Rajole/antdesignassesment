import React from "react";
import '../App.css';
import './modal.css'
import { EditOutlined, DeleteOutlined, HeartOutlined, MailOutlined, GlobalOutlined, PhoneOutlined, HeartFilled } from '@ant-design/icons';
import { Card, Modal, Form, Input, Spin } from 'antd';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            active: false,
            isModalVisible: false,
            visible: false
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }
  
    onDeleteRecord = ( index) => {
        const { items } = this.state;
        items.splice(index, 1);
        this.setState({
            items
        });
        console.log("deleted",index)
    }
    showModalValue = (record, index) => {
        console.log(record, index, "UsersInfo")
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    clickIcon = (record, index) => {
        <HeartFilled />
        console.log(record, index, "HeartICon")
    }

    onFinish = (values) => {
        console.log('Received values of form:', values);
    };
    render() {
        const { error, isLoaded, items } = this.state;
        const { Meta } = Card;


        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div> Loading... <Spin /></div>;
        } else {
            return (

                <div className="container">
                    {items.map((item, index,i, ...values) => (
                        <div className="card_item" key={item.id}>
                            <div className="card_inner">

                                <Card
                                    style={{ width: 300 }}
                                    cover={
                                        <img
                                            alt="avatar"
                                            src={`https://avatars.dicebear.com/v2/avataaars/${item.name}.svg?options[mood][]=happy`}
                                        />
                                    }
                                    actions={[
                                        <HeartOutlined onClick={() => { this.clickIcon(item, index) }} style={{ color: "red" }} />,
                                        <EditOutlined onClick={() => { this.showModalValue(item, index) }} />,
                                        <DeleteOutlined onClick={() => { this.onDeleteRecord( index) }} />,
                                    ]}
                                >

                                    <Modal
                                        bodyStyle={{
                                            opacity: 1
                                        }}
                                        title="Basic Modal"
                                        visible={this.state.visible}
                                        onOk={this.handleOk}
                                        onCancel={this.handleCancel}
                                    >
                                        <Form name="dynamic_form_nest_item" autoComplete="off"
                                            labelCol={{
                                                span: 8,
                                            }}
                                            wrapperCol={{
                                                span: 16,
                                            }}
                                            style={{
                                                maxWidth: 600,
                                            }}
                                            initialValues={{
                                                remember: true,
                                            }}

                                        >
                                            <Form.Item
                                                {...values}
                                                label="Name"
                                                name={[items, "key"]} rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your username!',
                                                    },
                                                ]}
                                            >
                                                <Input defaultValue={item.name} placeholder="Name" />

                                            </Form.Item>
                                            <Form.Item
                                                name="email"
                                                label="E-mail"
                                                rules={[
                                                    {
                                                        type: 'email',
                                                        message: 'The input is not valid E-mail!',
                                                    },
                                                    {
                                                        required: true,
                                                        message: 'Please input your E-mail!',
                                                    },
                                                ]}
                                            >
                                                <Input defaultValue={item.email} placeholder="Email" />
                                            </Form.Item>    <Form.Item
                                                name="phone"
                                                label="Phone Number"

                                                rules={[{ required: true, message: 'Please input your phone number!' }]}
                                            >
                                                <Input defaultValue={item.phone} style={{ width: '100%' }} placeholder="Phone" />
                                            </Form.Item> <Form.Item
                                                name="website"
                                                label="Website"
                                                rules={[{ required: true, message: 'Please input website!' }]}
                                            >
                                                <Input defaultValue={item.website} placeholder="Website" />
                                            </Form.Item>
                                        </Form>
                                    </Modal>
                                    <Meta className="title"
                                        title={item.name}
                                    />
                                    <p className="card-text"><MailOutlined />   {item.email}</p>
                                    <p className="card-text"><PhoneOutlined />  {item.phone}</p>
                                    <p className="card-text"><GlobalOutlined /> {item.website}</p>

                                </Card>
                            </div>
                        </div>
                    ))}

                </div>
            );
        }
    }
}

export default Home;

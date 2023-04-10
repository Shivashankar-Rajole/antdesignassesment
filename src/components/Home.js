import React from "react";
import '../App.css';
import './modal.css'
import { EditOutlined, DeleteOutlined, HeartOutlined, MailOutlined, GlobalOutlined, PhoneOutlined } from '@ant-design/icons';
import { Card, Modal, Form, Input, Typography, Button, Checkbox ,Select} from 'antd';


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
    // heartFill = (item, index) => {

    //     <HeartFilled style={{ color: "red" }} />

    // }
    CustomizedForm = ({ onChange, fields }) => (
        <Form
            name="global_state"
            layout="inline"
            fields={fields}
            onFieldsChange={(_, allFields) => {
                onChange(allFields);
            }}
        >
            <Form.Item
                name="username"
                label="Username"
                rules={[
                    {
                        required: true,
                        message: 'Username is required!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
        </Form>
    );
    onDeleteRecord = (record, index) => {
        const { items } = this.state;
        items.splice(index, 1);
        this.setState({
            items
        });
        console.log("deleted", record)
    }
    showModal = () => {
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


    render() {
        const { error, isLoaded, items } = this.state;
        const { Meta } = Card;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (

                <div class="container">
                    {items.map((item, index) => (
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
                                        <HeartOutlined style={{ color: "red" }} />,
                                        <EditOutlined onClick={()=>{this.showModal()}}/>,
                                        <DeleteOutlined onClick={() => { this.onDeleteRecord(this.state.isModalVisible, item, index) }} />,
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
                                        <Form
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
                                                label="Name"
                                                name="username"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your username!',
                                                    },
                                                ]}
                                            >
                                                <Input />

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
                                                <Input />
                                            </Form.Item>    <Form.Item
                                                name="phone"
                                                label="Phone Number"
                                                rules={[{ required: true, message: 'Please input your phone number!' }]}
                                            >
                                                <Input style={{ width: '100%' }} />
                                            </Form.Item> <Form.Item
                                                name="website"
                                                label="Website"
                                                value={item.website}
                                                rules={[{ required: true, message: 'Please input website!' }]}
                                            >
                                                    <Input />
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

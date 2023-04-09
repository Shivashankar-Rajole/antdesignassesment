import React from "react";
import '../App.css';
import './modal.css'
import { EditOutlined, DeleteOutlined, HeartOutlined, MailOutlined, GlobalOutlined, PhoneOutlined } from '@ant-design/icons';
import {  Card } from 'antd';
// import { Col, Row } from 'antd';
// import Icon from '@ant-design/icons';
import { Modal } from 'antd';
// const gridStyle = {
//     width: '100%',
//     textAlign: 'center',
// };


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
    onDeleteRecord = (record, index) => {
        const { items } = this.state;
        items.splice(index, 1);
        this.setState({
            items
        });
        console.log("deleted", record)
    }
    onEdit = (record, index) => {

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
                <div class="row">
                    <div class="column">
                        {items.map((item, index) => (

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
                                    <EditOutlined onClick={this.showModal} />,
                                    <DeleteOutlined onClick={() => { this.onDeleteRecord(this.state.isModalVisible, item, index) }} />,
                                ]}
                            >
                                
                                <Modal className="modal"
                                    title="Basic Modal"
                                    visible={this.state.visible}
                                    onOk={this.handleOk}
                                    onCancel={this.handleCancel}
                                >   
                                    <div className="form">
                                        <div className="form-body">
                                            <div className="username">
                                                <label className="form__label" for="firstName"> Name </label>
                                                <input className="form__input" type="text" value={item.name} required />
                                            </div>
                                            <div className="email">
                                                <label className="form__label" for="Email">Email </label>
                                                <input type="text" value={item.email} required />
                                            </div>
                                            <div className="phone">
                                                <label className="form__label" for="phone">Phone </label>
                                                <input type="text" value={item.phone} required />
                                            </div>
                                            <div className="Website">
                                                <label className="form__label" for="email">Website </label>
                                                <input type="text" value={item.website} required />
                                            </div>

                                        </div>

                                    </div>

                                </Modal>
                                <Meta className="title"
                                    title={item.name}
                                />
                                <p className="card-text"><MailOutlined />   {item.email}</p>
                                <p className="card-text"><PhoneOutlined />  {item.phone}</p>
                                <p className="card-text"><GlobalOutlined /> {item.website}</p>

                            </Card>
                        ))}

                    </div>
                </div>




            );
        }
    }
}

export default Home;

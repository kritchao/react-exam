import React, { useState, useEffect } from 'react'
import { Form, Input, Row, Col, Select, Button, Radio, List, Typography, Modal } from 'antd'

const { Text } = Typography;
const { Option } = Select;

function Lists(props) {
    const { allData, setAllData } = props
    const [visible, setVisible] = useState(false)
    const [checkAll, setCheckAll] = useState(false)
    const [editIndex, setEditIndex] = useState()


    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(allData))
    }, [allData])

    const check = (item) => {
        if (item === "true") {
            return true
        } else if (item === "false") {
            return false
        }
    }

    const toggleCheck = (item) => {
        setCheckAll(false);
        const arr = [...allData]
        const index = arr.indexOf(item)
        if (arr[index].checked === 'true') {
            arr[index].checked = 'false'

        } else if (arr[index].checked === 'false') {
            arr[index].checked = 'true'
        }
        setAllData(arr)
    }

    const toggleCheckAll = () => {
        const arr = [...allData]
        setCheckAll(!checkAll)
        if (!checkAll) {
            for (let i = 0; i < arr.length; i++) {
                arr[i].checked = 'true'
            }
        } else {
            for (let i = 0; i < arr.length; i++) {
                arr[i].checked = 'false'
            }
        }
    }
    const openModal = (item) => {
        const arr = [...allData]
        setEditIndex(arr.indexOf(item))
        setVisible(true)
    }

    const deleteAll = () => {
        const arr = [...allData]
        const deletedData = arr.filter(data => data.checked === 'false')
        setAllData(deletedData)
    }

    const updateList = (value) => {
        const arr = [...allData];
        arr[editIndex] = value;
        setAllData(arr);
        setVisible(false)
    }

    const deleteIndex = (item) => {
        const arr = [...allData]
        const index = arr.indexOf(item)
        arr.splice(index, 1)
        setAllData(arr)
    }

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 70 }}>
                <Option value="66">+66</Option>
                <Option value="1">+1</Option>
                <Option value="1">+86</Option>
                <Option value="1">+81</Option>
            </Select>
        </Form.Item>
    );

    return (
        <div className="App">
            <List
                style={{ marginLeft: "50px", marginRight: "50px" }}
                bordered
                header={
                    <Row>
                        <Col style={{ textAlign: 'left' }} span={1}><Radio onClick={() => toggleCheckAll()} checked={checkAll} /></Col>
                        <Col span={2}><Button size='small' onClick={() => deleteAll()} type='dashed'>delete</Button></Col>
                        <Col span={3}>Name</Col>
                        <Col span={3}>Gender</Col>
                        <Col span={3}>Mobile Phone</Col>
                        <Col span={8}>Nationality</Col>
                    </Row>}
                itemLayout="vertical"
                pagination={{ pageSize: 10 }}
                dataSource={allData}
                renderItem={item => (
                    <List.Item>
                        <Row>
                            <Modal
                                centered
                                title="Edit"
                                visible={visible}
                                footer={null}
                                onCancel={() => setVisible(false)}
                            >
                                <Form onFinish={updateList}>
                                    <Form.Item label="Title " name="title" rules={[{ required: true, message: 'Please select your title!', type: "string" }]}>
                                        <Select>
                                            <Option value="Mr.">Mr.</Option>
                                            <Option value="Ms.">Ms.</Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item label="First Name"  name="first_name" rules={[{ required: true, message: 'Please input your first name!' }]}>
                                        <Input></Input>
                                    </Form.Item>
                                    <Form.Item label="Last Name" name="last_name" rules={[{ required: true, message: 'Please input your last name!' }]}>
                                        <Input></Input>
                                    </Form.Item>
                                    <Form.Item label="Birth Day" name="birth_day" rules={[{ required: true, message: 'Please input your birth date!' }]}>
                                        <Input className="Input" type='date'></Input>
                                    </Form.Item>
                                    <Form.Item label="Nationality" name="nationality" rules={[{ required: true, message: 'Please input your nationality!' }]}>
                                        <Select>
                                            <Option value="Thai">Thai</Option>
                                            <Option value="American">American</Option>
                                            <Option value="Chinese">Chinese</Option>
                                            <Option value="Japanese">Japanese</Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item label="Citizen ID" name="citizen_id" rules={[{ required: true, message: 'Please input correct ID!' }]}>
                                        <Input type='number'></Input>
                                    </Form.Item>
                                    <Form.Item label="Gender" name="gender">
                                        <Radio.Group>
                                            <Radio value="male">Male</Radio>
                                            <Radio value="female">Female</Radio>
                                            <Radio value="unisex">Unisex</Radio>
                                        </Radio.Group>
                                    </Form.Item>
                                    <Form.Item label="Mobile Phone" name="mobile_phone" rules={[{ required: true, message: 'Please input your mobile phone!' }]}>
                                        <Input addonBefore={prefixSelector} type='number' />
                                    </Form.Item>
                                    <Form.Item label="Passport No." name="passport_number" rules={[{ required: true, message: 'Please input passport number!' }]}>
                                        <Input type='number'></Input>
                                    </Form.Item>
                                    <Form.Item label="Expected Salary" name="expected_salary" rules={[{ required: true, message: 'Please input your expected salary!' }]}>
                                        <Input type='number' style={{ width: "100%" }} suffix="THB" />
                                    </Form.Item>
                                    <Form.Item name='checked' initialValue='false'>
                                    </Form.Item>
                                    <Button className="Button" type="primary" htmlType="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </Modal>


                            <Col style={{ textAlign: 'left' }} span={3}><Radio onClick={() => toggleCheck(item)} checked={check(item.checked)} /></Col>
                            <Col span={3}>{item.first_name} {item.last_name}</Col>
                            <Col span={3}>{item.gender}</Col>
                            <Col span={3}>{item.mobile_phone}</Col>
                            <Col span={8}>{item.nationality}</Col>
                            <Col style={{ cursor: 'pointer' }} onClick={() => openModal(item)} span={2}><Text type='secondary'>edit</Text></Col>
                            <Col style={{ cursor: 'pointer' }} onClick={() => deleteIndex(item)} span={2}><Text type='secondary'>delete</Text></Col>
                        </Row>
                    </List.Item>
                )}>
            </List>
        </div>
    )
}

export default Lists

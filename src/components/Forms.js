import React, { useEffect} from 'react'
import { Form, Input, Row, Col, Select, Button, Radio } from 'antd'



const { Option } = Select;

function Forms(props) {
    const {allData, setAllData} = props
    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(allData))
    }, [allData])


    const Submit = (value) => {
        setAllData([...allData, value])
        window.location.reload(false);
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
            <Form className="Form" style={{ padding: "25px", margin: "50px" }} onFinish={Submit} >
                <Row>
                    <Col span={4}>
                        <Form.Item label="Title " name="title" rules={[{ required: true, message: 'Please select your title!', type: "string" }]}>
                            <Select>
                                <Option value="Mr.">Mr.</Option>
                                <Option value="Ms.">Ms.</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={10}>
                        <Form.Item label="First Name" name="first_name" rules={[{ required: true, message: 'Please input your first name!' }]}>
                            <Input></Input>
                        </Form.Item>
                    </Col>
                    <Col span={10}>
                        <Form.Item label="Last Name" name="last_name" rules={[{ required: true, message: 'Please input your last name!' }]}>
                            <Input></Input>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={10}>
                        <Form.Item label="Birth Day" name="birth_day" rules={[{ required: true, message: 'Please input your birth date!' }]}>
                            <Input className="Input" type='date'></Input>
                        </Form.Item>
                    </Col>
                    <Col span={14}>
                        <Form.Item label="Nationality" name="nationality" rules={[{ required: true, message: 'Please input your nationality!' }]}>
                            <Select placeholder="-- please select --">
                                <Option value="Thai">Thai</Option>
                                <Option value="American">American</Option>
                                <Option value="Chinese">Chinese</Option>
                                <Option value="Japanese">Japanese</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={15}>
                        <Form.Item label="Citizen ID" name="citizen_id" rules={[{ required: true, message: 'Please input correct ID!' }]}>
                            <Input type='number'></Input>
                        </Form.Item>
                    </Col>
                    <Col span={15}>
                        <Form.Item label="Gender" name="gender">
                            <Radio.Group>
                                <Radio value="male">Male</Radio>
                                <Radio value="female">Female</Radio>
                                <Radio value="unisex">Unisex</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={15}>
                        <Form.Item label="Mobile Phone" name="mobile_phone" rules={[{ required: true, message: 'Please input your mobile phone!' }]}>
                            <Input addonBefore={prefixSelector} type='number' />
                        </Form.Item>
                    </Col>
                    <Col span={15}>
                        <Form.Item label="Passport No." name="passport_number" rules={[{ required: true, message: 'Please input passport number!' }]}>
                            <Input type='number'></Input>
                        </Form.Item>
                    </Col>
                    <Col span={15}>
                        <Form.Item label="Expected Salary" name="expected_salary" rules={[{ required: true, message: 'Please input your expected salary!' }]}>
                            <Input type='number' style={{ width: "100%" }} suffix="THB" />
                        </Form.Item>
                        <Form.Item name='checked' initialValue='false'>
                        </Form.Item>
                    </Col>
                    <Col span={24} justify='end'>
                        <Row justify='end'>
                            <Button className="Button" type="primary" htmlType="submit">
                                Submit
                        </Button>
                        </Row>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default Forms

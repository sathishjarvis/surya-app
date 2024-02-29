import React, { useState } from 'react';
import '../App.css';
import { Layout, Menu, Col, Row, Tabs, TreeSelect, Table } from 'antd';
import { UserOutlined, AppstoreOutlined, ArrowUpOutlined, ArrowDownOutlined, MenuOutlined, ToolOutlined, WindowsOutlined, DatabaseOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import { Image, Button, Tag, notification } from 'antd';
import logo from '../Img/WoodsLand logo.png';

const { Content, Sider } = Layout;
const { SHOW_PARENT } = TreeSelect;
const onChange = (key) => {
    console.log(key);
};

const columns = [
    {
        title: 'SI.NO.',
        dataIndex: 'sino',
    },
    {
        title: 'Name of work', width: "600px",
        dataIndex: 'name',
    },
    {
        title: 'Work Code',
        dataIndex: 'age',
    },
    {
        title: 'Work Gategory',
        dataIndex: 'address',
    },
    {
        title: 'Status',
        dataIndex: 'status',
    },
    {
        title: 'Action',
        dataIndex: 'action',
    }
];
const data = [
    {
        key: '1',
        sino: 1,
        name: 'work name 105',
        age: 100000000105,
        address: 'Maintenance',
        status: <Tag color="cyan">new</Tag>,
        action: <div className='works-flow'><Tag color="#00FFFF">prepare Estimate</Tag><div style={{ paddingLeft: "50px" }}>:</div></div>

    },
    {
        key: '2',
        sino: 2,
        name: 'work name 106',
        age: 100000000106,
        address: 'Maintenance',
        status: <Tag color="cyan">new</Tag>,
        action: <div className='works-flow'><Tag color="#00FFFF">prepare Estimate</Tag><div style={{ paddingLeft: "50px" }}>:</div></div>
    },
    {
        key: '3',
        sino: 3,
        name: 'work name 107',
        age: 100000000107,
        address: 'Maintenance',
        status: <Tag color="volcano">Estimated</Tag>,
        action: <div className='works-flow'><Tag color="#ffaf7a">modify Estimate</Tag><div style={{ paddingLeft: "50px" }}>:</div></div>
    },
    {
        key: '4',
        sino: 4,
        name: 'work name 108',
        age: 100000000108,
        address: 'Maintenance',
        status: <Tag color="volcano">Estimated</Tag>,
        action: <div className='works-flow'><Tag color="#ffaf7a">modify Estimate</Tag><div style={{ paddingLeft: "50px" }}>:</div></div>
    },
    {
        key: '5',
        sino: 5,
        name: 'work name 109',
        age: 100000000109,
        address: 'Maintenance',
        status: <Tag color="cyan">new</Tag>,
        action: <div className='works-flow'><Tag color="#ffaf7a">modify Estimate</Tag><div style={{ paddingLeft: "50px" }}>:</div></div>
    }
];

function Landing() {
    const [value, setValue] = useState(['new', 'Estimated']);
    const onChanged = (newValue) => {
        console.log('onChange ', value);
        setValue(newValue);
    };

    const treeData = [
        {
            title: 'Node1',
            value: '0-0',
            children: [
                {
                    title: 'Child Node1',
                    value: '0-0-1',
                },
                {
                    title: 'Child Node2',
                    value: '0-0-2',
                },
            ],
        },
        {
            title: 'Node2',
            value: '0-1',
        },
    ];
    const treeDatas = [
        {
            title: 'Node1',
            value: '0-0',
            key: '0-0',
            children: [
                {
                    title: 'Child Node1',
                    value: '0-0-0',
                    key: '0-0-0',
                },
            ],
        },
        {
            title: 'Node2',
            value: '0-1',
            key: '0-1',
            children: [
                {
                    title: 'Child Node3',
                    value: '0-1-0',
                    key: '0-1-0',
                },
                {
                    title: 'Child Node4',
                    value: '0-1-1',
                    key: '0-1-1',
                },
                {
                    title: 'Child Node5',
                    value: '0-1-2',
                    key: '0-1-2',
                },
            ],
        },
    ];
    const tProps = {
        treeData,
        value,
        onChanged,
        treeCheckable: true,
        showCheckedStrategy: SHOW_PARENT,
        placeholder: 'Please select',

    };
    const items = [
        {
            key: '1',
            label: `Approval List(153)`,
            children: <div className='mytasked'><Space size="large">
                <TreeSelect
                    dropdownStyle={{
                        maxHeight: 400,
                        overflow: 'auto',
                    }}
                    treeData={treeDatas}
                    placeholder="All categories"
                    style={{ width: "250px" }}
                />
                <TreeSelect {...tProps} />
                <Button type="primary" onClick={openNotification}>Filter</Button>
            </Space>
            </div>,
        },
        {
            key: '2',
            label: `New Work Orders(67)`,
            children: ``,
        },
        {
            key: '3',
            label: `Estimates(67)`,
            children: `Content of Tab Pane 3`,
        }
    ]
    const [api, contextHolder] = notification.useNotification();
    function openNotification() {
        api.info({
            message: `Notification for filter`,
            description: 'Did you want to filter this content.',
        });
    }

    return (
        <div className='Dashboard'>
            {contextHolder}
            <Layout>
                <div className='side-bar'>
                    <Sider className='siders'>
                        <Menu defaultSelectedKeys={['1']} mode="inline" className='siders' >
                            <Menu.Item style={{ padding: "12px" }} key="1" icon={<MenuOutlined />} >
                            </Menu.Item>
                            <Menu.Item style={{ padding: "12px" }} key="2" icon={<AppstoreOutlined />}>
                            </Menu.Item>
                            <Menu.Item style={{ padding: "12px" }} key="3" icon={<UserOutlined />}>
                            </Menu.Item>
                            <Menu.Item style={{ padding: "12px" }} key="4" icon={<ToolOutlined />}>
                            </Menu.Item>
                            <Menu.Item style={{ padding: "12px" }} key="5" icon={<DatabaseOutlined />}>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                </div>
                <Layout className="site-layout">
                    <div className='header'>
                        <Image width={80} height={70} className='logo' src={logo} alt='logo' />
                        
                        {/* <Menu theme="light" defaultSelectedKeys={['1']} mode="horizontal" className='navbars' >
                            <Menu.Item style={{ padding: "10px 10px" }} key="1" icon={<PlusCircleOutlined />}home>
                            </Menu.Item>
                            <Menu.Item style={{ padding: "10px 0" }} key="2" icon={<AppstoreOutlined />}>
                            </Menu.Item>
                            <Menu.Item style={{ padding: "10px 0" }} key="3" icon={<BellOutlined />}>
                            </Menu.Item>
                            
                        </Menu> */}
                    </div>
                    <div style={{ margin: '0 35px' }}>
                        <Content>
                            <div className="site-layout-background name" style={{ minHeight: 5 }}>
                                <div>
                                    <h3>
                                        Hi Team, I'm Sathish.A<br />
                                        <span className='webber'>Web Developer</span>
                                    </h3>
                                </div>
                                <div>
                                    <Space direction="horizontal" size={12}>
                                        {/* <Form.Item
                                            name="residence"
                                            rules={[
                                                {
                                                    type: 'array',
                                                    required: true,
                                                    message: 'Please select your habitual residence!',
                                                },
                                            ]}
                                        >
                                            <Cascader options={residence} placeholder="location" style={{width:"200px"}}/>
                                        </Form.Item> */}
                                        {/* <Form.Item style={{ width: "220px" }} rules={[
                                            {
                                                required: true,
                                                message: 'please enter the date of birth'
                                            },
                                        ]} hasFeedback>
                                            <RangePicker />
                                        </Form.Item> */}
                                    </Space>
                                </div>
                            </div>
                            <hr className='abc'></hr>
                            <div style={{ display: "flex" }}>
                                <div className='bg-white'>
                                    <Row>
                                        <Col span={14}>
                                            <div className='works'>
                                                <div style={{ marginBottom: "5px", marginLeft: "30px" }}><h2>works overview</h2></div>
                                                <div style={{ marginLeft: "30px", marginRight: "76px" }}>
                                                    <Row span={14}>
                                                        <Col span={6}>
                                                            <div className='flex-verticle'>
                                                                <div className='icons1'>
                                                                    <ToolOutlined className='icon' size={60} />
                                                                </div>
                                                                <div className='letters'>
                                                                    <h5>Total work orders</h5>
                                                                    <p>258</p>
                                                                    <span><ArrowUpOutlined style={{ color: "#29da19" }} /> 2.7% higher</span>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col span={6}>
                                                            <div className='flex-verticle'>
                                                                <div className='icons2'>
                                                                    <WindowsOutlined className='icon' />
                                                                </div>
                                                                <div className='letters'>
                                                                    <h5>Estimated works</h5>
                                                                    <p>142</p>
                                                                    <span><ArrowDownOutlined style={{ color: "#eb2f96" }} />27% completed</span>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col span={6}>
                                                            <div className='flex-verticle'>
                                                                <div className='icons3'>
                                                                    <DatabaseOutlined className='icon' />
                                                                </div>
                                                                <div className='letters'>
                                                                    <h5>Approved works</h5>
                                                                    <p>116</p>
                                                                    <span><ArrowUpOutlined style={{ color: "#29da19" }} />35% Approved</span>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </div>
                                        </Col>
                                        <hr style={{ marginLeft: "-12px", marginRight: "5px", border: "1px solid lightgrey" }}></hr>
                                        <Col span={6}>
                                            <div className='workimage'>
                                                <div class="container">
                                                    <div class="donut-chart-block block">
                                                        <div class="donut-chart">
                                                            <div id="part1" class="portion-block"><div class="circle"></div></div>
                                                            <div id="part2" class="portion-block"><div class="circle"></div></div>
                                                            <div id="part3" class="portion-block"><div class="circle"></div></div>
                                                            <p class="center"></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <div className='progress-bar'>
                                                    <Progress type="circle" percent={100} size={[180, 20]} strokeWidth={20} strokeColor={{
                                                        '0': "#108ee9",
                                                        '50': "#87d068",
                                                        '100': "#f50"
                                                    }} />
                                                </div> */}
                                                <div className='work-cate-status'>
                                                    <Space direction='vertical' size={25}>
                                                        <div className='pievalue'><div className='piebtn1'></div>Estimated</div>
                                                        <div className='pievalue'><div className='piebtn2'></div>Aproved</div>
                                                        <div className='pievalue'><div className='piebtn3'></div>Pending</div>
                                                    </Space>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className='bg-witing'>
                                    <Col span={6}>
                                        <h2 style={{ paddingLeft: "70px" }}>work category</h2>
                                        <div className='workimage2'>
                                            <div class="container">
                                                <div class="donut-chart-block block">
                                                    <div class="donut-chart">
                                                        <div id="part1" class="portion-block"><div class="circle"></div></div>
                                                        <div id="part2" class="portion-block"><div class="circle"></div></div>
                                                        <div id="part3" class="portion-block"><div class="circle"></div></div>
                                                        <p class="center"></p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className='progress-bar'>
                                                    <Progress type="circle" percent={100} size={[180, 20]} strokeWidth={20} strokeColor={{
                                                        '0': "#108ee9",
                                                        '50': "#87d068",
                                                        '100': "#f50"
                                                    }} />
                                                </div> */}
                                            <div className='work-cate-status'>
                                                <Space direction='vertical' size={25}>
                                                    <div className='pievalue'><div className='piebtn1'></div>Estimated</div>
                                                    <div className='pievalue'><div className='piebtn2'></div>Aproved</div>
                                                    <div className='pievalue'><div className='piebtn3'></div>Pending</div>
                                                </Space>
                                            </div>
                                        </div>
                                    </Col>

                                    {/* <Col>
                                        <div className='workimage2'>
                                            <div className='progress-bar'>
                                                <div class="container">
                                                    <div class="donut-chart-block block">
                                                        <div class="donut-chart place">
                                                            <div id="part1" class="portion-block"><div class="circle"></div></div>
                                                            <div id="part2" class="portion-block"><div class="circle"></div></div>
                                                            <div id="part3" class="portion-block"><div class="circle"></div></div>
                                                            <p class="center center2"></p>
                                                        </div>
                                                    </div>
                                                </div> */}
                                    {/* <Progress type="circle" percent={100} size={[180, 20]} strokeWidth={20} strokeColor={{
                                                    '0%': "#108ee9",
                                                    '50%': "#87d068",
                                                    '100%': "#f50"
                                                }} /> */}
                                    {/* </div>
                                            <div className='work-cate-status2'>
                                                <Space direction='vertical' size={25}>
                                                    <div className='pievalue'><div className='piebtn1'></div>Estimated</div>
                                                    <div className='pievalue'><div className='piebtn2'></div>Aproved</div>
                                                    <div className='pievalue'><div className='piebtn3'></div>Pending</div>
                                                </Space>
                                            </div>
                                        </div>
                                    </Col> */}
                                </div>
                            </div>
                        </Content>
                        <div className='mytask'>
                            <div>
                                <h2>My Task</h2>
                            </div>
                            <div className='bg-whited'>
                                <Tabs defaultActiveKey="1" items={items} onChange={onChange} style={{ marginLeft: "30px" }} tabBarExtraContent={<div className='right'>showing 1 - 10 of 153</div>} />
                            </div>
                        </div>
                        <div className='mytask'>
                            <Table columns={columns} dataSource={data} size="normal" />
                        </div>
                    </div>
                </Layout>
            </Layout>
        </div>
    );
}

export default Landing;

/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// reactstrap components
import React, { useState } from 'react';
import {
    Card,
    CardFooter,
    Pagination,
    PaginationItem,
    PaginationLink,
    Table,
    Row,
    Form,
    FormGroup,
    InputGroupAddon,
    InputGroupText,
    Input,
    InputGroup, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Col, List, Button, NavItem, NavLink, Nav, TabContent, TabPane
} from "reactstrap";
import Switch from "react-switch";
// core components
import Header from "components/Headers/Header.js";
import { GrFormAdd } from "react-icons/gr";
import classnames from 'classnames';

const Events = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [events, setEvents] = useState(
        [
            { stt: '1', name_event: 'Nhận bánh trung thu...', host: 'Đỗ Hữu Duy', event_date: '21/10/1999', rate: '10', total_user: '10', feedback: '10', status: 'Đang diễn ra', display: 'false' },
            { stt: '2', name_event: 'Nhận bánh trung thu...', host: 'Đỗ Hữu Duy', event_date: '21/10/1999', rate: '10', total_user: '10', feedback: '10', status: 'Đang diễn ra', display: 'false' },
            { stt: '3', name_event: 'Nhận bánh trung thu...', host: 'Đỗ Hữu Duy', event_date: '21/10/1999', rate: '10', total_user: '10', feedback: '10', status: 'Đang diễn ra', display: 'false' },
            { stt: '4', name_event: 'Nhận bánh trung thu...', host: 'Đỗ Hữu Duy', event_date: '21/10/1999', rate: '10', total_user: '10', feedback: '10', status: 'Đang diễn ra', display: 'false' },
            { stt: '5', name_event: 'Nhận bánh trung thu...', host: 'Đỗ Hữu Duy', event_date: '21/10/1999', rate: '10', total_user: '10', feedback: '10', status: 'Đang diễn ra', display: 'false' },
            { stt: '6', name_event: 'Nhận bánh trung thu...', host: 'Đỗ Hữu Duy', event_date: '21/10/1999', rate: '10', total_user: '10', feedback: '10', status: 'Đang diễn ra', display: 'false' }
        ]
    );

    const toggle = () => setDropdownOpen(prevState => !prevState);

    const [activeTab, setActiveTab] = useState('1');

    const toggleTwo = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    const handleSwitch = (item) => setEvents(
        function (events) {
            const index = events.indexOf(item);
            return [
                ...events.slice(0, index),
                {
                    ...item,
                    display: !item.display
                },
                ...events.slice(index + 1),
            ]
        });

    return (
        <>
            <Header />
            {/* Page content */}
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggleTwo('1'); }}
                    >
                        DANH SÁCH EVENT
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggleTwo('2'); }}
                    >
                        LIST FEEDBACK
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row style={{ marginBottom: "25px" }}>
                        <Col sm="11">
                        </Col>
                        <Col sm="1">
                            <Button style={{ background: "black", color: "white", display: "flex" }}><GrFormAdd color="white" stroke="rgb(243 234 234)" style={{ fontSize: "xx-large" }} /><span style={{ fontSize: "18px" }}>Add</span></Button>{' '}
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="9  ">
                            <Form>
                                <Row form>
                                    <Col sm={6}>
                                    </Col>
                                    <Col sm={2}>
                                        <FormGroup>
                                            <InputGroup className="input-group-alternative">
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="fas fa-search" />
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input placeholder="Tên Event" type="text" />
                                            </InputGroup>
                                        </FormGroup>
                                    </Col>
                                    <Col sm={2}>
                                        <FormGroup>
                                            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                                                <DropdownToggle caret>
                                                    Trạng thái
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem>Foo Action</DropdownItem>
                                                    <DropdownItem>Bar Action</DropdownItem>
                                                    <DropdownItem>Quo Action</DropdownItem>
                                                </DropdownMenu>
                                            </Dropdown>
                                        </FormGroup>
                                    </Col>
                                    <Col sm={2}>
                                        <FormGroup>
                                            <Input
                                                type="date"
                                                name="date"
                                                id="exampleDate"
                                                placeholder="date placeholder"
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Form>
                            {/* Table */}
                            <Row>
                                <div className="col">
                                    <Card className="shadow">
                                        <Table className="align-items-center table-flush" responsive>
                                            <thead className="thead-light">
                                                <tr>
                                                    <td className="title">STT</td>
                                                    <td className="title">Tên event</td>
                                                    <td className="title">Host</td>
                                                    <td className="title">Ngày tổ chức</td>
                                                    <td className="title">Rate trung bình</td>
                                                    <td className="title">Số người feedback</td>
                                                    <td className="title">Số người đăng ký</td>
                                                    <td className="title">Trạng thái</td>
                                                    <td className="title">Hiển thị</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    events.length && events.map((item, index) =>
                                                        <tr>
                                                            <td>{item.stt}</td>
                                                            <td>{item.name_event}</td>
                                                            <td>{item.host}</td>
                                                            <td>{item.event_date}</td>
                                                            <td>{item.rate}</td>
                                                            <td>{item.feedback}</td>
                                                            <td>{item.total_user}</td>
                                                            <td>{item.status}</td>
                                                            <td><Switch
                                                                key={index}
                                                                checked={item.display}
                                                                onChange={() => handleSwitch(item)}
                                                                onColor="#86d3ff"
                                                                onHandleColor="#2693e6"
                                                                handleDiameter={30}
                                                                uncheckedIcon={false}
                                                                checkedIcon={false}
                                                                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                                                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                                                height={20}
                                                                width={48}
                                                                className="react-switch"
                                                                id="material-switch"
                                                            /></td>
                                                        </tr>
                                                    )
                                                }
                                            </tbody>
                                        </Table>
                                        <CardFooter className="py-4">
                                            <nav aria-label="...">
                                                <Pagination
                                                    className="pagination justify-content-end mb-0"
                                                    listClassName="justify-content-end mb-0"
                                                >
                                                    <PaginationItem className="disabled">
                                                        <PaginationLink
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}
                                                            tabIndex="-1"
                                                        >
                                                            <i className="fas fa-angle-left" />
                                                            <span className="sr-only">Previous</span>
                                                        </PaginationLink>
                                                    </PaginationItem>
                                                    <PaginationItem className="active">
                                                        <PaginationLink
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}
                                                        >
                                                            1
                                                        </PaginationLink>
                                                    </PaginationItem>
                                                    <PaginationItem>
                                                        <PaginationLink
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}
                                                        >
                                                            2 <span className="sr-only">(current)</span>
                                                        </PaginationLink>
                                                    </PaginationItem>
                                                    <PaginationItem>
                                                        <PaginationLink
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}
                                                        >
                                                            3
                                                        </PaginationLink>
                                                    </PaginationItem>
                                                    <PaginationItem>
                                                        <PaginationLink
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}
                                                        >
                                                            <i className="fas fa-angle-right" />
                                                            <span className="sr-only">Next</span>
                                                        </PaginationLink>
                                                    </PaginationItem>
                                                </Pagination>
                                            </nav>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </Row>
                        </Col>
                        <Col sm="3">
                            <List type="unstyled" style={{ color: "black" }}>
                                <li>Số sự kiện <span style={{ right: "0", position: "absolute" }}>12</span></li>
                                <li>Số người đăng ký sự kiện <span style={{ right: "0", position: "absolute" }}>120</span></li>
                                <li>Rate trung bình <span style={{ right: "0", position: "absolute" }}>3.6</span></li>
                                <li>Số feedback <span style={{ right: "0", position: "absolute" }}>345</span></li>
                            </List>
                            <Form>
                                <FormGroup tag="fieldset">
                                    <List type="unstyled" style={{ color: "black" }}>
                                        <li><h2>Phân loại</h2></li>
                                        <li><Input type="radio" name="radio1" checked />{' '} <span style={{ marginLeft: "10px" }}>Tất cả</span></li>
                                        <li><Input type="radio" name="radio1" />{' '} <span style={{ marginLeft: "10px" }}>Social</span></li>
                                        <li><Input type="radio" name="radio1" />{' '} <span style={{ marginLeft: "10px" }}>Professional</span></li>
                                        <li><Input type="radio" name="radio1" />{' '} <span style={{ marginLeft: "10px" }}>Education</span></li>
                                    </List>
                                </FormGroup>
                                <FormGroup tag="fieldset">
                                    <List type="unstyled" style={{ color: "black" }}>
                                        <li><h2>Trạng Thái</h2></li>
                                        <li><Input type="radio" name="radio2" checked />{' '} <span style={{ marginLeft: "10px" }}>Tất cả</span></li>
                                        <li><Input type="radio" name="radio2" />{' '} <span style={{ marginLeft: "10px" }}>Đang diễn ra</span></li>
                                        <li><Input type="radio" name="radio2" />{' '} <span style={{ marginLeft: "10px" }}>Sắp diễn ra</span></li>
                                        <li><Input type="radio" name="radio2" />{' '} <span style={{ marginLeft: "10px" }}>Đã diễn ra</span></li>
                                    </List>
                                </FormGroup>
                            </Form>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    AAAA
                </TabPane>
            </TabContent>
        </>
    );
};

export default Events;

import { bindActionCreators } from "redux";
import React, { createRef } from 'react';
import { Form, Input, Button, Checkbox, message, Modal, InputNumber, Col, Row, Card } from 'antd';

/*
Order shipping info is Form1
package info is Form2
Deliver option is Delivered
Tracking num and congratulation is Tracking
OrderF contains the logic of conditional rendering
I tested my code by render OrderF in index.js
*/


class OrderF extends React.Component {
  state = {
    displayModal: 0
  }
 
  handleCancel = () => {
    this.setState({
      displayModal: false,
    })
  }
 
  changedOnClicked = () => {
    this.setState({
      displayModal: true,
    })
  }

  handleIncrement = () => {
    this.setState({ displayModal: this.state.displayModal + 1 })
    console.log("------", this.state.displayModal)
  }

  handleDecrease = () => {
    this.setState({ displayModal: this.state.displayModal - 1})
  }

  renderSwitch() {
    if(this.state.displayModal === 0) {
      return <Form1/>
    }
    if(this.state.displayModal === 1){
      return <Form2/>
    }
    if(this.state.displayModal === 2){
      return <Delivered/>
    }
    if(this.state.displayModal === 3){
      return <Tracking/>
    }

  }
 
  onFinish = (data) => {
  }

    render() { 
        return ( 
          <React.Fragment>
            {/* <button onClick={this.changedOnClicked}>JUMP</button>
                {this.state.displayModal==true ? <Delivered /> : <Tracking /> } */}
            {/* <div>
            {this.renderSwitch()}
            </div> */}
            {/* <Form1 /> */}
            {/* <Form2 /> */}
            <Delivered />
            {/* <Tracking /> */}
          </React.Fragment>  
        );
    }
}
 
const layout = {
  labelCol: {
    span: 18,
  },
  wrapperCol: {
    span: 100,
  },
};

class Form1 extends React.Component {
  render() { 
    return ( 
      <React.Fragment>
          <Form 
            //name="form1"
            initialValues={{ remember: true }}
            name="form1"
            // onFinish={this.onFinish}
            preserve={false}
          >

            <Form.Item
              label={`Name`}
              name="Name"
              rules={[{ required: true, message: 'Please input your Name!' }]}
            >
              <Input placeholder="Name" /> 
            </Form.Item>

            <Form.Item
              label="Address"
              name="Address"
              rules={[{ required: true, message: 'Please input your Address!'}]}
              // margin-right='10px'
            >
              <Input
                // type={this.state.displayPass}
                // id="myInput"
                placeholder="Address"
              />
            </Form.Item> 

            <Form.Item
              label="Zip Code"
              name="Zip-Code"
              rules={[{ required: true, message: 'Please input your Zip Code!', type: 'number'}]}
            >
              <Input
                placeholder="Zip"
              />
            </Form.Item>

            <Form.Item
              label="Phone"
              name="Phone"
              rules={[{ required: true, message: 'Please input your Phone Number!' }]}
            >
              <Input
                placeholder="Phone"
              />
            </Form.Item>

            <Form.Item
              label="Email"
              name="Email"
              rules={[{ required: false, message: 'Please input your Email!', type: 'email'  }]}
            >
              <Input
                placeholder="Email"
              />
            </Form.Item>

            <Row>
            <Col span={1}>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 0 }}>
             <Button type="text" htmlType="submit" shape="round">
             &nbsp;  Back  &nbsp;
            </Button>
            </Form.Item>
            </Col>
            <Col span={1}>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 0 }}>
             <Button type="primary" htmlType="submit" shape="round" onClick={this.handleIncrement}>
             Continue
            </Button>
            </Form.Item>
            </Col>
            </Row>
            </ Form>
            </React.Fragment>
     );
  }
}

class Form2 extends React.Component {
  state = {  }
  render() { 
    return ( 
      <React.Fragment>
          <Form
            //bname="form2"
            initialValues={{ remember: true }}
            // onFinish={this.onFinish}
            preserve={false}
          >           
            <Form.Item
              label="Length"
              name="Length"
              rules={[{ required: true, message: 'Please input Length!' }]}
            >
              <Row>
              <Col span={4}>
              <Input placeholder="Length" /> 
              </Col>
              <Col span={4}>
              <text> &nbsp;&nbsp; in</text>
              </Col>
              </Row>
            </Form.Item>           
            <Form.Item
              label="Width"
              name="Width"
              rules={[{ required: true, message: 'Please input your Width!' }]}
            >
              <Row>
              <Col span={4}>
              <Input
                // type={this.state.displayPass}
                // id="myInput"
                placeholder="Width"
              />
              </Col>
              <Col span={4}>
              <text> &nbsp;&nbsp; in</text>
              </Col>
              </Row>
            </Form.Item>  
            <Form.Item
                label="Height"
                name="Height"
                rules={[{ required: true, message: 'Please input Height!' }]}
              >
                <Row>
                <Col span={4}>
                <Input
                  placeholder="Height"
                />
                </Col>
                <Col span={4}>
                <text> &nbsp;&nbsp; in</text>
                </Col>
                </Row>
              </Form.Item>             
             <Form.Item
                  label="Declared Value"
                  name="Declared-Value"
                  rules={[{ required: false, message: 'Please input Declared Value!' }]}
                >
                  <Row>
                  <Col span={8}>
                  <Input
                    placeholder="Declared Value"
                  />
                  </Col>
                  <Col span={4}>
                  <text> &nbsp;&nbsp; usd</text>
                  </Col>              
                  </Row>
              </Form.Item>
             <Form.Item
                  label="Weight"
                  name="Weight"
                  rules={[{ required: true, message: 'Please input Weight!' }]}
                >
                  <Row>
                  <Col span={8}>
                  <Input
                    placeholder="Declared Value"
                  />
                  </Col>
                  <Col span={4}>
                  <text> &nbsp;&nbsp; lbs</text>
                  </Col>                
                  </Row>
              </Form.Item>
            <Row>
            <Col span={1}>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 0 }}>
             <Button type="text" htmlType="submit" shape="round" onClick={this.handleDecrease}>
             &nbsp;  Back  &nbsp;
            </Button>
            </Form.Item>
            </Col>
            <Col span={1}>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 0 }}>
             <Button type="primary" htmlType="submit" shape="round" onClick={this.handleIncrement}>
             Continue
            </Button>
            </Form.Item>
            </Col>
            </Row>
            </Form>
            </React.Fragment>
     );
  }
}

class PaymentIndo extends React.Component {
  state = { iamgeUrl:"https://lh3.googleusercontent.com/deWOogd8V6YRFieK0ccV3yi-m20ER2kpydIvq6CVmxqTMrH1sV7R0EPt-1O0lYmSOjyukg=s113" }
  render() { 
    return ( 
      <React.Fragment>
        <img style={{borderRadius:"10px"}} src={this.state.iamgeUrl} width="246px" height="184px" shape="round" alt="" />
      </React.Fragment>
     );
  }
}
 
const { Meta } = Card;

class Delivered extends React.Component {
  render() { 
    return ( 
      <React.Fragment>
        <Row type="flex" gutter={16}>
        <Col span={4} style={{paddingLeft:'10px'}}>
        <Card
          hoverable
          style={{ width: 240, textAlign:"center", margin:'20px'  }}
          title="Fastest"
          cover={<img style={{paddingLeft:"10%", paddingTop:"7.5%", width:"90%", height:"90%"}} alt="example" src="https://lh3.googleusercontent.com/dSpbyX5r8iSOXzk5IW0fm8HBaYgCKj7BUwI_X7WHp91saHifVPsYGjFja0Ek-w70dKAaoQ=s85" />}
        >
          <br/>
          <text> Drone From Station A</text>
        <Meta style={{textAlign:"center"}} title="$50" description="Same Day Shipping"  />
      </Card>
        </Col>
        <Col span={3} style={{paddingLeft:'10px'}}>
      <Card
          hoverable
          style={{ width: 240, textAlign:"center", margin:'20px' }}
          title="Lowest Cost"
          cover={<img style={{paddingLeft:"10%", paddingTop:"7.5%", width:"90%", height:"90%"}} alt="example" src="https://lh3.googleusercontent.com/-AS-HjbqhzSgltvc8uWkJVRmVMZm1ayCn78do3UVYJI0Ckp2zoSEc-AM9BzvotATvhgNHg=s85" />}
        >

        <Meta style={{textAlign:"center"}} title="$25" description="Next Day Shipping"  />
      </Card>
       </Col>
      </Row>
      &nbsp; &nbsp;
      <Row>
            <Col span={2} style={{paddingLeft:'20px'}}>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 0 }}>
             <Button type="text" htmlType="submit" shape="round" onClick={this.handleDecrease}>
             &nbsp;  Back  &nbsp;
            </Button>
            </Form.Item>
            </Col>
            &nbsp;   &nbsp;
            <Col span={1} style={{paddingLeft:'20px'}}>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 0 }}>
             <Button type="primary" htmlType="submit" shape="round"  onClick={this.handleIncrement}>
             Continue
            </Button>
            </Form.Item>
            </Col>  
      </Row>     
      </React.Fragment>
     );
  }
}


class Tracking extends React.Component {
  render() { 
    return ( 
      <React.Fragment>
      <h2> Thank you! Your order has been palced. </h2>
      <br/>
      <br/>
      <Col span={20} offset={3}>
      <Row>
      <Col span={1}>
      <img width='30em' height='30em' src={"https://cdn1.iconfinder.com/data/icons/logistics-delivery-set-3/512/28-512.png"} alt="" />
      </Col>
      <h3 style={{color:'#100B0B'}}>Your tracking number is</h3>
      </Row>
      <br/> 
      <Input placeholder="Tracking Number"></Input>
      <br/>
      <br/>
      <Button type="text" htmlType="submit" shape="round">
            Shpping again
      </Button>
      &nbsp; &nbsp; &nbsp;
      <Button type="text" htmlType="submit" shape="round">
            Tracking
      </Button>
      &nbsp; &nbsp; &nbsp;
      <Button type="primary" htmlType="submit" shape="round" style={{ background: "#215899", borderColor: "black" }}>
            Back to home
      </Button>
      </Col>
      </React.Fragment>
     );
  }
}
 

export default OrderF;
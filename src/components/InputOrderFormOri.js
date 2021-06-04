// import { bindActionCreators } from "redux";
import React, { createRef } from 'react';
import { Form, Input, Button, Checkbox, message, Modal, InputNumber, Col, Row, Card, Statistic, Icon, Alert } from 'antd';
import 'antd/dist/antd.css';
import FormItem from 'antd/lib/form/FormItem';
import { PlusOutlined, ReloadOutlined } from '@ant-design/icons';
import { render } from '@testing-library/react';

const { TextArea } = Input;
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
    displayModal: 0,
    Name:undefined,
    Address:undefined,
    Zip:undefined,
    Phone:undefined,
    Email:undefined,
    Length:undefined,
    Width:undefined,
    Height:undefined,
    Declared:undefined,
    Weight:undefined
  }

  constructor() {
    super();
    this.ThehandleChange1 = this.ThehandleChange1.bind(this);
    this.ThehandleChange2 = this.ThehandleChange2.bind(this);
    this.ThehandleChange3 = this.ThehandleChange3.bind(this);
    this.ThehandleChange4 = this.ThehandleChange4.bind(this);
    this.ThehandleChange5 = this.ThehandleChange5.bind(this);
    this.ThehandleChange6 = this.ThehandleChange6.bind(this);
    this.ThehandleChange7 = this.ThehandleChange7.bind(this);
    this.ThehandleChange8 = this.ThehandleChange8.bind(this);
    this.ThehandleChange9 = this.ThehandleChange9.bind(this);
    this.ThehandleChange10 = this.ThehandleChange10.bind(this);
  }

  ThehandleChange1(event) {
    // console.log(event.target.value);
    let NameChanged = event.target.value;
    // console.log(this);
    this.setState({
      Name: NameChanged
    })
    console.log(event.target.value)
    // consule.log(this.state.Address)
  }

  ThehandleChange2(event) {
    // console.log(event.target.value);
    let AddressChanged = event.target.value;
    // console.log(this);
    this.setState({
      Address:AddressChanged
    })
    console.log(event.target.value)
  }

  ThehandleChange3(event) {
    // console.log(event.target.value);
    let ZipChanged = event.target.value;
    // console.log(this);
    this.setState({
      Zip:ZipChanged
    })
   console.log(event.target.value)
  }

  ThehandleChange4(event) {
    // console.log(event.target.value);
    let PhoneChanged = event.target.value;
    // console.log(this);
    this.setState({
      Phone:PhoneChanged
    })
    console.log(event.target.value)
  }

  ThehandleChange5(event) {
    // console.log(event.target.value);
    let EmailChanged = event.target.value;
    // console.log(this);
    this.setState({
      Email:EmailChanged
    })
    console.log(event.target.value)
  }

  ThehandleChange6(event) {
    // console.log(event.target.value);
    let LengthChanged = event.target.value;
    // console.log(this);
    this.setState({
      Length:LengthChanged
    })
    console.log(event.target.value)
  }

  ThehandleChange7(event) {
    // console.log(event.target.value);
    let WidthChanged = event.target.value;
    // console.log(this);
    this.setState({
      Width:WidthChanged
    })
    console.log(event.target.value)
  }

  ThehandleChange8(event) {
    // console.log(event.target.value);
    let HeightChanged = event.target.value;
    // console.log(this);
    this.setState({
      Height:HeightChanged
    })
    console.log(event.target.value)
  }

  ThehandleChange9(event) {
    // console.log(event.target.value);
    let DeclaredChanged = event.target.value;
    // console.log(this);
    this.setState({
      Declared:DeclaredChanged
    })
    console.log(event.target.value)
  }

  ThehandleChange10(event) {
    // console.log(event.target.value);
    let WeightChanged = event.target.value;
    // console.log(this);
    this.setState({
      Weight:WeightChanged
    })
    console.log(event.target.value)
  }

  handleIncrement = () => {
    const displayModal = this.state.displayModal + 1
    this.setState({displayModal})
    // console.log(this.state.Phone)
  }

  handleDecrease = () => {
    const displayModal = this.state.displayModal - 1
    this.setState({displayModal})
    // console.log(displayModal)
  }

  renderSwitch() {
    if(this.state.displayModal === 0) {
      return <Form1
       onIncrement={this.handleIncrement}
       onDecrease={this.handleDecrease}
       handleChange1={this.ThehandleChange1}
       handleChange2={this.ThehandleChange2}
       handleChange3={this.ThehandleChange3}
       handleChange4={this.ThehandleChange4}
       handleChange5={this.ThehandleChange5}
       />
    }
    if(this.state.displayModal === 1){
      return <Form2
      onIncrement={this.handleIncrement}
       onDecrease={this.handleDecrease}
       handleChange6={this.ThehandleChange6}
       handleChange7={this.ThehandleChange7}
       handleChange8={this.ThehandleChange8}
       handleChange9={this.ThehandleChange9}
       handleChange10={this.ThehandleChange10}/>
    }
    if(this.state.displayModal === 2){
      return <Delivered
      onIncrement={this.handleIncrement}
       onDecrease={this.handleDecrease}/>
    }
    if(this.state.displayModal === 3){
      return <EditIndo
      onIncrement={this.handleIncrement}
       onDecrease={this.handleDecrease}
       />
    }
    if(this.state.displayModal === 4){
      return <PaymentIndo
      onIncrement={this.handleIncrement}
       onDecrease={this.handleDecrease}
       />
    }
    if (this.state.displayModal === 5) {
      <Tracking />
    }
  }
 
  onFinish = (data) => {
  }

    render() { 
        return ( 
          <React.Fragment>
            {this.renderSwitch()}
            
            {//<PaymentIndo />
            }
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


  handleButtonClicked() {
    console.log(this.props.Name);
  }

  render() { 
    return ( 
      <React.Fragment>
          <Form 
            //name="form1"
            initialValues={{ remember: true }}
            name="form1"
            // onFinish={this.onFinish}
            preserve={true}
            onSubmitCapture={this.props.onIncrement}
          >

            <Form.Item
              label={`Name`}
              name="Name"
              rules={[{ required: true, message: 'Please input your Name!' }]}
            >
              <Input placeholder="Name" required value={this.props.Name} onChange={this.props.handleChange1.bind(this)} /> 
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
                placeholder="Address"  required value={this.props.Address} onChange={this.props.handleChange2.bind(this) }
              />
            </Form.Item> 

            <Form.Item
              label="Zip Code"
              name="Zip-Code"
              rules={[{ required: true, message: 'Please input your Zip Code!'}]}
            >
              <Input
                placeholder="Zip" required value={this.props.Zip} onChange={this.props.handleChange3.bind(this)}
              />
            </Form.Item>

            <Form.Item
              label="Phone"
              name="Phone"
              rules={[{ required: true, message: 'Please input your Phone Number!' }]}
              
            >
              <Input
                placeholder="Phone" required  value={this.props.Phone} onChange={this.props.handleChange4.bind(this)}
              />
            </Form.Item>

            <Form.Item
              label="Email"
              name="Email"
              rules={[{ required: false, message: 'Please input your Email!', type: 'email'  }]}
            >
              <Input
                placeholder="Email"  value={this.props.Email} onChange={this.props.handleChange5.bind(this)}
              />
            </Form.Item>

            <Row>
            &nbsp; &nbsp; <text style={{color:"red"}}>*</text> &nbsp;&nbsp;   <text>  this is required</text>
            </Row>
            &nbsp; 

            <Row>
            <Col span={1}>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 0 }}>
             <Button type="text" //htmlType="cancel"
              shape="round" >
             &nbsp;  Back  &nbsp;
            </Button>
            </Form.Item>
            </Col>
            <Col span={1}>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 0 }}>
             <Button type="primary" htmlType="submit" shape="round"
             >
             Continue
            </Button>
            </Form.Item>
            </Col>
            </Row>
            
            </ Form>
            <button onClick={() => this.handleButtonClicked()}>
          Save Record
            </button>
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
              <Input placeholder="Length" required value={this.props.Length} onChange={this.props.handleChange6.bind(this)}/> 
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
                value={this.props.Width} onChange={this.props.handleChange7.bind(this)}
                placeholder="Width"
                required
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
                  placeholder="Height" required value={this.props.Height} onChange={this.props.handleChange8.bind(this)}
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
                    placeholder="Declared Value"  value={this.props.Declared} onChange={this.props.handleChange9.bind(this)}
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
                    placeholder="Weight" required value={this.props.Weight} onChange={this.props.handleChange10.bind(this)}
                  />
                  </Col>
                  <Col span={4}>
                  <text> &nbsp;&nbsp; lbs</text>
                  </Col>                
                  </Row>
              </Form.Item>
            
             <Row>
            &nbsp; &nbsp; <text style={{color:"red"}}>*</text> &nbsp;&nbsp;   <text>  this is required</text>
            </Row>
            &nbsp;
            
            <Row>
            <Col span={1}>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 0 }}>
             <Button type="text" htmlType="submit" shape="round" onClick={this.props.onDecrease}>
             &nbsp;  Back  &nbsp;
            </Button>
            </Form.Item>
            </Col>
            <Col span={1}>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 0 }}>
             <Button type="primary" htmlType="submit" shape="round" onClick={this.props.onIncrement} > 
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

class EditIndo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theAddress : this.props.Address,
      thePhone : this.props.Phone,
      theEmail : this.props.Email,
      length : this.props.Length,
      width : this.props.Width,
      height : this.props.Height,
      Declared : this.props.Declared,
      Weight : this.props.Weight
      }
    }

    render() { 
      return ( <React.Fragment>
        <Row align="middle">
          <Col span={18}>
          <Row justify="space-between"
        >
          <Col span={6}>
          <h3>Shipping From</h3>
          </Col>
          <Col // span={6}
          >
          <Button type="primary" shape="round" size={'small'} //onClick={this.showDrawer} 
          style={{ background: "#215899", borderColor: "black" }}
          >
            <PlusOutlined /> Edit
          </Button>
          </Col>
        </Row>
        <TextArea allowClear rows={4} defaultValue={"发送地的信息"}
        />
        <br/>
        <br/>
        <Row justify="space-between">
        <Col span={6}
        >
          <h3>Shipping To</h3>
          </Col>
          <Col //span={6}
          >
          <Button type="primary" shape="round" size={'small'} //onClick={this.showDrawer} 
          style={{ background: "#215899", borderColor: "black" }}
          >
            <PlusOutlined /> Edit
          </Button>
          </Col>
        </Row>
        <TextArea allowClear rows={4} defaultValue={this.state.theAddress + ", " + this.state.theEmail + ", " + this.state.thePhone + " (客户地址)"}
        />
        <br/>
        <br/>
        <Row justify="space-between">
        <Col span={6}>
          <h3>Package</h3>
          </Col>
          <Col //span={6}
          >
          <Button type="primary" shape="round" size={'small'} //onClick={this.showDrawer} 
          style={{ background: "#215899", borderColor: "black" }}
          >
            <PlusOutlined /> Edit
          </Button>
          </Col>
        </Row>
        <TextArea allowClear rows={1} defaultValue={this.state.length + "' x " + this.state.width + "' x " + this.state.height + ", " + this.state.Declared + ", " + this.state.Weight + " lbs" + " (package大小)"}
        />
        <br/>
        <br/>
        <Row justify="space-between">
        <Col span={6}
        >
          <h3>Pick up</h3>
          </Col>
          <Col // span={6}
          >
          <Button type="primary" shape="round" size={'small'} //onClick={this.showDrawer} 
          style={{ background: "#215899", borderColor: "black" }}
          >
            <PlusOutlined /> Edit
          </Button>
          </Col>
        </Row>
        <TextArea allowClear rows={2} defaultValue={"还没有信息"}
        />
        <br/>
        <br/>
          </Col>

          <Col span={4} style={{paddingLeft:'10px'}}>
            <Row >
              <Col span={3} offset={15}>
            <Button type="primary" shape="round" size={'small'} //onClick={this.showDrawer} 
              style={{ background: "#215899", borderColor: "black" }}
            >
            <PlusOutlined /> Edit
            </Button>
            </Col>
            </Row>
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

        </Row>

        &nbsp; &nbsp; &nbsp;
        <Button type="text" htmlType="submit" shape="round" style={{borderColor: "#215899" }}>
        &nbsp;  Back &nbsp;
        </Button>
        &nbsp; &nbsp; &nbsp;
        <Button type="primary" htmlType="submit" shape="round" style={{ background: "#215899", borderColor: "black" }}>
              Place Order
        </Button>
        </React.Fragment> );
    }
  }
 


class PaymentIndo extends React.Component {
  state = { 
    iamgeUrl:"https://lh3.googleusercontent.com/deWOogd8V6YRFieK0ccV3yi-m20ER2kpydIvq6CVmxqTMrH1sV7R0EPt-1O0lYmSOjyukg=s113",
    cardLastFour:"0000",
    timer: {}
  }

  constructor() {
    
  }

    render() { 
    return ( 
      <React.Fragment>
        <Row>
        <img style={{border:"5px solid #215899" ,borderRadius:"10px", opacity:"0.8", position:"relative", marginLeft:"5em", marginTop:"5em"}} src={this.state.iamgeUrl} width="369px" height="276px" shape="round" alt="" />
        <Col>
        <h3 style={{color:"gray", fontWeight:"normal", fontSize:"1.3em" , paddingLeft:"2em", position:"relative", marginLeft:"5em", marginTop:"5em"}}>My SmartExpress Card({this.state.cardLastFour})</h3>
        <Statistic value={100.00} precision={2} prefix="$" style={{ fontFamily:"Trebuchet MS", paddingLeft:"2em", position:"relative", fontWeight:"600", marginLeft:"7em", marginTop:"3em"}} />
        <h3 style={{color:"gray", fontWeight:"normal", fontSize:"1.3em" , paddingLeft:"2em", position:"relative", marginLeft:"5em"}}>as of {this.state.timer}m ago</h3>
        </Col>
        </Row>
        <Row style={{position:"relative", marginLeft:"5em", marginTop:"5em"}}>
        <h3> Reload Link </h3>
        <TextArea style={{border:"2px solid black" ,borderRadius:"8px", opacity:"0.8"}}  rows={1} defaultValue={"www.smartexpress.com/cards/reload"} />   
        </Row>
        <Row style={{position:"relative", marginLeft:"5em", marginTop:"4em"}}>
        <Col span={5}>
        <Alert style={{border:"2px solid black" ,borderRadius:"18px", opacity:"0.8", textAlign:"center", height:"4em", marginTop:"2em"}}  message="Your balance is too low for this order" type="info" />
        </Col>
        <Col span={16} style={{position:"relative", marginLeft:"5em"}} offset={10}>
        <section style={{display:"flex", alignItems: "baseline"}}>
        <h3 style={{fontSize:"1.5em"}}>Subtotal</h3>
        <span style={{overflow:"hidden", flex:"1"}}>________________________________________________________________________________________________________________________________________________________________________________________________________________________________</span>
        <h3 style={{fontSize:"1.5em"}}>$50</h3>
        </section>
        <section style={{display:"flex", alignItems: "baseline"}}>
        <h3 style={{fontSize:"1.5em"}}>Tax</h3>
        <span style={{overflow:"hidden", flex:"1"}}>______________________________________________________________________________________________________________________________________________________________________________________________________________________________________</span>
        <h3 style={{fontSize:"1.5em"}}>$50</h3>
        </section>
        <section style={{display:"flex", alignItems: "baseline"}}>
        <h2 style={{fontSize:"2em"}}>Total</h2>
        <span style={{overflow:"hidden", flex:"1"}}>__________________________________________________________________________________________________________________________________________________________________________________________________________________________________</span>
        <h2 style={{fontSize:"2em"}}>$50</h2>
        </section>
        
        </Col>
        </Row>
        <Row style={{position:"relative", marginLeft:"5em", marginTop:"2em"}}>
             <Button size={'large'} type="text" //htmlType="cancel"
              shape="round" style={{borderColor: "#215899" }}>
             &nbsp;  Back  &nbsp;
            </Button>
            &nbsp; &nbsp; &nbsp;
             <Button size={'large'} type="primary" htmlType="submit" shape="round" style={{ background: "#215899", borderColor: "black" }}
             >
             Continue
            </Button>
        </Row>
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
          <br/>
          <text> Robot From Station B</text>
        <Meta style={{textAlign:"center"}} title="$25" description="Next Day Shipping"  />
      </Card>
       </Col>
      </Row>
      &nbsp; &nbsp;
      <Row>
            <Col span={2} style={{paddingLeft:'20px'}}>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 0 }}>
             <Button type="text" htmlType="submit" shape="round" onClick={this.props.onDecrease}>
             &nbsp;  Back  &nbsp;
            </Button>
            </Form.Item>
            </Col>
            &nbsp;   &nbsp;
            <Col span={1} style={{paddingLeft:'20px'}}>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 0 }}>
             <Button type="primary" htmlType="submit" shape="round"  onClick={this.props.onIncrement}>
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
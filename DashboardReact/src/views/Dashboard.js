import React from "react";
import { Line } from "react-chartjs-2";
import axios from 'axios';

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  dashboardNASDAQChart,
} from "variables/charts.js";

const baseUrl = 'https://desafio-api.devzz.ninja/';
const initialState= {
  account: {deposit:'', balance:''},
  btc: {purchase:'', sell:''},
};

class Dashboard extends React.Component {

  state = {...initialState}

  componentDidMount(){
      axios(baseUrl).then(resp => {
         
          this.setState({ list:resp.data })
      });
  }

  deposit(){
    const account = this.state.account.deposit;
        const method = 'post';
        const url = baseUrl + 'account/deposit';
        axios[method](url, account).then(resp => {
          axios(baseUrl + 'account/deposit').then(resp => {
            this.setState({ list:resp.data })
          });
            this.setState({account: initialState.account});
        });
  }

  purchase(){
    const btc = this.state.btc.purchase;
    const method = 'post';
    const url = baseUrl + 'btc/purchase';
    axios[method](url, btc).then(resp => {
      axios(baseUrl + 'btc/purchase').then(resp => {
        this.setState({ list:resp.data })
      });
        this.setState({btc: initialState.btc.purchase});
    });
  }

  sell(){
    const btc = this.state.btc.sell;
    const method = 'post';
    const url = baseUrl + 'btc/sell';
    axios[method](url, btc).then(resp => {
      axios(baseUrl + 'btc/sell').then(resp => {
        this.setState({ list:resp.data })
      });
        this.setState({btc: initialState.btc.sell});
    });
  }

  

  getBalance(){
    const balance = this.state.account.balance;
    const url = baseUrl + 'account/balance';
    axios['get'](url, balance).then(resp => {
      axios(baseUrl + 'account/balance').then(resp => {
        this.setState({ balance })
      });
    });
  }

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-money-coins text-warning" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Current balance</p>
                            <CardTitle tag="p" id="balance"></CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fas fa-sync-alt" /> Update Now
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-bold text-success" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Current quote</p>
                        <CardTitle tag="p"></CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="far fa-calendar" /> Last day
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-bag-16 text-danger" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Purchase volume</p>
                        <CardTitle tag="p"></CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="far fa-clock" /> In the last day
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-tag-content text-primary" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Sales volume</p>
                        <CardTitle tag="p"></CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="far fa-clock" /> In the last day
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="4" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Deposit</p>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="form-group">
                      <input type="text" className="form-control" id="deposit" placeholder="Type the value"/>
                  </div>
                  <button type="button" className="btn btn-outline-success" onClick={e => this.deposit(e)}>Deposit </button>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="4" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Purchase</p>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="form-group">
                      <input type="text" className="form-control" id="purchase" placeholder="Type the value"/>
                  </div>
                  <button className="btn btn-outline-warning"onClick={e => this.purchase(e)}>Purchase</button>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="4" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Sell</p>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="form-group">
                      <input type="text" className="form-control" id="sell" placeholder="Type the value"/>
                  </div>
                  <button className="btn btn-outline-danger"onClick={e => this.sell(e)}>Sell</button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h5">History: buying and selling</CardTitle>
                  <p className="card-category">Last 24hours</p>
                </CardHeader>
                <CardBody>
                  <Line
                    data={dashboardNASDAQChart.data}
                    options={dashboardNASDAQChart.options}
                    width={400}
                    height={100}
                  />
                </CardBody>
                <CardFooter>
                  <div className="chart-legend">
                    <i className="fa fa-circle text-info" /> Buying{" "}
                    <i className="fa fa-circle text-warning" /> Selling
                  </div>
                  <hr />
                  <div className="card-stats">
                    <i className="fa fa-check" /> Data information certified
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );

  }
}

export default Dashboard;

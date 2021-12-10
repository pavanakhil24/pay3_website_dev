import React, { useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
import Link from "next/link";
// react plugin used to create charts
import { Line, Bar, Doughnut } from "react-chartjs-2";
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
  CardText,
  CardTitle,
  Modal,
  ModalHeader, 
  ModalBody, 
  ModalFooter
} from "reactstrap";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

import Header from "components/Headers/Headerfunds.js";
import Deposit1 from "components/Headers/deposit1.js";
import Deposit2 from "../../components/Headers/deposit2";
import Deposit5 from "../../components/Headers/deposit5";
import Deposit6 from "../../components/Headers/deposit6";
// import Deposit2 from "components/Headers/deposit1.js";
import Deposit3 from "../../components/Headers/deposit3";
import Deposit4 from "../../components/Headers/deposit4";
// import Deposit5 from "components/Headers/deposit5.js";
// import Deposit6 from "components/Headers/deposit6.js";

const Dashboard = (props) => {
  const [activeNav, setActiveNav] = React.useState(1);
  const [chartExample1Data, setChartExample1Data] = React.useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);

  };
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <Header />
      {/* Page content */}
          </>
  );
};

Dashboard.layout = Admin;

export default Dashboard;

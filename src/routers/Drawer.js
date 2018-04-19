import React from "react";
import { DrawerNavigator } from "react-navigation";

import SideBar from "../components/sidebar";
import Home from "../components/home";
import ModalBox from "../components/modalbox";
import Todo from '../components/todo';
import Product from '../components/product';

const MainDrawerRouter = DrawerNavigator(
  {
    Home: { screen: Home },
    ModalBox: { screen: ModalBox },
    Todo: { screen: Todo },
    Product: { screen: Product }
  },
  {
    initialRouteName: "Product",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

export default MainDrawerRouter;

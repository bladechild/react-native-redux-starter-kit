import React, { Component } from 'react';
import styles from "./styles";
import {
    Container, Header, Title,
    Content, Button, Icon, Text, Left,
    Body, Right, View
} from "native-base";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchAllTodos } from '../../actions/todo'
class TodoComponent extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.fetchAllTodos();
    }
    render() {
        console.log(this.props);
        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}
                        >
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Todo List</Title>
                    </Body>
                    <Right />
                </Header>

                <View padder>
                    {
                        this.props.todo.map((t,index) => {
                            return (
                                <Text style={styles.text} key={index}>{t.name}</Text>
                            );
                        })
                    }
                </View>
            </Container>
        )
    }
}
function mapStateToProps(state) {
    return { todo: state.todo };
}
const mapDispatchToProps = dispatch => ({
    fetchAllTodos: () => dispatch(fetchAllTodos())
})
export default connect(mapStateToProps,mapDispatchToProps)(TodoComponent);
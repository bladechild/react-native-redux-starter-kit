import React, { Component } from 'react';
import styles from "./styles";
import {
    Container, Header, Title,
    Content, Button, Icon, Text, Left,
    Body, Right, View
} from "native-base";
import {TextInput} from 'react-native'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchAllTodos,addTodo,updateTodo } from '../../actions/todo'
class TodoComponent extends Component {
    constructor(props) {
        super(props);  
        this.state = {
            newTodo:''
        }
        this.addOneTodo = this.addOneTodo.bind(this);
        this.completeTodo = this.completeTodo.bind(this);
    }
    componentWillMount() {
        console.log(this.state);
        this.props.fetchAllTodos();
    }
    addOneTodo()
    {
        if(this.state.newTodo)   
        {
            this.props.addTodo(this.state.newTodo);
            this.setState({newTodo:null});
        }        
    }
    completeTodo(name,complete)
    {
        console.log(name,complete);
        this.props.updateTodo(name,complete);
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
                    <TextInput 
                        placeholder='add a todo' 
                        onChangeText={(text) => this.setState({newTodo:text})}
                        value={this.state.newTodo}
                    >
                    </TextInput>
                    <Button
                        onPress={this.addOneTodo}
                    >
                        <Text>Add</Text>
                    </Button>
                    {
                        this.props.todo.map((t,index) => {
                            const textDecorationLine = t.complete?'line-through':'none';
                            return (
                                <Text style={{textDecorationLine,...styles.text}} key={index} value={t.name} onPress={()=>this.completeTodo(t.name,!t.complete)}>{t.name}</Text>
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
    fetchAllTodos: () => dispatch(fetchAllTodos()),
    addTodo: (name)=>dispatch(addTodo(name)),
    updateTodo: (name,complete)=>dispatch(updateTodo(name,complete))
})
export default connect(mapStateToProps,mapDispatchToProps)(TodoComponent);
import React, { Component } from 'react';
import { Container, Header, Content, Text, Left, Right, Button, Body, Icon, Title, Card, CardItem } from 'native-base';
import { connect } from 'react-redux';
import { Image } from 'react-native';
import styles from './styles';
import { fetchAllProducts } from '../../actions/products';

class ProductsList extends Component {
  constructor(props) {
    console.log(props);
    super(props);
  }
  componentDidMount() {
    console.log('inside of componentwillmount method:', this.props);
    this.props.fetchAllProducts();
  }
  render() {
    console.log('inside of render method:', this.props);
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
            <Title>Products List</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          {
            this.props.products.map((product) => {
              let uri = '#';
              if (product.image) uri = product.image.src;
              return (
                <Card key={product.id}>
                  <CardItem>
                    <Left>
                      <Body>
                        <Text>{product.title}</Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem cardBody>
                    <Image source={{ uri }} style={{ height: 200, width: null, flex: 1 }} />
                  </CardItem>
                  <CardItem>
                    <Left>
                      <Button transparent>
                        <Icon active name="thumbs-up" />
                        <Text>12 Likes</Text>
                      </Button>
                    </Left>
                    <Body>
                      <Button transparent>
                        <Icon active name="chatbubbles" />
                        <Text>4 Comments</Text>
                      </Button>
                    </Body>
                    <Right>
                      <Text>11h ago</Text>
                    </Right>
                  </CardItem>
                </Card>
              );
            })
          }
        </Content>
      </Container>

    );
  }
}
function mapStateToProps(state) {
  console.log('MapStatetoProps', state);
  return { products: state.product };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAllProducts: () => dispatch(fetchAllProducts()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);

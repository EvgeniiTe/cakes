import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button, Col, Row } from "react-bootstrap";
import * as S from "./styled";

const ConfiguratorRender = ({ products }) => {
  const listCakes = products.map((item) => {
    const { name } = item;
    return <option>{name}</option>;
  });

  return (
    <S.Configurator>
      <ConfForm listCakes={listCakes} />
    </S.Configurator>
  );
};

const mapStateToProps = ({ productsList: { products } }) => {
  return { products };
};

export const Configurator = connect(mapStateToProps)(ConfiguratorRender);

class ConfForm extends Component {
  state = {
    cake: "",
    quantityKg: "",
    quantityCakes: "",
    strawberry: false,
    blueberry: false,
    cherry: false,
    balloons: false,
    flatFig: false,
    lettering: "",
    getPhoto: false,
  };

  handleChangeSelect = (event) => {
    const name = event.target.id;
    const { value } = event.target;
    this.setState({ [name]: value });
  };

  handleChangeCheckboxes = (event) => {
    const { name } = event.target;
    const { checked } = event.target;
    this.setState({ [name]: checked });
  };

  handleChangeText = (event) => {
    const { value } = event.target;
    if (value.split("").length <= 30) {
      this.setState({ lettering: value });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const formData = JSON.stringify(this.state);
    console.log(formData);
    this.setState({
      cake: "",
      quantityKg: "",
      quantityCakes: "",
      strawberry: false,
      blueberry: false,
      cherry: false,
      balloons: false,
      flatFig: false,
      lettering: "",
      getPhoto: false,
    });
  };

  render() {
    const { listCakes } = this.props;

    const {
      cake,
      quantityKg,
      quantityCakes,
      strawberry,
      blueberry,
      cherry,
      balloons,
      flatFig,
      lettering,
      getPhoto,
    } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Label as="legend">Конфигуратор заказа</Form.Label>

        <Form.Group controlId="cake">
          <Form.Label>Выберите торт из списка</Form.Label>
          <Form.Control
            as="select"
            custom
            value={cake}
            onChange={this.handleChangeSelect}
          >
            <option>Выберите торт из списка</option>
            {listCakes}
          </Form.Control>
          <Form.Text className="text-muted">
            Вы можете вернуться к фотографиям тортов на главной странице
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="quantityKg">
          <Form.Label>Количество килограмм</Form.Label>
          <Form.Control
            as="select"
            custom
            value={quantityKg}
            onChange={this.handleChangeSelect}
          >
            <option>Количество килограмм</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </Form.Control>
          <Form.Text className="text-muted">
            Да, есть технические ограничения по количеству килограмм. Однако, Вы
            всегда можете заказать капкейки или же несколько тортов.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="quantityCakes">
          <Form.Label>Количество тортов</Form.Label>
          <Form.Control
            as="select"
            custom
            value={quantityCakes}
            onChange={this.handleChangeSelect}
          >
            <option>Количество тортов</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </Form.Control>
          <Form.Text className="text-muted">
            Да, есть технические ограничения по количеству тортов на один заказ.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="decoration">
          <Form.Label>
            Вы можете заказать дополнительный декор к торту
          </Form.Label>

          <Row>
            <Col sm={4}>
              <Form.Group controlId="berries">
                <Form.Label>Ягоды:</Form.Label>
                <Col>
                  <Form.Check
                    type="checkbox"
                    label="Клубника"
                    name="strawberry"
                    id="strawberry"
                    checked={strawberry}
                    onChange={this.handleChangeCheckboxes}
                  />
                  <Form.Check
                    type="checkbox"
                    label="Голубика"
                    name="blueberry"
                    id="blueberry"
                    checked={blueberry}
                    onChange={this.handleChangeCheckboxes}
                  />
                  <Form.Check
                    type="checkbox"
                    label="Вишня"
                    name="cherry"
                    id="cherry"
                    checked={cherry}
                    onChange={this.handleChangeCheckboxes}
                  />
                </Col>
              </Form.Group>
            </Col>

            <Col sm={4}>
              <Form.Group controlId="tempChocolate">
                <Form.Label>Темперированный шоколад:</Form.Label>
                <Col>
                  <Form.Check
                    type="checkbox"
                    label="Шарики"
                    name="balloons"
                    id="balloons"
                    checked={balloons}
                    onChange={this.handleChangeCheckboxes}
                  />
                  <Form.Check
                    type="checkbox"
                    label="Плоские фигурки"
                    name="flatFig"
                    id="flatFig"
                    checked={flatFig}
                    onChange={this.handleChangeCheckboxes}
                  />
                </Col>
              </Form.Group>
            </Col>

            <Col sm={4}>
              <Form.Group controlId="lettering">
                <Form.Label>Надпись на торте:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ограничение 30 символов"
                  value={lettering}
                  onChange={this.handleChangeText}
                />
              </Form.Group>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group controlId="getPhoto">
          <Form.Label>Получить фото торта на память</Form.Label>
          <Form.Check
            type="checkbox"
            label="Получить"
            name="getPhoto"
            id="getPhoto"
            checked={getPhoto}
            onChange={this.handleChangeCheckboxes}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Добавить в корзину
        </Button>
      </Form>
    );
  }
}

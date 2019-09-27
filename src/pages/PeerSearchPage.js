import React, { useState } from 'react';
import Page from 'components/Page';
import {
  Button,
  Col,
  Row,
  Input,
  InputGroup,
  InputGroupAddon,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { searchPeers } from '../actions';

const PeerSearchPage = () => {
  const peers = useSelector(state => state.stockState.peers);
  const dispatch = useDispatch();

  const [quote, setQuote] = useState('');

  const clickHandler = () => {
    dispatch(searchPeers(quote));
  };

  return (
    <Page title="Search Peers">
      <Row>
        <Col xs={12}>
          <InputGroup>
            <Input
              placeholder="Search Stock Quote. Ex: AAPL"
              onChange={e => setQuote(e.target.value)}
              value={quote}
            />
            <InputGroupAddon addonType="append">
              <Button color="success" onClick={clickHandler}>
                Search Peers
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </Col>
      </Row>

      <Row>
        {peers.map((peer, i) => (
          <Col sm={4} xs={12} key={i}>
            <Card className="flex-row">
              <CardBody>
                <CardTitle>{peer}</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Page>
  );
};

export default PeerSearchPage;

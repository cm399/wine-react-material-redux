import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Row, Col, Card, CardTitle, CardBody} from 'reactstrap'
import CommonButton from 'routes/components/CommonButton'
import ResultTable from './ResultTable'
import Wine from 'images/wineimg/wine6.png'
import tagIcon from 'images/commonIcons/wine-button.png'

const useStyles = makeStyles({
  title: {
    fontSize: '22px',
    color: '#403839',
    fontFamily: 'DINCondensed-Bold',
  },
  subtitle: {
    fontSize: '20px',
    color: '#403839',
    fontFamily: 'DINCondensed-Bold',
  },
})

const MyOrders = () => {
  const classes = useStyles()

  return (
    <Card className="px-3">
      <CardBody className="py-3 text-white rounded-top border-bottom">
        <CardTitle tag="h5" className="mb-0 d-flex">
          <div>
            <span className={classes.title}>Order #1047057</span>
          </div>
        </CardTitle>
      </CardBody>
      <Row>
        <Col>
          <Row className="mt-3 pt-5 d-flex justify-content-center">
            <img src={Wine} />
          </Row>
          <Row className="mt-3 d-flex justify-content-center">
            <img src={tagIcon} style={{height: '32px'}} />
          </Row>
        </Col>
        <Col xs={12} sm={12} md={10}>
          <CardBody className="py-3 text-white rounded-top border-bottom">
            <CardTitle tag="h5" className="mb-0 d-flex">
              <div>
                <span className={classes.subtitle}>
                  2019 Fiddleneck White Blend, Potter Valley, California
                </span>
              </div>
            </CardTitle>
          </CardBody>
          <div className="border-bottom">
            <ResultTable />
          </div>
          <Row className="mt-4 mb-4 mr-2">
            <Col className="d-flex justify-content-end">
              <CommonButton title="Cancel Order" buttonType="cancelButton" />
              <CommonButton title="Track Package" buttonType="addItemButton" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  )
}

export default MyOrders

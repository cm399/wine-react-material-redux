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
  theadStyle: {
    fontFamily: 'SFUIText-Semibold',
    color: '#403839',
    fontSize: 14,
  },
  tbodyFont: {
    fontFamily: 'SFUIText-Medium',
    color: '#6c6766',
    fontSize: 14,
  },
})

const MembershipCard = () => {
  const classes = useStyles()

  return (
    <Card className="px-3">
      <CardBody className="py-3 text-white rounded-top border-bottom">
        <CardTitle tag="h5" className="mb-0 d-flex">
          <div>
            <span className={classes.title}>
              2019 Fiddleneck White Blend, Potter Valley, California
            </span>
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
          <div className="border-bottom">
            <ResultTable />
          </div>
          <Row className="mt-4 mb-4 mr-2">
            <Col xs={12} sm={12} md={6} className="mt-2">
              <span className={`${classes.theadStyle}`}>Ship to</span>
              <br />
              <div className="mt-2">
                <span className={classes.tbodyFont}>
                  1208 E Kennedy Blvd <br />
                  Tampa, Florida 33602
                </span>
              </div>
            </Col>
            <Col md={{size: 3, offset: 3}} className="mt-4 mb-0 d-flex justify-content-center">
              <CommonButton title="Order History" buttonType="addItemButton" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  )
}

export default MembershipCard

import React, {useEffect, useContext} from 'react'
import AppContext from 'components/App/AppContext'
import {makeStyles} from '@material-ui/core/styles'
import {Row, Col} from 'reactstrap'
import {CustomSearch} from 'routes/Tables/ExtendedTable/components'
import OrderCart from './OrderCard'
import CommonButton from 'routes/components/CommonButton'

const useStyles = makeStyles({
  title: {
    fontSize: '32px',
    color: '#403839',
    fontFamily: 'DINCondensed-Bold',
  },
  subtitle: {
    fontSize: '22px',
    color: '#403839',
    fontFamily: 'DINCondensed-Bold',
  },
})

const MyOrders = () => {
  const context = useContext(AppContext)
  const {setTitle} = context
  const classes = useStyles()

  useEffect(() => {
    setTitle('My Orders')
  }, [])

  return (
    <div>
      <Row className="d-flex justify-content-between">
        <Col lg={{size: 6}} className="ml-2 d-flex align-items-center">
          <p className={classes.title}>Order History</p>
        </Col>
      </Row>
      <Row className="mb-4 px-2 d-flex justify-content-end">
        <Col xs={12} sm={12} md={3}>
          <CustomSearch className="mr-3" />
        </Col>
      </Row>
      <Row>
        <Col className="mx-2">
          <OrderCart />
        </Col>
      </Row>
      <Row>
        <Col className="mx-2 mt-4">
          <OrderCart />
        </Col>
      </Row>
      <Row>
        <Col className="mx-2 mt-4">
          <OrderCart />
        </Col>
      </Row>
    </div>
  )
}

export default MyOrders

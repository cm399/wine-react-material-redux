import React, {useEffect, useContext} from 'react'
import AppContext from 'components/App/AppContext'
import {makeStyles} from '@material-ui/core/styles'
import {Row, Col, Input, ListGroup} from 'reactstrap'
import MembershipCard from './MembershipCard'

const useStyles = makeStyles({
  title: {
    fontSize: '32px',
    color: '#403839',
    fontFamily: 'DINCondensed-Bold',
  },
})

const MyMemberships = () => {
  const context = useContext(AppContext)
  const {setTitle} = context
  const classes = useStyles()

  useEffect(() => {
    setTitle('My Memberships')
  }, [])

  return (
    <div>
      <Row className="d-flex justify-content-between">
        <Col lg={{size: 6}} className="ml-2 d-flex align-items-center">
          <p className={classes.title}>Memberships</p>
        </Col>
      </Row>
      <Row>
        <Col className="my-4 mr-3 d-flex justify-content-end">
          <ListGroup>
            <Input type="checkbox" defaultChecked={true} />
            <div>Display Expired</div>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col className="mx-2">
          <MembershipCard />
        </Col>
      </Row>
      <Row>
        <Col className="mx-2 mt-3">
          <MembershipCard />
        </Col>
      </Row>
      <Row>
        <Col className="mx-2 mt-3">
          <MembershipCard />
        </Col>
      </Row>
    </div>
  )
}

export default MyMemberships

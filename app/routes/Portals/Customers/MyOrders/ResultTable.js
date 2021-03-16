import React from 'react'
import {Table} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
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

const ResultTable = () => {
  const classes = useStyles()

  return (
    <div className="mt-3">
      <Table responsive striped>
        <thead className={classes.theadStyle}>
          <tr>
            <th>
              <span>Order Placed </span>
            </th>
            <th>
              <span className="ml-5 d-flex justify-content-center">Order Total</span>
            </th>
            <th>
              <span className="ml-5 d-flex justify-content-center">Order Status</span>
            </th>
            <th>
              <span className="mr-3 d-flex justify-content-end">Payment Status</span>
            </th>
          </tr>
        </thead>
        <tbody className={classes.tbodyFont}>
          <tr>
            <td>6/24/2020 1:10 AM</td>
            <td>
              <span className="ml-5 d-flex justify-content-center">$19.00 x 1 = $19.00</span>
            </td>
            <td>
              <span className="ml-5 d-flex justify-content-center">1 Shipped</span>
            </td>
            <td>
              <span className="mr-3 d-flex justify-content-end">Paid</span>
            </td>
          </tr>
        </tbody>
      </Table>
      <Table responsive striped>
        <thead className={classes.theadStyle}>
          <tr>
            <th>
              <span>Payment Method</span>
            </th>
            <th>
              <span className="ml-5 d-flex justify-content-center">Date Shipped</span>
            </th>
            <th>
              <span className="ml-5 d-flex justify-content-center">Commission Date</span>
            </th>
            <th>
              <span className="mr-3 d-flex justify-content-end">Ship to</span>
            </th>
          </tr>
        </thead>
        <tbody className={classes.tbodyFont}>
          <tr>
            <td>Visa</td>
            <td>
              <span className="ml-5 d-flex justify-content-center">6/24/2020</span>
            </td>
            <td>
              <span className="ml-5 d-flex justify-content-center">6/24/2020</span>
            </td>
            <td>
              <span className="mr-3 d-flex justify-content-end">
                1208 E Kennedy Blvd Tampa, Florida 33602
              </span>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default ResultTable

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
              <span>Date Created</span>
            </th>
            <th>
              <span className="ml-5 d-flex justify-content-center">Status</span>
            </th>
            <th>
              <span className="ml-5 d-flex justify-content-center">Payment Method</span>
            </th>
            <th>
              <span className="mr-3 d-flex justify-content-end">Shipping Method</span>
            </th>
          </tr>
        </thead>
        <tbody className={classes.tbodyFont}>
          <tr>
            <td>1/21/2020</td>
            <td>
              <span className="ml-5 d-flex justify-content-center">Cancelled</span>
            </td>
            <td>
              <span className="ml-5 d-flex justify-content-center">Visa ending in 1111</span>
            </td>
            <td>
              <span className="mr-3 d-flex justify-content-end">
                SSS Ground (7-12 business days)
              </span>
            </td>
          </tr>
        </tbody>
      </Table>
      <hr />
      <Table responsive striped>
        <thead className={classes.theadStyle}>
          <tr>
            <th>
              <span>Price</span>
            </th>
            <th>
              <span className="ml-5 d-flex justify-content-center">Quantity</span>
            </th>
            <th>
              <span className="ml-5 d-flex justify-content-center">Frequency</span>
            </th>
            <th>
              <span className="mr-3 d-flex justify-content-end">Next Order Date</span>
            </th>
            <th>
              <span className="mr-3 d-flex justify-content-end">Date Cancelled</span>
            </th>
            <th>
              <span className="mr-3 d-flex justify-content-end">Subscription ID</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>$139.00</td>
            <td>
              <span className="ml-5 d-flex justify-content-center">1</span>
            </td>
            <td>
              <span className="ml-5 d-flex justify-content-center">Monthly</span>
            </td>
            <td>
              <span className="mr-3 d-flex justify-content-end"></span>
            </td>
            <td>
              <span className="ml-5 d-flex justify-content-center">1/21/2020</span>
            </td>
            <td>
              <span className="mr-3 d-flex justify-content-end">30480</span>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default ResultTable

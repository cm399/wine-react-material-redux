import React from 'react'
import {Table, Row, Col, Pagination, PaginationLink, PaginationItem} from 'reactstrap'
import {CustomSearch} from 'routes/Tables/ExtendedTable/components'

const PartiesTable = () => {
  return (
    <div>
      <Row className="mt-3">
        <Col sm={{size: 2}}>
          <h5>
            <span className="text-dark font-weight-bold">Parties</span>
          </h5>
        </Col>
        <Col sm={{size: 2, offset: 8}} className="pagination justify-content-end">
          <CustomSearch className="ml-3" />
        </Col>
      </Row>
      <div className="mb-3 mt-3">
        <Table responsive striped>
          <thead>
            <tr>
              <th>
                <span>TastingID</span>
              </th>
              <th>
                <span>Name</span>
              </th>
              <th>
                <span>Tasting Data</span>
              </th>
              <th>
                <span>Address</span>
              </th>
              <th>
                <span>Orders</span>
              </th>
              <th>
                <span>Status</span>
              </th>
              <th>
                <span>Type</span>
              </th>
              <th>
                <span></span>
              </th>
            </tr>
          </thead>
        </Table>
        <div className="p-1 d-flex justify-content-between">
          <div className="d-flex">
            <Pagination
              size="md"
              className="pagination justify-content-end"
              aria-label="Page navigation example">
              <PaginationItem>
                <PaginationLink first href="#"></PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink previous href="#"></PaginationLink>
              </PaginationItem>
              <PaginationItem active>
                <PaginationLink href="#">0</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink next href="#"></PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink last href="#"></PaginationLink>
              </PaginationItem>
            </Pagination>
          </div>
          <div>
            <span>No items to display</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PartiesTable

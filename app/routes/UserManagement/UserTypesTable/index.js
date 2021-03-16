import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {useDispatch, connect} from 'react-redux'
import {setLoadingStatus} from 'duck/actions/process'
import axios from 'axios'
import {getRoles, getUsersByRoleId} from 'api'

import MoonLoader from 'react-spinners/MoonLoader'
import BootstrapTable from 'react-bootstrap-table-next'
import ToolkitProvider from 'react-bootstrap-table2-toolkit'
import {Row, Col, Button} from 'reactstrap'
import {CustomSearch} from 'routes/Tables/ExtendedTable/components'
import {useHistory} from 'react-router'
import paginationFactory from 'react-bootstrap-table2-paginator'
import {showErrorNotification} from 'helpers/util'
import iconEdit from 'images/commonIcons/edit.svg'
import iconDelete from 'images/commonIcons/delete.svg'

const UserTypesTable = ({user, process}) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const isLoading = process.get('isLoading')
  const tabActive = user.get('tabActive')

  const [data, setData] = useState([])

  const handleData = (roleData, userGroups) => {
    let roles = []
    for (const [i, group] of userGroups.entries()) {
      roles[i] = {
        id: roleData[i].id,
        name: roleData[i].name,
        users: group.length ? group.length : 0,
        description: roleData[i].description ? roleData[i].description : '',
      }
    }
    setData(roles)
  }

  const requestData = async () => {
    try {
      let token = await user.get('token')
      if (token) {
        getRoles(token)
        .then((res) => {
          if (!res?.hasError) {
            let requests = []
            for (const role of res) {
              requests.push(getUsersByRoleId(role.id, token))
            }
            axios.all(requests)
            .then(axios.spread((...responses) => {
              handleData(res, responses)
            }))
            .catch(errors => {
              console.log(errors)
            })
            .finally(() => {
              dispatch(setLoadingStatus(false))
            })
          } else {
            console.log(res)
            showErrorNotification(res.response.data.message)
          }
        })
        .catch((err) => console.log(err))
      }
    } catch (err) {
      console.log(err)
      console.warn("Can't get token")
    }
  }

  useEffect(() => {
    if (tabActive === "User Types") {
      dispatch(setLoadingStatus(true))
      requestData()
    }
  }, [tabActive])

  const changeRoute = () => {
    history.push('/user-management/edit-usertype')
  }

  const sortCaret = (order) => {
    if (!order) return <i className="fa fa-fw fa-sort text-muted"></i>
    if (order) return <i className={`fa fa-fw text-muted fa-sort-${order}`}></i>
  }

  const actionBtns = [
    {
      name: 'Edit',
      icon: iconEdit,
      onClick: changeRoute,
    },
    {
      name: 'Delete',
      icon: iconDelete,
      onClick: () => {},
    },
  ]

  const listButtons = actionBtns.map((button) => (
    <Button
      key={button.name}
      className="sc-btn-action sc-btn-action--layout px-1"
      color="link"
      onClick={button.onClick}>
      <span className="sc-btn-action__icon rounded-circle">
        <img className="sc-btn-action__img" src={button.icon} />
      </span>
      {button.name}
    </Button>
  ))

  const actionFormater = () => {
    return (
      <div className="sc-btn-action-wrapper d-flex flex-wrap align-items-center justify-content-between">
        {listButtons}
      </div>
    )
  }

  const columns = [
    {
      dataField: 'name',
      text: 'Name',
      sort: true,
      sortCaret,
    },
    {
      dataField: 'users',
      text: 'Users',
      sort: true,
      sortCaret,
    },
    {
      dataField: 'description',
      text: 'Descriptions',
      sort: true,
      sortCaret,
    },
    {
      dataField: 'df1',
      classes: 'sc-btn-action-wrapper',
      isDummyField: true,
      text: '',
      formatter: actionFormater
    },
  ]

  const noDataIndication = () => 
    isLoading ? (
      <div className="d-flex justify-content-center">
        <MoonLoader size={24} color={'#de8b6d'} loading={isLoading} />
      </div>
    ) : (
      <p className="text-center">No users found!</p>
    )

  return (
    <ToolkitProvider keyField="id" data={data} columns={columns} search>
      {(props) => (
        <React.Fragment>
          <div className="search-wrapper">
            <div>
              <CustomSearch {...props.searchProps} />
            </div>
          </div>
          <Row className="sc-card__full-row mt-3">
            <Col sm={12} className="p-0">
              <div className="sc-table-responsive">
                <BootstrapTable
                  keyField="id"
                  classes="sc-table"
                  bordered={false}
                  noDataIndication={noDataIndication}
                  striped
                  hover
                  {...props.baseProps}
                  pagination={paginationFactory()}
                />
              </div>
            </Col>
          </Row>
        </React.Fragment>
      )}
    </ToolkitProvider>
  )
}

UserTypesTable.propTypes = {
  user: PropTypes.object,
  process: PropTypes.object,
}

const mapStateToProps = (state) => ({
  user: state.user,
  process: state.process,
})
const mapDispatchToProps = {setLoadingStatus}

export default connect(mapStateToProps, mapDispatchToProps)(UserTypesTable)

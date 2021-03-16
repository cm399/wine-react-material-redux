import React, {useRef, useState} from 'react'
import {Col, Card, Label, FormGroup, Input, Row} from 'reactstrap'
import CommonButton from 'routes/components/CommonButton'
import {makeStyles} from '@material-ui/core/styles'
import JoditEditor from 'jodit-react'
import {CustomInput} from 'components'

const useStyles = makeStyles({
  title: {
    fontSize: '32px',
    color: '#403839',
    fontFamily: 'DINCondensed-Bold',
  },
  name: {
    fontSize: '12px',
    color: '#403839',
    fontFamily: 'SFUIText-Bold',
  },
  value: {
    color: '#6c6766',
    fontSize: 14,
    fontFamily: 'SFUIText-Medium',
  },

  label: {
    color: '#6c6766',
    fontSize: 14,
    fontFamily: 'SFUIText-Semibold',
  },

  subtitle: {
    fontFamily: 'DINCondensed-Bold',
    fontSize: 22,
    color: '#403839',
    marginTop: 25,
    marginLeft: 26,
  },
  text: {
    fontFamily: 'Avenir-Heavy',
    fontSize: 14,
    color: '#403839',
    marginLeft: 26,
  },

  description: {
    height: '80px',
  },
})
const TastingDetails = () => {
  const config = {
    readonly: false,
  }
  const editor = useRef(null)
  const classes = useStyles()
  const [content, setContent] = useState('')

  return (
    <div>
      <Card lg={12} md={12} sm={12} xs={12} className="mb-4 mr-4 ml-4">
        <div tag="h5">
          <p className={classes.subtitle}>Tasting Details</p>
        </div>
        <div className="mt-2 p-2">
          <Row form>
            <Col md={{size: 4, offset: 2}}>
              <FormGroup className="mr-md-5 mt-3">
                <Label className={classes.name}>Tasting Name</Label>
                <Input className={classes.value} placeholder="hello@scoutandcellar.com" />
              </FormGroup>
            </Col>
            <Col md={{size: 4}}>
              <FormGroup className="mt-3">
                <Label className={classes.name}>Date</Label>
                <Input />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={{size: 4, offset: 2}}>
              <FormGroup className="mr-md-5 mt-3">
                <Label className={classes.name}>Time Zone</Label>
                <Input />
              </FormGroup>
            </Col>
            <Col md={{size: 4}}>
              <FormGroup className="mt-3">
                <Label className={classes.name}>Phone</Label>
                <Input type="select" />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={{size: 4, offset: 2}}>
              <FormGroup className="mr-md-5 mt-3">
                <Label className={classes.name}>Tasting Type</Label>
                <Input />
              </FormGroup>
            </Col>
            <Col md={{size: 4}}>
              <FormGroup className="mt-3">
                <Label className={classes.name}>Referring Tasting #</Label>
                <Input type="select" />
              </FormGroup>
            </Col>
          </Row>
          <Row form className="mb-4">
            <Col md={{size: 8, offset: 2}}>
              <Label className={classes.name}>Description</Label>
              <JoditEditor
                ref={editor}
                value={content}
                config={config}
                tabIndex={1}
                onBlur={(newContent) => setContent(newContent)}
              />
            </Col>
          </Row>
          <Row form className="mb-4">
            <Col md={{size: 8, offset: 2}}>
              <Label className={classes.name}>Sharing Description</Label>
              <Input className={classes.description} />
            </Col>
          </Row>
          <Row form className="mb-4">
            <Col md={{size: 8, offset: 2}}>
              <Label className={classes.name}>Event Image</Label>
              <CommonButton title="Select Files" buttonType="addItemButton" />
            </Col>
          </Row>
          <Row form className="mb-2">
            <Col md={{size: 8, offset: 2}}>
              <Label className={` ${classes.name} mb-3`}>Website Display Options</Label>
              <CustomInput
                type="checkbox"
                id="Customer Websites"
                label="Enabled"
                className={` ${classes.label} mb-3`}
              />
              <CustomInput
                type="checkbox"
                id=" Display Event Address"
                label="Display Event Address"
                className={` ${classes.label} mb-3`}
              />
              <CustomInput
                type="checkbox"
                id="Display Event Phone Number"
                label="Display Event Phone Number"
                className={` ${classes.label} mb-3`}
              />
            </Col>
          </Row>
        </div>
      </Card>
    </div>
  )
}

export default TastingDetails

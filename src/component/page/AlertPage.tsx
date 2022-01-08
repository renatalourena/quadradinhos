import {getAllMachines, Machine} from '../../service/MachineApi'
import {Card, Tabs, Tab, Row, Col} from 'react-bootstrap'
import {useState} from 'react'

export const AlertPage = (): JSX.Element => {
  const allMachines: Machine[] = getAllMachines()
  const [key, setKey] = useState(allMachines[0].identification);
  return <div>
    <h2>Painel de Alertas</h2>
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
      activeKey={key}
      onSelect={(k) => setKey(k ? k : '')}
    >
      {
        allMachines.map((machine) => (
          <Tab eventKey={machine.identification} title={machine.identification}>
            <Row xs={1} md={2} className="justify-content-md-center">
              {
                machine.rolls.map((piece, idx) => (
                    <Col md="auto">
                        <Card
                          bg={piece.statusAlert.toLowerCase()}
                          key={idx}
                          text={'light'}
                          style={{width: '18rem'}}
                          className="mb-2"
                        >
                          <Card.Header>{machine.identification}</Card.Header>
                          <Card.Body>
                            <Card.Title>{piece.identification} Card Title </Card.Title>
                            <Card.Text>
                              Some quick example text to build on the card title and make up the bulk
                              of the card's content.
                            </Card.Text>
                          </Card.Body>
                        </Card>
                    </Col>
                ))
              }
            </Row>
          </Tab>
        ))
      }
    </Tabs>
  </div>
}
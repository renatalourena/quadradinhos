import {getAllMachines, Machine} from '../../service/MachineApi'
import {Card, Tabs, Tab} from 'react-bootstrap'

export const AlertPage = (): JSX.Element => {
  const allMachines: Machine[] = getAllMachines()
  return <div>
    <h2>Alertas</h2>
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
      {
        allMachines.map((machine) => (
          <Tab eventKey={machine.identification} title={machine.identification}>
            {
              machine.rolls.map((piece, idx) => (
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
              ))
            }
          </Tab>
        ))
      }
    </Tabs>
  </div>
}
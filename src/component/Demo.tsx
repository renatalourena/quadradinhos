import {Button} from 'react-bootstrap'

export const Demo = (): JSX.Element => {
  const buttonText: string = "Click me"
  return <>
    <Button onClick={() => alert("Close me!")}>{buttonText}</Button>
  </>
}
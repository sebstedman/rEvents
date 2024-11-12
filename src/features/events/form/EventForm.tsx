import { Segment, Header, Form, Button } from "semantic-ui-react";

type Props = {
    setFormOpen: (value: boolean) => void;
}

export default function EventForm({setFormOpen}: Props) {
  return (
    <Segment>
        <Header content='Create Event' />
        <Form>
            <Form.Field>
                <input type="text" placeholder="Event title" />
            </Form.Field>
            <Form.Field>
                <input type="text" placeholder="Category" />
            </Form.Field>
            <Form.Field>
                <input type="text" placeholder="Description" />
            </Form.Field>
            <Form.Field>
                <input type="text" placeholder="City" />
            </Form.Field>
            <Form.Field>
                <input type="text" placeholder="Venue" />
            </Form.Field>
            <Form.Field>
                <input type="text" placeholder="Date" />
            </Form.Field>

            <Button positive content='Submit' floated="right" />
            <Button onClick= {() => setFormOpen(false)} content='Cancel' />
        </Form>
    </Segment>
  )
}
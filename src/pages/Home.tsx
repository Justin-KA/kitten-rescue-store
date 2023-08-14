import { Accordion, Card } from "react-bootstrap";

export function Home(){
    return (
        <>
        <Card className="text-center h-200 text-light">
            <Card.Img 
            variant="top"
            src = "../public/imgs/chestnoot.jpg"
            height="500px"
            style={{objectFit: "cover"}} />
        <Card.ImgOverlay>
          <Card.Body>
            <Card.Title className="fs-1">The 'Adopt Don't Shop' Shop</Card.Title>
            <Card.Text>
              Buy a street cat, not a neat cat
            </Card.Text>

          </Card.Body>
          </Card.ImgOverlay>
          <Card.Footer className="text-dark">Look at this guy</Card.Footer>
        </Card>
        <Accordion className="mt-4">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Why a street cat?</Accordion.Header>
          <Accordion.Body>
             These cats wind up on the mean streets of your city due to neglect, abandonment, and neglect. These furry little guys need someone to love them as much as they loved their previous owner right up until that owner kicked them to the curb. Only you can make that right.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Why not a neat cat?</Accordion.Header>
          <Accordion.Body>
            Neat cats deserve love too, but they come from heartless breeders who only see dollar bills. We need to look out for the cats we have, not breed "prettier" ones for cash.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </>
      );
}


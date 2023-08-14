import { Card } from "react-bootstrap";

export function Home(){
    return (
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
      );
}


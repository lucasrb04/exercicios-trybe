let chessPiece = "QUEEN";
chessPiece = chessPiece.toLowerCase()
switch (chessPiece) {
  case "bishop":
    console.log("Bishop -> Diagonals")
    break;
  case "king":
    console.log("King -> 1 square for all directions")
    break;
  case "queen":
    console.log("Queen -> Diagonals, horizontal and vertical")
    break;
  case "pawn":
    console.log("Pawn -> Advancing 1 square, but the first time, it has the option of advancing 2 squares")
    break;
  case "rook":
    console.log("Rook -> Horizontal and vertical")
    break;
  case "knight":
    console.log("Knight -> Shape of an L and jump over other pieces")
    break;
  default:
    console.log("Invalid piece.")
    break;
}

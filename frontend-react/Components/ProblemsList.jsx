import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Table from "react-bootstrap/Table"
import Form from "react-bootstrap/Form"
import Badge from "react-bootstrap/Badge"
function ProblemList(props){
    

    if(!props.problemList || props.problemList.length==0){
        return(
            <div style={{width:"100%",height:"100vh" }}  className=' d-flex justify-content-center  align-items-center'>
                <div   className="spinner-border " role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
    return(
        <Container>
      <div style={{ minWidth: "300px", overflowY: "scroll" }}>
                    <Table
                        striped
                        bordered
                        hover
                        style={{ textAlign: "center" }}
                    >
                        <thead>
                            <tr>
                                <th>Status</th>
                                <th>Star</th>
                                <th>Problem</th>
                                <th>Difficulty</th>
                                <th>Video Solution</th>
                                <th>Code</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.problemList.map((el) => {
                                return  <tr key={el._id}>
                                <td>
                                    <Form.Check type={"checkbox"} id={`default-checkbox`} />
                                </td>
                                <td>
                                    <i className="fa-regular fa-star"></i>
                                </td>
                                <td style={{ textAlign: "left" }}>
                                    <a href={el.url} target={"_blank"}>
                                        {el.title}
                                    </a>
                                </td>
                                <td>
                                    <Badge
                                        bg={
                                            el.difficulty === "Easy"
                                                ? "success"
                                                : el.difficulty === "Medium"
                                                ? "warning"
                                                : "danger"
                                        }
                                    >
                                        {el.difficulty}
                                    </Badge>
                                </td>
                                <td>
                                    <Button variant="outline-primary">
                                        {" "}
                                        <i className="fa-solid fa-video"></i>
                                    </Button>
                                </td>
                                <td>
                                    <Button variant="primary"> Python </Button>
                                </td>
                            </tr>
                            })}
                        </tbody>
                    </Table>
                </div>
      </Container>
    )
}

export default ProblemList;
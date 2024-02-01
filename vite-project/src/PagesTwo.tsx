import { useNavigate } from "react-router-dom";
import Button from "./Button"

const PagesTwo = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Button
                style = {{
                backgroundColor: "red",
                fontSize: 24,
                textColor: "black",
            }}
            onClick={()=> navigate(-1)}
            >
                Back Page
            </Button>
        </div>  
    )
}
export default PagesTwo
import Button from "./Button"

export default function Pages() {
    return (
        <main>
            <Button style = {{
                backgroundColor: "orange",
                fontSize: 35,
                textColor: "black",
            }}
            onClick={() => console.log("blabla")
            } 
            >
                Test
            </Button>
        </main>
    )
}

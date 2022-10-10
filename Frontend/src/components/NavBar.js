import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function NavBar(props) {
    const handleAddButtonClick = () => {
        console.log(props.role);
        props.setAddOpen(true);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="fixed"
                style={{
                    backgroundColor: "#293462",
                    height: "10%",
                }}
            >
                <Toolbar
                    style={{
                        color: "white",
                        height: "100%",
                    }}
                >
                    <Typography
                        variant="h5"
                        component="div"
                        style={{
                            fontSize: "100%",
                        }}
                        sx={{ flexGrow: 1, color: "white" }}
                    >
                        {`${props.title}`}
                    </Typography>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        {/* <div  onClick={handleAddEmployee} style={{marginRight:"2vw" , marginTop:"1vh", cursor:'pointer'}}> ADD EMPLOYEE</div> */}
                        <Button
                            onClick={handleAddButtonClick}
                            style={{
                                // postion: "fixed",
                                cursor: "pointer",
                                color: "white",
                                backgroundColor: "#00B4D8",
                                marginRight: "1vw",
                            }}
                        >
                            {`${props.appButtonName}`}
                        </Button>
                        <Button
                            style={{
                                // postion: "fixed",
                                fontSize: "80%",
                                backgroundColor: "#00B4D8",
                                color: "white",

                            }}
                        >
                            LOGOUT
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

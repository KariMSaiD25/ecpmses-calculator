import { Paper, Typography, IconButton, Box } from "@mui/material";
import "./home.css";
import { Close } from "@mui/icons-material";
//import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
function Home() {  
  // @ts-ignore
  const { items, setItems } = useOutletContext();
//  const [data, setData] = useState([]);

  const total = items.reduce(
    (sum, item) => sum + parseFloat(item.price || 0),
    0
  );
  // useEffect(() => {
  //   async function fetchingData() {
  //     try {
  //       const res = await fetch("http://localhost:3100/mydata");
  //       if (!res.ok) throw new Error("Something went wrong with fetching data");
  //       setData(await res.json());
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   fetchingData();
  // }, []);

  
  function handleDelete( title) {

  //   fetch(url, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   },
  

  
    
  // )
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(
  //           `Failed to delete: ${response.status} ${response.statusText}`
  //         );
  //       }
  //       return response.json(); // Parse response if it includes JSON
  //     })
  //     .then((data) => {
  //       console.log("Object deleted successfully:", data);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });

      setItems(data => data.filter(data1 => data1.title!==title)) 
  }

  return (
    <Box>
      {" "}
      {items?.map((data) => (
        <Paper
          key={data.title}
          sx={{
            position: "relative",
            width: "366px",
            display: "flex",
            justifyContent: "space-between",
            mt: "22px",
            pt: "27px",
            pb: "7px",
          }}
        >
          <Typography variant="h6" sx={{ ml: 3, fontSize: "1.3em" }}>
            {" "}
            {data.title}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 500,
              fontSize: "1.4em",
              opacity: ".8",
              mr: "35px",
            }}
          >
            ${data.price}
          </Typography>
          <IconButton
            sx={{ position: "absolute", top: "0", right: "0" }}
            onClick={() => handleDelete(data.title)}> 
    {/* `//localhost:3100/mydata/${data.id}`     */}
            <Close sx={{ fontSize: "20px" }} />
          </IconButton>{" "}
        </Paper>
      ))}
      <Typography
        sx={{ textAlign: "center", mt: 5 }}
        variant="h5"
        color="inherit"
      >
        {" "}
        👉You spent <strong>${total}</strong>{" "}
      </Typography>
    </Box>
  );
}

export default Home;
